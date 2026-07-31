# Postavljanje DAVINI stranice na davini.hr

Stranica je potpuno statična i na serveru ne traži PHP, bazu podataka ni
Node.js. Produkcijska adresa je `https://www.davini.hr`.

## cPanel / Apache

1. U cPanelu uključite SSL za `davini.hr` i `www.davini.hr`.
2. Raspakirajte `davini-site-upload.zip`.
3. Prenesite **sadržaj** raspakirane mape izravno u `public_html` domene.
4. Provjerite da su `index.html`, `.htaccess`, `assets`, `portfolio`,
   `site-assets`, `fonts`, `robots.txt` i `sitemap.xml` izravno u korijenu.
5. Otvorite `https://www.davini.hr` i provjerite nekoliko portfolio stranica.

Uključeni `.htaccess` automatski preusmjerava HTTP i domenu bez `www` na
`https://www.davini.hr`, uključuje kompresiju, cache i sigurnosna zaglavlja.

## DNS

- `davini.hr` treba pokazivati na IP hosting računa.
- `www` treba biti CNAME na `davini.hr` ili pokazivati na isti hosting račun.

## Ponovna izrada

```bash
npm run build
```

Gotove statične datoteke nalaze se u `dist/client`. Lokalna Herd kopija za
`daviniweb.test` nalazi se u `out`.

Kontaktni podaci nalaze se u `app/components/contact-section.tsx`, sadržaj u
`app/content.ts`, dizajn u `app/globals.css`, a fotografije u
`public/portfolio`.
