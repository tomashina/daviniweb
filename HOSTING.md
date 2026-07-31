# Postavljanje DAVINI stranice na davini.hr

Stranica je potpuno statična i na serveru ne traži PHP, bazu podataka ni
Node.js. Produkcijska adresa je `https://www.davini.hr`.

## cPanel / Apache

1. U cPanelu uključite SSL za `davini.hr` i `www.davini.hr`.
2. Učitajte `davini-site-upload.zip` u `public_html` i tamo ga raspakirajte.
3. ZIP već sadrži gornju mapu `public`, pa će se stranica raspakirati u
   `public_html/public`, što je document root postavljen u cPanelu.
4. Provjerite da su `public/index.html`, `public/.htaccess`, `public/assets`,
   `public/portfolio`, `public/site-assets`, `public/fonts`,
   `public/robots.txt` i `public/sitemap.xml` na svom mjestu.
5. Otvorite `https://www.davini.hr` i provjerite nekoliko portfolio stranica.

Nemojte ZIP raspakirati unutar `public_html/public`, jer bi tada nastala
pogrešna putanja `public_html/public/public`.

Uključeni `public/.htaccess` automatski preusmjerava HTTP i domenu bez `www` na
`https://www.davini.hr`, uključuje kompresiju, cache i sigurnosna zaglavlja.

## GitHub i buduća ažuriranja

Repozitorij koristi dvije grane:

- `main` sadrži izvorni projekt, sadržaj i skripte za izgradnju;
- `production` sadrži samo gotovu statičnu stranicu u mapi `public`, spremnu
  za cPanel document root `public_html/public`.

Nakon što je aktualni ZIP raspakiran u `public_html`, postojeću mapu je moguće
sigurno povezati s produkcijskom granom iz cPanel Terminala:

```bash
cd public_html
git init
git remote add origin https://github.com/tomashina/daviniweb.git
git fetch origin production
git checkout -b production
git reset origin/production
git branch --set-upstream-to=origin/production production
```

`git reset` je ovdje namjerno bez `--hard`: povezuje postojeće datoteke s Git
stanjem bez njihovog brisanja. Buduće objavljene izmjene zatim se preuzimaju:

```bash
cd public_html
git pull --ff-only origin production
```

Prije svakog produkcijskog povlačenja lokalno se izradi i na GitHub pošalje
novi `production` commit.

## DNS

- `davini.hr` treba pokazivati na IP hosting računa.
- `www` treba biti CNAME na `davini.hr` ili pokazivati na isti hosting račun.

## Ponovna izrada

Google kodovi upisuju se u lokalni `.env.local`:

```dotenv
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=verification-kod-iz-search-consolea
```

Ako je pojedina vrijednost prazna, pripadajući Google kod neće se dodati u
stranicu. Nakon promjene konfiguracije potrebno je ponovno izgraditi i učitati
paket:

```bash
npm run build
```

Gotove statične datoteke nalaze se u `dist/client`. Lokalna Herd kopija za
`daviniweb.test` nalazi se u `out`.

Kontaktni podaci nalaze se u `app/components/contact-section.tsx`, sadržaj u
`app/content.ts`, dizajn u `app/globals.css`, a fotografije u
`public/portfolio`.
