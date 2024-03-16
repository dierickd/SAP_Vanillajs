function urlExists(url, callback) {
    console.log("coucou");
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(xhr.status < 400);
        }
    };
    xhr.open('HEAD', url);
    xhr.send();
}

// Vérifier si l'URL existe
urlExists(window.location.href, function(exists) {
    if (!exists) {
        // Rediriger vers la page d'accueil si l'URL n'existe pas
        window.location.href = "/";
    }
});