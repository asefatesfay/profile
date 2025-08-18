// Skills and career progression data
export const skillsData = {
  categories: {
    'frontend': {
      id: 'frontend',
      title: 'Frontend Development',
      color: '#3B82F6',
      position: { x: 100, y: 100 }
    },
    'backend': {
      id: 'backend', 
      title: 'Backend Development',
      color: '#10B981',
      position: { x: 400, y: 100 }
    },
    'architecture': {
      id: 'architecture',
      title: 'System Architecture & Design',
      color: '#8B5CF6',
      position: { x: 700, y: 100 }
    },
    'cloud': {
      id: 'cloud',
      title: 'Cloud & Infrastructure',
      color: '#F59E0B',
      position: { x: 1000, y: 100 }
    },
    'devops': {
      id: 'devops',
      title: 'DevOps & Automation',
      color: '#EF4444',
      position: { x: 100, y: 400 }
    },
    'leadership': {
      id: 'leadership',
      title: 'Leadership & Management',
      color: '#EC4899',
      position: { x: 400, y: 400 }
    },
    'data': {
      id: 'data',
      title: 'Data & Analytics',
      color: '#06B6D4',
      position: { x: 700, y: 400 }
    },
    'tools': {
      id: 'tools',
      title: 'Tools & Platforms',
      color: '#84CC16',
      position: { x: 1000, y: 400 }
    }
  },

  skills: [
    // Frontend Skills
    {
      id: 'react',
      title: 'React',
      category: 'frontend',
      level: 'expert',
      status: 'completed',
      description: 'Advanced React development with hooks, context, performance optimization, and scalable architecture patterns',
      yearsOfExperience: 6,
      position: { x: 50, y: 200 },
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
      position: { x: 150, y: 200 },
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
      position: { x: 100, y: 280 },
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

    // Backend Skills
    {
      id: 'nodejs',
      title: 'Node.js',
      category: 'backend',
      level: 'expert',
      status: 'completed',
      description: 'High-performance server-side JavaScript, microservices, and enterprise-grade applications',
      yearsOfExperience: 7,
      position: { x: 350, y: 200 },
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
      id: 'golang',
      title: 'Go (Golang)',
      category: 'backend',
      level: 'expert',
      status: 'completed',
      description: 'Concurrent programming, microservices, high-performance APIs, and cloud-native applications',
      yearsOfExperience: 5,
      position: { x: 450, y: 200 },
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
      id: 'python',
      title: 'Python',
      category: 'backend',
      level: 'expert',
      status: 'completed',
      description: 'Backend development, automation, data processing, and ML integration',
      yearsOfExperience: 6,
      position: { x: 400, y: 280 },
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
      id: 'java-spring',
      title: 'Java Spring Boot',
      category: 'backend',
      level: 'expert',
      status: 'completed',
      description: 'Enterprise Java development, Spring Boot, Spring WebFlux for reactive programming',
      yearsOfExperience: 4,
      position: { x: 320, y: 350 },
      detailedAccomplishments: [
        'Built enterprise Spring Boot applications with 50+ microservices',
        'Implemented Spring Security with OAuth2 and JWT authentication',
        'Created JPA repositories with custom queries and specifications',
        'Built reactive programming solutions with Spring WebFlux',
        'Implemented Spring Cloud Gateway for API management',
        'Created comprehensive integration tests with TestContainers',
        'Built monitoring with Spring Actuator and Micrometer',
        'Implemented caching strategies with Redis and Spring Cache',
        'Created automated documentation with Spring REST Docs',
        'Built batch processing with Spring Batch for large datasets'
      ],
      technologies: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Spring Cloud', 'Maven', 'Gradle', 'Hibernate'],
      keyMetrics: [
        '50+ microservices built',
        '99.8% application uptime',
        '5ms average response time',
        '100% test coverage achieved'
      ]
    },
    {
      id: 'spring-webflux',
      title: 'Spring WebFlux',
      category: 'backend',
      level: 'advanced',
      status: 'completed',
      description: 'Reactive programming with Spring WebFlux, non-blocking I/O, and asynchronous processing',
      yearsOfExperience: 3,
      position: { x: 480, y: 350 },
      detailedAccomplishments: [
        'Built reactive microservices handling 50K+ concurrent connections',
        'Implemented non-blocking I/O with Mono and Flux reactive streams',
        'Created WebClient for reactive HTTP communications',
        'Built functional routing with RouterFunction and HandlerFunction',
        'Implemented backpressure handling for high-throughput scenarios',
        'Created reactive database access with R2DBC',
        'Built streaming APIs for real-time data delivery',
        'Implemented error handling with onErrorResume and retry mechanisms',
        'Created reactive testing with StepVerifier and WebTestClient',
        'Optimized performance achieving 10x throughput improvement'
      ],
      technologies: ['Spring WebFlux', 'Reactor', 'R2DBC', 'WebClient', 'Netty', 'Mono/Flux', 'RouterFunction'],
      keyMetrics: [
        '50K+ concurrent connections',
        '10x throughput improvement',
        '90% reduction in thread usage',
        '5ms reactive response time'
      ]
    },

    // Architecture Skills
    {
      id: 'api-design',
      title: 'API Design',
      category: 'architecture',
      level: 'expert',
      status: 'completed',
      description: 'RESTful APIs, GraphQL, OpenAPI specification, API versioning, and best practices',
      yearsOfExperience: 7,
      position: { x: 650, y: 200 },
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
    {
      id: 'system-architecture',
      title: 'System Architecture',
      category: 'architecture',
      level: 'expert',
      status: 'completed',
      description: 'Large-scale distributed systems, scalability patterns, performance optimization',
      yearsOfExperience: 6,
      position: { x: 750, y: 200 },
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
      description: 'Service decomposition, inter-service communication, distributed system patterns',
      yearsOfExperience: 5,
      position: { x: 620, y: 280 },
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
      id: 'event-driven',
      title: 'Event-Driven Architecture',
      category: 'architecture',
      level: 'expert',
      status: 'completed',
      description: 'Event sourcing, CQRS, message queues, pub/sub patterns, and asynchronous processing',
      yearsOfExperience: 4,
      position: { x: 780, y: 280 },
      detailedAccomplishments: [
        'Designed event-driven system processing 1M+ events per hour',
        'Implemented CQRS pattern separating read/write operations',
        'Built event sourcing system with complete audit trail capability',
        'Created saga patterns for distributed transaction management',
        'Implemented dead letter queues and retry mechanisms',
        'Built event replay capabilities for system recovery',
        'Designed event schemas with backward/forward compatibility',
        'Implemented event streaming with Apache Kafka clusters',
        'Created event-driven microservices reducing coupling by 80%',
        'Built real-time notification system using WebSockets and events'
      ],
      technologies: ['Apache Kafka', 'RabbitMQ', 'Event Sourcing', 'CQRS', 'WebSockets', 'Saga Pattern'],
      keyMetrics: [
        '1M+ events processed per hour',
        '80% reduction in service coupling',
        '99.99% event delivery reliability',
        '5ms average event processing time'
      ]
    },
    {
      id: 'design-patterns',
      title: 'Design Patterns',
      category: 'architecture',
      level: 'expert',
      status: 'completed',
      description: 'Gang of Four patterns, architectural patterns, SOLID principles, clean architecture',
      yearsOfExperience: 8,
      position: { x: 700, y: 350 },
      detailedAccomplishments: [
        'Applied SOLID principles across 100+ classes and modules',
        'Implemented GoF patterns: Singleton, Factory, Observer, Strategy, Command',
        'Created architectural patterns: MVC, MVP, MVVM, Clean Architecture',
        'Built enterprise patterns: Repository, Unit of Work, Specification',
        'Implemented messaging patterns: Publish-Subscribe, Message Queue',
        'Created behavioral patterns for complex business rule engines',
        'Built creational patterns for flexible object instantiation',
        'Implemented structural patterns for system composition',
        'Created domain-driven design patterns with aggregates and entities',
        'Mentored teams on pattern selection and implementation strategies'
      ],
      technologies: ['SOLID Principles', 'Gang of Four', 'Clean Architecture', 'DDD', 'Enterprise Patterns'],
      keyMetrics: [
        '100+ classes following SOLID principles',
        '90% code maintainability score',
        '50% reduction in code complexity',
        '80% faster onboarding for new developers'
      ]
    },

    // Cloud & Infrastructure
    {
      id: 'aws',
      title: 'AWS',
      category: 'cloud',
      level: 'expert',
      status: 'completed',
      description: 'EC2, ECS, EKS, Lambda, API Gateway, RDS, S3, CloudFormation, and multi-AZ deployments',
      yearsOfExperience: 6,
      position: { x: 950, y: 200 },
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
      level: 'expert',
      status: 'completed',
      description: 'Infrastructure as Code, multi-cloud deployments, state management, and modules',
      yearsOfExperience: 4,
      position: { x: 1050, y: 200 },
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
    {
      id: 'cloudformation',
      title: 'CloudFormation',
      category: 'cloud',
      level: 'advanced',
      status: 'completed',
      description: 'AWS native IaC, stack management, nested stacks, and resource orchestration',
      yearsOfExperience: 3,
      position: { x: 920, y: 280 },
      detailedAccomplishments: [
        'Created CloudFormation templates for 20+ AWS service configurations',
        'Built nested stack architecture for modular infrastructure',
        'Implemented custom CloudFormation resources with Lambda functions',
        'Created stack sets for multi-account deployments',
        'Built drift detection and remediation workflows',
        'Implemented parameterized templates for environment-specific deployments',
        'Created CloudFormation macros for template transformation',
        'Built rollback strategies and stack protection policies',
        'Implemented cross-stack references and exports',
        'Created automated stack deployment pipelines with CodePipeline'
      ],
      technologies: ['CloudFormation', 'AWS CDK', 'Stack Sets', 'Custom Resources', 'Lambda', 'CodePipeline'],
      keyMetrics: [
        '20+ service configurations automated',
        '100% infrastructure as code coverage',
        '60% faster environment provisioning',
        '95% reduction in configuration errors'
      ]
    },
    {
      id: 'serverless',
      title: 'Serverless',
      category: 'cloud',
      level: 'advanced',
      status: 'completed',
      description: 'AWS Lambda, API Gateway, serverless patterns, and event-driven architectures',
      yearsOfExperience: 3,
      position: { x: 1080, y: 280 },
      detailedAccomplishments: [
        'Built serverless applications with 100+ Lambda functions',
        'Implemented serverless API Gateway with custom authorizers',
        'Created event-driven workflows with Step Functions',
        'Built serverless data processing pipelines with S3 triggers',
        'Implemented cold start optimization reducing latency by 70%',
        'Created serverless monitoring with CloudWatch and X-Ray',
        'Built serverless authentication with Cognito and Lambda authorizers',
        'Implemented serverless batch processing with SQS and Lambda',
        'Created cost optimization strategies reducing serverless costs by 40%',
        'Built serverless CI/CD with SAM and CDK deployments'
      ],
      technologies: ['AWS Lambda', 'API Gateway', 'Step Functions', 'SAM', 'Serverless Framework', 'CloudWatch', 'X-Ray'],
      keyMetrics: [
        '100+ Lambda functions deployed',
        '70% cold start latency reduction',
        '40% cost optimization achieved',
        '99.9% serverless function availability'
      ]
    },

    // DevOps Skills
    {
      id: 'docker',
      title: 'Docker',
      category: 'devops',
      level: 'expert',
      status: 'completed',
      description: 'Containerization, multi-stage builds, optimization, and container orchestration',
      yearsOfExperience: 5,
      position: { x: 50, y: 500 },
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
      level: 'expert',
      status: 'completed',
      description: 'Container orchestration, cluster management, service mesh, and production deployments',
      yearsOfExperience: 4,
      position: { x: 150, y: 500 },
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
      description: 'GitHub Actions, Jenkins, GitLab CI, automated testing, and deployment pipelines',
      yearsOfExperience: 6,
      position: { x: 100, y: 580 },
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
    {
      id: 'monitoring',
      title: 'Monitoring & Observability',
      category: 'devops',
      level: 'advanced',
      status: 'completed',
      description: 'Prometheus, Grafana, ELK stack, distributed tracing, and performance monitoring',
      yearsOfExperience: 4,
      position: { x: 50, y: 650 },
      detailedAccomplishments: [
        'Built comprehensive monitoring for 100+ microservices',
        'Implemented Prometheus and Grafana with custom dashboards',
        'Created ELK stack for centralized logging and log analysis',
        'Built distributed tracing with Jaeger and OpenTelemetry',
        'Implemented SLI/SLO monitoring with error budgets',
        'Created alerting rules with PagerDuty integration',
        'Built application performance monitoring (APM) with New Relic',
        'Implemented synthetic monitoring for critical user journeys',
        'Created cost monitoring dashboards for cloud resources',
        'Built incident response playbooks with automated remediation'
      ],
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'OpenTelemetry', 'New Relic', 'PagerDuty'],
      keyMetrics: [
        '100+ services monitored',
        '99.9% monitoring uptime',
        '5-minute mean time to detection',
        '90% reduction in false positives'
      ]
    },

    // Leadership Skills
    {
      id: 'team-leadership',
      title: 'Team Leadership',
      category: 'leadership',
      level: 'expert',
      status: 'completed',
      description: 'Leading engineering teams, technical vision, cross-functional collaboration',
      yearsOfExperience: 5,
      position: { x: 350, y: 500 },
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
      id: 'technical-mentoring',
      title: 'Technical Mentoring',
      category: 'leadership',
      level: 'expert',
      status: 'completed',
      description: 'Coaching senior developers, establishing engineering practices, code reviews',
      yearsOfExperience: 4,
      position: { x: 450, y: 500 },
      detailedAccomplishments: [
        'Mentored 25+ engineers across junior to senior levels',
        'Created technical training programs for new technologies',
        'Established code review standards improving code quality by 60%',
        'Built technical interview processes for hiring top talent',
        'Created technical documentation standards and templates',
        'Implemented pair programming practices for knowledge sharing',
        'Built technical career progression frameworks',
        'Created brown bag sessions and tech talks program',
        'Established architectural decision record (ADR) processes',
        'Built cross-team knowledge sharing initiatives'
      ],
      technologies: ['Code Reviews', 'Documentation', 'ADRs', 'Technical Training', 'Knowledge Management'],
      keyMetrics: [
        '25+ engineers mentored',
        '60% code quality improvement',
        '90% mentee retention rate',
        '80% internal promotion rate'
      ]
    },
    {
      id: 'project-management',
      title: 'Project Management',
      category: 'leadership',
      level: 'advanced',
      status: 'completed',
      description: 'Agile methodologies, sprint planning, stakeholder management, delivery optimization',
      yearsOfExperience: 5,
      position: { x: 400, y: 580 },
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
    {
      id: 'architecture-reviews',
      title: 'Architecture Reviews',
      category: 'leadership',
      level: 'expert',
      status: 'completed',
      description: 'Technical decision making, architecture governance, risk assessment',
      yearsOfExperience: 4,
      position: { x: 320, y: 650 },
      detailedAccomplishments: [
        'Led architecture review board for 30+ major technical decisions',
        'Created architecture governance frameworks and standards',
        'Built technical risk assessment methodologies',
        'Established architecture documentation standards',
        'Created technology evaluation and selection processes',
        'Built cross-team architecture alignment processes',
        'Implemented architecture compliance monitoring',
        'Created architecture review templates and checklists',
        'Built technical debt assessment and prioritization frameworks',
        'Led architecture migration strategies and roadmaps'
      ],
      technologies: ['Architecture Documentation', 'Risk Assessment', 'Technical Standards', 'Governance Frameworks'],
      keyMetrics: [
        '30+ architecture decisions reviewed',
        '95% architecture compliance rate',
        '50% reduction in technical debt',
        '90% team alignment on technical decisions'
      ]
    },

    // Data Skills
    {
      id: 'databases',
      title: 'Database Design',
      category: 'data',
      level: 'expert',
      status: 'completed',
      description: 'PostgreSQL, MongoDB, Redis, database optimization, sharding strategies',
      yearsOfExperience: 7,
      position: { x: 650, y: 500 },
      detailedAccomplishments: [
        'Designed database schemas for 20+ production applications',
        'Implemented database sharding strategies handling TBs of data',
        'Optimized query performance achieving 90% speed improvements',
        'Built multi-master replication setups for high availability',
        'Implemented database backup and disaster recovery strategies',
        'Created database monitoring and alerting systems',
        'Built data migration pipelines with zero downtime',
        'Implemented database security with encryption and access controls',
        'Created database capacity planning and scaling strategies',
        'Built polyglot persistence with SQL and NoSQL databases'
      ],
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Cassandra', 'ElasticSearch', 'DynamoDB'],
      keyMetrics: [
        '20+ production databases designed',
        '90% query performance improvement',
        'TBs of data managed daily',
        '99.99% database uptime'
      ]
    },
    {
      id: 'data-streaming',
      title: 'Data Streaming',
      category: 'data',
      level: 'advanced',
      status: 'completed',
      description: 'Apache Kafka, event streaming, real-time processing, data pipelines',
      yearsOfExperience: 3,
      position: { x: 750, y: 500 },
      detailedAccomplishments: [
        'Built real-time data streaming pipelines processing 1M+ events/hour',
        'Implemented Apache Kafka clusters with multi-region replication',
        'Created stream processing applications with Kafka Streams',
        'Built real-time analytics with Apache Flink and Kafka',
        'Implemented exactly-once semantics for critical data flows',
        'Created schema registry for Avro and JSON schema evolution',
        'Built monitoring and alerting for streaming pipelines',
        'Implemented back-pressure handling for high-throughput scenarios',
        'Created data lineage tracking for streaming data',
        'Built real-time ETL pipelines with stream processing'
      ],
      technologies: ['Apache Kafka', 'Kafka Streams', 'Apache Flink', 'Schema Registry', 'Confluent Platform', 'Avro'],
      keyMetrics: [
        '1M+ events processed per hour',
        '99.9% data delivery guarantee',
        'Sub-second processing latency',
        '10+ real-time pipelines in production'
      ]
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      category: 'data',
      level: 'intermediate',
      status: 'completed',
      description: 'Business intelligence, metrics design, data-driven decision making',
      yearsOfExperience: 3,
      position: { x: 700, y: 580 },
      detailedAccomplishments: [
        'Built analytics dashboards for C-level executive reporting',
        'Designed KPI frameworks and business metrics tracking',
        'Created data warehousing solutions with dimensional modeling',
        'Implemented A/B testing frameworks for product optimization',
        'Built customer analytics and segmentation models',
        'Created real-time business intelligence with streaming data',
        'Implemented data governance and quality frameworks',
        'Built predictive analytics models for business forecasting',
        'Created automated reporting systems reducing manual effort by 70%',
        'Implemented data visualization best practices with Tableau and Power BI'
      ],
      technologies: ['Tableau', 'Power BI', 'SQL', 'Python', 'R', 'Apache Spark', 'Data Warehousing', 'ETL/ELT'],
      keyMetrics: [
        '15+ executive dashboards created',
        '70% reduction in manual reporting',
        '90% data accuracy achieved',
        '50+ KPIs tracked automatically'
      ]
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      category: 'data',
      level: 'beginner',
      status: 'in-progress',
      description: 'ML algorithms, model training, AI integration into applications',
      yearsOfExperience: 1,
      position: { x: 620, y: 650 },
      detailedAccomplishments: [
        'Built recommendation system using collaborative filtering',
        'Implemented classification models with scikit-learn',
        'Created data preprocessing pipelines for ML workflows',
        'Built REST APIs for model serving and inference',
        'Implemented model evaluation and validation frameworks',
        'Created feature engineering pipelines for structured data',
        'Built MLOps practices with model versioning and monitoring',
        'Implemented A/B testing for ML model performance',
        'Created automated model retraining pipelines',
        'Built integration between ML models and production applications'
      ],
      technologies: ['Python', 'scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'MLflow', 'Docker', 'FastAPI'],
      keyMetrics: [
        '5+ ML models deployed to production',
        '20% improvement in recommendation accuracy',
        '95% model uptime in production',
        '3+ automated ML pipelines built'
      ]
    },

    // Tools & Platforms
    {
      id: 'git',
      title: 'Git & Version Control',
      category: 'tools',
      level: 'expert',
      status: 'completed',
      description: 'Advanced Git workflows, branching strategies, code collaboration',
      yearsOfExperience: 8,
      position: { x: 950, y: 500 },
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
      position: { x: 1050, y: 500 },
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
      position: { x: 1000, y: 580 },
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
      position: { x: 920, y: 650 },
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
