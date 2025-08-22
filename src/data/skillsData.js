// Skills and career progression data
export const skillsData = {
  categories: {
    'frontend': {
      id: 'frontend',
      title: 'Frontend Development',
      color: '#3B82F6',
          position: { x: 450, y: 150 }, // Backend category position: { x: 200, y: 50 }
    },
    'backend': {
      id: 'backend', 
      title: 'Backend Development',
      color: '#10B981',
      position: { x: 600, y: 50 }
    },
    'architecture': {
      id: 'architecture',
      title: 'System Architecture & Design',
      color: '#8B5CF6',
      position: { x: 1000, y: 50 }
    },
    'cloud': {
      id: 'cloud',
      title: 'Cloud & Infrastructure',
      color: '#F59E0B',
      position: { x: 200, y: 350 }
    },
    'devops': {
      id: 'devops',
      title: 'DevOps & Automation',
      color: '#EF4444',
      position: { x: 600, y: 350 }
    },
    'leadership': {
      id: 'leadership',
      title: 'Leadership & Management',
      color: '#EC4899',
      position: { x: 1000, y: 350 }
    },
    'data': {
      id: 'data',
      title: 'Data & Analytics',
      color: '#06B6D4',
      position: { x: 200, y: 650 }
    },
    'ml': {
      id: 'ml',
      title: 'Machine Learning',
      color: '#9333EA',
      position: { x: 600, y: 650 }
    },
    'tools': {
      id: 'tools',
      title: 'Tools & Platforms',
      color: '#84CC16',
      position: { x: 1000, y: 650 }
    }
  },

  skills: [
    // Frontend Skills - positioned under Frontend category (x: 200, y: 50)
    {
      id: 'react',
      title: 'React',
      category: 'frontend',
      level: 'expert',
      status: 'completed',
      description: 'Advanced React development with hooks, context, performance optimization, and scalable architecture patterns',
      yearsOfExperience: 6,
      position: { x: 50, y: 150 }, // Under frontend category
      detailedAccomplishments: [
        'Built enterprise React applications serving 100K+ daily active users',
        'Implemented custom hooks library reducing code duplication by 60%',
        'Optimized React performance with memo, useMemo, and lazy loading',
        'Created reusable component library adopted across 8 development teams',
        'Built complex state management with Context API and useReducer',
        'Implemented React Suspense for progressive loading experiences',
        'Created automated testing suites with Jest and React Testing Library',
        'Built accessible components following WCAG 2.1 guidelines',
        'Implemented micro-frontend architecture with React module federation',
        'Led React migration from class components to hooks for legacy applications'
      ],
      technologies: ['React 18', 'Hooks', 'Context API', 'React Router', 'React Query', 'Styled Components', 'Jest', 'RTL'],
      keyMetrics: [
        '100K+ daily active users served',
        '60% code duplication reduction',
        '40% bundle size optimization',
        '99.9% component test coverage'
      ]
    },
    {
      id: 'nextjs',
      title: 'Next.js',
      category: 'frontend',
      level: 'expert',
      status: 'completed',
      description: 'Full-stack React framework with SSR, SSG, API routes, and production deployment expertise',
      yearsOfExperience: 4,
      position: { x: 250, y: 150 }, // Under frontend category
      detailedAccomplishments: [
        'Built production Next.js applications with 50+ pages and complex routing',
        'Implemented hybrid SSR/SSG strategy optimizing SEO and performance',
        'Created API routes handling 10K+ requests per minute',
        'Built incremental static regeneration (ISR) for dynamic content',
        'Implemented middleware for authentication, logging, and redirects',
        'Optimized Core Web Vitals achieving 95+ Lighthouse scores',
        'Built internationalization (i18n) supporting 12 languages',
        'Created automated deployment pipelines with Vercel and AWS',
        'Implemented edge functions for real-time data processing',
        'Built e-commerce platform with cart, payments, and order management'
      ],
      technologies: ['Next.js 13', 'App Router', 'API Routes', 'SSR/SSG', 'Middleware', 'i18n', 'Vercel', 'Edge Functions'],
      keyMetrics: [
        '50+ pages with dynamic routing',
        '95+ Lighthouse performance score',
        '10K+ API requests per minute',
        '12 languages supported'
      ]
    },
    {
      id: 'typescript',
      title: 'TypeScript',
      category: 'frontend',
      level: 'expert',
      status: 'completed',
      description: 'Advanced typing, generics, utility types, and large-scale application architecture',
      yearsOfExperience: 5,
      position: { x: 150, y: 230 }, // Under frontend category, second row
      detailedAccomplishments: [
        'Migrated 200K+ lines of JavaScript codebase to TypeScript',
        'Created complex type definitions and generic utilities',
        'Built type-safe API clients with strict response typing',
        'Implemented advanced patterns with conditional and mapped types',
        'Created TypeScript configuration standards for enterprise projects',
        'Built code generation tools for API types from OpenAPI schemas',
        'Implemented strict TypeScript mode across 15+ microservices',
        'Created utility types library reducing boilerplate by 50%',
        'Built type-safe state management with discriminated unions',
        'Mentored teams on TypeScript best practices and migration strategies'
      ],
      technologies: ['TypeScript 5.0', 'Generic Types', 'Utility Types', 'Type Guards', 'Conditional Types', 'Mapped Types'],
      keyMetrics: [
        '200K+ lines migrated to TypeScript',
        '50% boilerplate reduction',
        '90% reduction in type-related bugs',
        '15+ microservices with strict typing'
      ]
    },

    // Backend Skills - positioned under Backend category (x: 600, y: 50)
    {
      id: 'nodejs',
      title: 'Node.js',
      category: 'backend',
      level: 'expert',
      status: 'completed',
      description: 'High-performance server-side JavaScript, microservices, and enterprise-grade applications',
      yearsOfExperience: 7,
      position: { x: 150, y: 230 }, // Frontend category, second row // Under backend category
      detailedAccomplishments: [
        'Built Node.js microservices handling 1M+ requests per day',
        'Implemented event-driven architecture with EventEmitter patterns',
        'Created RESTful APIs with Express.js and Fastify frameworks',
        'Built real-time applications with WebSocket and Socket.io',
        'Implemented worker threads for CPU-intensive tasks',
        'Created streaming data processing with Node.js streams',
        'Built authentication systems with JWT and OAuth2',
        'Implemented rate limiting and request throttling',
        'Created automated testing with Mocha, Jest, and Supertest',
        'Optimized memory usage and event loop performance'
      ],
      technologies: ['Node.js 18', 'Express.js', 'Fastify', 'Socket.io', 'Worker Threads', 'Streams', 'JWT', 'Mocha'],
      keyMetrics: [
        '1M+ requests per day handled',
        '99.9% API uptime',
        'Sub-100ms average response time',
        '20+ production Node.js services'
      ]
    },
    {
      id: 'python',
      title: 'Python',
      category: 'backend',
      level: 'expert',
      status: 'completed',
      description: 'Full-stack Python development with Django, FastAPI, data processing, and automation',
      yearsOfExperience: 8,
      position: { x: 650, y: 150 }, // Backend category
      detailedAccomplishments: [
        'Built scalable Python APIs with FastAPI and Django REST Framework',
        'Created data processing pipelines handling TBs of data daily',
        'Implemented asynchronous programming with asyncio and aiohttp',
        'Built automation scripts reducing manual tasks by 80%',
        'Created web scraping solutions with Scrapy and BeautifulSoup',
        'Implemented machine learning models with scikit-learn and pandas',
        'Built real-time data streaming with Apache Kafka and Python',
        'Created CLI tools with Click and argparse frameworks',
        'Implemented comprehensive testing with pytest and unittest',
        'Built containerized Python applications with Docker optimization'
      ],
      technologies: ['FastAPI', 'Django', 'AsyncIO', 'Pandas', 'NumPy', 'SQLAlchemy', 'Celery', 'pytest', 'Scrapy'],
      keyMetrics: [
        'TBs of data processed daily',
        '80% reduction in manual tasks',
        '50+ automation scripts deployed',
        '99.5% uptime for Python services'
      ]
    },
    {
      id: 'go',
      title: 'Go',
      category: 'backend',
      level: 'advanced',
      status: 'completed',
      description: 'High-performance concurrent programming, microservices, and cloud-native applications',
      yearsOfExperience: 3,
      position: { x: 850, y: 150 }, // Backend category
      detailedAccomplishments: [
        'Built high-performance microservices handling 100K+ concurrent connections',
        'Implemented goroutine pools for optimal resource utilization',
        'Created custom middleware for authentication, logging, and metrics',
        'Built gRPC services with protocol buffers for inter-service communication',
        'Developed CLI tools for infrastructure automation and deployment',
        'Optimized memory usage reducing garbage collection overhead by 40%',
        'Built real-time data streaming services with Kafka integration',
        'Created custom HTTP routers with sub-millisecond response times',
        'Implemented context-aware request handling with graceful shutdowns',
        'Mentored team on Go best practices and idiomatic patterns'
      ],
      technologies: ['Goroutines', 'Channels', 'gRPC', 'Gin', 'Echo', 'Protocol Buffers', 'Context', 'Sync Package'],
      keyMetrics: [
        '100K+ concurrent connections handled',
        'Sub-millisecond API response times',
        '40% GC overhead reduction',
        '10+ production microservices built'
      ]
    },
    {
      id: 'java',
      title: 'Java',
      category: 'backend',
      level: 'intermediate',
      status: 'completed',
      description: 'Enterprise Java development with Spring framework and microservices architecture',
      yearsOfExperience: 2,
      position: { x: 550, y: 230 }, // Backend category, second row
      detailedAccomplishments: [
        'Developed RESTful APIs using Spring Boot and Java',
        'Implemented security features using Spring Security',
        'Created data access layers with Spring Data JPA',
        'Built microservices deployed on AWS with Docker',
        'Implemented unit and integration testing with JUnit and Mockito',
        'Created CI/CD pipelines for automated deployment',
        'Optimized application performance and resource utilization',
        'Participated in code reviews and agile ceremonies',
        'Mentored junior developers in Java and Spring best practices',
        'Contributed to architecture and design discussions'
      ],
      technologies: ['Java 11', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Docker', 'AWS', 'JUnit', 'Maven'],
      keyMetrics: [
        'Developed and deployed 10+ microservices',
        'Achieved 99.9% uptime for critical services',
        'Reduced build and deployment times by 30%',
        'Improved code quality with 80% test coverage'
      ]
    },
    {
      id: 'csharp',
      title: 'C#',
      category: 'backend',
      level: 'intermediate',
      status: 'completed',
      description: '.NET development with ASP.NET Core, Entity Framework, and Azure integration',
      yearsOfExperience: 2,
      position: { x: 750, y: 230 }, // Backend category, second row
      detailedAccomplishments: [
        'Developed web applications using ASP.NET Core and C#',
        'Implemented RESTful APIs and microservices architecture',
        'Created data models and performed ORM with Entity Framework',
        'Built CI/CD pipelines for automated testing and deployment',
        'Optimized application performance and scalability',
        'Implemented security best practices and authentication',
        'Participated in code reviews and agile development processes',
        'Mentored junior developers in C# and .NET technologies',
        'Contributed to system design and architecture discussions',
        'Maintained and improved legacy .NET applications'
      ],
      technologies: ['C#', '.NET 5', 'ASP.NET Core', 'Entity Framework', 'Azure', 'Docker', 'Kubernetes', 'Git'],
      keyMetrics: [
        'Delivered 5+ web applications and APIs',
        'Achieved 99.8% uptime for production services',
        'Reduced application response time by 40%',
        'Improved deployment frequency with automated pipelines'
      ]
    },

    // Architecture Skills - positioned under Architecture category (x: 1000, y: 50)
    {
      id: 'system-design',
      title: 'System Design',
      category: 'architecture',
      level: 'expert',
      status: 'completed',
      description: 'Large-scale distributed systems, microservices architecture, and scalability patterns',
      yearsOfExperience: 8,
      position: { x: 850, y: 150 }, // Architecture category
      detailedAccomplishments: [
        'Architected distributed system handling 10M+ daily requests',
        'Designed horizontal scaling patterns with auto-scaling groups',
        'Implemented CQRS and Event Sourcing for high-throughput systems',
        'Created microservices decomposition strategy for monolith migration',
        'Designed multi-region disaster recovery with RTO < 15 minutes',
        'Implemented circuit breaker patterns reducing cascade failures by 90%',
        'Built service mesh architecture with Istio for traffic management',
        'Designed data consistency patterns for distributed transactions',
        'Created performance optimization strategies reducing latency by 60%',
        'Led architecture review board for enterprise-wide decisions'
      ],
      technologies: ['Microservices', 'Event Sourcing', 'CQRS', 'Service Mesh', 'Load Balancing', 'Circuit Breakers'],
      keyMetrics: [
        '10M+ requests/day system capacity',
        '60% latency reduction achieved',
        '99.95% system availability',
        '15min disaster recovery time'
      ]
    },
    {
      id: 'microservices',
      title: 'Microservices',
      category: 'architecture',
      level: 'expert',
      status: 'completed',
      description: 'Service-oriented architecture, API design, distributed systems, and cross-service communication',
      yearsOfExperience: 6,
      position: { x: 1150, y: 150 }, // Architecture category
      detailedAccomplishments: [
        'Decomposed monolithic applications into 30+ microservices',
        'Designed service boundaries using Domain-Driven Design principles',
        'Implemented inter-service communication with REST, gRPC, and messaging',
        'Created service discovery patterns with Consul and Eureka',
        'Built distributed tracing with OpenTelemetry and Jaeger',
        'Implemented saga patterns for distributed transactions',
        'Created service mesh architecture with Istio for security and observability',
        'Built API composition patterns for complex business workflows',
        'Implemented database-per-service pattern with eventual consistency',
        'Created microservices testing strategies including contract testing'
      ],
      technologies: ['Docker', 'Kubernetes', 'Istio', 'gRPC', 'OpenTelemetry', 'Consul', 'Apache Kafka', 'Redis'],
      keyMetrics: [
        '30+ microservices in production',
        '99.9% service availability',
        '70% faster feature delivery',
        '5x independent deployment frequency'
      ]
    },
    {
      id: 'api-design',
      title: 'API Design',
      category: 'architecture',
      level: 'expert',
      status: 'completed',
      description: 'RESTful APIs, GraphQL, API versioning, documentation, and developer experience',
      yearsOfExperience: 7,
      position: { x: 1000, y: 230 }, // Architecture category, second row
      detailedAccomplishments: [
        'Designed RESTful API standards adopted across 15+ microservices',
        'Created OpenAPI 3.0 specifications with automated documentation',
        'Implemented API versioning strategy supporting backward compatibility',
        'Built GraphQL federation layer unifying 20+ data sources',
        'Established rate limiting and authentication patterns (OAuth2, JWT)',
        'Designed event-driven API patterns with webhooks and callbacks',
        'Created API gateway configurations with request/response transformation',
        'Implemented HATEOAS principles for self-describing APIs',
        'Built API monitoring with SLA tracking (99.9% uptime achieved)',
        'Mentored teams on API design patterns and industry standards'
      ],
      technologies: ['OpenAPI 3.0', 'GraphQL', 'REST', 'gRPC', 'OAuth2', 'JWT', 'API Gateway', 'Swagger'],
      keyMetrics: [
        '15+ microservices following unified API standards',
        '99.9% API uptime across production services',
        '50ms average response time optimization',
        '100+ API endpoints documented and versioned'
      ]
    },

    // Cloud Skills - positioned under Cloud category (x: 200, y: 350)
    {
      id: 'aws',
      title: 'AWS',
      category: 'cloud',
      level: 'expert',
      status: 'completed',
      description: 'Comprehensive AWS services, serverless architecture, and cloud-native development',
      yearsOfExperience: 6,
      position: { x: 50, y: 450 }, // Cloud category
      detailedAccomplishments: [
        'Designed multi-AZ architecture with auto-failover capabilities',
        'Built serverless applications using Lambda, API Gateway, and DynamoDB',
        'Implemented EKS clusters with Fargate for containerized workloads',
        'Created VPC networking with private/public subnets and NAT gateways',
        'Set up CloudWatch monitoring with custom metrics and alarms',
        'Implemented IAM roles and policies following least privilege principle',
        'Built CI/CD pipelines with CodePipeline and CodeDeploy',
        'Optimized costs reducing infrastructure spend by 45%',
        'Designed backup and disaster recovery strategies across regions',
        'Achieved AWS Solutions Architect certification'
      ],
      technologies: ['EC2', 'EKS', 'Lambda', 'RDS', 'DynamoDB', 'S3', 'CloudFront', 'API Gateway', 'CloudWatch'],
      keyMetrics: [
        '45% infrastructure cost reduction',
        '99.9% uptime across all services',
        '15+ production AWS accounts managed',
        '50+ Lambda functions deployed'
      ]
    },
    {
      id: 'terraform',
      title: 'Terraform',
      category: 'cloud',
      level: 'advanced',
      status: 'completed',
      description: 'Infrastructure as Code, multi-cloud provisioning, and automated infrastructure management',
      yearsOfExperience: 4,
      position: { x: 350, y: 450 }, // Cloud category
      detailedAccomplishments: [
        'Managed infrastructure for 50+ microservices across multiple environments',
        'Created reusable Terraform modules adopted across 10+ teams',
        'Implemented remote state management with state locking',
        'Built multi-environment deployment pipelines (dev/staging/prod)',
        'Created infrastructure compliance policies with Sentinel',
        'Implemented drift detection and automated remediation',
        'Built disaster recovery infrastructure with cross-region replication',
        'Optimized resource provisioning reducing deployment time by 70%',
        'Created infrastructure documentation automation with Terraform docs',
        'Led infrastructure migration to IaC reducing manual errors by 95%'
      ],
      technologies: ['Terraform', 'HCL', 'Terraform Cloud', 'Sentinel', 'Remote State', 'Modules', 'Workspaces'],
      keyMetrics: [
        '50+ microservices infrastructure managed',
        '70% deployment time reduction',
        '95% reduction in manual errors',
        '100% infrastructure as code coverage'
      ]
    },

    // DevOps Skills - positioned under DevOps category (x: 600, y: 350)
    {
      id: 'docker',
      title: 'Docker',
      category: 'devops',
      level: 'expert',
      status: 'completed',
      description: 'Containerization, multi-stage builds, orchestration, and production deployment strategies',
      yearsOfExperience: 5,
      position: { x: 450, y: 450 }, // DevOps category
      detailedAccomplishments: [
        'Containerized 100+ applications reducing deployment complexity by 80%',
        'Created multi-stage Dockerfiles optimizing image sizes by 70%',
        'Built container security scanning with Trivy and Snyk',
        'Implemented Docker Compose for local development environments',
        'Created container registry management with Harbor and ECR',
        'Built container monitoring with cAdvisor and Prometheus',
        'Implemented container networking with custom bridge networks',
        'Created container backup and recovery strategies',
        'Built distroless container images for enhanced security',
        'Implemented container resource limits and health checks'
      ],
      technologies: ['Docker', 'Docker Compose', 'Multi-stage Builds', 'Distroless', 'Harbor', 'ECR', 'Trivy'],
      keyMetrics: [
        '100+ applications containerized',
        '70% container image size reduction',
        '80% deployment complexity reduction',
        '99.5% container uptime'
      ]
    },
    {
      id: 'kubernetes',
      title: 'Kubernetes',
      category: 'devops',
      level: 'advanced',
      status: 'completed',
      description: 'Container orchestration, cluster management, service mesh, and cloud-native deployment',
      yearsOfExperience: 4,
      position: { x: 750, y: 450 }, // DevOps category
      detailedAccomplishments: [
        'Managed production K8s clusters serving 500+ microservices',
        'Implemented GitOps deployment workflows with ArgoCD',
        'Created custom operators for application lifecycle management',
        'Set up Istio service mesh for traffic management and security',
        'Built horizontal pod autoscaling based on custom metrics',
        'Implemented network policies for secure pod-to-pod communication',
        'Created Helm charts for standardized application deployments',
        'Set up cluster monitoring with Prometheus and Grafana',
        'Implemented RBAC and security policies following CIS benchmarks',
        'Led K8s migration reducing infrastructure costs by 30%'
      ],
      technologies: ['K8s', 'Helm', 'Istio', 'ArgoCD', 'Prometheus', 'Grafana', 'RBAC', 'Network Policies'],
      keyMetrics: [
        '500+ microservices orchestrated',
        '30% infrastructure cost reduction',
        '99.9% cluster uptime',
        '5-second average pod startup time'
      ]
    },
    {
      id: 'cicd',
      title: 'CI/CD',
      category: 'devops',
      level: 'expert',
      status: 'completed',
      description: 'Automated testing, deployment pipelines, GitOps, and release management',
      yearsOfExperience: 6,
      position: { x: 600, y: 530 }, // DevOps category, second row
      detailedAccomplishments: [
        'Built CI/CD pipelines for 50+ repositories with automated testing',
        'Implemented GitOps workflows with automatic deployments',
        'Created multi-environment promotion pipelines (dev/staging/prod)',
        'Built parallel testing strategies reducing build time by 60%',
        'Implemented security scanning in CI/CD with SAST and DAST tools',
        'Created automated rollback mechanisms for failed deployments',
        'Built artifact management with container registries and repositories',
        'Implemented blue-green and canary deployment strategies',
        'Created pipeline monitoring with metrics and alerting',
        'Built approval workflows for production deployments'
      ],
      technologies: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'ArgoCD', 'Tekton', 'Spinnaker', 'SonarQube'],
      keyMetrics: [
        '50+ repositories with automated CI/CD',
        '60% build time reduction',
        '95% deployment success rate',
        '10 deployments per day average'
      ]
    },

    // Leadership Skills - positioned under Leadership category (x: 1000, y: 350)
    {
      id: 'team-leadership',
      title: 'Team Leadership',
      category: 'leadership',
      level: 'expert',
      status: 'completed',
      description: 'Engineering management, team building, mentoring, and cross-functional collaboration',
      yearsOfExperience: 5,
      position: { x: 850, y: 450 }, // Leadership category
      detailedAccomplishments: [
        'Led engineering teams of 15+ developers across multiple projects',
        'Established technical standards and coding practices organization-wide',
        'Implemented agile methodologies improving delivery speed by 50%',
        'Created technical onboarding program reducing ramp-up time by 60%',
        'Built performance review framework for engineering career growth',
        'Led architecture decisions for enterprise-scale applications',
        'Established code review culture improving code quality by 40%',
        'Created incident response procedures reducing MTTR by 45%',
        'Built cross-functional collaboration between engineering and product',
        'Mentored 20+ engineers with 80% promotion rate within 2 years'
      ],
      technologies: ['Agile', 'Scrum', 'OKRs', 'JIRA', 'Confluence', 'GitHub', 'Architecture Reviews'],
      keyMetrics: [
        '15+ developers led across multiple teams',
        '50% improvement in delivery speed',
        '80% mentee promotion rate',
        '45% reduction in incident MTTR'
      ]
    },
    {
      id: 'project-management',
      title: 'Project Management',
      category: 'leadership',
      level: 'advanced',
      status: 'completed',
      description: 'Agile methodologies, stakeholder management, delivery planning, and risk mitigation',
      yearsOfExperience: 6,
      position: { x: 1150, y: 450 }, // Leadership category
      detailedAccomplishments: [
        'Led 15+ cross-functional projects with $2M+ total budget',
        'Implemented Scrum and Kanban methodologies across teams',
        'Created project roadmaps and milestone tracking systems',
        'Built stakeholder communication frameworks',
        'Implemented risk management and mitigation strategies',
        'Created resource allocation and capacity planning processes',
        'Built project metrics and reporting dashboards',
        'Implemented dependency management across multiple teams',
        'Created change management processes for scope adjustments',
        'Led post-mortem analysis and continuous improvement initiatives'
      ],
      technologies: ['Jira', 'Confluence', 'Slack', 'Microsoft Project', 'Roadmapping Tools', 'OKRs'],
      keyMetrics: [
        '15+ projects delivered on time',
        '$2M+ project budget managed',
        '95% stakeholder satisfaction',
        '30% improvement in delivery speed'
      ]
    },

    // Data Skills - positioned under Data category (x: 200, y: 650)
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      category: 'ml',
      level: 'advanced',
      status: 'in-progress',
      description: 'Comprehensive ML engineering with MLOps, model deployment, and production ML systems',
      yearsOfExperience: 2,
      position: { x: 450, y: 750 }, // ML category
      learningRoadmap: {
        weeklyGoal: {
          hoursPerWeek: 10,
          studyDays: 5,
          targetCompletion: 'December 2025',
          currentWeekHours: 0,
          targetDate: 'Dec 2025'
        },
        phases: [
          {
            id: 'introduction',
            title: 'Introduction to Machine Learning',
            description: 'Build foundational understanding of ML concepts and ecosystem',
            estimatedWeeks: 4,
            status: 'planned',
            topics: [
              {
                id: 'ml-basics',
                title: 'ML Fundamentals',
                description: 'Understanding supervised, unsupervised, and reinforcement learning',
                estimatedHours: 8,
                resources: ['Coursera ML Course', 'Python ML Handbook'],
                priority: 'high'
              },
              {
                id: 'python-setup',
                title: 'Python ML Environment',
                description: 'Set up Jupyter, Anaconda, and essential libraries',
                estimatedHours: 4,
                resources: ['Anaconda Documentation', 'Jupyter Tutorials'],
                priority: 'high'
              },
              {
                id: 'data-basics',
                title: 'Data Fundamentals',
                description: 'Understanding datasets, features, and data preprocessing',
                estimatedHours: 6,
                resources: ['Pandas Documentation', 'Data Cleaning Tutorials'],
                priority: 'medium'
              }
            ]
          },
          {
            id: 'foundations',
            title: 'ML Foundations',
            description: 'Core algorithms and mathematical foundations',
            estimatedWeeks: 8,
            status: 'planned',
            topics: [
              {
                id: 'linear-regression',
                title: 'Linear Regression',
                description: 'Understanding linear relationships and regression analysis',
                estimatedHours: 10,
                resources: ['StatQuest Videos', 'Scikit-learn Documentation'],
                priority: 'high'
              },
              {
                id: 'classification',
                title: 'Classification Algorithms',
                description: 'Decision trees, random forests, logistic regression',
                estimatedHours: 12,
                resources: ['Hands-On ML Book', 'Kaggle Learn'],
                priority: 'high'
              },
              {
                id: 'clustering',
                title: 'Clustering',
                description: 'K-means, hierarchical clustering, DBSCAN',
                estimatedHours: 8,
                resources: ['Scikit-learn Clustering Guide'],
                priority: 'medium'
              }
            ]
          },
          {
            id: 'advanced',
            title: 'Advanced ML',
            description: 'Deep learning and advanced techniques',
            estimatedWeeks: 12,
            status: 'planned',
            topics: [
              {
                id: 'neural-networks',
                title: 'Neural Networks',
                description: 'Fundamentals of neural networks and backpropagation',
                estimatedHours: 15,
                resources: ['Deep Learning Specialization', 'TensorFlow Tutorials'],
                priority: 'high'
              },
              {
                id: 'cnn',
                title: 'Convolutional Neural Networks',
                description: 'Image processing and computer vision',
                estimatedHours: 12,
                resources: ['CS231n Course', 'Keras Documentation'],
                priority: 'medium'
              },
              {
                id: 'nlp',
                title: 'Natural Language Processing',
                description: 'Text processing and language models',
                estimatedHours: 10,
                resources: ['NLTK Book', 'Hugging Face Tutorials'],
                priority: 'medium'
              }
            ]
          },
          {
            id: 'production',
            title: 'ML in Production',
            description: 'MLOps, deployment, and production systems',
            estimatedWeeks: 6,
            status: 'planned',
            topics: [
              {
                id: 'mlops',
                title: 'MLOps Fundamentals',
                description: 'CI/CD for ML, model versioning, monitoring',
                estimatedHours: 12,
                resources: ['MLOps Course', 'MLflow Documentation'],
                priority: 'high'
              },
              {
                id: 'deployment',
                title: 'Model Deployment',
                description: 'Deploy models with Flask, FastAPI, cloud services',
                estimatedHours: 10,
                resources: ['FastAPI Docs', 'AWS SageMaker Tutorials'],
                priority: 'high'
              },
              {
                id: 'monitoring',
                title: 'Model Monitoring',
                description: 'Track model performance and data drift',
                estimatedHours: 8,
                resources: ['Evidently AI', 'MLflow Tracking'],
                priority: 'medium'
              }
            ]
          }
        ],
        milestones: [
          {
            id: 'first-model',
            title: 'First ML Model',
            description: 'Successfully train and evaluate your first machine learning model',
            completed: false,
            targetDate: 'October 2025',
            phase: 'foundations'
          },
          {
            id: 'production-ready',
            title: 'Production Deployment',
            description: 'Deploy a machine learning model to production environment',
            completed: false,
            targetDate: 'November 2025',
            phase: 'production'
          },
          {
            id: 'portfolio-complete',
            title: 'ML Portfolio',
            description: 'Complete portfolio with 3+ diverse ML projects',
            completed: false,
            targetDate: 'December 2025',
            phase: 'production'
          }
        ]
      },
      detailedAccomplishments: [
        'Starting ML journey - building foundational knowledge',
        'Setting up learning environment and tools',
        'Exploring ML career paths and opportunities'
      ],
      technologies: ['Python', 'Jupyter Notebooks', 'Git'],
      keyMetrics: [
        '0 models built (goal: 5 by end of year)',
        '0% of roadmap completed',
        '10 hours/week study commitment',
        'Target completion: December 2025'
      ]
    },

    // Data & Analytics Skills - positioned under Data category (x: 200, y: 650)
    {
      id: 'sql',
      title: 'SQL & Databases',
      category: 'data',
      level: 'expert',
      status: 'completed',
      description: 'Advanced SQL, database design, query optimization, and data modeling across multiple database systems',
      yearsOfExperience: 8,
      position: { x: 50, y: 750 }, // Data category
      detailedAccomplishments: [
        'Designed and optimized databases serving 10M+ records with sub-second query times',
        'Built complex ETL pipelines processing TBs of data daily',
        'Implemented database sharding and partitioning strategies',
        'Created data warehousing solutions with star and snowflake schemas',
        'Built real-time analytics dashboards with sub-minute data freshness',
        'Optimized query performance achieving 90% reduction in execution time',
        'Implemented database security and compliance (GDPR, HIPAA)',
        'Created automated backup and disaster recovery procedures',
        'Built data migration strategies for legacy system modernization',
        'Designed multi-tenant database architectures for SaaS platforms'
      ],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'BigQuery', 'Snowflake', 'DynamoDB', 'Elasticsearch'],
      keyMetrics: [
        '10M+ records managed across multiple databases',
        '90% query performance improvement',
        'Sub-second response times for 95% of queries',
        'Zero data loss across 5 years of operations'
      ]
    },
    {
      id: 'data-visualization',
      title: 'Data Visualization',
      category: 'data',
      level: 'advanced',
      status: 'completed',
      description: 'Interactive dashboards, business intelligence, data storytelling, and executive reporting',
      yearsOfExperience: 5,
      position: { x: 250, y: 750 }, // Data category
      detailedAccomplishments: [
        'Built executive dashboards serving C-level executives and board members',
        'Created interactive visualizations with D3.js and custom React components',
        'Designed self-service BI platforms enabling non-technical users',
        'Built real-time monitoring dashboards for operational metrics',
        'Created data storytelling presentations influencing $5M+ investment decisions',
        'Implemented A/B testing visualization frameworks',
        'Built mobile-responsive analytics dashboards',
        'Created automated report generation reducing manual effort by 80%',
        'Designed accessibility-compliant visualizations following WCAG guidelines',
        'Built custom visualization libraries adopted across multiple teams'
      ],
      technologies: ['Tableau', 'Power BI', 'D3.js', 'Chart.js', 'Plotly', 'Grafana', 'Looker', 'Google Analytics'],
      keyMetrics: [
        '50+ interactive dashboards built',
        '200+ business users enabled with self-service BI',
        '80% reduction in manual reporting effort',
        '$5M+ investment decisions influenced by data presentations'
      ]
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering',
      category: 'data',
      level: 'advanced',
      status: 'completed',
      description: 'ETL/ELT pipelines, data warehousing, stream processing, and big data infrastructure',
      yearsOfExperience: 4,
      position: { x: 150, y: 830 }, // Data category, second row
      detailedAccomplishments: [
        'Built scalable data pipelines processing 100GB+ daily across multiple sources',
        'Implemented real-time stream processing with Apache Kafka and Apache Spark',
        'Created data lake architecture with automated data cataloging',
        'Built CDC (Change Data Capture) pipelines for real-time data synchronization',
        'Implemented data quality monitoring and alerting systems',
        'Created data lineage tracking for compliance and debugging',
        'Built cost-optimized data storage strategies reducing costs by 60%',
        'Implemented data versioning and rollback mechanisms',
        'Created self-healing data pipelines with automatic error recovery',
        'Built data governance frameworks ensuring data privacy and security'
      ],
      technologies: ['Apache Spark', 'Apache Kafka', 'Apache Airflow', 'dbt', 'Snowflake', 'AWS Glue', 'Databricks', 'Pandas'],
      keyMetrics: [
        '100GB+ daily data processing',
        '99.9% pipeline reliability',
        '60% reduction in data storage costs',
        'Sub-hour data freshness for critical business metrics'
      ]
    },
    {
      id: 'python-analytics',
      title: 'Python for Analytics',
      category: 'data',
      level: 'expert',
      status: 'completed',
      description: 'Data science libraries, statistical analysis, data manipulation, and analytical modeling',
      yearsOfExperience: 6,
      position: { x: 350, y: 830 }, // Data category, second row
      detailedAccomplishments: [
        'Built statistical models for business forecasting with 95% accuracy',
        'Created customer segmentation models using clustering algorithms',
        'Implemented time series analysis for demand forecasting',
        'Built recommendation systems using collaborative filtering',
        'Created A/B testing frameworks with statistical significance testing',
        'Built automated data quality checking and anomaly detection',
        'Implemented dimensionality reduction for large dataset analysis',
        'Created custom data analysis libraries used across multiple teams',
        'Built predictive models for customer churn and lifetime value',
        'Implemented advanced statistical techniques (regression, classification, clustering)'
      ],
      technologies: ['Pandas', 'NumPy', 'SciPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter', 'Statsmodels'],
      keyMetrics: [
        '95% accuracy in business forecasting models',
        '30+ statistical models built and deployed',
        '40% improvement in customer segmentation accuracy',
        '25% reduction in customer churn through predictive modeling'
      ]
    },

    // Tools Skills - positioned under Tools category (x: 1000, y: 650)
    {
      id: 'git',
      title: 'Git',
      category: 'tools',
      level: 'expert',
      status: 'completed',
      description: 'Advanced version control, branching strategies, and collaborative development workflows',
      yearsOfExperience: 10,
      position: { x: 850, y: 750 }, // Tools category
      detailedAccomplishments: [
        'Implemented Git workflows for 50+ repositories and 100+ developers',
        'Created branching strategies: GitFlow, GitHub Flow, and trunk-based development',
        'Built Git hooks for automated code quality checks',
        'Implemented semantic versioning and automated release processes',
        'Created Git migration strategies for legacy version control systems',
        'Built code review processes with pull request templates',
        'Implemented Git security with signed commits and branch protection',
        'Created Git training programs for development teams',
        'Built Git automation with scripts and custom commands',
        'Implemented repository management with automated cleanup'
      ],
      technologies: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Git Hooks', 'Semantic Versioning', 'GPG Signing'],
      keyMetrics: [
        '50+ repositories managed',
        '100+ developers trained',
        '95% code review compliance',
        '99.9% version control uptime'
      ]
    },
    {
      id: 'testing',
      title: 'Testing Strategies',
      category: 'tools',
      level: 'expert',
      status: 'completed',
      description: 'Unit testing, integration testing, E2E testing, TDD, testing pyramids',
      yearsOfExperience: 6,
      position: { x: 1050, y: 750 }, // Tools category
      detailedAccomplishments: [
        'Implemented comprehensive testing strategies achieving 95+ code coverage',
        'Built automated testing pipelines with unit, integration, and E2E tests',
        'Created testing frameworks and utilities for team productivity',
        'Implemented Test-Driven Development (TDD) practices',
        'Built contract testing for microservices with Pact',
        'Created performance testing with load and stress testing tools',
        'Implemented mutation testing for test quality validation',
        'Built visual regression testing for UI components',
        'Created testing documentation and best practices guides',
        'Implemented property-based testing for edge case discovery'
      ],
      technologies: ['Jest', 'Cypress', 'Selenium', 'Pact', 'JMeter', 'Postman', 'TestContainers', 'Playwright'],
      keyMetrics: [
        '95%+ code coverage achieved',
        '90% bug reduction in production',
        '80% faster bug detection',
        '100+ test suites automated'
      ]
    },
    {
      id: 'security',
      title: 'Security Best Practices',
      category: 'tools',
      level: 'advanced',
      status: 'completed',
      description: 'OWASP top 10, secure coding, authentication, authorization, vulnerability assessment',
      yearsOfExperience: 5,
      position: { x: 950, y: 830 }, // Tools category, second row
      detailedAccomplishments: [
        'Implemented security practices across 30+ applications',
        'Built authentication and authorization systems with OAuth2 and SAML',
        'Created security scanning pipelines with SAST and DAST tools',
        'Implemented encryption at rest and in transit for sensitive data',
        'Built vulnerability assessment and penetration testing processes',
        'Created security incident response and recovery procedures',
        'Implemented secure coding practices and code review guidelines',
        'Built API security with rate limiting, input validation, and CORS',
        'Created security monitoring and alerting systems',
        'Implemented compliance frameworks (SOC2, PCI DSS, GDPR)'
      ],
      technologies: ['OAuth2', 'SAML', 'JWT', 'OWASP ZAP', 'SonarQube', 'Snyk', 'Vault', 'TLS/SSL'],
      keyMetrics: [
        '30+ applications secured',
        '90% reduction in security vulnerabilities',
        '100% compliance audit success',
        'Zero security incidents in production'
      ]
    },
    {
      id: 'performance',
      title: 'Performance Optimization',
      category: 'tools',
      level: 'expert',
      status: 'completed',
      description: 'Application profiling, load testing, caching strategies, performance tuning',
      yearsOfExperience: 6,
      position: { x: 1150, y: 830 }, // Tools category, second row
      detailedAccomplishments: [
        'Optimized application performance achieving 80% latency reduction',
        'Implemented caching strategies with Redis and CDN optimization',
        'Built performance monitoring with APM tools and custom metrics',
        'Created load testing frameworks with realistic traffic simulation',
        'Implemented database query optimization reducing response times by 90%',
        'Built application profiling and bottleneck identification processes',
        'Created performance budgets and monitoring for web applications',
        'Implemented lazy loading and code splitting for frontend optimization',
        'Built auto-scaling strategies based on performance metrics',
        'Created performance regression testing in CI/CD pipelines'
      ],
      technologies: ['APM Tools', 'Redis', 'CDN', 'JMeter', 'Artillery', 'Web Vitals', 'Lighthouse', 'Profiling Tools'],
      keyMetrics: [
        '80% latency reduction achieved',
        '90% database query optimization',
        '95+ Lighthouse performance scores',
        '99.9% application availability'
      ]
    }
  ],

  connections: [
    // Frontend ecosystem connections
    { source: 'react', target: 'nextjs', type: 'enables' },
    { source: 'typescript', target: 'react', type: 'enhances' },
    { source: 'typescript', target: 'nextjs', type: 'enhances' },
    { source: 'nextjs', target: 'nodejs', type: 'utilizes' },

    // Backend language connections
    { source: 'nodejs', target: 'microservices', type: 'enables' },
    { source: 'golang', target: 'microservices', type: 'enables' },
    { source: 'python', target: 'microservices', type: 'enables' },
    { source: 'java-spring', target: 'spring-webflux', type: 'foundation' },
    { source: 'spring-webflux', target: 'event-driven', type: 'implements' },

    // Architecture foundations
    { source: 'design-patterns', target: 'system-architecture', type: 'foundation' },
    { source: 'api-design', target: 'microservices', type: 'enables' },
    { source: 'microservices', target: 'system-architecture', type: 'component' },
    { source: 'event-driven', target: 'system-architecture', type: 'pattern' },
    { source: 'system-architecture', target: 'api-design', type: 'requires' },

    // Cloud infrastructure connections
    { source: 'terraform', target: 'aws', type: 'manages' },
    { source: 'cloudformation', target: 'aws', type: 'manages' },
    { source: 'aws', target: 'serverless', type: 'provides' },
    { source: 'serverless', target: 'event-driven', type: 'implements' },

    // DevOps pipeline connections
    { source: 'docker', target: 'kubernetes', type: 'prerequisite' },
    { source: 'kubernetes', target: 'aws', type: 'deploys-on' },
    { source: 'cicd', target: 'docker', type: 'builds' },
    { source: 'cicd', target: 'kubernetes', type: 'deploys' },
    { source: 'cicd', target: 'aws', type: 'deploys' },
    { source: 'monitoring', target: 'kubernetes', type: 'observes' },
    { source: 'monitoring', target: 'microservices', type: 'tracks' },

    // Data and streaming connections
    { source: 'databases', target: 'system-architecture', type: 'supports' },
    { source: 'data-streaming', target: 'event-driven', type: 'implements' },
    { source: 'data-streaming', target: 'microservices', type: 'connects' },
    { source: 'databases', target: 'data-analytics', type: 'feeds' },
    { source: 'data-analytics', target: 'machine-learning', type: 'progression' },

    // Leadership and technical expertise
    { source: 'team-leadership', target: 'technical-mentoring', type: 'includes' },
    { source: 'team-leadership', target: 'project-management', type: 'requires' },
    { source: 'architecture-reviews', target: 'system-architecture', type: 'governs' },
    { source: 'technical-mentoring', target: 'architecture-reviews', type: 'teaches' },

    // Tools and quality connections
    { source: 'git', target: 'cicd', type: 'foundation' },
    { source: 'testing', target: 'cicd', type: 'component' },
    { source: 'security', target: 'system-architecture', type: 'requirement' },
    { source: 'security', target: 'aws', type: 'secures' },
    { source: 'performance', target: 'system-architecture', type: 'optimizes' },
    { source: 'performance', target: 'monitoring', type: 'measured-by' },

    // Cross-platform integration
    { source: 'golang', target: 'kubernetes', type: 'native-language' },
    { source: 'python', target: 'machine-learning', type: 'primary-language' },
    { source: 'terraform', target: 'kubernetes', type: 'provisions' },
    { source: 'event-driven', target: 'data-streaming', type: 'pattern' },

    // Advanced architecture patterns
    { source: 'api-design', target: 'event-driven', type: 'complements' },
    { source: 'microservices', target: 'event-driven', type: 'utilizes' },
    { source: 'spring-webflux', target: 'performance', type: 'improves' },
    { source: 'serverless', target: 'performance', type: 'scales' }
  ]
};

export const personalInfo = {
  name: 'Assefa Tesfay',
  title: 'Senior Software Engineer & Technical Architect',
  experience: '8+ Years',
  location: 'Remote',
  bio: 'Passionate senior engineer specializing in distributed systems, cloud architecture, and high-performance applications. Expert in building scalable microservices, event-driven architectures, and leading engineering teams to deliver enterprise-grade solutions.',
  highlights: [
    'Architected microservices platform serving 10M+ requests/day',
    'Led migration to event-driven architecture reducing latency by 60%',
    'Built cloud-native solutions on AWS with 99.9% uptime',
    'Mentored 20+ engineers across multiple technology stacks',
    'Designed API frameworks adopted by 15+ development teams',
    'Implemented CI/CD pipelines reducing deployment time by 80%',
    'Expert in Go, Python, Java, React/Next.js, and Node.js ecosystems',
    'Deep expertise in Kubernetes, Docker, Terraform, and AWS services'
  ]
};
