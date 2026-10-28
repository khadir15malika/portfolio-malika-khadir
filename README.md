# Portfolio — Malika Khadir

Site personnel statique, bilingue (FR/EN), hébergé gratuitement sur GitHub Pages (https inclus).

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Design et animations. Pas besoin d'y toucher. |
| `content.js` | **Tout le contenu** : expériences, projets, compétences, formation, coordonnées. C'est le seul fichier à modifier. |
| `cv-malika-khadir.pdf` | (Facultatif) votre CV, pour le bouton « Télécharger mon CV ». |

## Mise en ligne gratuite (une seule fois, 5 minutes)

1. Créez un compte sur https://github.com (gratuit) si vous n'en avez pas.
2. Créez un nouveau dépôt **public** nommé exactement : `VOTRE-NOM-UTILISATEUR.github.io`
   (exemple : si votre pseudo est `malikakhadir`, le dépôt s'appelle `malikakhadir.github.io`).
3. Envoyez les fichiers dans le dépôt :

   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/VOTRE-NOM-UTILISATEUR/VOTRE-NOM-UTILISATEUR.github.io.git
   git push -u origin main
   ```

   (Ou bien, sur la page du dépôt : **Add file → Upload files**, puis glissez les fichiers.)
4. Dans le dépôt : **Settings → Pages → Source : Deploy from a branch → Branch : main / (root) → Save**.
5. Après 1 à 2 minutes, le site est en ligne, sécurisé en https :
   `https://VOTRE-NOM-UTILISATEUR.github.io`

## Mettre le site à jour

1. Ouvrez `content.js`.
2. Modifiez ou ajoutez un bloc (copiez un bloc existant et changez le texte, en FR et en EN).
3. Envoyez la modification :

   ```bash
   git add .
   git commit -m "Mise à jour"
   git push
   ```

   (Ou modifiez `content.js` directement sur github.com avec l'icône crayon, puis **Commit changes**.)
4. Le site se met à jour tout seul en environ une minute.

### Exemples de modifications courantes

- **Ajouter votre CV** : mettez le fichier PDF à côté de `index.html`, puis dans `content.js` :
  `cvFile: "cv-malika-khadir.pdf"`
- **Ajouter votre GitHub** : `github: "https://github.com/votre-nom"`
- **Masquer le téléphone** : `phone: ""`
- **Lien vers un projet** : dans le projet, `link: "https://github.com/votre-nom/le-module"`
- **Nouveau poste** : ajoutez un bloc en haut de la liste `experience` (le plus récent en premier).
- **Nouvelle certification** : modifiez le bloc `certification`.
- **Retirer le badge « Disponible »** : `available: false`

## Conseils

- Après chaque modification, vérifiez que les virgules et guillemets sont bien en place : une virgule oubliée dans `content.js` peut empêcher l'affichage du site.
- Pour tester en local avant d'envoyer : ouvrez un terminal dans le dossier et lancez `python3 -m http.server`, puis allez sur http://localhost:8000
