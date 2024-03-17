class ArticleController extends GlobalController {
    routeFragment;
    appContainer;

    constructor(routeFragment, appContainer) {
        super(routeFragment, appContainer);
        this.routeFragment = routeFragment;
        this.appContainer = appContainer;
    }

    index = () => {
        const allArticle = getAllArticle();
        this.renderView(articlesView, {articles: getAllArticle() });
    };

    view = () => {
        console.log(this.routeFragment.params);
        this.renderView(articleDetailView, this.routeFragment.params);
    };
}
