                                                                  Projet d'Application Web de Météo
                                        Utilisation de l'API OpenWeather avec React.js
                                                                        Instructions pour lancer le projet



1. Cloner le projet :
                 git clone <URL_du_projet>
2. Installer les dépendances :
                 npm install
3. Démarrer le site web :
                 npm start
Structure du projet
               - App.js : Composant principal où l'API est appelée et où les données sont gérées.
               - Weather.js : Composant enfant qui affiche les informations météorologiques.
               - styles.css : Fichier de style pour une meilleure présentation de l'application.
Utilisation de l'API OpenWeather
              Nous avons utilisé l'API OpenWeather pour obtenir les données météorologiques en fonction de la
              localisation. L'API est appelée directement dans le composant React en utilisant fetch, sans passer
              par Axios.
Gestion de l'état avec useState
              Nous avons utilisé les hooks useState pour gérer l'état de notre application, notamment pour
              stocker les données météorologiques et l'état de chargement.

Motivation du projet
              Nous avons choisi ce projet pour comprendre comment utiliser une API avec React, gérer l'état
              avec useState et afficher des données dynamiques dans une application web. Nous avons
              également voulu explorer comment utiliser fetch pour les appels API sans recourir à des
              bibliothèques supplémentaires comme Axios.
