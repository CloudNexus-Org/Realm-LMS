import type { Course } from "@/types/course";

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface CourseReview {
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface CourseInstructor {
  name: string;
  role: string;
  badge: string;
  bio: string;
}

export interface CourseData {
  slug: string;
  category: string;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  duration: string;
  modules: CourseModule[];
  resources: string[];
  instructor: CourseInstructor;
  reviews: CourseReview[];
}

export const courses: Record<string, CourseData> = {
  "devops-engineering": {
    slug: "devops-engineering",
    category: "Cloud & Platform Infrastructure",
    title: "DevOps Engineering Program: From Foundations to GenAI & Platform Ops",
    description:
      "Our DevOps Engineering Training Program follows a proven pedagogical logic: Foundation before abstraction (Linux, shell scripting, networking, and Git first), one cloud deep before two clouds broad (AWS taught to working depth before Azure), never learn a tool in isolation (paired with hands-on daily assignments), automate what you first did by hand (manual cloud/k8s precedes Terraform/Helm/ArgoCD), and GenAI comes last on purpose (AI tooling introduced after understanding infrastructure, logs, and common failure patterns).",
    price: "₹1,49,999",
    originalPrice: "₹1,99,999",
    duration: "3 months",
    modules: [
      {
        title: "Linux & Networking Fundamentals",
        topics: [
          "Linux file system, permissions, and process management",
          "Shell scripting (Bash) for automation",
          "TCP/IP, DNS, HTTP, and networking troubleshooting",
          "SSH, firewalls, and security basics",
        ],
      },
      {
        title: "Version Control & Collaboration",
        topics: [
          "Git internals — branching, merging, rebasing",
          "GitHub/GitLab workflows and pull request strategies",
          "Monorepo vs polyrepo patterns",
          "Git hooks and automated code quality checks",
        ],
      },
      {
        title: "Cloud Infrastructure (AWS Deep Dive)",
        topics: [
          "EC2, VPC, IAM, S3, and RDS from scratch",
          "Load balancing, auto-scaling, and high availability",
          "CloudWatch monitoring and alerting",
          "Cost optimization and resource tagging",
        ],
      },
      {
        title: "Containers & Orchestration",
        topics: [
          "Docker — images, containers, multi-stage builds",
          "Docker Compose for local development",
          "Kubernetes architecture — pods, services, deployments",
          "Helm charts and Kubernetes operators",
        ],
      },
      {
        title: "CI/CD Pipelines",
        topics: [
          "Jenkins pipelines — declarative and scripted",
          "GitHub Actions for automated testing and deployment",
          "ArgoCD and GitOps-based continuous delivery",
          "Blue-green and canary deployment strategies",
        ],
      },
      {
        title: "Infrastructure as Code & GenAI Ops",
        topics: [
          "Terraform — modules, state management, workspaces",
          "Ansible for configuration management",
          "AI-powered log analysis and incident response",
          "Platform engineering patterns and developer experience",
        ],
      },
    ],
    resources: [
      "Full lifetime access to video lectures, slides, and architectural blueprints",
      "GitHub starter repositories and production-ready starter templates",
      "Interactive mock interview questions and solution guides",
      "Private Slack / Discord community for TA support & live doubt solving",
      "Certificate of completion recognized by hiring partners",
    ],
    instructor: {
      name: "Marcus Vance",
      role: "Staff Cloud & Platform Architect",
      badge: "Top Instructor",
      bio: "Marcus has architected cloud infrastructure for Fortune 500 financial institutions and SaaS unicorns, specializing in Kubernetes security, Terraform automation, and immutable infrastructure. 8+ years building production systems at scale.",
    },
    reviews: [
      {
        name: "Rahul Sharma",
        role: "Junior DevOps Engineer at Wipro",
        rating: 5,
        text: "This program transformed my career. The hands-on projects and real-world scenarios prepared me for actual production environments. Got placed within 2 weeks of completing the program.",
      },
      {
        name: "Priya Patel",
        role: "Cloud Engineer at TCS",
        rating: 5,
        text: "The Kubernetes and Terraform modules were exceptional. Marcus explains complex concepts with clarity. The paid internship gave me confidence to handle production deployments.",
      },
      {
        name: "Arjun Mehta",
        role: "SRE at a Series B startup",
        rating: 4,
        text: "Solid curriculum that covers everything from basics to advanced platform engineering. The community support is excellent — got help at 2 AM during my project deadline.",
      },
    ],
  },

  "ai-machine-learning": {
    slug: "ai-machine-learning",
    category: "Artificial Intelligence & Data Science",
    title: "AI / Machine Learning Program: From Python Basics to Production ML Systems",
    description:
      "A structured program that takes you from Python fundamentals to deploying ML models in production. You'll learn data wrangling, statistical foundations, classical ML algorithms, deep learning, computer vision, NLP, and MLOps — all through real datasets and end-to-end projects that mirror industry workflows.",
    price: "₹1,49,999",
    originalPrice: "₹1,99,999",
    duration: "3 months",
    modules: [
      {
        title: "Python & Data Foundations",
        topics: [
          "Python for data science — NumPy, Pandas, Matplotlib",
          "Exploratory data analysis and data cleaning",
          "Statistics and probability for ML",
          "SQL for data extraction and feature engineering",
        ],
      },
      {
        title: "Classical Machine Learning",
        topics: [
          "Supervised learning — regression, classification, ensemble methods",
          "Unsupervised learning — clustering, dimensionality reduction",
          "Feature engineering and selection techniques",
          "Model evaluation, cross-validation, and hyperparameter tuning",
        ],
      },
      {
        title: "Deep Learning & Neural Networks",
        topics: [
          "Neural network fundamentals — forward/backpropagation",
          "CNNs for computer vision tasks",
          "RNNs, LSTMs, and sequence modeling",
          "Transfer learning and fine-tuning pre-trained models",
        ],
      },
      {
        title: "NLP & Generative AI",
        topics: [
          "Text preprocessing, embeddings, and transformers",
          "Sentiment analysis and named entity recognition",
          "Large Language Models — prompting and fine-tuning",
          "Building RAG pipelines and AI-powered applications",
        ],
      },
      {
        title: "Computer Vision",
        topics: [
          "Image classification and object detection (YOLO, SSD)",
          "Image segmentation and pose estimation",
          "OpenCV for real-time video processing",
          "Deploying vision models on edge devices",
        ],
      },
      {
        title: "MLOps & Production Deployment",
        topics: [
          "ML pipelines with MLflow and DVC",
          "Model serving with FastAPI and Docker",
          "Monitoring model drift and retraining strategies",
          "A/B testing for ML models in production",
        ],
      },
    ],
    resources: [
      "Full lifetime access to Jupyter notebooks, datasets, and video lectures",
      "Pre-built ML project templates with clean documentation",
      "Kaggle competition starter kits and walkthroughs",
      "Private community with weekly office hours and doubt sessions",
      "Certificate of completion recognized by hiring partners",
    ],
    instructor: {
      name: "Dr. Ananya Krishnan",
      role: "Principal Data Scientist & AI Researcher",
      badge: "Top Instructor",
      bio: "Ananya holds a Ph.D. in Machine Learning from IIT Bombay and has led AI teams at Amazon and a healthcare AI startup. Published 12+ papers in top conferences. Specializes in making complex ML concepts accessible through practical examples.",
    },
    reviews: [
      {
        name: "Vikram Singh",
        role: "ML Engineer at Infosys",
        rating: 5,
        text: "The best ML program I've encountered. The progression from basics to production deployment is seamless. The capstone project became my portfolio centerpiece during interviews.",
      },
      {
        name: "Sneha Gupta",
        role: "Data Analyst at Deloitte",
        rating: 5,
        text: "Dr. Krishnan's teaching style is incredible. Complex math concepts explained with intuition first, then code. The NLP module alone was worth the entire investment.",
      },
      {
        name: "Karthik Nair",
        role: "AI Engineer at a healthtech startup",
        rating: 4,
        text: "Practical, no-nonsense curriculum. The MLOps section is rare in most courses and it gave me a huge edge. Got multiple offers after the internship phase.",
      },
    ],
  },

  "full-stack-development": {
    slug: "full-stack-development",
    category: "Software Engineering & Web Development",
    title: "Full Stack Development Program: From HTML to Scalable Distributed Systems",
    description:
      "Master front-end finesse, back-end architecture, and database design in one integrated program. You'll build and deploy production-grade web applications using React, Node.js, Spring Boot, and cloud databases — going from a blank editor to a fully deployed, scalable system with CI/CD.",
    price: "₹1,49,999",
    originalPrice: "₹1,99,999",
    duration: "3 months",
    modules: [
      {
        title: "Frontend Fundamentals & React",
        topics: [
          "HTML5, CSS3, responsive design, and accessibility",
          "JavaScript ES6+ and TypeScript essentials",
          "React — components, hooks, state management, routing",
          "Next.js for server-side rendering and static generation",
        ],
      },
      {
        title: "Backend Development (Node.js)",
        topics: [
          "Node.js runtime, Express.js REST APIs",
          "Authentication — JWT, OAuth, session management",
          "Input validation, error handling, and middleware patterns",
          "WebSockets and real-time communication",
        ],
      },
      {
        title: "Databases & Data Modeling",
        topics: [
          "PostgreSQL — schema design, indexing, query optimization",
          "MongoDB — document modeling and aggregation pipelines",
          "Redis for caching and session storage",
          "Database migrations and ORM patterns (Prisma, Mongoose)",
        ],
      },
      {
        title: "Backend Development (Spring Boot)",
        topics: [
          "Java fundamentals and Spring ecosystem",
          "REST API development with Spring Boot",
          "JPA/Hibernate for database interaction",
          "Microservices patterns and inter-service communication",
        ],
      },
      {
        title: "System Design & Architecture",
        topics: [
          "Monolith vs microservices trade-offs",
          "Message queues (Kafka, RabbitMQ) and event-driven architecture",
          "Load balancing, caching strategies, and CDNs",
          "Designing for scale — horizontal scaling and database sharding",
        ],
      },
      {
        title: "DevOps for Developers",
        topics: [
          "Docker and containerized development workflows",
          "CI/CD pipelines with GitHub Actions",
          "Cloud deployment (AWS/Vercel/Railway)",
          "Monitoring, logging, and production debugging",
        ],
      },
    ],
    resources: [
      "Full lifetime access to video lectures, code repositories, and architecture diagrams",
      "Starter templates for React, Next.js, Express, and Spring Boot projects",
      "System design interview preparation guide with solutions",
      "Private community with code reviews and pair programming sessions",
      "Certificate of completion recognized by hiring partners",
    ],
    instructor: {
      name: "Rohan Deshmukh",
      role: "Senior Staff Engineer & Tech Lead",
      badge: "Top Instructor",
      bio: "Rohan has built and scaled products at Flipkart, Razorpay, and two YC-backed startups. He specializes in full-stack architecture, distributed systems, and mentoring junior engineers into senior roles. 10+ years of shipping production code.",
    },
    reviews: [
      {
        name: "Aditya Joshi",
        role: "SDE-1 at a fintech startup",
        rating: 5,
        text: "From knowing only basic HTML to building a full SaaS product in 3 months. The Spring Boot + React combination prepared me for both startups and enterprise roles.",
      },
      {
        name: "Meera Iyer",
        role: "Frontend Developer at Zoho",
        rating: 5,
        text: "Rohan's system design sessions are gold. He explains trade-offs the way a senior engineer would in a real design review. The code review culture in this program is unmatched.",
      },
      {
        name: "Sahil Khan",
        role: "Backend Developer at a logistics company",
        rating: 4,
        text: "Comprehensive curriculum that doesn't cut corners. The database module alone saved me months of self-study. Placement support was proactive and well-organized.",
      },
    ],
  },
};

// Full course data for /courses/[slug] pages (teammate's format)
const fullCourses: Course[] = [
  {
    slug: "devops-engineering",
    title: "DevOps Engineering Program: From Foundations to GenAI & Platform Ops",
    shortTitle: "DevOps Engineering",
    category: "Cloud & Platform Infrastructure",
    subtitle: "Master CI/CD, containers and cloud infrastructure",
    description: "Our DevOps Engineering Training Program follows a proven pedagogical logic: Foundation before abstraction, one cloud deep before two clouds broad, never learn a tool in isolation, and automate what you first did by hand.",
    fullDescription: [
      "Our DevOps Engineering Training Program follows a proven pedagogical logic: Foundation before abstraction (Linux, shell scripting, networking, and Git first), One cloud deep before two clouds broad (AWS taught to working depth before Azure).",
      "Never learn a tool in isolation (paired with hands-on daily assignments), Automate what you first did by hand (manual cloud/k8s precedes Terraform/Helm/ArgoCD), and GenAI comes last on purpose (AI tooling introduced after understanding infrastructure, logs, and common failure patterns).",
    ],
    coverImage: "/images/devops-cover.jpg",
    previewVideoImage: "/images/devops-preview.jpg",
    price: 149999,
    originalPrice: 199999,
    level: "Beginner",
    totalModules: 6,
    totalActivities: 48,
    totalCourses: 1,
    totalAssignments: 24,
    totalQuizzes: 12,
    rating: 4.8,
    reviewsCount: "120+",
    lastUpdated: "August 2026",
    instructor: {
      name: "Marcus Vance",
      title: "Staff Cloud & Platform Architect",
      email: "marcus@realmconsulting.in",
      avatar: "/images/instructor-marcus.jpg",
      badge: "Top Instructor",
      bio: "Marcus has architected cloud infrastructure for Fortune 500 financial institutions and SaaS unicorns, specializing in Kubernetes security, Terraform automation, and immutable infrastructure.",
      profileLink: "#",
    },
    modules: [
      { id: "m1", number: "01", title: "Linux & Networking Fundamentals", description: "Linux file system, permissions, process management, shell scripting, TCP/IP, DNS, HTTP, and security basics.", videosCount: 12, readingsCount: 6, assignmentsCount: 4, quizCount: 2, isExpandedByDefault: true },
      { id: "m2", number: "02", title: "Version Control & Collaboration", description: "Git internals, branching, merging, rebasing, GitHub/GitLab workflows, monorepo vs polyrepo patterns.", videosCount: 8, readingsCount: 4, assignmentsCount: 3, quizCount: 2 },
      { id: "m3", number: "03", title: "Cloud Infrastructure (AWS Deep Dive)", description: "EC2, VPC, IAM, S3, RDS, load balancing, auto-scaling, CloudWatch monitoring, and cost optimization.", videosCount: 14, readingsCount: 8, assignmentsCount: 5, quizCount: 2 },
      { id: "m4", number: "04", title: "Containers & Orchestration", description: "Docker images, multi-stage builds, Docker Compose, Kubernetes architecture, Helm charts, and operators.", videosCount: 12, readingsCount: 6, assignmentsCount: 4, quizCount: 2 },
      { id: "m5", number: "05", title: "CI/CD Pipelines", description: "Jenkins pipelines, GitHub Actions, ArgoCD, GitOps, blue-green and canary deployment strategies.", videosCount: 10, readingsCount: 5, assignmentsCount: 4, quizCount: 2 },
      { id: "m6", number: "06", title: "Infrastructure as Code & GenAI Ops", description: "Terraform modules, Ansible, AI-powered log analysis, incident response, and platform engineering.", videosCount: 10, readingsCount: 6, assignmentsCount: 4, quizCount: 2 },
    ],
    learningOutcomes: [
      "Design and implement CI/CD pipelines for production applications",
      "Deploy and manage containerized applications on Kubernetes",
      "Provision cloud infrastructure using Terraform and Ansible",
      "Monitor, troubleshoot, and optimize production systems",
      "Apply GenAI tooling for infrastructure management",
    ],
    tools: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform", "Ansible", "ArgoCD", "Prometheus"],
    certificate: {
      title: "DevOps Engineering Certificate",
      description: "Earn a certificate upon successful completion of all modules and the capstone project.",
      credentialNote: "Recognized by our hiring partner network",
    },
  },
  {
    slug: "ai-machine-learning",
    title: "AI / Machine Learning Program: From Python Basics to Production ML Systems",
    shortTitle: "AI / Machine Learning",
    category: "Artificial Intelligence & Data Science",
    subtitle: "Build and ship ML models across industries",
    description: "A structured program from Python fundamentals to deploying ML models in production. Learn data wrangling, statistical foundations, classical ML, deep learning, computer vision, NLP, and MLOps.",
    fullDescription: [
      "A structured program that takes you from Python fundamentals to deploying ML models in production.",
      "You'll learn data wrangling, statistical foundations, classical ML algorithms, deep learning, computer vision, NLP, and MLOps — all through real datasets and end-to-end projects that mirror industry workflows.",
    ],
    coverImage: "/images/aiml-cover.jpg",
    previewVideoImage: "/images/aiml-preview.jpg",
    price: 149999,
    originalPrice: 199999,
    level: "Beginner",
    totalModules: 6,
    totalActivities: 52,
    totalCourses: 1,
    totalAssignments: 26,
    totalQuizzes: 14,
    rating: 4.9,
    reviewsCount: "95+",
    lastUpdated: "August 2026",
    instructor: {
      name: "Dr. Ananya Krishnan",
      title: "Principal Data Scientist & AI Researcher",
      email: "ananya@realmconsulting.in",
      avatar: "/images/instructor-ananya.jpg",
      badge: "Top Instructor",
      bio: "Ananya holds a Ph.D. in Machine Learning from IIT Bombay and has led AI teams at Amazon and a healthcare AI startup. Published 12+ papers in top conferences.",
      profileLink: "#",
    },
    modules: [
      { id: "m1", number: "01", title: "Python & Data Foundations", description: "NumPy, Pandas, Matplotlib, exploratory data analysis, statistics, and SQL for feature engineering.", videosCount: 12, readingsCount: 6, assignmentsCount: 4, quizCount: 2, isExpandedByDefault: true },
      { id: "m2", number: "02", title: "Classical Machine Learning", description: "Supervised and unsupervised learning, feature engineering, model evaluation, and hyperparameter tuning.", videosCount: 14, readingsCount: 8, assignmentsCount: 5, quizCount: 3 },
      { id: "m3", number: "03", title: "Deep Learning & Neural Networks", description: "Neural network fundamentals, CNNs, RNNs, LSTMs, transfer learning, and fine-tuning.", videosCount: 12, readingsCount: 6, assignmentsCount: 4, quizCount: 2 },
      { id: "m4", number: "04", title: "NLP & Generative AI", description: "Text preprocessing, transformers, sentiment analysis, LLMs, prompting, and RAG pipelines.", videosCount: 10, readingsCount: 5, assignmentsCount: 4, quizCount: 2 },
      { id: "m5", number: "05", title: "Computer Vision", description: "Image classification, object detection, segmentation, OpenCV, and edge deployment.", videosCount: 10, readingsCount: 5, assignmentsCount: 4, quizCount: 2 },
      { id: "m6", number: "06", title: "MLOps & Production Deployment", description: "ML pipelines with MLflow, model serving with FastAPI, monitoring drift, and A/B testing.", videosCount: 8, readingsCount: 4, assignmentsCount: 5, quizCount: 3 },
    ],
    learningOutcomes: [
      "Build end-to-end ML pipelines from data collection to deployment",
      "Implement deep learning models for computer vision and NLP",
      "Deploy and monitor ML models in production environments",
      "Apply GenAI and LLM techniques to real-world problems",
      "Design experiments and evaluate model performance rigorously",
    ],
    tools: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "Pandas", "OpenCV", "MLflow", "FastAPI"],
    certificate: {
      title: "AI / Machine Learning Certificate",
      description: "Earn a certificate upon successful completion of all modules and the capstone project.",
      credentialNote: "Recognized by our hiring partner network",
    },
  },
  {
    slug: "full-stack-development",
    title: "Full Stack Development Program: From HTML to Scalable Distributed Systems",
    shortTitle: "Full Stack Development",
    category: "Software Engineering & Web Development",
    subtitle: "Master frontend, backend, and system design",
    description: "Build and deploy production-grade web applications using React, Node.js, Spring Boot, and cloud databases — going from a blank editor to a fully deployed, scalable system.",
    fullDescription: [
      "Master front-end finesse, back-end architecture, and database design in one integrated program.",
      "You'll build and deploy production-grade web applications using React, Node.js, Spring Boot, and cloud databases — going from a blank editor to a fully deployed, scalable system with CI/CD.",
    ],
    coverImage: "/images/fullstack-cover.jpg",
    previewVideoImage: "/images/fullstack-preview.jpg",
    price: 149999,
    originalPrice: 199999,
    level: "Beginner",
    totalModules: 6,
    totalActivities: 54,
    totalCourses: 1,
    totalAssignments: 28,
    totalQuizzes: 12,
    rating: 4.7,
    reviewsCount: "140+",
    lastUpdated: "August 2026",
    instructor: {
      name: "Rohan Deshmukh",
      title: "Senior Staff Engineer & Tech Lead",
      email: "rohan@realmconsulting.in",
      avatar: "/images/instructor-rohan.jpg",
      badge: "Top Instructor",
      bio: "Rohan has built and scaled products at Flipkart, Razorpay, and two YC-backed startups. 10+ years of shipping production code.",
      profileLink: "#",
    },
    modules: [
      { id: "m1", number: "01", title: "Frontend Fundamentals & React", description: "HTML5, CSS3, responsive design, JavaScript ES6+, TypeScript, React, and Next.js.", videosCount: 14, readingsCount: 8, assignmentsCount: 5, quizCount: 2, isExpandedByDefault: true },
      { id: "m2", number: "02", title: "Backend Development (Node.js)", description: "Node.js, Express.js REST APIs, authentication, middleware, and WebSockets.", videosCount: 12, readingsCount: 6, assignmentsCount: 5, quizCount: 2 },
      { id: "m3", number: "03", title: "Databases & Data Modeling", description: "PostgreSQL, MongoDB, Redis, migrations, and ORM patterns.", videosCount: 10, readingsCount: 6, assignmentsCount: 4, quizCount: 2 },
      { id: "m4", number: "04", title: "Backend Development (Spring Boot)", description: "Java fundamentals, Spring ecosystem, JPA/Hibernate, and microservices patterns.", videosCount: 12, readingsCount: 6, assignmentsCount: 5, quizCount: 2 },
      { id: "m5", number: "05", title: "System Design & Architecture", description: "Monolith vs microservices, message queues, load balancing, caching, and scaling.", videosCount: 8, readingsCount: 5, assignmentsCount: 4, quizCount: 2 },
      { id: "m6", number: "06", title: "DevOps for Developers", description: "Docker, CI/CD with GitHub Actions, cloud deployment, monitoring, and debugging.", videosCount: 8, readingsCount: 4, assignmentsCount: 5, quizCount: 2 },
    ],
    learningOutcomes: [
      "Build production-grade web applications with React and Node.js",
      "Design and implement RESTful APIs with proper authentication",
      "Work with both SQL and NoSQL databases effectively",
      "Apply system design principles for scalable architectures",
      "Deploy and maintain applications using modern DevOps practices",
    ],
    tools: ["React", "Node.js", "TypeScript", "Spring Boot", "PostgreSQL", "MongoDB", "Docker", "Kafka"],
    certificate: {
      title: "Full Stack Development Certificate",
      description: "Earn a certificate upon successful completion of all modules and the capstone project.",
      credentialNote: "Recognized by our hiring partner network",
    },
  },
];

export function getAllCourses(): Course[] {
  return fullCourses;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return fullCourses.find((c) => c.slug === slug);
}
