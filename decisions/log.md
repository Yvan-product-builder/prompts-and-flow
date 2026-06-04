# Journal des décisions

2026-06-04 - Ajout carte P/09 Mini-site dédié food trucks sur portfolio principal
2026-06-04 - Refonte du toggle thème en ampoule symbolique + ajout nom dans header pour valoriser identité personnelle
2026-06-04 - Fix header mobile : white-space nowrap + tailles réduites + logo "P&F" dès 500px pour tenir sur 1 seule ligne (Pixel 7a 412px)
2026-06-04 - Cache-busting styles.css/script.js (?v=20260604-3) : le mobile chargeait un ancien CSS en cache (double logo + nom masqué) contre le nouveau HTML. Règles CSS déjà correctes, c'était un problème de cache.
2026-06-04 - Fix scroll horizontal mobile : cause = .nav en position:fixed non clippé par body{overflow-x:hidden}. Ajout overflow-x:hidden + width/max-width:100% sur html ET body + overflow-x:hidden sur .nav (garde-fou). Cache bump v=20260604-4. (Note : max-width:100% choisi au lieu de 100vw pour éviter le bug scrollbar desktop.)
