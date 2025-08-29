# FinOps Hub (GitHub Pages / Next.js Static Export)

A hybrid **educational + consulting** FinOps website. Built with **Next.js (App Router) + MDX + Tailwind** and deployed free on **GitHub Pages**.

## Quickstart

1. **Use this repo**: copy files into a new GitHub repo, e.g., `finops-site`.
2. **Install**
   ```bash
   pnpm i
   pnpm dev
   ```
3. **Set your project page**
   - In `next.config.mjs`, leave `isProjectPage = true` (so basePath = `/finops-site`).
   - If you deploy to `username.github.io` root, set `isProjectPage = false`.
4. **Deploy**: push to `main`. GitHub Action builds and publishes to Pages automatically.

## Content model
- Educational pages live under `app/learn/.../page.mdx`.
- Services/case-studies are MDX pages too.
- Add more pages by copying an existing folder with `page.mdx`.

## Forms & Search
- Contact form uses Formspree (replace `your-id`).
- For search, add Pagefind/Lunr later (client-only).

## SEO
- Edit `public/sitemap.xml` and `public/robots.txt` with your GitHub Pages URL.
- `next-seo` is pre-wired for basics.

## Notes for GitHub Pages
- `images.unoptimized: true` is set.
- `trailingSlash: true` avoids deep-link 404s.

## Docker

Build and run the site in a container:

```bash
docker build -t finops-site .
docker run -p 3000:3000 finops-site
```

Then open <http://localhost:3000> in your browser.

## Customize
- Colors in `tailwind.config.ts` (`brand`).
- Logo/OG image in `public/`.
