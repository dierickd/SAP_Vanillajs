# PROJET

---

## Single Page Application

> Langage: **Vanilla-js**

L'application fonctionne avec le même principe que Angular/Symfony/React.... c'est une **SPA** !

Le but de cet exercice était de créer une application javascript **SANS** aucune librairie, Node, Npm... du pure
Javascript :)

## Installation

- Cloner le projet et c'est tout !

Aucune installation n'est nécessaire, npm ne fait pas partie du projet, du pure JS

Il ne tient qu'à vous d'installer Bootstrap ou tout autre librairie css si vous le désirez.

## Fonctionnment

Le point d'entrée est index.js  
Le fichier ***fileManager.js*** a pour but de loader les fichiers et de les insérer via les tags
scripts dans le header.  
La liste des fichiers à insérer dans le header se trouve dans le fichier ***system.json***

> - Comme **[fs-extra](https://www.npmjs.com/package/fs-extra)** n'est pas disponible au sein de
> l'application, un fetch du fichier **system.json** est effectué afin de charger les fichiers .js nécessaires.  
> - Dans la même problématique concernant le rooting dynamique, le fichier classMap doit être renseigné
> afin de chager les class et les méthodes.

## Utilisation

---
### Création d'un controller

1. Création du fichier de class dans *scr/Controller* en **UpperCamelCase**
2. Ajout du nom du fichier dans **system.json**
```json
[
    ....
    "src/Controller/ArticleController",
    "src/Controller/HomeController",
    "src/Route/routes",
    "src/Route/routeManager",
    "src/model/ArticleModel"
]
```
3. Ajouter le nom de class dans le fichier **classMap.js**
```javascript
function classMap() {
    return {
        "HomeController": HomeController,
        "ArticleController": ArticleController,
    };
}
```

### Création d'un template

