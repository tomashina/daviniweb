# Postavljanje DAVINI stranice na vlastiti hosting

Stranica je pripremljena kao potpuno statičan web i ne traži PHP, bazu
podataka ni Node.js na serveru.

## Najjednostavnije postavljanje

1. Raspakirajte `davini-site-upload.zip`.
2. Prenesite sav sadržaj raspakirane mape u `public_html` ili korijensku mapu
   domene.
3. Provjerite da se `index.html`, mapa `_next`, mapa `images`, PDF i SVG logo
   nalaze izravno u korijenu domene.

Za ponovnu izradu paketa nakon izmjena pokrenite:

```bash
npm run build:static
```

Gotove datoteke bit će u mapi `out`.

Kontaktni podaci nalaze se u `app/page.tsx`, a sav dizajn u
`app/globals.css`. Fotografije su u `public/images`, vektorski logo u
`public/logo-davini.svg`, a izvorni katalog ostaje u korijenu projekta.
