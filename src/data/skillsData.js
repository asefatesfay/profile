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
      ],
      freeResources: [
        {
          title: 'React Official Documentation',
          url: 'https://react.dev/',
          type: 'documentation',
          description: 'The best starting point - comprehensive and up-to-date',
          difficulty: 'beginner',
          timeToComplete: '3-4 hours',
          rating: 4.9,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'React Course by Corey Schafer',
          url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTBb0w4k4GowjuOJWa5R5Z9l',
          type: 'youtube',
          description: 'Excellent beginner to advanced React tutorials',
          difficulty: 'beginner',
          timeToComplete: '8-10 hours',
          rating: 4.7,
          lastUpdated: '2024-10-15'
        },
        {
          title: 'freeCodeCamp React Course',
          url: 'https://www.youtube.com/watch?v=4UZrsTqkcW4',
          type: 'youtube',
          description: '10+ hour comprehensive React course',
          difficulty: 'beginner-intermediate',
          timeToComplete: '12 hours',
          rating: 4.8,
          lastUpdated: '2024-11-20'
        },
        {
          title: 'React Hooks by Ben Awad',
          url: 'https://www.youtube.com/playlist?list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM',
          type: 'youtube',
          description: 'Deep dive into React Hooks',
          difficulty: 'intermediate',
          timeToComplete: '4-5 hours',
          rating: 4.6,
          lastUpdated: '2024-09-30'
        },
        {
          title: 'Epic React by Kent C. Dodds (Free Articles)',
          url: 'https://kentcdodds.com/blog/?q=react',
          type: 'blog',
          description: 'High-quality React articles and patterns',
          difficulty: 'advanced',
          timeToComplete: '6-8 hours',
          rating: 4.9,
          lastUpdated: '2024-12-10'
        }
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
      ],
      freeResources: [
        {
          title: 'Next.js Official Documentation',
          url: 'https://nextjs.org/docs',
          type: 'documentation',
          description: 'Comprehensive docs with examples and best practices',
          difficulty: 'beginner-intermediate',
          timeToComplete: '4-6 hours',
          rating: 4.8,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'Next.js by Traversy Media',
          url: 'https://www.youtube.com/watch?v=mTz0GXj8NN0',
          type: 'youtube',
          description: 'Complete Next.js crash course',
          difficulty: 'beginner',
          timeToComplete: '1.5 hours',
          rating: 4.7,
          lastUpdated: '2024-11-15'
        },
        {
          title: 'Next.js Tutorial by The Net Ninja',
          url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw',
          type: 'youtube',
          description: 'Step-by-step Next.js tutorial series',
          difficulty: 'beginner-intermediate',
          timeToComplete: '6-8 hours',
          rating: 4.6,
          lastUpdated: '2024-10-20'
        },
        {
          title: 'Next.js Examples Repository',
          url: 'https://github.com/vercel/next.js/tree/canary/examples',
          type: 'github',
          description: 'Official examples for every Next.js feature',
          difficulty: 'intermediate',
          timeToComplete: '2-3 hours',
          rating: 4.5,
          lastUpdated: '2024-12-10'
        },
        {
          title: 'Next.js Learn Course',
          url: 'https://nextjs.org/learn',
          type: 'course',
          description: 'Free interactive course by Vercel',
          difficulty: 'beginner',
          timeToComplete: '8-10 hours',
          rating: 4.9,
          lastUpdated: '2024-11-30'
        }
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
      ],
      freeResources: [
        {
          title: 'TypeScript Official Handbook',
          url: 'https://www.typescriptlang.org/docs/',
          type: 'documentation',
          description: 'The definitive guide to TypeScript',
          difficulty: 'beginner-intermediate',
          timeToComplete: '6-8 hours',
          rating: 4.9,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'TypeScript Course by Maximilian Schwarzmüller',
          url: 'https://www.youtube.com/watch?v=BwuLxPH8IDs',
          type: 'youtube',
          description: 'Complete TypeScript course from basics to advanced',
          difficulty: 'beginner-intermediate',
          timeToComplete: '3 hours',
          rating: 4.7,
          lastUpdated: '2024-11-10'
        },
        {
          title: 'TypeScript Deep Dive',
          url: 'https://basarat.gitbook.io/typescript/',
          type: 'book',
          description: 'Free online book covering TypeScript in depth',
          difficulty: 'intermediate-advanced',
          timeToComplete: '10-12 hours',
          rating: 4.8,
          lastUpdated: '2024-10-15'
        },
        {
          title: 'Execute Program TypeScript Course',
          url: 'https://www.executeprogram.com/courses/typescript',
          type: 'course',
          description: 'Interactive TypeScript exercises (free tier available)',
          difficulty: 'intermediate',
          timeToComplete: '8-10 hours',
          rating: 4.6,
          lastUpdated: '2024-11-20'
        },
        {
          title: 'Type Challenges',
          url: 'https://github.com/type-challenges/type-challenges',
          type: 'github',
          description: 'Collection of TypeScript type challenges',
          difficulty: 'advanced',
          timeToComplete: '15-20 hours',
          rating: 4.5,
          lastUpdated: '2024-12-05'
        }
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
      ],
      freeResources: [
        {
          title: 'Node.js Official Documentation',
          url: 'https://nodejs.org/docs/',
          type: 'documentation',
          description: 'Comprehensive official docs with API references and guides',
          difficulty: 'beginner-intermediate',
          timeToComplete: '5-6 hours',
          rating: 4.8,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'Node.js with TypeScript Tutorial by Academind',
          url: 'https://www.youtube.com/watch?v=1UcLoS0gUO0',
          type: 'youtube',
          description: 'Complete Node.js + TypeScript setup and development guide',
          difficulty: 'intermediate',
          timeToComplete: '2 hours',
          rating: 4.7,
          lastUpdated: '2024-11-15'
        },
        {
          title: 'Express.js + TypeScript Tutorial by Ben Awad',
          url: 'https://www.youtube.com/watch?v=H91aqUHn8sE',
          type: 'youtube',
          description: 'Building REST APIs with Express.js and TypeScript',
          difficulty: 'intermediate',
          timeToComplete: '1.5 hours',
          rating: 4.6,
          lastUpdated: '2024-10-20'
        },
        {
          title: 'Node.js TypeScript Starter by Microsoft',
          url: 'https://github.com/microsoft/TypeScript-Node-Starter',
          type: 'github',
          description: 'Production-ready Node.js + TypeScript starter template',
          difficulty: 'intermediate',
          timeToComplete: '2-3 hours',
          rating: 4.5,
          lastUpdated: '2024-11-30'
        },
        {
          title: 'Node.js Best Practices by Yoni Goldberg',
          url: 'https://github.com/goldbergyoni/nodebestpractices',
          type: 'github',
          description: 'Comprehensive Node.js best practices guide (80+ practices)',
          difficulty: 'advanced',
          timeToComplete: '8-10 hours',
          rating: 4.9,
          lastUpdated: '2024-12-10'
        },
        {
          title: 'Fastify TypeScript Documentation',
          url: 'https://www.fastify.io/docs/latest/TypeScript/',
          type: 'documentation',
          description: 'Fast Node.js framework with first-class TypeScript support',
          difficulty: 'intermediate',
          timeToComplete: '3-4 hours',
          rating: 4.7,
          lastUpdated: '2024-11-25'
        }
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
      ],
      freeResources: [
        {
          title: 'Python Official Documentation',
          url: 'https://docs.python.org/3/',
          type: 'documentation',
          description: 'Comprehensive Python documentation and tutorial',
          difficulty: 'beginner-intermediate',
          timeToComplete: '8-10 hours',
          rating: 4.8,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'Python Tutorial by Corey Schafer',
          url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU',
          type: 'youtube',
          description: 'Complete Python tutorial series covering all aspects',
          difficulty: 'beginner',
          timeToComplete: '12-15 hours',
          rating: 4.9,
          lastUpdated: '2024-11-20'
        },
        {
          title: 'Automate the Boring Stuff with Python',
          url: 'https://automatetheboringstuff.com/',
          type: 'tutorial',
          description: 'Free online book for practical Python programming',
          difficulty: 'beginner',
          timeToComplete: '10-12 hours',
          rating: 4.7,
          lastUpdated: '2024-10-30'
        },
        {
          title: 'Python for Everybody by University of Michigan',
          url: 'https://www.youtube.com/playlist?list=PLlRFEj9H3Oj7Bp8-DfGpOZPiJ0YGTBb_k',
          type: 'youtube',
          description: 'University-level Python course for beginners',
          difficulty: 'beginner',
          timeToComplete: '15-20 hours',
          rating: 4.6,
          lastUpdated: '2024-11-15'
        },
        {
          title: 'Real Python Tutorials',
          url: 'https://realpython.com/',
          type: 'tutorial',
          description: 'High-quality Python tutorials and articles (many free)'
        }
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
      ],
      freeResources: [
        {
          title: 'Go Official Documentation',
          url: 'https://go.dev/doc/',
          type: 'documentation',
          description: 'Official Go documentation and language specification',
          difficulty: 'beginner-intermediate',
          timeToComplete: '6-8 hours',
          rating: 4.8,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'Go Web Development by TechWorld with Nana',
          url: 'https://www.youtube.com/watch?v=yyUHQIec83I',
          type: 'youtube',
          description: 'Building web applications with Go',
          difficulty: 'intermediate',
          timeToComplete: '2.5 hours',
          rating: 4.6,
          lastUpdated: '2024-11-20'
        },
        {
          title: 'Gin Web Framework Tutorial',
          url: 'https://gin-gonic.com/docs/',
          type: 'documentation',
          description: 'Official Gin framework documentation and examples',
          difficulty: 'intermediate',
          timeToComplete: '4-5 hours',
          rating: 4.7,
          lastUpdated: '2024-11-30'
        },
        {
          title: 'Go Fiber Framework Tutorial by TutorialEdge',
          url: 'https://tutorialedge.net/golang/basic-rest-api-go-fiber/',
          type: 'tutorial',
          description: 'Building REST APIs with Go Fiber framework',
          difficulty: 'intermediate',
          timeToComplete: '3-4 hours',
          rating: 4.5,
          lastUpdated: '2024-10-25'
        },
        {
          title: 'gRPC with Go Tutorial by TutorialEdge',
          url: 'https://tutorialedge.net/golang/go-grpc-beginners-tutorial/',
          type: 'tutorial',
          description: 'Building gRPC services with Go',
          difficulty: 'advanced',
          timeToComplete: '5-6 hours',
          rating: 4.6,
          lastUpdated: '2024-11-15'
        },
        {
          title: 'Go Concurrency Patterns by Google',
          url: 'https://www.youtube.com/watch?v=f6kdp27TYZs',
          type: 'youtube',
          description: 'Advanced Go concurrency patterns and best practices',
          difficulty: 'advanced',
          timeToComplete: '1 hour',
          rating: 4.8,
          lastUpdated: '2024-09-30'
        }
      ]
    },
    {
      id: 'java',
      title: 'Java',
      category: 'backend',
      level: 'advanced',
      status: 'completed',
      description: 'Enterprise Java development with Spring framework, reactive programming, and microservices architecture. Specialized in converting traditional Spring Boot REST APIs to reactive Spring WebFlux for improved performance.',
      yearsOfExperience: 2,
      position: { x: 550, y: 230 }, // Backend category, second row
      detailedAccomplishments: [
        'Successfully converted traditional Spring Boot REST APIs to reactive Spring WebFlux, improving performance by 40%',
        'Developed reactive microservices using Spring WebFlux and Project Reactor',
        'Implemented non-blocking I/O operations with reactive streams for high-throughput applications',
        'Built reactive data access layers using Spring Data R2DBC for database operations',
        'Developed RESTful and reactive APIs using Spring Boot and Spring WebFlux',
        'Implemented comprehensive security features using Spring Security (both MVC and WebFlux)',
        'Created reactive error handling and backpressure management strategies',
        'Optimized memory usage and thread efficiency through reactive programming patterns',
        'Built microservices deployed on AWS with Docker containers',
        'Implemented comprehensive testing strategies for reactive applications (WebTestClient, StepVerifier)',
        'Created CI/CD pipelines for automated deployment of reactive applications',
        'Mentored team members on reactive programming concepts and Spring WebFlux best practices',
        'Performed performance analysis and optimization of both traditional and reactive applications'
      ],
      technologies: ['Java 11+', 'Spring Boot', 'Spring WebFlux', 'Project Reactor', 'Spring Security', 'Spring Data JPA', 'Spring Data R2DBC', 'Reactive Streams', 'Docker', 'AWS', 'JUnit', 'WebTestClient', 'Maven'],
      keyMetrics: [
        'Converted 5+ traditional REST APIs to reactive WebFlux, achieving 40% performance improvement',
        'Developed and deployed 10+ microservices (both traditional and reactive)',
        'Achieved 99.9% uptime for critical reactive services handling 10k+ concurrent requests',
        'Reduced memory footprint by 25% through reactive programming optimizations',
        'Improved code quality with 85% test coverage including reactive testing strategies'
      ],
      freeResources: [
        {
          title: 'Spring Boot Official Documentation',
          url: 'https://spring.io/projects/spring-boot',
          type: 'documentation',
          description: 'Official Spring Boot documentation and guides',
          difficulty: 'intermediate',
          timeToComplete: '6-8 hours',
          rating: 4.8,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'Spring Boot Tutorial by Java Brains',
          url: 'https://www.youtube.com/playlist?list=PLqq-6Pq4lTTbx8p2oCgcAQGQyqN8XeA1x',
          type: 'youtube',
          description: 'Comprehensive Spring Boot tutorial series',
          difficulty: 'beginner-intermediate',
          timeToComplete: '8-10 hours',
          rating: 4.7,
          lastUpdated: '2024-11-20'
        },
        {
          title: 'Spring WebFlux Tutorial by Dan Vega',
          url: 'https://www.youtube.com/watch?v=M3jNn3HMeWg',
          type: 'youtube',
          description: 'Reactive programming with Spring WebFlux',
          difficulty: 'advanced',
          timeToComplete: '1.5 hours',
          rating: 4.6,
          lastUpdated: '2024-10-30'
        },
        {
          title: 'Project Reactor Core Features',
          url: 'https://projectreactor.io/docs/core/release/reference/',
          type: 'documentation',
          description: 'Official Project Reactor documentation for reactive streams',
          difficulty: 'advanced',
          timeToComplete: '4-6 hours',
          rating: 4.8,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'Reactive Programming with Spring Boot 3',
          url: 'https://www.youtube.com/watch?v=IK26KdGRl48',
          type: 'youtube',
          description: 'Modern reactive programming patterns and best practices',
          difficulty: 'advanced',
          timeToComplete: '2 hours',
          rating: 4.7,
          lastUpdated: '2024-11-28'
        },
        {
          title: 'Spring Security Tutorial by Java Brains',
          url: 'https://www.youtube.com/playlist?list=PLqq-6Pq4lTTYTEooakHchTGglSvkZAjnE',
          type: 'youtube',
          description: 'Complete Spring Security tutorial series',
          difficulty: 'intermediate-advanced',
          timeToComplete: '6-8 hours',
          rating: 4.8,
          lastUpdated: '2024-11-15'
        },
        {
          title: 'Spring Boot Microservices by Programming Techie',
          url: 'https://www.youtube.com/playlist?list=PLSVW22jAG8pBnhAdq9S8BpLnZ0_jVBj0c',
          type: 'youtube',
          description: 'Building microservices with Spring Boot',
          difficulty: 'advanced',
          timeToComplete: '10-12 hours',
          rating: 4.7,
          lastUpdated: '2024-11-25'
        },
        {
          title: 'Spring Data JPA Tutorial by Amigoscode',
          url: 'https://www.youtube.com/watch?v=8SGI_XS5OPw',
          type: 'youtube',
          description: 'Complete Spring Data JPA and Hibernate tutorial',
          difficulty: 'intermediate',
          timeToComplete: '3-4 hours',
          rating: 4.6,
          lastUpdated: '2024-10-20'
        }
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
      ],
      freeResources: [
        {
          title: 'Microsoft C# Documentation',
          url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
          type: 'documentation',
          description: 'Official C# and .NET documentation',
          difficulty: 'beginner-intermediate',
          timeToComplete: '8-10 hours',
          rating: 4.8,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'C# Tutorial by Mosh Hamedani',
          url: 'https://www.youtube.com/watch?v=gfkTfcpWqAY',
          type: 'youtube',
          description: 'Complete C# tutorial for beginners',
          difficulty: 'beginner',
          timeToComplete: '6 hours',
          rating: 4.7,
          lastUpdated: '2024-10-15'
        },
        {
          title: 'ASP.NET Core Tutorial by kudvenkat',
          url: 'https://www.youtube.com/playlist?list=PL6n9fhu94yhVkdrusLaQsfERmL_Jh4XmU',
          type: 'youtube',
          description: 'Comprehensive ASP.NET Core tutorial series',
          difficulty: 'intermediate',
          timeToComplete: '12-15 hours',
          rating: 4.6,
          lastUpdated: '2024-11-20'
        },
        {
          title: 'Microsoft Learn - C#',
          url: 'https://docs.microsoft.com/en-us/learn/paths/csharp-first-steps/',
          type: 'tutorial',
          description: 'Interactive C# learning path by Microsoft',
          difficulty: 'beginner',
          timeToComplete: '10-12 hours',
          rating: 4.7,
          lastUpdated: '2024-11-30'
        },
        {
          title: 'freeCodeCamp C# Course',
          url: 'https://www.youtube.com/watch?v=GhQdlIFylQ8',
          type: 'youtube',
          description: '4-hour comprehensive C# tutorial',
          difficulty: 'beginner',
          timeToComplete: '4 hours',
          rating: 4.5,
          lastUpdated: '2024-09-30'
        }
      ]
    },
    {
      id: 'spring-webflux',
      title: 'Spring WebFlux',
      category: 'backend',
      level: 'advanced',
      status: 'completed',
      description: 'Reactive programming with Spring WebFlux, non-blocking I/O, and reactive streams',
      yearsOfExperience: 2,
      position: { x: 950, y: 230 }, // Backend category, second row
      detailedAccomplishments: [
        'Built reactive REST APIs handling 50K+ concurrent requests',
        'Implemented reactive data access with R2DBC and MongoDB Reactive',
        'Created streaming endpoints with Server-Sent Events (SSE)',
        'Built reactive microservices with Spring Cloud Gateway',
        'Implemented backpressure handling for high-throughput systems',
        'Created reactive security with Spring Security WebFlux',
        'Built reactive testing with WebTestClient and StepVerifier',
        'Optimized memory usage with reactive streams and operators',
        'Implemented reactive circuit breakers and retry mechanisms',
        'Created reactive messaging with Spring Cloud Stream'
      ],
      technologies: ['Spring WebFlux', 'Project Reactor', 'R2DBC', 'MongoDB Reactive', 'Netty', 'Spring Security WebFlux'],
      keyMetrics: [
        '50K+ concurrent requests handled',
        '70% reduction in memory usage vs traditional Spring MVC',
        '90% improvement in throughput for I/O-intensive operations',
        'Sub-10ms response times for non-blocking operations'
      ],
      freeResources: [
        {
          title: 'Spring WebFlux Official Documentation',
          url: 'https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html',
          type: 'documentation',
          description: 'Official Spring WebFlux documentation and guides',
          difficulty: 'advanced',
          timeToComplete: '6-8 hours',
          rating: 4.8,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'Reactive Programming with Spring WebFlux by Dan Vega',
          url: 'https://www.youtube.com/watch?v=M3jNn3HMeWg',
          type: 'youtube',
          description: 'Complete reactive programming tutorial with Spring WebFlux',
          difficulty: 'advanced',
          timeToComplete: '1.5 hours',
          rating: 4.6,
          lastUpdated: '2024-10-30'
        },
        {
          title: 'Project Reactor Documentation',
          url: 'https://projectreactor.io/learn',
          type: 'documentation',
          description: 'Reactive streams library documentation and examples',
          difficulty: 'intermediate-advanced',
          timeToComplete: '8-10 hours',
          rating: 4.7,
          lastUpdated: '2024-11-25'
        },
        {
          title: 'Spring Boot WebFlux Tutorial by Amigoscode',
          url: 'https://www.youtube.com/watch?v=M3jNn3HMeWg',
          type: 'youtube',
          description: 'Building reactive REST APIs with Spring Boot and WebFlux',
          difficulty: 'advanced',
          timeToComplete: '1.5 hours',
          rating: 4.6,
          lastUpdated: '2024-11-10'
        },
        {
          title: 'Reactive Programming Patterns',
          url: 'https://github.com/reactor/reactor-core/tree/main/docs',
          type: 'github',
          description: 'Reactive programming patterns and best practices',
          difficulty: 'advanced',
          timeToComplete: '4-5 hours',
          rating: 4.5,
          lastUpdated: '2024-11-15'
        },
        {
          title: 'R2DBC Tutorial by Spring',
          url: 'https://spring.io/guides/gs/accessing-data-r2dbc/',
          type: 'tutorial',
          description: 'Reactive database access with R2DBC',
          difficulty: 'advanced',
          timeToComplete: '2-3 hours',
          rating: 4.6,
          lastUpdated: '2024-11-20'
        }
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
      ],
      freeResources: [
        {
          title: 'High Scalability Blog',
          url: 'http://highscalability.com/',
          type: 'blog',
          description: 'Real-world system design case studies and patterns',
          difficulty: 'intermediate-advanced',
          timeToComplete: '10-15 hours',
          rating: 4.7,
          lastUpdated: '2024-12-10'
        },
        {
          title: 'System Design Interview by Gaurav Sen',
          url: 'https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX',
          type: 'youtube',
          description: 'System design concepts and interview preparation',
          difficulty: 'intermediate',
          timeToComplete: '8-10 hours',
          rating: 4.6,
          lastUpdated: '2024-11-25'
        },
        {
          title: 'Designing Data-Intensive Applications',
          url: 'https://dataintensive.net/',
          type: 'book',
          description: 'Free chapters on distributed systems concepts',
          difficulty: 'advanced',
          timeToComplete: '20-25 hours',
          rating: 4.9,
          lastUpdated: '2024-10-15'
        },
        {
          title: 'AWS Architecture Center',
          url: 'https://aws.amazon.com/architecture/',
          type: 'documentation',
          description: 'Cloud architecture patterns and best practices',
          difficulty: 'intermediate-advanced',
          timeToComplete: '6-8 hours',
          rating: 4.5,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'System Design Primer',
          url: 'https://github.com/donnemartin/system-design-primer',
          type: 'github',
          description: 'Comprehensive system design resource on GitHub',
          difficulty: 'intermediate',
          timeToComplete: '15-20 hours',
          rating: 4.8,
          lastUpdated: '2024-11-30'
        }
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
      ],
      freeResources: [
        {
          title: 'Microservices Patterns by Chris Richardson',
          url: 'https://microservices.io/',
          type: 'website',
          description: 'Comprehensive patterns and practices for microservices',
          difficulty: 'intermediate-advanced',
          timeToComplete: '8-12 hours',
          rating: 4.8,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'Microservices by Martin Fowler',
          url: 'https://martinfowler.com/articles/microservices.html',
          type: 'article',
          description: 'Foundational article on microservices architecture',
          difficulty: 'intermediate',
          timeToComplete: '2-3 hours',
          rating: 4.9,
          lastUpdated: '2024-11-15'
        },
        {
          title: 'Microservices Tutorial by Tech Primers',
          url: 'https://www.youtube.com/playlist?list=PLTyWtrsGknYdKTppVQDjqy8YrYYAYjH-a',
          type: 'youtube',
          description: 'Complete microservices tutorial series',
          difficulty: 'intermediate',
          timeToComplete: '6-8 hours',
          rating: 4.5,
          lastUpdated: '2024-10-30'
        },
        {
          title: 'Building Microservices by Sam Newman',
          url: 'https://samnewman.io/books/building_microservices/',
          type: 'book',
          description: 'Essential book on microservices (free chapters available)',
          difficulty: 'advanced',
          timeToComplete: '15-20 hours',
          rating: 4.7,
          lastUpdated: '2024-09-20'
        },
        {
          title: 'Microservices with Spring Boot',
          url: 'https://www.youtube.com/watch?v=BLlEgtp2_i8',
          type: 'youtube',
          description: 'Practical microservices implementation guide',
          difficulty: 'intermediate',
          timeToComplete: '3-4 hours',
          rating: 4.4,
          lastUpdated: '2024-11-10'
        }
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
      ],
      freeResources: [
        {
          title: 'RESTful API Design Best Practices',
          url: 'https://restfulapi.net/',
          type: 'website',
          description: 'Comprehensive guide to REST API design principles',
          difficulty: 'intermediate',
          timeToComplete: '4-6 hours',
          rating: 4.6,
          lastUpdated: '2024-11-20'
        },
        {
          title: 'OpenAPI Specification',
          url: 'https://swagger.io/specification/',
          type: 'documentation',
          description: 'Official OpenAPI specification and examples',
          difficulty: 'intermediate',
          timeToComplete: '3-4 hours',
          rating: 4.7,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'GraphQL Tutorial by The Net Ninja',
          url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f',
          type: 'youtube',
          description: 'Complete GraphQL tutorial series',
          difficulty: 'intermediate',
          timeToComplete: '8-10 hours',
          rating: 4.5,
          lastUpdated: '2024-10-15'
        },
        {
          title: 'API Design Patterns by Google',
          url: 'https://cloud.google.com/apis/design',
          type: 'documentation',
          description: 'Google Cloud API design guide and best practices',
          difficulty: 'intermediate-advanced',
          timeToComplete: '5-6 hours',
          rating: 4.8,
          lastUpdated: '2024-11-30'
        },
        {
          title: 'Building APIs with Node.js',
          url: 'https://www.youtube.com/watch?v=pKd0Rpw7O48',
          type: 'youtube',
          description: 'Practical API development tutorial',
          difficulty: 'beginner-intermediate',
          timeToComplete: '3-4 hours',
          rating: 4.3,
          lastUpdated: '2024-10-25'
        }
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
      ],
      freeResources: [
        {
          title: 'AWS Official Documentation',
          url: 'https://docs.aws.amazon.com/',
          type: 'documentation',
          description: 'Comprehensive AWS service documentation and guides',
          difficulty: 'beginner-intermediate',
          timeToComplete: '10-15 hours',
          rating: 4.7,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'AWS Free Tier Tutorial by freeCodeCamp',
          url: 'https://www.youtube.com/watch?v=3hLmDS179YE',
          type: 'youtube',
          description: '4-hour AWS tutorial covering essential services',
          difficulty: 'beginner',
          timeToComplete: '4 hours',
          rating: 4.6,
          lastUpdated: '2024-11-15'
        },
        {
          title: 'AWS Solutions Architect by Stephane Maarek',
          url: 'https://www.youtube.com/playlist?list=PLt1SIbA8guusxiHz9bveV7EAr4l-SJnRy',
          type: 'youtube',
          description: 'Complete AWS certification course (free parts)',
          difficulty: 'intermediate',
          timeToComplete: '15-20 hours',
          rating: 4.8,
          lastUpdated: '2024-11-25'
        },
        {
          title: 'AWS Serverless Tutorial by Complete Coding',
          url: 'https://www.youtube.com/watch?v=71cd5XerKss',
          type: 'youtube',
          description: 'Building serverless applications with AWS Lambda',
          difficulty: 'intermediate',
          timeToComplete: '2-3 hours',
          rating: 4.5,
          lastUpdated: '2024-10-20'
        },
        {
          title: 'AWS Workshop Studio',
          url: 'https://catalog.workshops.aws/',
          type: 'workshop',
          description: 'Free hands-on AWS workshops and tutorials',
          difficulty: 'intermediate',
          timeToComplete: '2-4 hours each',
          rating: 4.7,
          lastUpdated: '2024-12-05'
        },
        {
          title: 'AWS Architecture Patterns',
          url: 'https://aws.amazon.com/architecture/',
          type: 'documentation',
          description: 'Real-world AWS architecture patterns and case studies',
          difficulty: 'intermediate-advanced',
          timeToComplete: '6-8 hours',
          rating: 4.6,
          lastUpdated: '2024-11-30'
        }
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
      ],
      freeResources: [
        {
          title: 'Terraform Official Documentation',
          url: 'https://developer.hashicorp.com/terraform/docs',
          type: 'documentation',
          description: 'Official Terraform documentation and tutorials',
          difficulty: 'beginner-intermediate',
          timeToComplete: '6-8 hours',
          rating: 4.8,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'Terraform Course by freeCodeCamp',
          url: 'https://www.youtube.com/watch?v=SLB_c_ayRMo',
          type: 'youtube',
          description: 'Complete Terraform course for beginners',
          difficulty: 'beginner',
          timeToComplete: '3 hours',
          rating: 4.7,
          lastUpdated: '2024-11-20'
        },
        {
          title: 'Terraform AWS Tutorial by TechWorld with Nana',
          url: 'https://www.youtube.com/watch?v=iRaai1IBlB0',
          type: 'youtube',
          description: 'Practical Terraform with AWS tutorial',
          difficulty: 'intermediate',
          timeToComplete: '2.5 hours',
          rating: 4.6,
          lastUpdated: '2024-10-30'
        },
        {
          title: 'Terraform Best Practices by Anton Babenko',
          url: 'https://www.terraform-best-practices.com/',
          type: 'website',
          description: 'Comprehensive Terraform best practices guide',
          difficulty: 'intermediate-advanced',
          timeToComplete: '4-5 hours',
          rating: 4.8,
          lastUpdated: '2024-11-25'
        },
        {
          title: 'Terraform Weekly Newsletter Archive',
          url: 'https://www.terraform.io/community/newsletter',
          type: 'newsletter',
          description: 'Weekly Terraform tips, tutorials, and news',
          difficulty: 'intermediate',
          timeToComplete: '1 hour/week',
          rating: 4.4,
          lastUpdated: '2024-12-10'
        },
        {
          title: 'Terraform Module Examples',
          url: 'https://github.com/terraform-aws-modules',
          type: 'github',
          description: 'Production-ready Terraform modules for AWS',
          difficulty: 'intermediate-advanced',
          timeToComplete: '6-8 hours',
          rating: 4.7,
          lastUpdated: '2024-11-30'
        }
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
      ],
      freeResources: [
        {
          title: 'Docker Official Documentation',
          url: 'https://docs.docker.com/',
          type: 'documentation',
          description: 'Comprehensive Docker documentation and guides',
          difficulty: 'beginner-intermediate',
          timeToComplete: '6-8 hours',
          rating: 4.8,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'Docker Tutorial by Programming with Mosh',
          url: 'https://www.youtube.com/watch?v=pTFZFxd4hOI',
          type: 'youtube',
          description: 'Complete Docker tutorial for beginners',
          difficulty: 'beginner',
          timeToComplete: '1 hour',
          rating: 4.7,
          lastUpdated: '2024-10-15'
        },
        {
          title: 'Docker Crash Course by Traversy Media',
          url: 'https://www.youtube.com/watch?v=fqMOX6JJhGo',
          type: 'youtube',
          description: 'Docker fundamentals and practical examples',
          difficulty: 'beginner',
          timeToComplete: '1.5 hours',
          rating: 4.6,
          lastUpdated: '2024-11-20'
        },
        {
          title: 'Play with Docker',
          url: 'https://labs.play-with-docker.com/',
          type: 'tutorial',
          description: 'Free online Docker playground and tutorials',
          difficulty: 'beginner-intermediate',
          timeToComplete: '4-6 hours',
          rating: 4.5,
          lastUpdated: '2024-11-30'
        },
        {
          title: 'Docker Best Practices by Docker',
          url: 'https://docs.docker.com/develop/dev-best-practices/',
          type: 'documentation',
          description: 'Official Docker development best practices',
          difficulty: 'intermediate',
          timeToComplete: '3-4 hours',
          rating: 4.7,
          lastUpdated: '2024-11-25'
        }
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
      ],
      freeResources: [
        {
          title: 'Kubernetes Official Documentation',
          url: 'https://kubernetes.io/docs/',
          type: 'documentation',
          description: 'Comprehensive Kubernetes documentation and tutorials'
        },
        {
          title: 'Kubernetes Tutorial by TechWorld with Nana',
          url: 'https://www.youtube.com/watch?v=X48VuDVv0do',
          type: 'youtube',
          description: 'Complete Kubernetes tutorial for beginners'
        },
        {
          title: 'Kubernetes Crash Course by freeCodeCamp',
          url: 'https://www.youtube.com/watch?v=d6WC5n9G_sM',
          type: 'youtube',
          description: '4-hour comprehensive Kubernetes course'
        },
        {
          title: 'Play with Kubernetes',
          url: 'https://labs.play-with-k8s.com/',
          type: 'tutorial',
          description: 'Free online Kubernetes playground'
        },
        {
          title: 'Kubernetes the Hard Way',
          url: 'https://github.com/kelseyhightower/kubernetes-the-hard-way',
          type: 'github',
          description: 'Deep dive into Kubernetes fundamentals'
        }
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
      ],
      freeResources: [
        {
          title: 'GitHub Actions Documentation',
          url: 'https://docs.github.com/en/actions',
          type: 'documentation',
          description: 'Complete guide to GitHub Actions CI/CD',
          difficulty: 'beginner-intermediate',
          timeToComplete: '4-6 hours',
          rating: 4.8,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'CI/CD Tutorial by TechWorld with Nana',
          url: 'https://www.youtube.com/watch?v=1er2cjUq1UI',
          type: 'youtube',
          description: 'Complete CI/CD pipeline tutorial',
          difficulty: 'intermediate',
          timeToComplete: '2.5 hours',
          rating: 4.7,
          lastUpdated: '2024-11-15'
        },
        {
          title: 'Jenkins Tutorial by edureka!',
          url: 'https://www.youtube.com/watch?v=FX322RVNGj4',
          type: 'youtube',
          description: 'Comprehensive Jenkins CI/CD tutorial',
          difficulty: 'intermediate',
          timeToComplete: '4-5 hours',
          rating: 4.4,
          lastUpdated: '2024-10-20'
        },
        {
          title: 'GitLab CI/CD Documentation',
          url: 'https://docs.gitlab.com/ee/ci/',
          type: 'documentation',
          description: 'GitLab CI/CD configuration and best practices',
          difficulty: 'intermediate',
          timeToComplete: '5-6 hours',
          rating: 4.6,
          lastUpdated: '2024-11-30'
        },
        {
          title: 'DevOps CI/CD Pipeline Tutorial',
          url: 'https://www.youtube.com/watch?v=scEDHsr3APg',
          type: 'youtube',
          description: 'End-to-end CI/CD pipeline setup',
          difficulty: 'intermediate-advanced',
          timeToComplete: '3-4 hours',
          rating: 4.5,
          lastUpdated: '2024-10-30'
        }
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
      ],
      freeResources: [
        {
          title: 'The Manager\'s Path by Camille Fournier',
          url: 'https://www.youtube.com/watch?v=9VBnai2rKWY',
          type: 'youtube',
          description: 'Engineering management principles and practices',
          difficulty: 'intermediate',
          timeToComplete: '1.5 hours',
          rating: 4.8,
          lastUpdated: '2024-11-10'
        },
        {
          title: 'Harvard Business Review Leadership',
          url: 'https://hbr.org/topic/leadership',
          type: 'articles',
          description: 'Free leadership articles and insights',
          difficulty: 'intermediate-advanced',
          timeToComplete: '5-10 hours',
          rating: 4.7,
          lastUpdated: '2024-12-05'
        },
        {
          title: 'Coursera Leadership Courses',
          url: 'https://www.coursera.org/courses?query=leadership',
          type: 'course',
          description: 'Free leadership courses (audit mode)',
          difficulty: 'intermediate',
          timeToComplete: '15-20 hours',
          rating: 4.5,
          lastUpdated: '2024-11-20'
        },
        {
          title: 'MIT Leadership Resources',
          url: 'https://web.mit.edu/leadership/',
          type: 'website',
          description: 'MIT leadership development resources',
          difficulty: 'advanced',
          timeToComplete: '8-12 hours',
          rating: 4.6,
          lastUpdated: '2024-10-30'
        },
        {
          title: 'Engineering Management Handbook',
          url: 'https://github.com/ryanburgess/engineer-manager',
          type: 'github',
          description: 'Open source engineering management resources',
          difficulty: 'intermediate',
          timeToComplete: '6-8 hours',
          rating: 4.4,
          lastUpdated: '2024-11-15'
        }
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
      ],
      freeResources: [
        {
          title: 'Project Management Institute Resources',
          url: 'https://www.pmi.org/learning/training-development/free-content',
          type: 'website',
          description: 'Free project management training and resources',
          difficulty: 'intermediate',
          timeToComplete: '10-15 hours',
          rating: 4.6,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'Agile and Scrum Tutorial by edureka!',
          url: 'https://www.youtube.com/watch?v=9TycLR0TqFA',
          type: 'youtube',
          description: 'Complete Agile and Scrum methodology tutorial',
          difficulty: 'beginner-intermediate',
          timeToComplete: '4-5 hours',
          rating: 4.4,
          lastUpdated: '2024-11-10'
        },
        {
          title: 'Google Project Management Certificate',
          url: 'https://www.coursera.org/professional-certificates/google-project-management',
          type: 'course',
          description: 'Free project management course (audit mode)',
          difficulty: 'beginner',
          timeToComplete: '40-60 hours',
          rating: 4.7,
          lastUpdated: '2024-11-30'
        },
        {
          title: 'Atlassian Agile Coach',
          url: 'https://www.atlassian.com/agile',
          type: 'tutorial',
          description: 'Free Agile methodologies and best practices',
          difficulty: 'beginner-intermediate',
          timeToComplete: '6-8 hours',
          rating: 4.5,
          lastUpdated: '2024-11-25'
        },
        {
          title: 'Scrum.org Learning Resources',
          url: 'https://www.scrum.org/learning-series',
          type: 'website',
          description: 'Free Scrum training and certification info',
          difficulty: 'beginner-intermediate',
          timeToComplete: '8-10 hours',
          rating: 4.6,
          lastUpdated: '2024-11-20'
        }
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
                resources: [
                  'Andrew Ng ML Course (YouTube): https://www.youtube.com/playlist?list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN',
                  'StatQuest ML Fundamentals: https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF',
                  'MIT 6.034 AI Course: https://www.youtube.com/playlist?list=PLUl4u3cNGP63gFHB6xb-kVBiQHYe_4hSi',
                  'freeCodeCamp ML Course: https://www.youtube.com/watch?v=NWONeJKn6kc'
                ],
                priority: 'high'
              },
              {
                id: 'python-setup',
                title: 'Python ML Environment',
                description: 'Set up Jupyter, Anaconda, and essential libraries',
                estimatedHours: 4,
                resources: [
                  'Anaconda Installation Guide: https://www.youtube.com/watch?v=YJC6ldI3hWk',
                  'Jupyter Notebook Tutorial: https://www.youtube.com/watch?v=HW29067qVWk',
                  'Python for Data Science Setup: https://www.youtube.com/watch?v=WcDaZ67TVRo',
                  'Conda Environment Management: https://www.youtube.com/watch?v=1VVCd0eSkYc'
                ],
                priority: 'high'
              },
              {
                id: 'data-basics',
                title: 'Data Fundamentals',
                description: 'Understanding datasets, features, and data preprocessing',
                estimatedHours: 6,
                resources: [
                  'Pandas Tutorial by Corey Schafer: https://www.youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS',
                  'Data Cleaning with Python: https://www.youtube.com/watch?v=ZOX18HfLHGQ',
                  'Kaggle Learn Data Cleaning: https://www.kaggle.com/learn/data-cleaning',
                  'Data Analysis with Python: https://www.youtube.com/watch?v=r-uOLxNrNk8'
                ],
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
                resources: [
                  'StatQuest Linear Regression: https://www.youtube.com/watch?v=nk2CQITm_eo',
                  'Linear Regression with Python: https://www.youtube.com/watch?v=1BYu65vLKdA',
                  'Khan Academy Linear Regression: https://www.youtube.com/watch?v=coQAAN4eY5s',
                  'Scikit-learn Linear Regression: https://www.youtube.com/watch?v=R15LjD8aCzc'
                ],
                priority: 'high'
              },
              {
                id: 'classification',
                title: 'Classification Algorithms',
                description: 'Decision trees, random forests, logistic regression',
                estimatedHours: 12,
                resources: [
                  'Decision Trees Explained: https://www.youtube.com/watch?v=7VeUPuFGJHk',
                  'Random Forest Algorithm: https://www.youtube.com/watch?v=J4Wdy0Wc_xQ',
                  'Logistic Regression StatQuest: https://www.youtube.com/watch?v=yIYKR4sgzI8',
                  'Classification with Python: https://www.youtube.com/watch?v=VtK56UQn_5w'
                ],
                priority: 'high'
              },
              {
                id: 'clustering',
                title: 'Clustering',
                description: 'K-means, hierarchical clustering, DBSCAN',
                estimatedHours: 8,
                resources: [
                  'K-Means Clustering Explained: https://www.youtube.com/watch?v=4b5d3muPQmA',
                  'Hierarchical Clustering: https://www.youtube.com/watch?v=7xHsRkOdVwo',
                  'DBSCAN Algorithm: https://www.youtube.com/watch?v=RDZUdRSDOok',
                  'Clustering with Python: https://www.youtube.com/watch?v=ijSM23xGcmU'
                ],
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
                resources: [
                  '3Blue1Brown Neural Networks: https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi',
                  'Neural Networks from Scratch: https://www.youtube.com/playlist?list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3',
                  'Deep Learning Fundamentals: https://www.youtube.com/watch?v=aircAruvnKk',
                  'TensorFlow Beginner Tutorial: https://www.youtube.com/watch?v=tPYj3fFJGjk'
                ],
                priority: 'high'
              },
              {
                id: 'cnn',
                title: 'Convolutional Neural Networks',
                description: 'Image processing and computer vision',
                estimatedHours: 12,
                resources: [
                  'CNNs Explained by 3Blue1Brown: https://www.youtube.com/watch?v=KuXjwB4LzSA',
                  'CS231n Stanford CNN Course: https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv',
                  'CNN with TensorFlow: https://www.youtube.com/watch?v=WvoLTXIjBYU',
                  'Image Classification Tutorial: https://www.youtube.com/watch?v=jztwpsIzEGc'
                ],
                priority: 'medium'
              },
              {
                id: 'nlp',
                title: 'Natural Language Processing',
                description: 'Text processing and language models',
                estimatedHours: 10,
                resources: [
                  'NLP with Python Playlist: https://www.youtube.com/playlist?list=PLQVvvaa0QuDf2JswnfiGkliBInZnIC4HL',
                  'Transformers Explained: https://www.youtube.com/watch?v=SZorAJ4I-sA',
                  'NLTK Tutorial: https://www.youtube.com/watch?v=FLZvOKSCkxY',
                  'Hugging Face Course: https://www.youtube.com/watch?v=00GKzGyWFEs'
                ],
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
                resources: [
                  'MLOps Explained: https://www.youtube.com/watch?v=9BgIDqAzfuA',
                  'MLflow Tutorial: https://www.youtube.com/watch?v=859OxXrt_TI',
                  'Made with ML MLOps: https://www.youtube.com/watch?v=JR3LGwihTH4',
                  'DVC Data Versioning: https://www.youtube.com/watch?v=kLKBcPonMYw'
                ],
                priority: 'high'
              },
              {
                id: 'deployment',
                title: 'Model Deployment',
                description: 'Deploy models with Flask, FastAPI, cloud services',
                estimatedHours: 10,
                resources: [
                  'Deploy ML with Flask: https://www.youtube.com/watch?v=UbCWoMf80PY',
                  'FastAPI ML Deployment: https://www.youtube.com/watch?v=1zMQBe0l1bM',
                  'Docker for ML: https://www.youtube.com/watch?v=h5wLuVDr0oc',
                  'AWS SageMaker Tutorial: https://www.youtube.com/watch?v=KFuc2KWrTHs'
                ],
                priority: 'high'
              },
              {
                id: 'monitoring',
                title: 'Model Monitoring',
                description: 'Track model performance and data drift',
                estimatedHours: 8,
                resources: [
                  'ML Model Monitoring: https://www.youtube.com/watch?v=QcevzK9ZuDg',
                  'Data Drift Detection: https://www.youtube.com/watch?v=NI7gRnvhtSs',
                  'Evidently AI Tutorial: https://www.youtube.com/watch?v=czOlnCYqHrE',
                  'MLflow Model Registry: https://www.youtube.com/watch?v=1ykg4YmbFVA'
                ],
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
      ],
      freeResources: [
        {
          title: 'W3Schools SQL Tutorial',
          url: 'https://www.w3schools.com/sql/',
          type: 'tutorial',
          description: 'Comprehensive SQL tutorial with interactive examples'
        },
        {
          title: 'PostgreSQL Tutorial by Derek Banas',
          url: 'https://www.youtube.com/watch?v=qw--VYLpxG4',
          type: 'youtube',
          description: 'Complete PostgreSQL tutorial in one video'
        },
        {
          title: 'SQL Tutorial by Programming with Mosh',
          url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA',
          type: 'youtube',
          description: '3-hour comprehensive MySQL tutorial'
        },
        {
          title: 'SQLite Tutorial',
          url: 'https://www.sqlitetutorial.net/',
          type: 'tutorial',
          description: 'Complete SQLite tutorial with practical examples'
        },
        {
          title: 'SQL Practice on HackerRank',
          url: 'https://www.hackerrank.com/domains/sql',
          type: 'practice',
          description: 'Free SQL coding challenges and practice problems'
        }
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
      ],
      freeResources: [
        {
          title: 'D3.js Official Documentation',
          url: 'https://d3js.org/',
          type: 'documentation',
          description: 'Official D3.js documentation with examples'
        },
        {
          title: 'Data Visualization Course by Curran Kelleher',
          url: 'https://www.youtube.com/playlist?list=PL9yYRbwpkykuK6LSMLH3bAaPpXaDUXcLV',
          type: 'youtube',
          description: 'Complete data visualization course with D3.js'
        },
        {
          title: 'Chart.js Documentation',
          url: 'https://www.chartjs.org/docs/',
          type: 'documentation',
          description: 'Simple yet flexible JavaScript charting library'
        },
        {
          title: 'Observable Tutorials',
          url: 'https://observablehq.com/@observablehq/tutorial',
          type: 'tutorial',
          description: 'Interactive data visualization tutorials'
        },
        {
          title: 'Plotly Python Tutorial',
          url: 'https://www.youtube.com/watch?v=GGL6U0k8WYA',
          type: 'youtube',
          description: 'Data visualization with Python and Plotly'
        }
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
      ],
      freeResources: [
        {
          title: 'Apache Spark Documentation',
          url: 'https://spark.apache.org/docs/latest/',
          type: 'documentation',
          description: 'Official Apache Spark documentation and tutorials'
        },
        {
          title: 'Data Engineering Course by Seattle Data Guy',
          url: 'https://www.youtube.com/playlist?list=PL-mGpK6Ck6G5F1DPdOCvjsXtgr8tUY_Eo',
          type: 'youtube',
          description: 'Complete data engineering course'
        },
        {
          title: 'Apache Airflow Tutorial',
          url: 'https://airflow.apache.org/docs/apache-airflow/stable/tutorial.html',
          type: 'tutorial',
          description: 'Official Apache Airflow tutorial and documentation'
        },
        {
          title: 'Kafka Tutorial by Confluent',
          url: 'https://kafka.apache.org/quickstart',
          type: 'tutorial',
          description: 'Apache Kafka quickstart and learning resources'
        },
        {
          title: 'dbt Tutorial',
          url: 'https://docs.getdbt.com/docs/get-started/getting-started-dbt-core',
          type: 'tutorial',
          description: 'Getting started with dbt for data transformation'
        }
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
      ],
      freeResources: [
        {
          title: 'Pandas Official Documentation',
          url: 'https://pandas.pydata.org/docs/',
          type: 'documentation',
          description: 'Comprehensive Pandas documentation and tutorials'
        },
        {
          title: 'Python Data Analysis by Keith Galli',
          url: 'https://www.youtube.com/playlist?list=PLFCB5Dp81iNVmuoGIqcT5oF4K-7kTI5vp',
          type: 'youtube',
          description: 'Complete Python data analysis tutorial series'
        },
        {
          title: 'Scikit-learn Documentation',
          url: 'https://scikit-learn.org/stable/tutorial/index.html',
          type: 'documentation',
          description: 'Machine learning library tutorials and examples'
        },
        {
          title: 'Python for Data Science Course by freeCodeCamp',
          url: 'https://www.youtube.com/watch?v=r-uOLxNrNk8',
          type: 'youtube',
          description: '12-hour comprehensive data science course'
        },
        {
          title: 'Kaggle Learn Data Science',
          url: 'https://www.kaggle.com/learn/overview',
          type: 'course',
          description: 'Free micro-courses on data science topics'
        }
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
      ],
      freeResources: [
        {
          title: 'Git Official Documentation',
          url: 'https://git-scm.com/docs',
          type: 'documentation',
          description: 'Comprehensive Git documentation and reference',
          difficulty: 'beginner-advanced',
          timeToComplete: '8-12 hours',
          rating: 4.8,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'Git Tutorial by Traversy Media',
          url: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc',
          type: 'youtube',
          description: 'Git crash course for beginners',
          difficulty: 'beginner',
          timeToComplete: '1.5 hours',
          rating: 4.6,
          lastUpdated: '2024-11-15'
        },
        {
          title: 'Learn Git Branching',
          url: 'https://learngitbranching.js.org/',
          type: 'interactive',
          description: 'Interactive Git tutorial with visualizations',
          difficulty: 'beginner-intermediate',
          timeToComplete: '3-4 hours',
          rating: 4.9,
          lastUpdated: '2024-11-30'
        },
        {
          title: 'Pro Git Book',
          url: 'https://git-scm.com/book',
          type: 'book',
          description: 'Free comprehensive Git book by Scott Chacon',
          difficulty: 'intermediate-advanced',
          timeToComplete: '15-20 hours',
          rating: 4.7,
          lastUpdated: '2024-10-30'
        },
        {
          title: 'Atlassian Git Tutorials',
          url: 'https://www.atlassian.com/git/tutorials',
          type: 'tutorial',
          description: 'Comprehensive Git tutorials and best practices',
          difficulty: 'beginner-intermediate',
          timeToComplete: '6-8 hours',
          rating: 4.7,
          lastUpdated: '2024-11-25'
        }
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
      ],
      freeResources: [
        {
          title: 'Jest Official Documentation',
          url: 'https://jestjs.io/docs/getting-started',
          type: 'documentation',
          description: 'Complete Jest testing framework documentation',
          difficulty: 'beginner-intermediate',
          timeToComplete: '4-6 hours',
          rating: 4.8,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'Testing JavaScript with Kent C. Dodds',
          url: 'https://www.youtube.com/playlist?list=PLV5CVI1eNcJgCrPH_e6d57KRUTiDZgs0u',
          type: 'youtube',
          description: 'Comprehensive JavaScript testing tutorial series',
          difficulty: 'intermediate',
          timeToComplete: '8-10 hours',
          rating: 4.6,
          lastUpdated: '2024-11-10'
        },
        {
          title: 'Cypress Documentation',
          url: 'https://docs.cypress.io/',
          type: 'documentation',
          description: 'End-to-end testing framework documentation',
          difficulty: 'intermediate',
          timeToComplete: '6-8 hours',
          rating: 4.7,
          lastUpdated: '2024-11-30'
        },
        {
          title: 'Test-Driven Development Tutorial',
          url: 'https://www.youtube.com/watch?v=Jv2uxzhPFl4',
          type: 'youtube',
          description: 'TDD principles and practical implementation',
          difficulty: 'intermediate',
          timeToComplete: '2-3 hours',
          rating: 4.5,
          lastUpdated: '2024-10-20'
        },
        {
          title: 'The Art of Unit Testing',
          url: 'https://github.com/artofunittesting',
          type: 'github',
          description: 'Free unit testing resources and examples',
          difficulty: 'intermediate-advanced',
          timeToComplete: '10-12 hours',
          rating: 4.4,
          lastUpdated: '2024-11-15'
        }
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
      ],
      freeResources: [
        {
          title: 'OWASP Top 10',
          url: 'https://owasp.org/www-project-top-ten/',
          type: 'documentation',
          description: 'Top 10 web application security risks',
          difficulty: 'intermediate',
          timeToComplete: '4-6 hours',
          rating: 4.9,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'Cybersecurity Course by freeCodeCamp',
          url: 'https://www.youtube.com/watch?v=U_P23SqJaDc',
          type: 'youtube',
          description: 'Complete cybersecurity course for beginners',
          difficulty: 'beginner',
          timeToComplete: '5-6 hours',
          rating: 4.5,
          lastUpdated: '2024-11-10'
        },
        {
          title: 'OWASP WebGoat',
          url: 'https://owasp.org/www-project-webgoat/',
          type: 'tutorial',
          description: 'Hands-on security vulnerability learning platform',
          difficulty: 'intermediate',
          timeToComplete: '8-12 hours',
          rating: 4.7,
          lastUpdated: '2024-11-25'
        },
        {
          title: 'Security Headers Scanner',
          url: 'https://securityheaders.com/',
          type: 'tool',
          description: 'Free security headers analysis tool',
          difficulty: 'beginner',
          timeToComplete: '1-2 hours',
          rating: 4.4,
          lastUpdated: '2024-11-30'
        },
        {
          title: 'OAuth 2.0 Tutorial',
          url: 'https://www.youtube.com/watch?v=996OiexHze0',
          type: 'youtube',
          description: 'Complete OAuth 2.0 explanation and implementation',
          difficulty: 'intermediate',
          timeToComplete: '2-3 hours',
          rating: 4.6,
          lastUpdated: '2024-10-25'
        }
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
      ],
      freeResources: [
        {
          title: 'Web.dev Performance',
          url: 'https://web.dev/performance/',
          type: 'website',
          description: 'Google\'s comprehensive web performance guides',
          difficulty: 'intermediate',
          timeToComplete: '8-12 hours',
          rating: 4.8,
          lastUpdated: '2024-12-01'
        },
        {
          title: 'Performance Optimization by Kyle Simpson',
          url: 'https://www.youtube.com/watch?v=65-RbBwZQdU',
          type: 'youtube',
          description: 'Deep dive into JavaScript performance optimization',
          difficulty: 'advanced',
          timeToComplete: '3-4 hours',
          rating: 4.7,
          lastUpdated: '2024-11-15'
        },
        {
          title: 'Chrome DevTools Performance',
          url: 'https://developers.google.com/web/tools/chrome-devtools/performance',
          type: 'documentation',
          description: 'Official Chrome DevTools performance documentation',
          difficulty: 'intermediate',
          timeToComplete: '4-6 hours',
          rating: 4.6,
          lastUpdated: '2024-11-30'
        },
        {
          title: 'Redis Documentation',
          url: 'https://redis.io/documentation',
          type: 'documentation',
          description: 'Redis caching and performance optimization guide',
          difficulty: 'intermediate',
          timeToComplete: '6-8 hours',
          rating: 4.7,
          lastUpdated: '2024-11-25'
        },
        {
          title: 'Lighthouse Documentation',
          url: 'https://developers.google.com/web/tools/lighthouse',
          type: 'documentation',
          description: 'Web performance auditing tool documentation',
          difficulty: 'beginner-intermediate',
          timeToComplete: '3-4 hours',
          rating: 4.5,
          lastUpdated: '2024-12-01'
        }
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
  ],

  // Projects showcasing skills and expertise
  projects: [
    {
      id: 'realtime-chat-platform',
      title: 'Real-time Chat Platform',
      description: 'Scalable chat application with real-time messaging, file sharing, and video calls',
      technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'Redis', 'PostgreSQL', 'Docker'],
      skillsUsed: ['react', 'typescript', 'nodejs', 'postgresql', 'redis', 'docker'],
      category: 'Full-Stack',
      status: 'completed',
      difficulty: 'intermediate',
      duration: '6 weeks',
      features: [
        'Real-time messaging with Socket.io',
        'File and image sharing with cloud storage',
        'Video calling integration',
        'User authentication and authorization',
        'Message history and search',
        'Responsive design for mobile and desktop'
      ],
      learningOutcomes: [
        'WebSocket implementation and management',
        'Real-time state synchronization',
        'File upload and media handling',
        'Authentication flows and security',
        'Database optimization for chat history'
      ],
      githubUrl: 'https://github.com/yourusername/chat-platform',
      liveUrl: 'https://chat-platform-demo.com',
      estimatedHours: 120
    },
    {
      id: 'microservices-ecommerce',
      title: 'Microservices E-commerce Platform',
      description: 'Distributed e-commerce system with microservices architecture',
      technologies: ['Go', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'RabbitMQ', 'React'],
      skillsUsed: ['golang', 'docker', 'kubernetes', 'postgresql', 'redis', 'microservices', 'react'],
      category: 'Backend/DevOps',
      status: 'completed',
      difficulty: 'advanced',
      duration: '10 weeks',
      features: [
        'User service with authentication',
        'Product catalog service',
        'Order processing service',
        'Payment integration service',
        'Inventory management service',
        'API Gateway with rate limiting',
        'Event-driven communication between services'
      ],
      learningOutcomes: [
        'Microservices design patterns',
        'Service discovery and load balancing',
        'Event-driven architecture',
        'Container orchestration',
        'Distributed system challenges',
        'API design and versioning'
      ],
      githubUrl: 'https://github.com/yourusername/microservices-ecommerce',
      estimatedHours: 200
    },
    {
      id: 'data-analytics-dashboard',
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and analytics',
      technologies: ['Python', 'FastAPI', 'React', 'D3.js', 'PostgreSQL', 'Pandas', 'NumPy'],
      skillsUsed: ['python', 'react', 'postgresql', 'data-analytics'],
      category: 'Data/Frontend',
      status: 'completed',
      difficulty: 'intermediate',
      duration: '4 weeks',
      features: [
        'Interactive charts and graphs',
        'Real-time data updates',
        'Custom filtering and aggregation',
        'Export to PDF/Excel',
        'User-defined dashboards',
        'Data source connectors'
      ],
      learningOutcomes: [
        'Data visualization best practices',
        'Real-time data streaming',
        'Complex data aggregations',
        'Interactive UI components',
        'API design for analytics'
      ],
      githubUrl: 'https://github.com/yourusername/analytics-dashboard',
      liveUrl: 'https://analytics-dashboard-demo.com',
      estimatedHours: 80
    },
    {
      id: 'ml-recommendation-engine',
      title: 'ML Recommendation Engine',
      description: 'Machine learning system for product recommendations',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      skillsUsed: ['python', 'machine-learning', 'postgresql', 'redis', 'docker'],
      category: 'Machine Learning',
      status: 'in-progress',
      difficulty: 'advanced',
      duration: '8 weeks',
      features: [
        'Collaborative filtering algorithm',
        'Content-based recommendations',
        'A/B testing framework',
        'Real-time inference API',
        'Model training pipeline',
        'Performance monitoring'
      ],
      learningOutcomes: [
        'Recommendation system algorithms',
        'Model training and evaluation',
        'Production ML deployment',
        'A/B testing for ML systems',
        'Feature engineering',
        'Model monitoring and updates'
      ],
      githubUrl: 'https://github.com/yourusername/ml-recommendations',
      estimatedHours: 160
    },
    {
      id: 'cloud-infrastructure-automation',
      title: 'Cloud Infrastructure Automation',
      description: 'Infrastructure as Code for AWS cloud deployment',
      technologies: ['Terraform', 'AWS', 'Docker', 'GitHub Actions', 'Kubernetes'],
      skillsUsed: ['terraform', 'aws', 'docker', 'kubernetes', 'cicd'],
      category: 'DevOps/Cloud',
      status: 'completed',
      difficulty: 'advanced',
      duration: '5 weeks',
      features: [
        'Multi-environment infrastructure',
        'Auto-scaling configurations',
        'Security groups and IAM policies',
        'Monitoring and alerting setup',
        'Backup and disaster recovery',
        'Cost optimization strategies'
      ],
      learningOutcomes: [
        'Infrastructure as Code principles',
        'Cloud architecture patterns',
        'Security best practices',
        'Cost optimization techniques',
        'Monitoring and observability',
        'Disaster recovery planning'
      ],
      githubUrl: 'https://github.com/yourusername/cloud-infrastructure',
      estimatedHours: 100
    },
    {
      id: 'progressive-web-app',
      title: 'Progressive Web Application',
      description: 'PWA with offline capabilities and native app features',
      technologies: ['React', 'TypeScript', 'Service Workers', 'IndexedDB', 'Workbox'],
      skillsUsed: ['react', 'typescript', 'pwa'],
      category: 'Frontend',
      status: 'completed',
      difficulty: 'intermediate',
      duration: '3 weeks',
      features: [
        'Offline functionality',
        'Push notifications',
        'App-like navigation',
        'Background sync',
        'Installable on mobile/desktop',
        'Responsive design'
      ],
      learningOutcomes: [
        'Service Worker implementation',
        'Offline-first architecture',
        'PWA best practices',
        'Performance optimization',
        'Mobile user experience',
        'Caching strategies'
      ],
      githubUrl: 'https://github.com/yourusername/progressive-web-app',
      liveUrl: 'https://pwa-demo.com',
      estimatedHours: 60
    },
    {
      id: 'event-driven-system',
      title: 'Event-Driven Processing System',
      description: 'Scalable event processing system with message queues',
      technologies: ['Go', 'Apache Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Prometheus'],
      skillsUsed: ['golang', 'event-driven', 'redis', 'postgresql', 'docker', 'monitoring'],
      category: 'Backend/Architecture',
      status: 'completed',
      difficulty: 'advanced',
      duration: '7 weeks',
      features: [
        'Event sourcing pattern',
        'CQRS implementation',
        'Message routing and filtering',
        'Dead letter queue handling',
        'Event replay capabilities',
        'Monitoring and metrics'
      ],
      learningOutcomes: [
        'Event-driven architecture patterns',
        'Message queue implementation',
        'System resilience and fault tolerance',
        'Performance monitoring',
        'Scalability considerations',
        'Data consistency in distributed systems'
      ],
      githubUrl: 'https://github.com/yourusername/event-system',
      estimatedHours: 140
    },
    {
      id: 'reactive-microservices-platform',
      title: 'Reactive Microservices Platform',
      description: 'High-performance reactive microservices platform built with Spring WebFlux, achieving 40% performance improvement over traditional REST APIs',
      technologies: ['Java 17', 'Spring Boot', 'Spring WebFlux', 'Project Reactor', 'Spring Data R2DBC', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'WebTestClient'],
      skillsUsed: ['java', 'spring-webflux', 'reactive-programming', 'microservices', 'postgresql', 'redis', 'docker', 'kubernetes'],
      category: 'Backend/Reactive',
      status: 'completed',
      difficulty: 'advanced',
      duration: '8 weeks',
      features: [
        'Non-blocking I/O operations with reactive streams',
        'Reactive data access using Spring Data R2DBC',
        'Backpressure handling and error management',
        'Reactive security implementation with Spring Security WebFlux',
        'Performance monitoring and metrics collection',
        'Comprehensive reactive testing with WebTestClient and StepVerifier',
        'API migration from traditional REST to reactive endpoints'
      ],
      learningOutcomes: [
        'Reactive programming paradigms and patterns',
        'Performance optimization through non-blocking operations',
        'Reactive stream composition and transformation',
        'Memory and thread efficiency improvements',
        'Testing strategies for reactive applications',
        'Migration strategies from traditional to reactive architectures',
        'Reactive error handling and resilience patterns'
      ],
      performanceMetrics: [
        '40% improvement in response times under high load',
        'Reduced memory footprint by 25%',
        'Handles 10,000+ concurrent requests efficiently',
        '99.9% uptime with improved resilience'
      ],
      githubUrl: 'https://github.com/yourusername/reactive-microservices',
      estimatedHours: 160
    }
  ],

  // Learning resources for skills
  learningResources: {
    'react': [
      {
        id: 'react-docs',
        title: 'Official React Documentation',
        type: 'documentation',
        url: 'https://react.dev',
        difficulty: 'beginner',
        estimatedHours: 20,
        description: 'Complete guide to React fundamentals and advanced concepts'
      },
      {
        id: 'react-course',
        title: 'React - The Complete Guide (Hooks, Router, Redux)',
        type: 'course',
        url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
        difficulty: 'intermediate',
        estimatedHours: 40,
        description: 'Comprehensive React course covering all major concepts'
      },
      {
        id: 'react-patterns',
        title: 'React Patterns',
        type: 'tutorial',
        url: 'https://reactpatterns.com/',
        difficulty: 'advanced',
        estimatedHours: 10,
        description: 'Advanced React patterns and best practices'
      }
    ],
    'typescript': [
      {
        id: 'ts-handbook',
        title: 'TypeScript Handbook',
        type: 'documentation',
        url: 'https://www.typescriptlang.org/docs/',
        difficulty: 'beginner',
        estimatedHours: 15,
        description: 'Official TypeScript documentation and handbook'
      },
      {
        id: 'ts-deepdive',
        title: 'TypeScript Deep Dive',
        type: 'book',
        url: 'https://basarat.gitbook.io/typescript/',
        difficulty: 'intermediate',
        estimatedHours: 25,
        description: 'Deep dive into TypeScript concepts and patterns'
      }
    ],
    'machine-learning': [
      {
        id: 'ml-coursera',
        title: 'Machine Learning Course by Andrew Ng',
        type: 'course',
        url: 'https://www.coursera.org/learn/machine-learning',
        difficulty: 'beginner',
        estimatedHours: 60,
        description: 'Stanford\'s famous ML course covering fundamentals'
      },
      {
        id: 'ml-python',
        title: 'Python Machine Learning',
        type: 'book',
        url: 'https://www.packtpub.com/product/python-machine-learning-third-edition/',
        difficulty: 'intermediate',
        estimatedHours: 40,
        description: 'Practical ML with Python, scikit-learn, and TensorFlow'
      }
    ]
  },
};

export const personalInfo = {
  name: 'Assefa Tesfay',
  title: 'Senior Software Engineer & Technical Architect',
  email: 'assefa.tesfay@example.com',
  phone: '+1 (555) 123-4567',
  linkedin: 'https://linkedin.com/in/assefatesfay',
  github: 'https://github.com/assefatesfay',
  website: 'https://assefatesfay.dev',
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
