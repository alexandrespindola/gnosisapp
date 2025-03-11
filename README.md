# GnosisApp - Multilingual Digital Library

Welcome to **GnosisApp**, a multilingual digital library project developed with a modern JAMstack architecture. This repository contains the project's source code, which combines technologies like **Astro**, **Strapi**, **Netlify**, **n8n**, and **Google Gemini Flash 2.0** to provide an efficient, scalable, and user-friendly solution for content management and automatic translations.

---

## 📚 Project Description

GnosisApp is a digital library designed to centralize content generation and translations in multiple languages. It uses a modern and responsive interface with features such as:

- Light/dark theme switching.
- Integrated search functionality.
- Support for over 100 languages.
- Reusable components to facilitate maintenance and expansion.
- Translation workflow automation using **n8n** and **Google Gemini Flash 2.0**.

The main objective of this project is to democratize access to knowledge, offering an accessible and efficient solution for multilingual content management.

---

## 🛠️ Project Architecture

GnosisApp was developed using the following technologies:

### **1. Frontend**

- **Framework:** [Astro](https://astro.build/)
  - Used for Static Site Generation (SSG), ensuring high performance and fast loading times.
  - Based on the [Starlight](https://starlight.astro.build/) template, which provides features like:
    - Light/dark theme switching.
    - Integrated search functionality.
    - Native support for multiple languages.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
  - Facilitates the creation of modern and responsive interfaces.

### **2. Backend**

- **Headless CMS:** [Strapi](https://strapi.io/)
  - Manages data related to books, chapters, authors, and categories.
  - Relational table structure:
    - `Authors`: Information about book authors.
    - `Books`: General book data, including title, description, and related author.
    - `Categories`: Book classification by themes or genres.
    - `Chapters`: Textual content of chapters associated with books.
  - Deployed on [Railway](https://railway.com), with PostgresSQL database in the same region to reduce latency.

### **3. Automation**

- **Workflow Automation:** [n8n](https://n8n.io/)
  - Planned to integrate Strapi with the automatic translation service through the Google Gemini Flash 2.0 AI agent.
  - Automates text submission for translation and synchronizes translated versions back to the CMS.

### **4. Deployment**

- **Platform:** Netlify
  - Continuous frontend deployment with global distribution via CDN.
  - Provisional URL: [https://gnosisapp.netlify.dev](https://gnosisapp.netlify.dev)

### **5. Dynamic Content Generation**

- A TypeScript script (`generateChapters.ts`) was developed to:
  - Fetch data from Strapi CMS for stored chapters.
  - Convert data into reusable MDX files for the frontend.
  - Automate MDX file generation to ensure consistency between CMS content and frontend display.

---

## 🌐 Project Access

You can access the current version of the project through the link:
[https://gnosisapp.netlify.dev](https://gnosisapp.netlify.dev).