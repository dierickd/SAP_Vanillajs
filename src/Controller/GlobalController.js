class GlobalController {
    appContainer;

    constructor(appContainer) {
    }

    renderView = async (view, params = {}) => {
        this.appContainer.appendChild(await view(params));
    };
}