# Multilingual Gnostic Digital Library

Welcome to the **Multilingual Gnostic Digital Library**, a project built with modern JAMstack architecture. This repository contains the project's source code, which combines technologies like **Astro**, **Strapi**, **Netlify**, **n8n**, and **Google Gemini AI** to provide an efficient, scalable, and user-friendly solution for content management and automated translations.

## 📚 Project Description

The Multilingual Digital Library is a platform designed to centralize, translate, and distribute Gnostic literature in 110 languages. It features a modern and responsive interface with capabilities such as:

- Light/dark theme toggle with user preference persistence
- Integrated search functionality with content indexing
- Support for 110 languages
- Hierarchical navigation that reflects the structure of books and chapters
- Translation automation using **n8n** and **Google Gemini AI**

The main objective of this project is to democratize access to Gnostic knowledge by eliminating language barriers through reliable automated translations and offering an accessible and efficient solution for multilingual content management.

## 🛠️ Project Architecture

The library was developed using the following technologies:

### **1. Frontend**

- **Framework:** [Astro](https://astro.build/)
  - Used for static site generation (SSG), ensuring high performance and fast loading times
  - Based on the [Starlight](https://starlight.astro.build/) template, which provides essential functionality
  - Implements the "islands hydration" pattern (islands architecture) to optimize JavaScript delivery
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
  - Utility-first approach that results in significant reduction of final CSS volume

### **2. Backend**

- **Headless CMS:** [Strapi](https://strapi.io/)
  - Manages data related to books, chapters, authors, and categories
  - Relational structure:
    - `Authors`: Information about book authors
    - `Books`: General book data, including title, description, and related author
    - `Categories`: Book classification by themes or genres
    - `Chapters`: Textual content of chapters associated with books
  - Implements a locales system to associate each translated version with the original content
  - Deployed on [Railway](https://railway.com), with PostgreSQL database

### **3. Automation**

- **Process Orchestration:** [n8n](https://n8n.io/)
  - Integrates Strapi with automatic translation service through Google Gemini AI
  - Automates text submission for translation and synchronizes translated versions back to the CMS
  - Configured with 5 workers for parallel processing
  - Implements a "training" system to improve the quality of title translations

### **4. Publishing**

- **Platform:** [Netlify](https://netlify.com)
  - Continuous frontend deployment with global CDN distribution
  - SSL certificate management
  - Selective cache invalidation, enabling incremental updates
  - Production URL: [https://books.gnosisdeutschland.org](https://books.gnosisdeutschland.org)

### **5. Content Generation**

- TypeScript script (`generateChapters.ts`) developed to:
  - Fetch data from Strapi CMS for stored chapters
  - Convert data into reusable MDX files for the frontend
  - Implement cache system based on language-specific timestamps
  - Automate MDX file generation to ensure consistency between CMS content and frontend display

## 📊 Performance

The digital library shows exceptional performance metrics:

- **Desktop:** 100/100 on Google PageSpeed Insights
  - First Contentful Paint (FCP): 299ms
  - Largest Contentful Paint (LCP): 465ms
  - Total Blocking Time (TBT): 0ms
  - Cumulative Layout Shift (CLS): 0
  - Speed Index: 620ms

- **Mobile:** 96/100 on Google PageSpeed Insights
  - First Contentful Paint (FCP): 1576ms
  - Largest Contentful Paint (LCP): 2112ms
  - Total Blocking Time (TBT): 0ms
  - Cumulative Layout Shift (CLS): 0
  - Speed Index: 4130ms

## 🌐 Project Access

You can access the current version of the project through the link:
[https://books.gnosisdeutschland.org](https://books.gnosisdeutschland.org)

## 🔄 Translation Automation

The translation process is managed through n8n workflows:

1. **Books Workflow:** Translates titles and automatically generates slugs
2. **Chapters Workflow:** Translates titles, content, and generates slugs while preserving Markdown formatting

The average processing time for translating a chapter into all 110 languages is approximately 60 minutes (about 30 seconds per language).

## 🚀 Publishing Process

A bash script (`deploy.sh`) coordinates the complete build and publishing process:

1. Book metadata generation via TypeScript script
2. Chapter generation with their respective translations
3. Previous cache cleanup
4. Astro project build
5. Automated deployment to Netlify

## 📈 Next Steps

Planned future improvements include:

- Implementation of offline features via Service Workers
- Redesign focused on accessibility
- Adoption of pre-fetch techniques for instant navigation
- Exploration of advanced distributed caching techniques
- Implementation of incremental static regeneration strategies
- Development of real-time synchronization mechanisms between CMS and frontend
