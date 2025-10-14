---
title: termocamera
tags: ["2025"]
slug: termocamera
date: 2025-10-11T14:03:00.000+02:00
author: alessandro
category: Normative
image: https://images.pexels.com/photos/34036546/pexels-photo-34036546.jpeg
excerpt: >+
  Il tuo badge ha già variant="solid", quindi va bene. Ma alcune versioni di
  UIBadges si aspettano colori specifici (red, blue, green, ecc.) che mappano
  internamente a Tailwind.


published: true
---

Il tuo badge ha già variant="solid", quindi va bene. Ma alcune versioni di UIBadges si aspettano colori specifici (red, blue, green, ecc.) che mappano internamente a Tailwind.

2️⃣ Controlla il colore generato

La tua funzione getCategoryColor restituisce 'red', 'blue', 'purple'… se vuoi, puoi usare direttamente i nomi Tailwind con tonalità, ad esempio:
