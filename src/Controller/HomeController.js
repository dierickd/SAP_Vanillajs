class HomeController extends GlobalController {
    routeFragment;
    appContainer;

    constructor(routeFragment, appContainer) {
        super(routeFragment, appContainer);
        this.routeFragment = routeFragment;
        this.appContainer = appContainer;
    }

    index() {
        this.renderView(homeView).then();
    }
}
