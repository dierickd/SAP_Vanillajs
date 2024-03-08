/**
 *
 * @param appContainer
 */
const render = (appContainer) => {
    const currentPath = window.location.pathname;
    const route = routes.find(route => matchPath(route.path, currentPath));
    appContainer.innerHTML = '';


    if (route) {
        appContainer.appendChild(route.view(getParams(route.path, currentPath)));
        const routeFragment = generateRouteElement(route, getParams(route.path, currentPath));
        console.log(routeFragment);
        checkRouteParameters(routeFragment, appContainer);
    } else {
        if (DEBUG) {
            throwError({
                "message": `La class <span class="highlight">${currentPath}</span> n'exsite pas ou n'a pas été trouvée`,
                "info": "<i>" + getErrorFileInfo() + ":" + getCurrentLineNumber() + "</i>"
            });
        } else {
            appContainer.appendChild(notFoundView());
        }
    }
};

/**
 *
 * @param routePath
 * @param currentPath
 * @returns {boolean}
 */
const matchPath = (routePath, currentPath) => {
    const routeSegments = routePath.split('/');
    const currentSegments = currentPath.split('/');

    if (routeSegments.length !== currentSegments.length) {
        return false;
    }

    for (let i = 0; i < routeSegments.length; i++) {
        const routeSegment = routeSegments[i];
        const currentSegment = currentSegments[i];

        if (routeSegment !== currentSegment && !routeSegment.startsWith(':')) {
            return false;
        }
    }

    return true;
};

/**
 *
 * @param routePath
 * @param currentPath
 * @returns {{}}
 */
const getParams = (routePath, currentPath) => {
    const routeSegments = routePath.split('/');
    const currentSegments = currentPath.split('/');
    const params = {};

    for (let i = 0; i < routeSegments.length; i++) {
        const routeSegment = routeSegments[i];
        const currentSegment = currentSegments[i];

        if (routeSegment.startsWith(':')) {
            const paramName = routeSegment.substring(1);
            params[paramName] = currentSegment;
        }
    }

    return params;
};

/**
 *
 * @param route
 * @param params
 * @returns {{controller: string, view: *, params}}
 */
const generateRouteElement = (route, params) => {
    const routeSplit = route.path.split('/');
    return {
        "controller": !routeSplit[2].length ? 'Home' : routeSplit[2],
        "method": routeSplit[3] ?? 'index',
        'view': route.view,
        'params': params
    };
};

/**
 *
 * @param routeFragment
 * @param appContainer
 */
function checkRouteParameters(routeFragment, appContainer) {
    const controller = routeFragment.controller + "Controller";
    const nameClassController = controller.charAt(0).toUpperCase() + controller.slice(1);

    const classInstance = getController(routeFragment, nameClassController, appContainer);
    getFunction(routeFragment, classInstance, appContainer);
    console.log(classInstance);
}

/**
 *
 * @param routeFragment
 * @param nameClassController
 * @param appContainer
 * @returns {*}
 */
const getController = (routeFragment, nameClassController, appContainer) => {
    if (classMap().hasOwnProperty(nameClassController)) {
        const instanceClass = classMap()[nameClassController];
        return new instanceClass(routeFragment, appContainer);
    } else {
        throwError({
            "message": `La class <span class="highlight">${nameClassController}</span> n'exsite pas ou n'a pas été trouvée`,
            "info": "<i>" + getErrorFileInfo() + ":" + getCurrentLineNumber() + "</i>"
        });
    }
};

/**
 *
 * @param routeFragment
 * @param instanceClass
 * @param appContainer
 */
const getFunction = (routeFragment, instanceClass, appContainer) => {
    if (typeof instanceClass[routeFragment.method] === "function") {
        instanceClass.index();
    } else {
        throwError({
            "message": `La méthode <span class="highlight">${routeFragment.method}</span> n'exsite pas ou n'a pas été trouvée`,
            "info": "<i>" + getErrorFileInfo() + ":" + getCurrentLineNumber() + "</i>"
        });
    }
};

/**
 *
 * @param paramsInfo
 */
function throwError(paramsInfo) {
    const appContainer = document.getElementById(ID_CONTAINER);
    appContainer.appendChild(debugRouteView(paramsInfo));
}