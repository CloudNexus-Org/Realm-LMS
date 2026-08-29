export interface CourseLesson {
  title: string;
  duration: string;
  type: "video" | "reading" | "assignment";
  previewAvailable: boolean;
}

export interface DetailedModule {
  id: string;
  title: string;
  lessonsCount: number;
  lessons: CourseLesson[];
}

export const devopsModules: DetailedModule[] = [
  {
    id: "devops-m1",
    title: "Core Foundations: Linux, Scripting, Networking & Git",
    lessonsCount: 5,
    lessons: [
      { title: "Linux Fundamentals & OS Basics", duration: "09:45", type: "video", previewAvailable: true },
      { title: "Shell Scripting – Basics", duration: "08:20", type: "video", previewAvailable: true },
      { title: "Advanced Shell Scripting & Text Processing", duration: "11:10", type: "video", previewAvailable: false },
      { title: "Networking Fundamentals", duration: "07:35", type: "reading", previewAvailable: false },
      { title: "Git & GitHub Fundamentals", duration: "08:50", type: "video", previewAvailable: false },
    ],
  },
  {
    id: "devops-m2",
    title: "Cloud Foundations: YAML, AWS IAM, VPC, EC2 & Storage",
    lessonsCount: 5,
    lessons: [
      { title: "YAML Fundamentals & Infrastructure as Data", duration: "06:15", type: "reading", previewAvailable: true },
      { title: "AWS Overview & IAM", duration: "09:30", type: "video", previewAvailable: true },
      { title: "AWS VPC Networking", duration: "10:05", type: "video", previewAvailable: false },
      { title: "AWS EC2", duration: "08:40", type: "video", previewAvailable: false },
      { title: "AWS Storage, CloudFront & WAF", duration: "07:55", type: "video", previewAvailable: false },
    ],
  },
  {
    id: "devops-m3",
    title: "AWS Serverless, Security & Monitoring",
    lessonsCount: 5,
    lessons: [
      { title: "AWS Lambda & API Gateway", duration: "09:10", type: "video", previewAvailable: true },
      { title: "AWS KMS & Secrets Management", duration: "07:25", type: "video", previewAvailable: true },
      { title: "AWS CloudWatch – Monitoring & Logging", duration: "08:35", type: "video", previewAvailable: false },
      { title: "AWS Security Hub & GuardDuty", duration: "06:50", type: "video", previewAvailable: false },
      { title: "Secure Cloud Foundation on AWS", duration: "15:00", type: "assignment", previewAvailable: false },
    ],
  },
  {
    id: "devops-m4",
    title: "Azure Cloud Foundations",
    lessonsCount: 5,
    lessons: [
      { title: "Azure Overview, RBAC & Azure Policy", duration: "08:45", type: "video", previewAvailable: true },
      { title: "Azure Virtual Networks & Private Endpoints", duration: "09:20", type: "video", previewAvailable: true },
      { title: "Azure Key Vault & Storage Accounts", duration: "07:10", type: "video", previewAvailable: false },
      { title: "Azure App Services & Azure Functions", duration: "08:00", type: "video", previewAvailable: false },
      { title: "Azure Monitor & Application Gateway", duration: "07:40", type: "video", previewAvailable: false },
    ],
  },
  {
    id: "devops-m5",
    title: "Docker & Containerization",
    lessonsCount: 5,
    lessons: [
      { title: "Docker Fundamentals", duration: "08:30", type: "video", previewAvailable: true },
      { title: "Docker Networking & Volumes", duration: "07:15", type: "video", previewAvailable: true },
      { title: "Docker Compose & Multi-Container Apps", duration: "09:50", type: "video", previewAvailable: false },
      { title: "Container Registries & Image Security", duration: "06:40", type: "video", previewAvailable: false },
      { title: "Docker Best Practices & Optimization", duration: "08:05", type: "video", previewAvailable: false },
    ],
  },
  {
    id: "devops-m6",
    title: "Kubernetes Fundamentals & Managed Kubernetes",
    lessonsCount: 5,
    lessons: [
      { title: "Kubernetes Architecture & Core Objects", duration: "10:25", type: "video", previewAvailable: true },
      { title: "Services, Ingress & Networking", duration: "08:15", type: "video", previewAvailable: true },
      { title: "ConfigMaps, Secrets & Volumes", duration: "07:30", type: "video", previewAvailable: false },
      { title: "Kubernetes on Cloud – AKS & EKS Setup", duration: "09:45", type: "video", previewAvailable: false },
      { title: "Containerized Application on Cloud Kubernetes", duration: "16:00", type: "assignment", previewAvailable: false },
    ],
  },
  {
    id: "devops-m7",
    title: "Advanced Kubernetes, Helm, Autoscaling & Security",
    lessonsCount: 5,
    lessons: [
      { title: "Helm – Charts & Templates", duration: "09:00", type: "video", previewAvailable: true },
      { title: "Kubernetes Autoscaling – Karpenter & KEDA", duration: "08:35", type: "video", previewAvailable: true },
      { title: "Kubernetes RBAC, Network Policies & Security", duration: "10:15", type: "video", previewAvailable: false },
      { title: "KOps & Cluster Provisioning", duration: "07:50", type: "video", previewAvailable: false },
      { title: "Kubernetes Troubleshooting & Debugging", duration: "09:20", type: "video", previewAvailable: false },
    ],
  },
  {
    id: "devops-m8",
    title: "GitOps & CI/CD Tooling",
    lessonsCount: 5,
    lessons: [
      { title: "GitOps Principles & ArgoCD Setup", duration: "08:10", type: "video", previewAvailable: true },
      { title: "ArgoCD – Application Deployment & Sync", duration: "09:40", type: "video", previewAvailable: true },
      { title: "Jenkins – Pipelines & Plugins", duration: "10:30", type: "video", previewAvailable: false },
      { title: "GitHub Actions & GitLab CI", duration: "08:55", type: "video", previewAvailable: false },
      { title: "Azure DevOps & Harness", duration: "07:20", type: "video", previewAvailable: false },
    ],
  },
  {
    id: "devops-m9",
    title: "CI/CD Design, Platform Engineering & Governance",
    lessonsCount: 5,
    lessons: [
      { title: "CI/CD Pipeline Design – Best Practices", duration: "08:25", type: "video", previewAvailable: true },
      { title: "Platform Engineering & Landing Zone Concepts", duration: "07:45", type: "reading", previewAvailable: true },
      { title: "Cloud Governance & Infrastructure Standards", duration: "06:55", type: "reading", previewAvailable: false },
      { title: "Automation Scripting – PowerShell & Java Basics for DevOps", duration: "09:10", type: "video", previewAvailable: false },
      { title: "End-to-End CI/CD with GitOps", duration: "16:30", type: "assignment", previewAvailable: false },
    ],
  },
  {
    id: "devops-m10",
    title: "Infrastructure as Code: Terraform, Ansible & Policy as Code",
    lessonsCount: 5,
    lessons: [
      { title: "Terraform Fundamentals", duration: "09:35", type: "video", previewAvailable: true },
      { title: "Terraform Modules", duration: "08:15", type: "video", previewAvailable: true },
      { title: "Terraform Remote State Management", duration: "07:00", type: "video", previewAvailable: false },
      { title: "Ansible Fundamentals", duration: "09:50", type: "video", previewAvailable: false },
      { title: "OPA & Sentinel Policies – Policy as Code", duration: "08:30", type: "reading", previewAvailable: false },
    ],
  },
  {
    id: "devops-m11",
    title: "Security & Compliance",
    lessonsCount: 5,
    lessons: [
      { title: "IAM Policies Deep Dive & Least Privilege", duration: "08:45", type: "video", previewAvailable: true },
      { title: "Secrets Manager & HashiCorp Vault", duration: "09:25", type: "video", previewAvailable: true },
      { title: "Wiz & Cloud Security Posture Management", duration: "07:10", type: "video", previewAvailable: false },
      { title: "SonarQube – Code Quality & Static Analysis", duration: "08:00", type: "video", previewAvailable: false },
      { title: "TruffleHog & GitGuardian – Secret Scanning", duration: "06:35", type: "video", previewAvailable: false },
    ],
  },
  {
    id: "devops-m12",
    title: "Observability, GenAI for DevOps & Final Capstone",
    lessonsCount: 5,
    lessons: [
      { title: "Datadog & Dynatrace – APM & Observability", duration: "09:15", type: "video", previewAvailable: true },
      { title: "ELK Stack, Splunk & Kibana – Log Management", duration: "08:40", type: "video", previewAvailable: true },
      { title: "Grafana & Prometheus – Metrics & Dashboards", duration: "10:05", type: "video", previewAvailable: false },
      { title: "AI & GenAI for DevOps", duration: "07:50", type: "video", previewAvailable: false },
      { title: "Enterprise-Grade DevOps Platform", duration: "18:00", type: "assignment", previewAvailable: false },
    ],
  },
];
