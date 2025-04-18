# Biblioteca Digital Multilíngue Gnóstica

Bem-vindo à **Biblioteca Digital Multilíngue Gnóstica**, um projeto desenvolvido com arquitetura JAMstack moderna. Este repositório contém o código-fonte do projeto, que combina tecnologias como **Astro**, **Strapi**, **Netlify**, **n8n** e **Google Gemini AI** para fornecer uma solução eficiente, escalável e amigável para gerenciamento de conteúdo e traduções automáticas.

## 📚 Descrição do Projeto

A Biblioteca Digital Multilíngue é uma plataforma projetada para centralizar, traduzir e distribuir literatura gnóstica em 110 idiomas. Ela utiliza uma interface moderna e responsiva com recursos como:

- Alternância entre temas claro/escuro com persistência de preferências do usuário
- Funcionalidade de busca integrada com indexação de conteúdo
- Suporte para 110 idiomas
- Navegação hierárquica que reflete a estrutura de livros e capítulos
- Automação de traduções utilizando **n8n** e **Google Gemini AI**

O objetivo principal deste projeto é democratizar o acesso ao conhecimento gnóstico, eliminando barreiras linguísticas através de traduções automáticas confiáveis e oferecendo uma solução acessível e eficiente para gestão de conteúdo multilíngue.

## 🛠️ Arquitetura do Projeto

A biblioteca foi desenvolvida utilizando as seguintes tecnologias:

### **1. Frontend**

- **Framework:** [Astro](https://astro.build/)
  - Utilizado para geração de sites estáticos (SSG), garantindo alta performance e tempos de carregamento rápidos
  - Baseado no template [Starlight](https://starlight.astro.build/), que proporciona funcionalidades essenciais
  - Implementa o padrão de "ilhas de hidratação" (islands architecture) para otimizar a entrega de JavaScript
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
  - Abordagem utility-first que resulta em redução significativa do volume final de CSS

### **2. Backend**

- **CMS Headless:** [Strapi](https://strapi.io/)
  - Gerencia dados relacionados a livros, capítulos, autores e categorias
  - Estrutura relacional:
    - `Authors`: Informações sobre autores dos livros
    - `Books`: Dados gerais dos livros, incluindo título, descrição e autor relacionado
    - `Categories`: Classificação dos livros por temas ou gêneros
    - `Chapters`: Conteúdo textual dos capítulos associados aos livros
  - Implementa sistema de localidades para associar cada versão traduzida ao conteúdo original
  - Implantado no [Railway](https://railway.com), com banco de dados PostgreSQL

### **3. Automação**

- **Orquestração de Processos:** [n8n](https://n8n.io/)
  - Integra o Strapi com o serviço de tradução automática através do Google Gemini AI
  - Automatiza a submissão de textos para tradução e sincroniza versões traduzidas de volta ao CMS
  - Configurado com 5 workers para processamento paralelo
  - Implementa sistema de "treinamento" para melhorar a qualidade das traduções de títulos

### **4. Publicação**

- **Plataforma:** [Netlify](https://netlify.com)
  - Deploy contínuo do frontend com distribuição global via CDN
  - Gerenciamento de certificados SSL
  - Invalidação seletiva de cache, permitindo atualizações incrementais
  - URL em produção: [https://books.gnosisdeutschland.org](https://books.gnosisdeutschland.org)

### **5. Geração de Conteúdo**

- Script TypeScript (`generateChapters.ts`) desenvolvido para:
  - Buscar dados do Strapi CMS para capítulos armazenados
  - Converter dados em arquivos MDX reutilizáveis para o frontend
  - Implementar sistema de cache baseado em timestamps específicos por idioma
  - Automatizar a geração de arquivos MDX para garantir consistência entre o conteúdo do CMS e a exibição no frontend

## 📊 Desempenho

A biblioteca digital apresenta métricas excepcionais de desempenho:

- **Desktop:** 100/100 no Google PageSpeed Insights
  - First Contentful Paint (FCP): 299ms
  - Largest Contentful Paint (LCP): 465ms
  - Total Blocking Time (TBT): 0ms
  - Cumulative Layout Shift (CLS): 0
  - Speed Index: 620ms

- **Mobile:** 96/100 no Google PageSpeed Insights
  - First Contentful Paint (FCP): 1576ms
  - Largest Contentful Paint (LCP): 2112ms
  - Total Blocking Time (TBT): 0ms
  - Cumulative Layout Shift (CLS): 0
  - Speed Index: 4130ms

## 🌐 Acesso ao Projeto

Você pode acessar a versão atual do projeto através do link:
[https://books.gnosisdeutschland.org](https://books.gnosisdeutschland.org)

## 🔄 Automação de Traduções

O processo de tradução é gerenciado através de workflows no n8n:

1. **Workflow de Livros:** Traduz títulos e gera slugs automaticamente
2. **Workflow de Capítulos:** Traduz títulos, conteúdo e gera slugs, preservando a formatação Markdown

O tempo médio de processamento para tradução de um capítulo para todos os 110 idiomas é de aproximadamente 60 minutos (cerca de 30 segundos por idioma).

## 🚀 Processo de Publicação

Um script bash (`deploy.sh`) coordena o processo completo de build e publicação:

1. Geração de metadados dos livros via script TypeScript
2. Geração de capítulos com suas respectivas traduções
3. Limpeza de caches anteriores
4. Build do projeto Astro
5. Deploy automatizado para o Netlify

## 📈 Próximos Passos

Futuras melhorias planejadas incluem:

- Implementação de recursos offline via Service Workers
- Redesign com foco em acessibilidade
- Adoção de técnicas de pré-fetch para navegação instantânea
- Exploração de técnicas avançadas de caching distribuído
- Implementação de estratégias de regeneração estática incremental
- Desenvolvimento de mecanismos de sincronização em tempo real entre CMS e frontend
