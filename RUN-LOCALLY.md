# Running the DNO website on your own computer (VS Code)

Everything below is copy-and-paste. You only need to do steps 1–3 once.

---

## 1. Install two things (one time only)

- **Git** — https://git-scm.com/downloads
- **Node.js 18.17 or newer** (pick the LTS button) — https://nodejs.org

Check they installed: open VS Code → menu **Terminal → New Terminal**, then type:

```
node -v
git --version
```

Both should print a version number.

---

## 2. Get the code onto your computer

In that same terminal:

```
git clone https://github.com/KNCS84/davoris-website.git
cd davoris-website
git checkout arena/01a07e2d-davoris-website
```

Then in VS Code: **File → Open Folder…** and pick the `davoris-website` folder.

> The branch `arena/01a07e2d-davoris-website` is the one with all the DNO work.
> The `main` branch is the old template — don't use it.

---

## 3. Install the packages (one time only)

```
npm install
```

Takes 2–5 minutes and needs internet. You'll see a lot of text; that's normal.

---

## 4. Run the site

**Option A — working mode** (best while editing; changes appear as you save):

```
npm run dev
```

**Option B — the exact shipped build** (what a visitor would see):

```
npm run build
npm start
```

Either way, open **http://localhost:3000** in your browser.

To stop the site: click in the terminal and press **Ctrl + C**.

---

## 5. Optional: make the contact form actually send email

The site runs fine without this — the form just won't deliver messages.

1. In the project folder, copy `.env.example` to a new file named `.env.local`
2. Fill in your email provider's SMTP details (Gmail, Zoho, your domain host, etc.)
3. Restart the site (`Ctrl + C`, then `npm run dev`)

`.env.local` is ignored by Git on purpose, so your password never gets uploaded.

---

## 6. Adding the real project photos

Right now the project pages show stand-in artwork, because the photos you sent in chat
never landed as files I could use. When you have them on your computer:

1. Create a folder called **`photos`** inside `davoris-website`
2. Drop the original JPGs in it — **keep their exact file names** (table below)
3. Run:
   ```
   node scripts/ingest-projects.mjs
   ```
4. Run:
   ```
   npm run build
   npm start
   ```

That's it. The script resizes them, applies the agreed colour grade, saves them as fast
`.webp` files into `public/projects/`, and the website picks them up automatically.
**No code changes needed.** Any file that isn't in the folder is simply skipped, so you
can never end up with a broken image on the live site.

You can also point it at any other folder:
`node scripts/ingest-projects.mjs "C:/Users/You/Desktop/DNO photos"`

### Nasarawa State University, Keffi — Centre for Physical Planning (8 photos)

| File to put in `photos/` | Where it appears on the site |
|---|---|
| `IMG-20210706-WA0124.jpg` | Main image (card + page hero) — courtyard colonnade |
| `nasarawa-physical-planning-c.jpg` | Gallery — corridor |
| `IMG-20210706-WA0115.jpg` | Gallery — walkway and water tanks |
| `IMG-20210706-WA0116.jpg` | Gallery — compound gate |
| `IMG-20210706-WA0118.jpg` | Gallery — side walkway |
| `IMG-20210706-WA0119.jpg` | Gallery — building corner |
| `IMG-20210706-WA0120.jpg` | Gallery — office interior |
| `IMG-20210706-WA0122.jpg` | Gallery — conference room |

### Earlier TETFUND / UBEC-SUBEB set (6 photos — not on the site yet)

| File to put in `photos/` | Where it will appear |
|---|---|
| `IMG-20210706-WA0100.jpg` | Lecture theatre interior (auto-cropped) |
| `IMG-20210706-WA0104.jpg` | TETFUND 2015 signage |
| `IMG-20210706-WA0074.jpg` | Lecture block exterior (auto-cropped) |
| `subeb-delta-classroom-2.jpeg.jpg` | SUBEB classroom block |
| `IMG-20210706-WA0013.jpg` | SUBEB 2018 signage |
| `IMG-20210706-WA0114.jpg` | Courtyard drainage |

These six are ready to be ingested, but their project record hasn't been written yet —
send me that project's details and it becomes the second entry on the Work page.

---

## Troubleshooting

| What you see | What to do |
|---|---|
| `'next' is not recognized` / `command not found` | Run `npm install` first |
| `Port 3000 is already in use` | Run `npm run dev -- -p 3001`, then open http://localhost:3001 |
| A warning about `output: standalone` when you run `npm start` | Harmless — the server still starts |
| Project pages show generic artwork | The photos haven't been ingested yet (step 6) |
| Pages look unstyled | You opened the files directly. Use http://localhost:3000 instead |
| Something broke after editing | `Ctrl + C`, then `npm run dev` again |

---

## Where things live

| Path | What it is |
|---|---|
| `content/site.ts` | Company name, nav, contact details — edit here, it updates everywhere |
| `content/services.ts` | The seven service lines and their copy |
| `content/projects.ts` | Every project record, including the Nasarawa one |
| `content/proof.ts` | Frameworks marquee and credential text |
| `app/` | The pages themselves (home, services, projects, about, contact) |
| `components/` | Reusable pieces (nav, footer, cards, animations) |
| `styles/` | Colours, type scale, layout, component styles |
| `public/dno/` | The AI-generated artwork currently used as stand-ins |
| `scripts/ingest-projects.mjs` | Turns your real photos into site-ready images |
