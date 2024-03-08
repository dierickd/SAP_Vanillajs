function getErrorFileInfo() {
    try {
        throw new Error();
    } catch (e) {
        const stackLines = e.stack.split('\n');

        // Les informations sur le script peuvent être dans la deuxième ou la troisième ligne
        // Selon le navigateur, certaines informations peuvent ne pas être disponibles
        const callerLine = stackLines[2] || stackLines[1];

        // Extraire le nom du fichier
        const matches = callerLine.match(/\((.*):[0-9]+:[0-9]+\)/);
        if (matches && matches.length > 1) {
            const fileName = matches[1];
            return fileName.split("/").pop();
        } else {
            return "xx";
        }
    }
}

function getCurrentLineNumber() {
    try {
        throw new Error();
    } catch (e) {
        const stackLines = e.stack.split('\n');

        // Les informations sur le script peuvent être dans la deuxième ou la troisième ligne
        // Selon le navigateur, certaines informations peuvent ne pas être disponibles
        const callerLine = stackLines[2] || stackLines[1];

        // Extraire le numéro de ligne
        const matches = callerLine.match(/:(\d+):\d+\)$/);
        if (matches && matches.length > 1) {
            const lineNumber = matches[1];
            return lineNumber;
        } else {
            return "xx"
        }
    }
}