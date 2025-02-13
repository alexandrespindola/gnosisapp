# GnosisApp - Biblioteca Digital Multilíngue

Bem-vindo ao **GnosisApp**, um projeto de biblioteca digital multilíngue desenvolvido com uma arquitetura moderna baseada em JAMstack. Este repositório contém o código-fonte do projeto, que combina tecnologias como **Astro**, **Strapi**, **Cloudflare Pages**, **n8n** e **DeepL** para fornecer uma solução eficiente, escalável e amigável para gerenciamento de conteúdo e traduções automáticas.

---

## 📚 Descrição do Projeto

O GnosisApp é uma biblioteca digital projetada para centralizar a geração de conteúdo e traduções em vários idiomas. Ele utiliza uma interface moderna e responsiva com recursos como:

- Alternância entre temas claro/escuro.
- Funcionalidade de busca integrada.
- Suporte nativo para 28 idiomas.
- Componentes reutilizáveis para facilitar a manutenção e expansão.
- Automação de fluxos de trabalho de tradução usando **n8n** e **DeepL**.

O principal objetivo deste projeto é democratizar o acesso ao conhecimento, oferecendo uma solução acessível e eficiente para o gerenciamento de conteúdo multilíngue.

---

## 🛠️ Arquitetura do Projeto

O GnosisApp foi desenvolvido utilizando as seguintes tecnologias:

### **1. Frontend**
- **Framework:** [Astro](https://astro.build/)
  - Utilizado para Geração de Sites Estáticos (SSG), garantindo alto desempenho e tempos de carregamento rápidos.
  - Baseado no template [Starlight](https://starlight.astro.build/), que fornece recursos como:
    - Alternância entre temas claro/escuro.
    - Funcionalidade de busca integrada.
    - Suporte nativo para vários idiomas.
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
  - Facilita a criação de interfaces modernas e responsivas.

### **2. Backend**
- **CMS Headless:** [Strapi](https://strapi.io/)
  - Gerencia dados relacionados a livros, capítulos, autores e categorias.
  - Estrutura de tabelas relacionais:
    - `Autores`: Informações sobre os autores dos livros.
    - `Livros`: Dados gerais dos livros, incluindo título, descrição e autor relacionado.
    - `Categorias`: Classificação dos livros em temas ou gêneros.
    - `Capítulos`: Conteúdo textual dos capítulos associados aos livros.
  - Implantação automatizada no [Heroku](https://www.heroku.com/), garantindo que as alterações locais sejam refletidas automaticamente em produção.

### **3. Automação**
- **Automação de Fluxos de Trabalho:** [n8n](https://n8n.io/)
  - Planejado para integrar o Strapi com o serviço de tradução automática [DeepL](https://www.deepl.com/).
  - Automatiza o envio de textos para tradução e sincroniza as versões traduzidas de volta no CMS.

### **4. Implantação**
- **Plataforma:** [Cloudflare Pages](https://pages.cloudflare.com/)
  - Implantação contínua do frontend com distribuição global via CDN.
  - URL provisória: [https://gnosisapp.pages.dev](https://gnosisapp.pages.dev).

### **5. Geração Dinâmica de Conteúdo**
- Um script em TypeScript (`generateChapters.ts`) foi desenvolvido para:
  - Buscar dados do CMS Strapi para os capítulos armazenados.
  - Converter os dados em arquivos MDX reutilizáveis para o frontend.
  - Automatizar a geração de arquivos MDX para garantir consistência entre o conteúdo do CMS e a exibição no frontend.

---

## 🌐 Acesso ao Projeto

Você pode acessar a versão atual do projeto através do link:  
[https://gnosisapp.pages.dev](https://gnosisapp.pages.dev).
