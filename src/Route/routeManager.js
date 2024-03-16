/**
 *
 * @param appContainer
 */
const render = (appContainer) => {
    new Route(appContainer);
    appContainer.innerHTML = '';
};

/**
 *
 * @param paramsInfo
 */
function throwError(paramsInfo) {
    const appContainer = document.getElementById(ID_CONTAINER);
    appContainer.innerHTML = "";
    appContainer.appendChild(debugRouteView(paramsInfo));
}