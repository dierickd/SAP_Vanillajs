class Route {
    routePath;
    currentPath;
    routeFragment;
    appContainer;

    constructor(appContainer) {
        this.appContainer = appContainer;
        this.currentPath = window.location.pathname;
        this.routePath = this.currentPath;
        this.generateRouteElement();
    }

    /**
     * Permet de renvoyer la route avec le remplacement des valeurs présent dans les params
     * @param routePath
     * @param params
     * @returns {string}
     */
    static getRoute(routePath, params = {}) {
        let route = routeMap[routePath];
        if (route !== undefined) {
            for (const param in params) {
                route = route.replace(`:${param}`, params[param]);
            }
            return BASE_URI + route;
        } else {
            throwError({
                "message": `La route <span class="highlight">${routePath}</span> n'exsite pas ou n'a pas été trouvée`,
                "info": "<i>" + getErrorFileInfo() + ":" + getCurrentLineNumber() + "</i>"
            });
        }
    }

    /**
     *
     * @returns {{controller: (string|string), view: *, method: (string|string), params: {}}}
     */
    generateRouteElement = () => {
        // si commence par un '/' on le retire
        if (this.routePath.startsWith('/')) this.routePath = this.routePath.slice(1);
        // si se termine par un '/' on le retire
        if (this.routePath.endsWith('/')) this.routePath = this.routePath.slice(0, -1);

        const routeSplit = this.routePath.split('/');
        this.routeFragment = {
            "controller": routeSplit[1] ?? 'Home',
            "method": routeSplit[2] ?? 'index',
            'parent': this.appContainer
        };
        this.getParams();
    };

    /**
     *
     * @returns {{}}
     */
    getParams = async () => {
        let params = {};
        const routeSearch = this.routeFragment["controller"] + "/" + this.routeFragment["method"];

        const entries = Object.entries(routeMap);
        const filteredEntries = entries.filter(([key, value]) => value.startsWith(routeSearch));

        if (filteredEntries.length > 0) {
            this.routeFragment.route_name = filteredEntries[0][0]; // Retourne la première clé du tableau

            const routeName = this.routeFragment.route_name;
            const getRoute = await routeMap[routeName];

            const routePath = this.routePath.replace("SPA_js/", "");
            const splitRoute = routePath.split("/");
            const splitRouteMap = getRoute.split("/");

            for (let i = 0; i < splitRouteMap.length; i++) {
                if (splitRouteMap[i].startsWith(":")) {
                    const k = splitRouteMap[i].slice(1);
                    const value = splitRoute[i];
                    params = { ...params, [k]: value };
                }
            }
        }

        this.routeFragment.params = params;
        this.checkRouteParameters();
    };

    checkRouteParameters() {
        const controller = this.routeFragment.controller + "Controller";
        const nameClassController = controller.charAt(0).toUpperCase() + controller.slice(1);
        const classInstance = this.getController(nameClassController);

        this.getFunction(classInstance, this.appContainer);
    }

    /**
     * Permet de vérifier si la class existe, si oui on renvoie une instance de la class
     * @param nameClassController
     * @returns {*}
     */
    getController = (nameClassController) => {
        if (classMap().hasOwnProperty(nameClassController)) {
            const instanceClass = classMap()[nameClassController];
            return new instanceClass(this.routeFragment, this.appContainer);
        } else {
            throwError({
                "message": `La class <span class="highlight">${nameClassController}</span> n'exsite pas ou n'a pas été trouvée`,
                "info": "<i>" + getErrorFileInfo() + ":" + getCurrentLineNumber() + "</i>"
            });
        }
    };

    /**
     * Permet de vérifier si la function est présente dans la class instanciée, si oui on appel cette fonction
     * @param instanceClass
     */
    getFunction = (instanceClass) => {
        if (typeof instanceClass[this.routeFragment.method] === "function") {
            instanceClass[this.routeFragment.method]();
        } else {
            throwError({
                "message": `La méthode <span class="highlight">${this.routeFragment.method}</span> n'exsite pas ou n'a pas été trouvée`,
                "info": "<i>" + getErrorFileInfo() + ":" + getCurrentLineNumber() + "</i>"
            });
        }
    };
}