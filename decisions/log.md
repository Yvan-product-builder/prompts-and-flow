# Journal des décisions

2026-06-04 - Ajout carte P/09 Mini-site dédié food trucks sur portfolio principal
2026-06-04 - Refonte du toggle thème en ampoule symbolique + ajout nom dans header pour valoriser identité personnelle
2026-06-04 - Fix header mobile : white-space nowrap + tailles réduites + logo "P&F" dès 500px pour tenir sur 1 seule ligne (Pixel 7a 412px)
2026-06-04 - Cache-busting styles.css/script.js (?v=20260604-3) : le mobile chargeait un ancien CSS en cache (double logo + nom masqué) contre le nouveau HTML. Règles CSS déjà correctes, c'était un problème de cache.
2026-06-04 - Fix scroll horizontal mobile : cause = .nav en position:fixed non clippé par body{overflow-x:hidden}. Ajout overflow-x:hidden + width/max-width:100% sur html ET body + overflow-x:hidden sur .nav (garde-fou). Cache bump v=20260604-4. (Note : max-width:100% choisi au lieu de 100vw pour éviter le bug scrollbar desktop.)
2026-06-04 - Ajout section Produits digitaux pour booster ventes Gumroad : 3 cards (Relanceur Devis WhatsApp 29€, MargeTruck 29€ badge NOUVEAU, Livret Airbnb 49€+) insérée entre Projets et Verticaux. Prix accent ambre, CTA Gumroad target=_blank, grille 3/2/1 colonnes responsive, garantie 30j. Lien nav #produits ajouté. Cache bump v=20260604-5.
2026-06-04 - Fix mobile : cards "Verticaux" (en réalité section .services « Mission freelance » / « Poste salarié ») débordaient sur écran <450px. Cause = .services-grid en repeat(auto-fit, minmax(380px,1fr)) sans override mobile : le plancher 380px dépassait le viewport ~372px du Pixel 7a. Fix sur la grille/cards (pas l'overflow parent) : dans @media max-width 768px → grid-template-columns:1fr + .service-card width/max-width:100% + padding H réduit 2.5rem→1.25rem. Cache bump v=20260604-6.
2026-06-04 - UX : harmoniser cards Services (mêmes états repos + hover). Cause de l'asymétrie = classe .service-card-accent sur la card « Poste salarié » (fond dégradé crème + bordure ambre permanents) qui masquait son hover. Suppression de la classe d'exception (HTML + règle CSS). Les 2 cards partagent désormais : repos = fond --bg-card + bordure --border ; hover = bordure --accent + fond légèrement teinté (accent 4%) + translateY(-4px) + shadow ambre, transition 0.3s. Ajout d'un état :active pour le feedback tactile mobile. Cache bump v=20260604-7.
2026-06-04 - Activation Cloudflare Web Analytics (token 6bfe361a... première mesure officielle du trafic)
2026-06-06 - Mise à jour portfolio :
- Projets livrés : réparation lien 'Livret accueil' (renommé en 'Livret d'accueil digital', URL démo demo.promptsandflow.com, tags Cloudflare Pages/Multi-langue/PWA/Inventaire interactif) + ajout P/10 'Mini-site Marchés' (marches.promptsandflow.com)
- Produits digitaux : Livret prix 49€ → 97€ (nouvelle version avec inventaire interactif, badge ambre 'Nouveau', desc refondue). Lien Gumroad l/livret-accueil-digital conservé en placeholder (page pas encore live → 404 attendu jusqu'à republication).
- Cache-bust appliqué (styles.css/script.js ?v=20260606-1) ; .wrangler/ ajouté au .gitignore.
- Déploiement via git push origin main (projet Cloudflare 'prompts-and-flow' connecté à GitHub — pas de wrangler deploy direct).
2026-06-09 - Intégration du nouveau logo officiel Prompts & Flow (gold #B8975F + charcoal #2D2A26) :
- Sources (4 PNG fond crème opaque) copiées dans images/logos/ : logo-principal, logo-compact, symbol, logo-mono. Détourées via System.Drawing (fond #fafafa → transparent).
- Header : choix HYBRIDE après tests visuels. Le lock-up complet (gros « & » + petit wordmark fin) reste superbe en thème CLAIR mais le wordmark devient mat/gris en thème SOMBRE (vue par défaut système) — limite géométrique, pas de couleur (testé crème ET or, downscaling de strokes fins clairs sur fond sombre). Retenu : symbole « & » gold détouré (logo-mark.png) + « Prompts & Flow » en VRAI texte (Inter Tight 700, « & » en accent gold) → net sur les 2 thèmes. Lien header sur « / » (home).
- Favicon : symbole « & » seul, PNG 16/32/180 (apple-touch) générés depuis symbol.png, remplacent l'ancien favicon SVG ⚡.
- Footer : même couple mark + wordmark texte (plus petit), s'adapte au thème via var(--text).
- Variantes dispo dans images/logos/ : originaux (principal/compact/symbol/mono) + logo-header-light/dark.png (logo complet détouré, texte charcoal/crème) + logo-mark.png + favicons.
- Anciennes classes logo texte (.nav-logo-mark / -full / -short, ⚡) supprimées.
- Cache-bust ?v=20260609-1 sur styles.css, script.js, logo-mark, favicons.
2026-06-09 - RETOUR ARRIÈRE : abandon de l'hybride, retour au LOGO IMAGE COMPLET partout (header + footer), pour préserver l'identité officielle du lock-up (pas de version reconstruite) :
- Header & footer : <img> du logo complet détouré, swap selon [data-theme]. Clair = logo-header-light.png (texte charcoal #2D2A26 conservé). Sombre = logo-header-dark.png (texte recoloré cream #FAF6EE, « & » or conservé, fond transparent) ; copie exposée sous 00-logo-principal-HD-dark.png (nom demandé au cahier des charges). Génération via System.Drawing : détection des pixels neutres (charcoal) → recolorés, pixels saturés (or) → conservés, fond crème → transparent, alpha gamma 0.5 + dilatation 3x3 en mode sombre pour épaissir les traits fins.
- Tailles : header 46px (desktop) → 35px (<768px) → 32px (<500px) ; footer 34px.
- Mobile <768px épuré : « · Yvan Joubert » + ampoule toggle masqués (display:none), seuls logo + bouton « Me contacter » restent. Vérifié à 412px (Pixel 7a) via mesure DOM : nav.scrollWidth=412 (aucun débordement), bouton « Me contacter » à 281→398px = entièrement visible. NB : les captures Edge --window-size=412 autonomes étaient trompeuses (Edge impose une largeur de fenêtre minimale > 412 qui élargit la nav fixed) ; rendu réel validé via iframe forcé à 412px.
- Classes hybrides (.nav-mark/.nav-word/.footer-mark/.footer-word) supprimées du CSS ; logo-mark.png (symbole « & » de l'hybride) supprimé du repo.
- Tradeoff connu accepté : en thème sombre le wordmark fin paraît légèrement mat (limite géométrique du downscaling de traits fins clairs sur fond sombre), couleur cream choisie pour maximiser la lisibilité.
- Cache-bust ?v=20260609-2 sur styles.css, script.js, logo-header-dark/light, favicons.
2026-06-09 - Header mobile rétabli complet (demande utilisateur après le rollback) : le header mobile épuré (logo seul + CTA) supprimait trop d'éléments. Rétablissement sur <768px :
- Logo agrandi 35px → 46px (swap clair/sombre conservé).
- « · Yvan Joubert » rétabli (nom compacté à 1rem, 0.92rem sous 500px).
- Ampoule toggle thème rétablie (icône 28→24px, marges réduites).
- Bouton CTA : libellé court « Contact » en mobile (2 <span> .cta-full/.cta-short permutés par CSS, « Me contacter » conservé en desktop) + padding réduit + padding nav resserré (0.7rem) sous 500px.
- Tout tient sur 1 ligne sans débordement : vérifié par mesure DOM à 412px (Pixel 7a) → nav.scrollWidth=412=clientWidth (0 débordement), bouton « Contact » à 11px du bord, logo h=46, nom et ampoule visibles. Méthode de capture mobile fiable = iframe forcé à 412px (Edge headless fausse les --window-size étroits).
- Desktop strictement inchangé.
- Cache-bust ?v=20260609-3 sur styles.css.
2026-07-15 - Mentions légales et correction de l'identité légale (commit 9b5fa24) :
- Création de /mentions-legales (mentions-legales.html à la racine, servi sans extension par Cloudflare Pages) : obligation LCEN art. 6-III, jusqu'ici absente du site. Couvre éditeur, hébergeur, propriété intellectuelle, RGPD, cookies, droit applicable. Page en noindex/follow, head allégé (ni canonical, ni og/twitter, ni JSON-LD) ; header repris de l'accueil avec ancres passées en absolu (/#projets, /#produits…) sans quoi le menu serait mort hors page d'accueil.
- RGPD : Formspree (US) identifié comme sous-traitant du formulaire de contact, aux côtés de Cloudflare et Google ; transfert hors UE déclaré (clauses contractuelles types + Data Privacy Framework). Cloudflare Web Analytics déclaré comme mesure d'audience sans cookie ni fingerprinting → aucune bannière de consentement nécessaire.
- Identité légale : publication du SIRET du siège (Lyon). Un second SIRET existe pour l'ancien siège ; tous les documents pro sont désormais alignés sur celui du siège.
- Confidentialité : adresse e-mail personnelle remplacée par l'adresse professionnelle sur l'ensemble du site ; commune de domicile remplacée par Lyon dans le footer et le JSON-LD (streetAddress + postalCode ajoutés au passage → bénéfice SEO local).
- carte.html : ajout d'un footer (identité + lien mentions légales), la page n'en avait aucun.
- styles.css : ajout des classes .legal* et .footer-link en fin de fichier, uniquement à partir des variables existantes (--text / --accent / --border…), sans modifier aucune règle existante.
- Dette technique constatée, non traitée : carte.html ne charge ni styles.css ni script.js — styles inline, couleurs en dur, figée en thème sombre, ignore la bascule de thème.
- À retenir — convention de cache-bust : les assets sont appelés avec un paramètre ?v=, Cache-Control: max-age=14400 (4 h). Le ?v= de styles.css n'a pas été incrémenté lors de ce commit, ce qui a provoqué un affichage sans styles jusqu'au rafraîchissement forcé. À incrémenter systématiquement à chaque modification de styles.css.
- À faire : tester le formulaire de contact en production (compteur Formspree à 0/50, jamais vérifié depuis la mise en ligne).
