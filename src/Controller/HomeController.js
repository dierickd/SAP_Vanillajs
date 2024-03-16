class HomeController extends GlobalController {
    routeFragment;
    appContainer;

    constructor(routeFragment, appContainer) {
        super(routeFragment, appContainer);
        this.routeFragment = routeFragment;
        this.appContainer = appContainer;
    }

    index() {
        console.log("--->>>> homeController");
        this.renderView(homeView);
    }
}
