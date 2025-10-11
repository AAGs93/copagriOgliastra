---
title: prova articolo
slug: prova-articolo
date: 2025-10-11T11:00:00.000+02:00
author: alessandro
category: Bandi
image: https://images.pexels.com/photos/15721596/pexels-photo-15721596.jpeg
excerpt: riassunto del contenuto
published: true
tags: ["2025"]
---

Questo errore in Decap CMS (ex Netlify CMS) —

“Your Git Gateway backend is not returning valid settings. Please make sure it is enabled.”

significa che il backend Git Gateway non è configurato correttamente o non è abilitato nel sito collegato (es. Netlify).
Vediamo passo passo come risolverlo 👇

🧩 1. Controlla che Git Gateway sia attivato su Netlify

Vai nel pannello Netlify → Site settings → Identity → Services

Se non l’hai già fatto:

Clicca Enable Identity

Poi clicca Enable Git Gateway

✅ Dopo averlo attivato, controlla che compaia la scritta “Git Gateway enabled”.
