const routes = [
    { path: BASE_URI, view: homeView },
    { path: BASE_URI + 'about', view: aboutView },
    { path: BASE_URI + 'article', view: articlesView },
    { path: BASE_URI + 'article/:id', view: articleDetailView },
    // Add more routes as needed
];