const importScriptFile = async () => {
    await fetch("/SPA_js/system.json")
        .then((response) => response.json())
        .then(files => {
            const header = document.getElementsByTagName('head')[0];

            if (files.length) {
                files.forEach(file => {
                    const scriptTag = document.createElement('script');
                    scriptTag.type = "text/javascript";
                    scriptTag.src = file + ".js";
                    header.appendChild(scriptTag);
                });
                const scriptTag = document.createElement('script');
                scriptTag.type = "text/javascript";
                scriptTag.src = "index.js";
                header.appendChild(scriptTag);
            }

        })
        .catch((error) => console.error("Error loading JSON file", error));
};

importScriptFile().then();