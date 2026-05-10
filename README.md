# Portfolio Prompts & Flow — Yvan Joubert

Portfolio one-page en HTML/CSS/JS pur, prêt pour Cloudflare Pages.

---

## 📁 Structure des fichiers

```
portfolio/
├── index.html      ← Le contenu (textes, projets, sections)
├── styles.css      ← Le design (couleurs, typo, animations)
├── script.js       ← Les interactions (toggle, rotation, scroll)
└── README.md       ← Ce fichier
```

---

## 🚀 Déploiement sur Cloudflare Pages — pas à pas

### Étape A : Tester en local d'abord

Avant de déployer, ouvre simplement `index.html` dans ton navigateur (double-clic). Vérifie que :
- Le toggle clair/sombre fonctionne (bouton en bas à droite)
- La rotation de mots dans le titre tourne
- Tout est bien aligné

### Étape B : Créer le repo GitHub

1. Va sur https://github.com/new
2. Nom du repo : `prompts-and-flow` (ou ce que tu veux)
3. Visibilité : **Public** (gratuit) ou Private (les deux marchent avec Cloudflare)
4. Crée le repo
5. Sur ton ordi, depuis le dossier `portfolio/` :

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/TONUSER/prompts-and-flow.git
git push -u origin main
```

### Étape C : Connecter à Cloudflare Pages

1. Va sur https://dash.cloudflare.com/ → **Workers & Pages**
2. Clique **Create** → **Pages** → **Connect to Git**
3. Autorise GitHub si pas déjà fait, sélectionne ton repo
4. **Configuration de build** :
   - Project name : `prompts-and-flow`
   - Production branch : `main`
   - Framework preset : **None**
   - Build command : *(laisser vide)*
   - Build output directory : `/` ou `.`
5. Clique **Save and Deploy**

En 30 secondes, ton site est en ligne sur `prompts-and-flow.pages.dev`.

### Étape D : Brancher promptsandflow.com

1. **Acheter le domaine** (si pas encore fait) :
   - **Recommandation** : achète-le directement sur Cloudflare Registrar (prix coûtant, pas de marge)
   - Dashboard Cloudflare → **Domain Registration** → **Register Domains**
   - Cherche `promptsandflow.com` ou `.fr` (le .com est plus pro pour de l'international/B2B)
   - ~10€/an

2. **Connecter le domaine au site** :
   - Dans ton projet Pages → onglet **Custom domains**
   - **Set up a custom domain** → tape `promptsandflow.com`
   - Cloudflare configure tout automatiquement (DNS + SSL) si le domaine est chez eux
   - Ajoute aussi `www.promptsandflow.com` (redirige vers la version sans www)

3. Attends 2-5 minutes → ton site est live sur ton domaine.

---

## ✏️ Comment modifier le contenu

### Cas 1 : Modifier un texte (ex: changer un titre)
1. Ouvre `index.html` dans n'importe quel éditeur (VS Code, Notepad, Sublime…)
2. Cherche le texte avec `Ctrl+F` (ou `Cmd+F` sur Mac)
3. Modifie, sauvegarde
4. Pousse sur GitHub → Cloudflare redéploie automatiquement

```bash
git add .
git commit -m "Update: changement du titre hero"
git push
```

### Cas 2 : Ajouter un nouveau projet
Dans `index.html`, cherche `<!-- Ebooks -->` (le dernier projet) et duplique le bloc juste après :

```html
<article class="project">
  <div class="project-meta">
    <span class="project-num">P/08</span>
    <span class="project-status status-live">En production</span>
    <!-- ou status-progress pour "En cours" -->
  </div>
  <h3 class="project-title">Nom du projet</h3>
  <p class="project-desc">Description courte du projet, 1-2 phrases.</p>
  <div class="project-stack">
    <span>Outil 1</span>
    <span>Outil 2</span>
  </div>
  <div class="project-highlight">
    Le résultat business chiffré ou le détail qui claque.
  </div>
</article>
```

### Cas 3 : Changer les couleurs
Tout est dans `styles.css` en haut :

```css
:root {
  --bg: #0a0a0a;          /* Fond sombre */
  --accent: #e8ff3a;      /* Jaune électrique → change ici pour autre couleur */
  /* ... */
}
```

### Cas 4 : Modifier les mots qui tournent dans le hero
Dans `script.js`, ligne ~25 :

```js
const words = ['indépendants', 'vignerons', 'maisons d\'hôtes', 'coiffeurs', 'artisans', 'PME'];
```

Ajoute ou retire ce que tu veux.

---

## 📧 Configurer le formulaire de contact

Le formulaire utilise **Formspree** (gratuit, 50 envois/mois).

1. Va sur https://formspree.io/ → crée un compte avec ton email
2. Crée un nouveau form : "Portfolio Prompts & Flow"
3. Récupère ton **Form ID** (du type `xyzabc12`)
4. Dans `index.html`, cherche `REMPLACE_AVEC_TON_ID` et remplace par ton ID :

```html
<form action="https://formspree.io/f/xyzabc12" method="POST">
```

5. Pousse sur GitHub → testé et fonctionnel.

**Alternatives gratuites si Formspree ne te plaît pas** :
- Web3Forms (https://web3forms.com/) — illimité gratuit
- Cloudflare Pages Functions (zéro dépendance externe, plus technique)

---

## 🔍 Pour qu'on te trouve sur Google (SEO)

Le portfolio est déjà optimisé techniquement. Maintenant, pour le **référencement actif** :

### Indexation initiale
1. Va sur https://search.google.com/search-console
2. Ajoute ton site (vérification via DNS Cloudflare = 1 clic)
3. Soumets l'URL pour indexation immédiate

### Boost rapide
- **Mets le lien dans ton profil LinkedIn** (champ site web + dans la bio)
- **Backlinks** : commente sur le blog d'École Cube, sur Make Community, sur les forums no-code FR
- **Indeed/Welcome to the Jungle** : mets ton portfolio en lien dans tes candidatures
- **Annuaires no-code** : Comet, Malt, Collective.work, NoCode FR

### Contenu (à ajouter plus tard)
Quand tu auras le temps, ajoute une section **Blog** avec 3-4 articles :
- "J'ai automatisé la prospection pour un domaine viticole en 2 semaines"
- "Bubble vs FlutterFlow vs Lovable : le retour d'XP"
- "Comment ChantierFlow a fait gagner 5h/semaine à un artisan"

C'est ce qui ramène vraiment du trafic qualifié.

---

## 🛠️ Utiliser Claude Code pour itérer (optionnel)

Une fois le portfolio en ligne, si tu veux ajouter des features rapidement :

1. Clone le repo en local : `git clone https://github.com/TONUSER/prompts-and-flow.git`
2. `cd prompts-and-flow`
3. Lance Claude Code : `claude`
4. Demande par exemple :
   - "Ajoute une section témoignages sous les projets"
   - "Crée une page /blog avec une liste d'articles"
   - "Ajoute un easter egg quand on tape ↑↑↓↓"

Claude Code modifie les fichiers directement, tu valides, tu pousses.

---

## ✅ Checklist avant de communiquer le lien

- [ ] Formspree configuré avec ton vrai ID
- [ ] Email `contact@promptsandflow.com` qui marche (ou remplace par ton perso)
- [ ] Lien LinkedIn correct (`/in/yvanjoubert`)
- [ ] Domaine `promptsandflow.com` connecté
- [ ] Test sur mobile
- [ ] Test du form (envoi un message test)
- [ ] Soumis à Google Search Console
- [ ] Lien ajouté sur LinkedIn

---

## 🆘 Besoin d'aide ?

Reviens me voir avec ton problème précis, je débugge avec toi.
