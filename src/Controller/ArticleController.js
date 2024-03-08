class ArticleController extends GlobalController {
    routeFragment;
    appContainer;

    constructor(routeFragment, appContainer) {
        super(routeFragment, appContainer);
        this.routeFragment = routeFragment;
        this.appContainer = appContainer;

        console.log("class instancier");
        this.index();
    }

    index = () => {
        console.log("--->>>> articleController");
        this.checkModel('getAllArticle', this.appContainer);
    }
}
