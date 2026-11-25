# BEYOND MEDIA — Official Agency Portfolio Website

> **"Helping Brands Go Beyond."**  
> *Branding • Content • Performance Marketing*

A high-converting, premium digital marketing agency portfolio website built for **Beyond Media** ([@beyondmedia.inn](https://www.instagram.com/beyondmedia.inn/)).

---

## 🚀 Live Demo & Brand Overview

- **Agency Name:** Beyond Media
- **Instagram Handle:** [@beyondmedia.inn](https://www.instagram.com/beyondmedia.inn/)
- **Positioning:** Helping Brands Go Beyond
- **Brand Palette:**
  - **Primary Background:** Matte Black (`#080808`)
  - **Primary Accent:** Bold Red (`#E50920`)
  - **Secondary:** Pure White (`#FFFFFF`)
  - **Additional Accent:** Refined Gold (`#C5A44D`) for logo emblem and selective luxury details
- **Target Audience:** Small businesses, Startups, Restaurants, Real estate companies, Coaching institutes, E-commerce brands, Personal creators, and Growing businesses.

---

## 🛠️ Tech Stack

- **React 18** + **Vite 5**
- **TypeScript** (Strict Type Safety)
- **Tailwind CSS** (Custom Brand Design Tokens)
- **Framer Motion** (Smooth Animations & Micro-Interactions)
- **Lucide React** (Modern Icons)
- **Vercel** (Optimized for One-Click Global Deployment)

---

## 📁 Project Architecture & Central Configuration

All agency details, phone numbers, WhatsApp links, and portfolios are managed centrally in:
```
src/data/agencyData.ts
```

### 1. Updating Contact Channels
Edit `agencyConfig` in `src/data/agencyData.ts`:
```ts
export const agencyConfig = {
  name: "Beyond Media",
  whatsappNumber: "919999999999", // International number without + or spaces
  whatsappDisplay: "+91 99999 99999",
  email: "contact@beyondmedia.inn",
  instagramHandle: "@beyondmedia.inn",
  instagramUrl: "https://www.instagram.com/beyondmedia.inn/",
  location: "New Delhi, India (Serving Global Brands)",
  ...
};
```

### 2. Updating Team Members
The team roster in `src/data/agencyData.ts` features 5 editable profiles. You can replace the placeholder names and images anytime:
```ts
export const teamMembers = [
  {
    id: "team-1",
    name: "Founder / Director Name",
    designation: "Founder & Creative Director",
    ...
  },
  ...
];
```

### 3. Adding or Updating Portfolio Work
Add or modify items in `portfolioData`. Every project has an authentic categorization flag:
- `highlight`: Official Instagram profile story/highlight reference (e.g., DPS, Green Natura)
- `sample`: Official internal agency design system
- `concept`: Sample concept work

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🌐 Free Deployment to Vercel

### Option A: Deploy via GitHub (Recommended for automatic updates)
1. Initialize a git repository and commit all files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Beyond Media portfolio"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Push your repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/beyond-media-portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
5. Import your GitHub repository.
6. Framework preset will automatically detect **Vite**.
7. Click **Deploy**. Vercel will build and provide a live `https://beyond-media-portfolio.vercel.app` URL for free!

---

### Option B: Deploy directly using Vercel CLI
1. Install Vercel CLI globally (or run via npx):
   ```bash
   npx vercel
   ```
2. Follow the interactive prompts:
   - *Set up and deploy?* -> `Y`
   - *Which scope?* -> Select your account
   - *Link to existing project?* -> `N`
   - *Project name?* -> `beyond-media-portfolio`
   - *Directory?* -> `./`
3. To deploy directly to production:
   ```bash
   npx vercel --prod
   ```

---

## 🔒 Authenticity & Compliance
- Transparent labeling of concept work vs profile highlights (DPS, Green Natura).
- Zero fabricated testimonials or unverified client logos.
- Production-tested with clean responsive breakpoints from mobile to 4K displays.
