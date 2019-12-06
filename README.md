# Projet de programmation web - groupe 16

#### Lien [Google Drive]. Il y a plusieurs documents pour organiser et faciliter le travail.

## Pour commencer avec Git
Si Git n’est pas déjà installé, il faut l’installer.  
Sur Windows:
* Allez [ici][1] pour l'installer.
* Chercher et ouvrir Git Bash (ou Git GUI). Vous pouvez en plus installer GitHub Desktop pour avoir un joli GUI.

Autre méthode sur Windows 10 exclusivement:
* Installer Bash on Ubuntu on Windows dans Microsoft Store (vous pouvez trouver plein de tutoriels sur l’Internet comment le faire, c’est simple, je veux pas tout décrire) et utiliser comme si vous étiez sur Linux.

Linux:
* Dans Terminal, tapez `git <Entrée>`.
* Si un truc qui decrit comment utiliser Git apparait, bon, inutile de continuer à lire cette belle phrase qui est trop longue mais je vous ai déjà dit d'arrêter de la lire, vous perdez votre temps.
* Si vous êtes face au vide, faut aussi aller [ici][1] pour installer Git et répéter de le premier point.

MacOS:
* Dans Terminal, tapez `git <Entrée>`.
* Si un truc qui decrit comment utiliser Git apparait, bon, inutile de continuer à lire cette belle phrase qui est trop longue mais je vous ai déjà dit d'arrêter de la lire, vous perdez votre temps.
* Si un truc qui dit que la commande “git” a besoin de certains outils, cliquez sur “Oui, merci, installez-les s’il vous plait, mon ordi est à votre disposition”. Répétez de le premier point.

## Comment utiliser Git (dans Terminal. Plus facile avec GUI, pourtant même procédure.)

#### Important: pour ne pas créer du chaos, faites tout votre propre travail dans une branche propre à vous!

* Pour cloner une répertoire existante:
    + Allez dans une répertoire sur vos ordi qui vous plait (pour y mettre le projet).
    + `git clone https://github.com/mat42290/Projet-INSA-S1.git`
    + wallah
* Créer une nouvelle branche:
    + `git checkout -b <nom-de-branche-ici>`.
Utilisez un nom de format `partie-de-projet-mon-prenom`. Ex: `page-accueil-Boris`.
* Pour changer votre branche actuelle:
    + `git checkout <nom-autre-branche-existante>`
* Pour obtenir toutes les nouvelles mises à jour de votre branche actuelle:
    + `git pull`
* Pour mettre dans l’histoire du projet vos changements/ajouts (version local de votre branche actuelle):
    + `git add .` ou `git add <fichier specifique>` ou `git add` puis oui/non pour ajouter certains et ne pas d’autres
    + `git commit -m “Message court et informative de vos changements ici.”`
* Pour mettre dans l’histoire du projet vos changements/ajouts (version globale de votre branche actuelle):
    + voir point précédent, puis:
    + `git push` Le première fois il faut suivre ce qui est écrit quand vous faites ca. 
* Pour fusionner votre branche avec `master`:
   + waawaah waah, attendez, pas encore.
   + on le fera ensemble après.


[1]: https://git-scm.com/downloads
[Google Drive]: https://drive.google.com/drive/folders/15xAFqzbAUCvbEygndDOcSQ4nfHn6ePhK?usp=sharing
