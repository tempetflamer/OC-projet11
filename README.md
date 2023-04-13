# Projet 11 - Kasa

Projet 11 du parcours "Développeur d'application - JavaScript React", "Développez une application Web avec React et React Router". 

## Informations du projets

### Contexte
>Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans.
Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important.
Kasa vous recrute en tant que développeur Front-end en freelance pour développer leur nouvelle plateforme web, afin de faire une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end.

### Tâche
Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma.

### Contraintes fonctionelles
- Pour le défilement des photos dans la galerie (composant Gallery) :
    - Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image. 
    - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première image. 
    - S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" ainsi que la numérotation n'apparaissent pas.
- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
- Collapse : Par défaut, les Collapse sont fermés à l'initialisation de la page. 
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
    - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.


### Contraintes techniques
**React :**
Il est impératif d’utiliser ces éléments de React pour un code de qualité :
- Découpage en composants modulaires et réutilisables ;
- Un composant par fichier ;
- Structure logique des différents fichiers ;
- Utilisation des props entre les composants ;
- Utilisation du state dans les composants quand c'est nécessaire ;
- Gestion des événements ;
- Listes : React permet de faire des choses vraiment intéressantes avec les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible.

**React Router :**
- Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
- Il existe une page par route.
- La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
- La logique du routeur est réunie dans un seul fichier.

[+ d'infos - Coding guidelines de Kasa](https://course.oc-static.com/projects/Front-End+V2/P9+React+1/Coding+guidelines+Kasa+FR.pdf)

### Ressources

[Data json de test](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json)

[Coding guidelines de Kasa](https://course.oc-static.com/projects/Front-End+V2/P9+React+1/Coding+guidelines+Kasa+FR.pdf)

[Guide des étapes clés (conseil)](https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/IW_P8+React+Kasa/Guide+d'etapes+cles+-+Creez+une+application+web+de+location+immobiliere+avec+React+1.pdf)

[Maquettes Figma](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design?node-id=4%3A1)

## Mise en place du projet

**Installation projet react :**
```
npm i —save create-react-app
```

<br>

```
npx create-react-app .
```
. symbolise le dossier courant on peut aussi lui spécifier un répertoire

<br>

```
npm i --save react-router-dom
```

<br>

**scripts existants après installation du projet :**

```
npm start
```
Starts the development server.

<br>

```
npm run build
```
Bundles the app into static files for production.

<br>

```
npm test
```
Starts the test runner.

<br>

```
npm run eject
```
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!



I also use Sass in this project .

## Structure du projet 
- `build/`, Il contient l'application compilé prêt à être mis en "production"
- `public/`, contient tous les fichiers qui n'ont pas besoin d'être compilés
- `src/`, contient tous les fichier de développement de l'application qui seront compilés
    - `assets/`, contient toutes les images et le fichier Json utilisé par l'application (passant par la compilation)
- `.gitignore`, fichier qui permet de définir les fichiers à ignorer dans la liste des fichiers modifiés à "push"
- `.prettierrc`, fichier permettant la configuration de prettier (code formatter)
- `package.json` & `package-lock.json`, fichiers utilisés par npm pour gérer les dépendances
- `README.md`, fichier de présentation et d'explication du projet que vous lisez actuellement

//a enlever
`assets/`, contient toutes les images utilisées
- `default/`, contient une image défaut de profil utilisateur
- `icons/`, contient les icônes svg utilisées
- `images/`, contient les images utilisées dans l'application
    - `avatar/`, contients les avatars des photographes
    - `gallery/`, contient les images des photographes à des formats différents
        - `medium/`, medias (images et vidéos) des photographes pour un affichage dans la lightbox
        - `small/`, medias (images et vidéos) des photographes à un petit format pour affichage en gallery
    - `logo.png`, logo de FishEye (nom)
- `favicon`, icon du logo de FishEye

`css/`, contient les fichiers css où sont définit les styles de l'application
- `photographer.css`, style de la page des photographe
- `style.css`, style de la page index

`data/`, contient les données en JSON pour l'application

`sass/`, contient les fichiers sass sous le modèle 7-1, ensuite compilé en css
- `Base/`, contients les fondations du site.
- `Componants/`, contient blocs BEM indépendant réutilisable
- `Layout/`, contient les blocs BEM réutilisable
- `Pages/`, contient les blocs de code qui ne s’appliquent qu’à une seule page
- `utils/`, contient les animations et mixins créées

`scripts/`, contient les fichiers JavaScript 
- `factories/`, contient les fichiers JS nécessaire à l'usinage de création des données JSON 
- `pages/`, contient les fichiers JS `index.js` et `photographer.js` nécessaire à la création des pages de l'application
- `utils/`, contient les différents composants JS utilisés dans les pages de l'applications 

`index.html`, page d'index du site contenant la liste des photographes

`photographer.html`, page des photographes

`package.json` & `package-lock.json`, fichiers utilisés par npm pour gérer les dépendances

`.gitignore`, fichier qui permet de définir les fichiers à ignorer dans la liste des fichiers modifiés à "push"

`.eslintrc.js`, fichier de ESLint (outil d'analyse de code statique) permettant de le configurer

`README.md`, fichier de présentation et d'explication du projet que vous lisez actuellement

## Lien de  la démo du site

[Démo site Kasa](https://tempetflamer.github.io/OC-projet11/)

Par défaut le site renverra sur la page erreur 404, c'est normal le site n'est pas prévu pour être mis sur github (dossier d'un sous-domaine) et cherchera OC-projet11 comme un dossier ou page du site.

Il est possible de corriger cette erreur en ajoutant OC-projet11 comme page de redirection vers le menu (le site étant sur la branch gh-pages), mais cela n'a pas d'intéret sur un site de démo et ne ferait que modifier (détourner de) son fonctionnement initial.


## Compétences évaluées

- Créer des composants avec React

- Développer les routes d'une application web avec React Router

- Initialiser une application web avec un framework