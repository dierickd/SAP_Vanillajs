const articleDetailView = (params) => {
    const element = document.createElement('div');
    element.innerHTML = '<h1>Page article</h1><p>Je suis l\'article ' + params.id + '</p>' +
        '<a href="' + BASE_URI + '">Retour à la page d\'accueil</a>' +
        '<br>' +
        '<a href="' + BASE_URI + 'article">Retour à la liste des articles</a>';
    return element;
};