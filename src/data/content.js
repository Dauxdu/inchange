import LogoLoader from "../components/LogoLoader"

const logoUrl = LogoLoader["logo"]

export const portfolioContent = {
  en: {
    name: "INCHANGE.DEV",
    tagline: "Junior DevOps Engineer & Cloud Enthusiast",
    subtitle:
      "Building reliable infrastructure and automating deployment pipelines",
    about:
      "Passionate about infrastructure automation, cloud technologies, and continuous deployment practices.",
    experience: "Work Experience",
    projects: "Featured Projects",
    viewProjects: "View Projects",
    companies: [
      {
        name: "CloudTech Solutions",
        description:
          "Supporting CI/CD pipeline development and container orchestration with Docker and Kubernetes, implementing monitoring solutions and maintaining cloud infrastructure",
        years: "2024 - Present",
        role: "Junior DevOps Engineer",
        logo: logoUrl,
      },
      {
        name: "StartupBase",
        description:
          "Assisting with AWS infrastructure setup and monitoring system implementation, learning cloud best practices and automation tools",
        years: "2023 - 2024",
        role: "DevOps Intern",
        logo: logoUrl,
      },
      {
        name: "TechLab Academy",
        description:
          "Learning system administration and basic automation scripting with Python and Bash, building foundation in Linux systems",
        years: "2022 - 2023",
        role: "System Admin Trainee",
        logo: logoUrl,
      },
    ],
    petProjects: [
      {
        name: "Docker Monitoring Stack",
        description:
          "Complete monitoring solution using Prometheus, Grafana, and Docker Compose for container metrics visualization and alerting with custom dashboards",
        tech: [
          "Docker",
          "Prometheus",
          "Grafana",
          "Docker Compose",
          "AlertManager",
        ],
        link: "https://github.com/inchange-dev/docker-monitoring",
        demo: "https://monitoring-demo.inchange.dev",
        logo: logoUrl,
      },
      {
        name: "CI/CD Pipeline Automation",
        description:
          "Automated deployment pipeline using GitHub Actions for web applications with testing, security scanning, and multi-environment deployment stages",
        tech: ["GitHub Actions", "Docker", "AWS", "Terraform", "Jest"],
        link: "https://github.com/inchange-dev/cicd-pipeline",
        demo: "https://pipeline-demo.inchange.dev",
        logo: logoUrl,
      },
      {
        name: "Infrastructure as Code",
        description:
          "AWS infrastructure provisioning using Terraform with automated scaling, backup solutions, and comprehensive logging and monitoring setup",
        tech: ["Terraform", "AWS", "CloudWatch", "S3", "Lambda"],
        link: "https://github.com/inchange-dev/terraform-aws",
        demo: "https://infrastructure-demo.inchange.dev",
        logo: logoUrl,
      },
    ],
  },
  ru: {
    name: "INCHANGE.DEV",
    tagline: "Junior DevOps Инженер и Энтузиаст Облачных Технологий",
    subtitle:
      "Создаю надёжную инфраструктуру и автоматизирую пайплайны развёртывания",
    about:
      "Увлечён автоматизацией инфраструктуры, облачными технологиями и практиками непрерывного развёртывания.",
    experience: "Опыт Работы",
    projects: "Избранные Проекты",
    viewProjects: "Посмотреть Проекты",
    companies: [
      {
        name: "CloudTech Solutions",
        description:
          "Поддержка разработки CI/CD пайплайнов и оркестрации контейнеров с Docker и Kubernetes, внедрение решений мониторинга и поддержка облачной инфраструктуры",
        years: "2024 - Настоящее время",
        role: "Junior DevOps Инженер",
        logo: logoUrl,
      },
      {
        name: "StartupBase",
        description:
          "Помощь в настройке AWS инфраструктуры и внедрении систем мониторинга, изучение лучших практик облачных технологий и инструментов автоматизации",
        years: "2023 - 2024",
        role: "DevOps Стажёр",
        logo: logoUrl,
      },
      {
        name: "TechLab Academy",
        description:
          "Изучение системного администрирования и базовой автоматизации на Python и Bash, создание фундамента в Linux системах",
        years: "2022 - 2023",
        role: "Системный Администратор (Стажёр)",
        logo: logoUrl,
      },
    ],
    petProjects: [
      {
        name: "Docker Monitoring Stack",
        description:
          "Полное решение для мониторинга с использованием Prometheus, Grafana и Docker Compose для визуализации метрик контейнеров и оповещений с кастомными дашбордами",
        tech: [
          "Docker",
          "Prometheus",
          "Grafana",
          "Docker Compose",
          "AlertManager",
        ],
        link: "https://github.com/inchange-dev/docker-monitoring",
        demo: "https://monitoring-demo.inchange.dev",
        logo: logoUrl,
      },
      {
        name: "Автоматизация CI/CD Пайплайна",
        description:
          "Автоматизированный пайплайн развёртывания с использованием GitHub Actions для веб-приложений с тестированием, сканированием безопасности и развёртыванием в несколько сред",
        tech: ["GitHub Actions", "Docker", "AWS", "Terraform", "Jest"],
        link: "https://github.com/inchange-dev/cicd-pipeline",
        demo: "https://pipeline-demo.inchange.dev",
        logo: logoUrl,
      },
      {
        name: "Инфраструктура как Код",
        description:
          "Провизионирование AWS инфраструктуры с использованием Terraform с автоматическим масштабированием, решениями резервного копирования и комплексной настройкой логирования и мониторинга",
        tech: ["Terraform", "AWS", "CloudWatch", "S3", "Lambda"],
        link: "https://github.com/inchange-dev/terraform-aws",
        demo: "https://infrastructure-demo.inchange.dev",
        logo: logoUrl,
      },
    ],
  },
}

export const technologiesData = [
  {
    id: 1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    format: "rectangular",
  },
  {
    id: 2,
    logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
    format: "square",
  },
  {
    id: 3,
    logo: "https://kubernetes.io/images/kubernetes-horizontal-color.png",
    format: "rectangular",
  },
  {
    id: 4,
    logo: "https://www.jenkins.io/images/logos/jenkins/jenkins.svg",
    format: "square",
  },
  {
    id: 5,
    logo: "https://www.datocms-assets.com/2885/1629941242-logo-terraform-main.svg",
    format: "square",
  },
  {
    id: 6,
    logo: "https://prometheus.io/assets/prometheus_logo_grey.svg",
    format: "square",
  },
  {
    id: 7,
    logo: "https://grafana.com/static/img/menu/grafana2.svg",
    format: "rectangular",
  },
  {
    id: 8,
    logo: "https://about.gitlab.com/images/press/logo/svg/gitlab-logo-gray-rgb.svg",
    format: "rectangular",
  },
  {
    id: 9,
    logo: "https://www.redhat.com/cms/managed-files/Logo-Red_Hat-OpenShift-A-Standard-RGB.svg",
    format: "rectangular",
  },
  {
    id: 10,
    logo: "https://www.nginx.com/wp-content/uploads/2018/08/NGINX-logo-rgb-large.png",
    format: "rectangular",
  },
]
