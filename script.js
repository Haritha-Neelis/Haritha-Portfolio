const profile = {
  name: 'Haritha Neelisetty',
  role: 'Software Engineer • Backend Engineer • AI Enthusiast',
  email: 'haritha.neelisetty@gmail.com',
  location: 'Hyderabad, India',
  description:
   [ 'Developer by profession, Problem slover by nature, and an AI enthusiast in the making.',
    'Building scalable backend systems, exploring AI applications, and creating practical solutions that deliver real value.',
    'Currently diving into AI, LLMs, and RAG'],
 skills: [
  'Python',
  'Generative AI',
  'LLMs',
  'Retrieval-Augmented Generation (RAG)',
  'Agentic AI',
  'LangChain',
  'LangGraph',
  'Prompt Engineering',
  'Embeddings',
  'Vector Databases',
  'Milvus',
  'ChromaDB',
  'Ollama',
  'FastAPI',
  'Text-to-SQL',
  'Semantic Search',
  'SQL',
  'Elasticsearch',
  'REST APIs',
  'Kafka',
  'Docker',
  'CI/CD',
  'Git',
  'System Design',
  'Product Thinking'
]
};

const socialLinks = [
  { name: 'LinkedIn', url: 'https://in.linkedin.com/in/haritha-neelisetty-21b5681a1' },
  { name: 'GitHub', url: 'https://github.com/Haritha-Neelis' },
  { name: 'Gmail', url: 'mailto:haritha.neelisetty@gmail.com' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/180D0KuDMt/' },
  { name: 'Medium', url: 'https://medium.com/@harithaneelisetty' }
];

const focusData = [
  {
  title: 'GenAI & Enterprise Systems',
  period: 'Core Focus',
  description:
    'Building intelligent enterprise applications by combining Generative AI, agentic RAG pipelines, and scalable backend systems.',
  achievements: [
    'Focused on Python, LLMs, RAG, LangChain, LangGraph, and vector search for context-aware AI applications.',
    'Experienced in enterprise networking, REST APIs, Kafka, Elasticsearch, and event-driven integrations.',
    'Passionate about developing reliable AI-powered solutions with grounded responses, efficient retrieval, and maintainable architecture.'
  ]
},
  {
    title: 'AI-powered Product Thinking',
    period: 'Learning & Building',
    description:
      'Exploring how AI can improve workflows, automate work, and unlock smarter decision-making in products.',
    achievements: [
      'Studying LLMs, prompt design, automation workflows, and AI application patterns.',
      'Thinking beyond prototypes to build practical tools that create measurable value.',
      'Combining technical depth with product thinking to turn ideas into usable solutions.'
    ]
  },
  {
    title: 'Startup-style Execution',
    period: 'Builder Mindset',
    description:
      'Working with a founder mentality: solve the problem, prototype fast, iterate, and build solutions people can trust.',
    achievements: [
      'Interested in creating products from concept to execution with real business impact.',
      'Focused on user value, product clarity, and engineering discipline.',
      'Enjoying the process of learning, building, and validating ideas continuously.'
    ]
  }
];

const projectData = [
     {
  title: 'Agentic RAG for Financial Document Intelligence',
  summary: 'An enterprise GenAI application that analyzes financial reports, business documents, and policy information using Retrieval-Augmented Generation (RAG). Combines structured SQL queries with semantic retrieval to answer business questions, compare financial information, and generate context-grounded insights with source citations. Uses LangGraph to orchestrate query routing and multi-step retrieval workflows.',
  tags: ['Python', 'RAG', 'LangChain', 'LangGraph', 'Milvus', 'LLMs', 'Text-to-SQL', 'Semantic Search', 'FastAPI'],
},
  {
  title: 'Agentic RAG for Network Operations & Troubleshooting',
  summary: 'A GenAI-powered network operations assistant that helps engineers investigate device alerts, connectivity issues, and SD-WAN tunnel failures. Retrieves relevant troubleshooting guides and device documentation, combines them with available network event and telemetry data, and generates evidence-based investigation summaries and recommended diagnostic steps. Uses LangGraph to orchestrate retrieval, evidence evaluation, and conditional query refinement.',
  tags: ['Python', 'RAG', 'LangChain', 'LangGraph', 'Milvus', 'Ollama', 'Elasticsearch', 'Kafka', 'FastAPI', 'Network Automation'],
},
  {
    title: 'Account Management enterprise application',
    summary: 'An enterprise-level banking application for managing customer accounts, including savings and current accounts, user onboarding, and digital banking services such as internet banking. The platform also handles business rules and validations for card usage, transaction limits, and account-level restrictions to ensure secure and compliant financial operations.',
    tags: ['Java', 'Microservices', 'Spring Boot', 'SQL', 'Kafka', 'Dashboard', 'RestApi', 'Business Rules'],
  },
  {
    title: 'Leet code auto Push',
    summary: 'A browser extension that automatically pushes accepted LeetCode solutions to language-specific GitHub repositories. It detects the submitted programming language and routes the solution to the corresponding repository, making it easy to maintain an organized coding portfolio without manually copying solutions.',
    tags: ['JavaScript', 'Chrome Extension', 'HTML', 'CSS', 'GitHub API'],
    github: 'https://github.com/Haritha-Neelis',
  },
  {
    title: 'AI Learning Tracker',
    summary: 'A personal progress dashboard for tracking AI learning goals, courses, exercises, and milestones across multiple technologies and skills.',
    tags: ['JavaScript', 'React', 'Productivity', 'Analytics'],
    github: 'https://github.com/Haritha-Neelis',
   // demo: 'https://example.com/learning-tracker'
  }
];

const learningData = [
  {
    title: 'Generative AI and LLM Applications',
    detail: 'Learning how large language models can power real-world tools, workflows, and user experiences.'
  },
  {
    title: 'Prompt Engineering and AI Workflow Design',
    detail: 'Understanding how to structure prompts, improve reasoning, and build reliable AI-assisted systems.'
  },
  {
    title: 'Enterprise Architecture and Scalable Systems',
    detail: 'Designing backend systems with maintainability, resilience, and business-focused scalability in mind.'
  },
  {
    title: 'Product Building and Problem Solving',
    detail: 'Thinking like a builder by validating ideas, creating focused solutions, and improving product value iteratively.'
  }
];

function renderSocialLinks() {
  const container = document.getElementById('social-links');
  if (!container) return;

  container.innerHTML = socialLinks
    .map(
      (item) => `
        <a class="social-pill" href="${item.url}" target="_blank" rel="noreferrer">
          ${item.name}
        </a>
      `
    )
    .join('');
}

function renderFocus() {
  const container = document.getElementById('focus-list');
  if (!container) return;

  container.innerHTML = focusData
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-header">
            <div>
              <h3>${item.title}</h3>
              <div class="role">${item.period}</div>
            </div>
            <div class="tenure">Build Intent</div>
          </div>
          <p>${item.description}</p>
          <ul>
            ${item.achievements.map((achievement) => `<li>${achievement}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = projectData
    .map(
      (project) => `
        <article class="project-card">
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="card-tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
          <div class="project-links">
          </div>
        </article>
      `
    )
    .join('');
}

function renderLearning() {
  const container = document.getElementById('learning-list');
  if (!container) return;

  container.innerHTML = learningData
    .map(
      (item) => `
        <div class="learning-item">
          <div>
            <strong>${item.title}</strong>
            <span>${item.detail}</span>
          </div>
          <span>Ongoing</span>
        </div>
      `
    )
    .join('');
}

document.getElementById('year').textContent = new Date().getFullYear();

renderSocialLinks();
renderFocus();
renderProjects();
renderLearning();
