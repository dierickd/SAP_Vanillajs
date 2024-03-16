class ArticleController extends GlobalController {
    routeFragment;
    appContainer;

    constructor(routeFragment, appContainer) {
        super(routeFragment, appContainer);
        this.routeFragment = routeFragment;
        this.appContainer = appContainer;
    }

    index = () => {
        document.getElementById(ID_CONTAINER).innerHTML = ""
        this.renderView(articlesView);
    };

    view = () => {
        document.getElementById(ID_CONTAINER).innerHTML = ""
        console.log(this.routeFragment.params);
        this.renderView(articleDetailView, this.routeFragment.params);
    };
}
