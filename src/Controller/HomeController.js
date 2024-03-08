class HomeController extends GlobalController {
    routeFragment;
    appContainer;

    constructor(routeFragment, appContainer) {
        super(routeFragment, appContainer);
        this.routeFragment = routeFragment;
        this.appContainer = appContainer;

        this.index();
    }

    index() {
        console.log("--->>>> homeController");
    }
}
