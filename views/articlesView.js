const articlesView = (params) => {
    const element = document.createElement('div');
    element.innerHTML = '<h1>Liste des articles</h1>' +
        '<ul>\n' +
        '    <li><a href=' + Route.getRoute("article_detail", { id: 3 }) + '>Article 3</a></li>\n' +
        '    <li><a href=' + Route.getRoute("article_detail", { id: 16 }) + '>Article 16</a></li>\n' +
        '    <li><a href=' + Route.getRoute("article_detail", { id: 32 }) + '>Article 32</a></li>\n' +
        '</ul>' +
        '<a href="' + BASE_URI + '">Retour à la page d\'accueil</a>';
    return element;
};