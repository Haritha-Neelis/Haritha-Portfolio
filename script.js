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
    'Java',
    'Spring Boot',
    'Microservices',
    'Kafka',
    'Redis',
    'Elasticsearch',
    'SQL',
    'Docker',
    'CI/CD',
    'Git',
    'REST APIs',
    'AI / LLM',
    'Prompt Engineering',
    'System Design',
    'Product Thinking'
  ]
};

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/haritha-neelisetty-21b5681a' },
  { name: 'GitHub', url: 'https://github.com/Haritha-Neelis' },
  { name: 'Gmail', url: 'mailto:haritha.neelisetty@gmail.com' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/180D0KuDMt/' },
  { name: 'Medium', url: 'https://medium.com/@harithaneelisetty' }
];

const focusData = [
  {
    title: 'Enterprise Application Design',
    period: 'Core Focus',
    description:
      'Designing scalable backend systems with maintainable architecture, clean APIs, and business-first thinking.',
    achievements: [
      'Strong focus on Java, Spring Boot, microservices, and distributed system patterns.',
      'Interested in building reliable products that can support real-world scale and complexity.',
      'Passionate about enterprise-grade solutions with strong quality and maintainability.'
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
    title: 'SD-WAN/ SD-LAN network management platform',
    summary: 'An enterprise network management platform for monitoring, configuring, and managing SD-WAN and SD-LAN devices across multiple sites which includes features like device provisioning, network topology visualization,centeralized configuration, policy management,router status and performance analytics',
    tags: ['Java', 'Microservices', 'Spring Boot', 'SQL', 'Kafka', 'Dashboard', 'RestApi', 'Networking']
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
