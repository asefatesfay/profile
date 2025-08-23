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
      architecture: {
        overview: 'Event-driven architecture with WebSocket connections, Redis for real-time state management, and PostgreSQL for persistent storage',
        diagram: `
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   React Client  │◄──►│   Load Balancer  │◄──►│   React Client  │
│   (TypeScript)  │    │     (Nginx)      │    │   (TypeScript)  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Socket.IO Server Cluster                     │
│                         (Node.js)                              │
└─────────────────────────────────────────────────────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Redis Cluster │    │   Auth Service   │    │   File Storage  │
│   (Pub/Sub +    │    │   (JWT + OAuth)  │    │   (AWS S3/      │
│   Session Store)│    │                  │    │   CloudFlare)   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 ▼
                    ┌──────────────────┐
                    │   PostgreSQL     │
                    │   (Message       │
                    │   History &      │
                    │   User Data)     │
                    └──────────────────┘`,
        components: [
          {
            name: 'Frontend Layer',
            tech: 'React + TypeScript',
            responsibility: 'Real-time UI updates, message composition, file uploads, video calling interface'
          },
          {
            name: 'WebSocket Server',
            tech: 'Node.js + Socket.IO',
            responsibility: 'Handle real-time connections, message routing, room management'
          },
          {
            name: 'Redis Cluster',
            tech: 'Redis Pub/Sub + Session Store',
            responsibility: 'Real-time message broadcasting, session management, presence tracking'
          },
          {
            name: 'Authentication Service',
            tech: 'JWT + OAuth',
            responsibility: 'User authentication, authorization, token management'
          },
          {
            name: 'Database Layer',
            tech: 'PostgreSQL',
            responsibility: 'Persistent message storage, user profiles, chat history'
          },
          {
            name: 'File Storage',
            tech: 'AWS S3/CloudFlare',
            responsibility: 'Media file storage, CDN distribution, file sharing'
          }
        ],
        dataFlow: [
          'User sends message → WebSocket server receives → Redis pub/sub broadcasts to all connected clients',
          'Message stored in PostgreSQL for history → File uploads go to S3 → CDN serves media',
          'Redis maintains active user sessions and presence information'
        ],
        designDecisions: [
          {
            id: 'ADR-001',
            title: 'Socket.IO vs Native WebSockets for Real-time Communication',
            status: 'Accepted',
            date: '2024-01-10',
            context: 'Need reliable real-time bidirectional communication with fallback options for various network conditions',
            decision: 'Use Socket.IO for WebSocket management with automatic fallbacks to polling',
            rationale: 'Socket.IO provides automatic fallbacks, connection management, and easier implementation than raw WebSockets',
            consequences: 'Slightly larger bundle size but significantly better reliability and developer experience',
            alternatives: ['Native WebSockets', 'Server-Sent Events', 'Long polling'],
            tradeoffs: 'Bundle size vs reliability and ease of implementation'
          },
          {
            id: 'ADR-002',
            title: 'Redis Pub/Sub vs Database for Message Broadcasting',
            status: 'Accepted',
            date: '2024-01-12',
            context: 'Need to broadcast messages to multiple server instances with minimal latency',
            decision: 'Implement Redis Pub/Sub for real-time message broadcasting between server instances',
            rationale: 'Redis Pub/Sub provides millisecond latency for message distribution across server cluster',
            consequences: 'Additional infrastructure complexity but enables horizontal scaling',
            alternatives: ['Database polling', 'RabbitMQ', 'Apache Kafka', 'Direct server communication'],
            tradeoffs: 'Infrastructure complexity vs scalability and performance'
          },
          {
            id: 'ADR-003',
            title: 'PostgreSQL vs MongoDB for Message Storage',
            status: 'Accepted',
            date: '2024-01-15',
            context: 'Need persistent storage for chat history, user profiles, and relationship data',
            decision: 'Use PostgreSQL for structured data with JSON columns for flexible message content',
            rationale: 'ACID compliance for user data, excellent JSON support, and team PostgreSQL expertise',
            consequences: 'Strong consistency and data integrity but potentially slower for very large message volumes',
            alternatives: ['MongoDB', 'Cassandra', 'DynamoDB', 'Elasticsearch'],
            tradeoffs: 'Consistency and familiarity vs document-oriented flexibility'
          },
          {
            id: 'ADR-004',
            title: 'JWT vs Session-based Authentication',
            status: 'Accepted',
            date: '2024-01-18',
            context: 'Need stateless authentication that works across multiple server instances',
            decision: 'Implement JWT tokens with Redis-based refresh token management',
            rationale: 'Stateless authentication enables horizontal scaling, Redis provides secure token invalidation',
            consequences: 'More complex token management but better scalability and security',
            alternatives: ['Session cookies', 'OAuth only', 'API keys', 'Basic authentication'],
            tradeoffs: 'Implementation complexity vs scalability and security features'
          },
          {
            id: 'ADR-005',
            title: 'AWS S3 vs Self-hosted Storage for File Sharing',
            status: 'Accepted',
            date: '2024-01-20',
            context: 'Need reliable file storage for images, documents, and media with global accessibility',
            decision: 'Use AWS S3 with CloudFront CDN for file storage and distribution',
            rationale: 'Proven reliability, global CDN, automatic scaling, and cost-effective for variable loads',
            consequences: 'AWS vendor dependency but significantly reduced operational overhead',
            alternatives: ['Self-hosted MinIO', 'Google Cloud Storage', 'Azure Blob Storage', 'Local filesystem'],
            tradeoffs: 'Vendor lock-in vs operational simplicity and global performance'
          },
          {
            id: 'ADR-006',
            title: 'Node.js vs Go for WebSocket Server Implementation',
            status: 'Accepted',
            date: '2024-01-22',
            context: 'Need high-performance server handling thousands of concurrent WebSocket connections',
            decision: 'Use Node.js with Socket.IO for WebSocket server implementation',
            rationale: 'Excellent WebSocket ecosystem, event-driven architecture suits real-time applications',
            consequences: 'Single-threaded limitations but optimal for I/O-intensive real-time operations',
            alternatives: ['Go with Gorilla WebSocket', 'Java with Spring WebSocket', 'Python with AsyncIO'],
            tradeoffs: 'Single-threaded constraints vs ecosystem maturity and development speed'
          }
        ]
      },
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
      architecture: {
        overview: 'Domain-driven microservices architecture with event sourcing, CQRS patterns, and distributed data management',
        diagram: `
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   React SPA     │◄──►│   API Gateway    │◄──►│   Admin Panel   │
│   (Frontend)    │    │   (Kong/Zuul)    │    │   (React)       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │
                                ▼
      ┌─────────────────────────────────────────────────────────────┐
      │                   Service Mesh (Istio)                     │
      └─────────────────────────────────────────────────────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│ User Service│       │Product      │       │Order        │
│ (Go)        │       │Service (Go) │       │Service (Go) │
│ PostgreSQL  │       │ PostgreSQL  │       │ PostgreSQL  │
└─────────────┘       └─────────────┘       └─────────────┘
        │                       │                       │
        └───────────────────────┼───────────────────────┘
                                ▼
        ┌─────────────────────────────────────────────────┐
        │            RabbitMQ Message Bus                 │
        │         (Event-Driven Communication)           │
        └─────────────────────────────────────────────────┘
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│Payment      │       │Inventory    │       │Notification │
│Service (Go) │       │Service (Go) │       │Service (Go) │
│ PostgreSQL  │       │ Redis Cache │       │ Email/SMS   │
└─────────────┘       └─────────────┘       └─────────────┘`,
        components: [
          {
            name: 'API Gateway',
            tech: 'Kong/Zuul + Rate Limiting',
            responsibility: 'Request routing, authentication, rate limiting, API versioning'
          },
          {
            name: 'User Service',
            tech: 'Go + PostgreSQL',
            responsibility: 'User registration, authentication, profile management, JWT tokens'
          },
          {
            name: 'Product Service',
            tech: 'Go + PostgreSQL + Elasticsearch',
            responsibility: 'Product catalog, search, recommendations, inventory tracking'
          },
          {
            name: 'Order Service',
            tech: 'Go + PostgreSQL + Event Sourcing',
            responsibility: 'Order processing, workflow management, order history'
          },
          {
            name: 'Payment Service',
            tech: 'Go + PostgreSQL + Stripe API',
            responsibility: 'Payment processing, refunds, transaction history'
          },
          {
            name: 'Inventory Service',
            tech: 'Go + Redis + PostgreSQL',
            responsibility: 'Stock management, real-time inventory updates, reservations'
          },
          {
            name: 'Event Bus',
            tech: 'RabbitMQ + Dead Letter Queues',
            responsibility: 'Async communication, event publishing, message routing'
          }
        ],
        dataFlow: [
          'User places order → Order Service creates order event → Event published to RabbitMQ',
          'Payment Service processes payment → Inventory Service reserves stock → Notification sent',
          'Each service maintains its own database (Database per Service pattern)',
          'Eventual consistency through event-driven architecture'
        ],
        designDecisions: [
          {
            id: 'ADR-001',
            title: 'Microservices vs Monolithic Architecture',
            status: 'Accepted',
            date: '2024-02-01',
            context: 'E-commerce platform needs to scale different components independently and enable team autonomy',
            decision: 'Implement microservices architecture with domain-driven design boundaries',
            rationale: 'Independent scaling, technology diversity, team autonomy, and better fault isolation',
            consequences: 'Increased operational complexity but better scalability and development velocity',
            alternatives: ['Monolithic application', 'Modular monolith', 'Service-oriented architecture'],
            tradeoffs: 'Operational complexity vs scalability and team independence'
          },
          {
            id: 'ADR-002',
            title: 'Go vs Java for Microservices Implementation',
            status: 'Accepted',
            date: '2024-02-03',
            context: 'Need high-performance, resource-efficient services with fast deployment cycles',
            decision: 'Use Go for all microservices due to performance, concurrency, and deployment benefits',
            rationale: 'Excellent concurrency, low resource footprint, fast compilation, and simple deployment',
            consequences: 'Team learning curve but significantly better resource utilization and performance',
            alternatives: ['Java Spring Boot', 'Node.js', 'Python FastAPI', 'C# .NET Core'],
            tradeoffs: 'Learning curve vs performance and resource efficiency'
          },
          {
            id: 'ADR-003',
            title: 'Database per Service vs Shared Database',
            status: 'Accepted',
            date: '2024-02-05',
            context: 'Need data independence and autonomy for each microservice',
            decision: 'Implement database per service pattern with eventual consistency',
            rationale: 'Service autonomy, independent scaling, technology choice freedom, and fault isolation',
            consequences: 'Complex data consistency but true service independence and scalability',
            alternatives: ['Shared database', 'Database per bounded context', 'Shared database with views'],
            tradeoffs: 'Data consistency complexity vs service autonomy and scalability'
          },
          {
            id: 'ADR-004',
            title: 'RabbitMQ vs Apache Kafka for Event-Driven Communication',
            status: 'Accepted',
            date: '2024-02-08',
            context: 'Need reliable asynchronous communication between services with guaranteed delivery',
            decision: 'Use RabbitMQ for service-to-service communication with event sourcing patterns',
            rationale: 'Better message routing, dead letter queues, and easier operational management for our scale',
            consequences: 'Excellent reliability and routing but potentially lower throughput than Kafka',
            alternatives: ['Apache Kafka', 'Amazon SQS/SNS', 'Redis Streams', 'Direct HTTP calls'],
            tradeoffs: 'Peak throughput vs message routing flexibility and operational simplicity'
          },
          {
            id: 'ADR-005',
            title: 'Kong vs Zuul for API Gateway',
            status: 'Accepted',
            date: '2024-02-10',
            context: 'Need centralized routing, authentication, and rate limiting for microservices',
            decision: 'Implement Kong API Gateway for request routing and cross-cutting concerns',
            rationale: 'High performance, extensive plugin ecosystem, and proven scalability in production',
            consequences: 'Additional infrastructure component but centralized security and routing',
            alternatives: ['Netflix Zuul', 'AWS API Gateway', 'Istio Service Mesh', 'Custom gateway'],
            tradeoffs: 'Infrastructure complexity vs centralized management and security'
          },
          {
            id: 'ADR-006',
            title: 'Docker Swarm vs Kubernetes for Container Orchestration',
            status: 'Accepted',
            date: '2024-02-12',
            context: 'Need container orchestration for deployment, scaling, and management of microservices',
            decision: 'Use Kubernetes for container orchestration and service management',
            rationale: 'Industry standard, extensive ecosystem, advanced networking, and better scaling capabilities',
            consequences: 'Steeper learning curve but future-proof orchestration with extensive capabilities',
            alternatives: ['Docker Swarm', 'Amazon ECS', 'HashiCorp Nomad', 'Manual deployment'],
            tradeoffs: 'Learning curve and complexity vs advanced orchestration features and ecosystem'
          },
          {
            id: 'ADR-007',
            title: 'Synchronous vs Asynchronous Service Communication',
            status: 'Accepted',
            date: '2024-02-15',
            context: 'Balance between data consistency and system resilience in distributed architecture',
            decision: 'Use hybrid approach: synchronous for critical real-time operations, asynchronous for eventual consistency',
            rationale: 'Critical operations (payment) need immediate consistency, others can be eventually consistent',
            consequences: 'Complex communication patterns but optimal balance of consistency and resilience',
            alternatives: ['Fully synchronous', 'Fully asynchronous', 'Event sourcing only'],
            tradeoffs: 'System complexity vs balanced consistency and performance requirements'
          }
        ]
      },
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
      architecture: {
        overview: 'Real-time analytics platform with ETL pipelines, interactive visualizations, and multi-source data integration',
        diagram: `
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Business      │◄──►│   Analytics      │◄──►│   Data         │
│   Users         │    │   Dashboard      │    │   Scientists    │
│   (Stakeholders)│    │   (React SPA)    │    │   (Jupyter)     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │
                                ▼
                    ┌──────────────────┐
                    │   Load Balancer  │
                    │   (NGINX + SSL)  │
                    └──────────────────┘
                                │
                    ┌───────────┼───────────┐
                    │           │           │
                    ▼           ▼           ▼
        ┌─────────────────┐ ┌─────────────┐ ┌─────────────────┐
        │ Analytics API   │ │ WebSocket   │ │ Export Service  │
        │ (FastAPI +      │ │ Server      │ │ (PDF/Excel      │
        │ Pydantic)       │ │ (Socket.IO) │ │ Generation)     │
        └─────────────────┘ └─────────────┘ └─────────────────┘
                    │           │           │
                    └───────────┼───────────┘
                                ▼
                    ┌──────────────────┐
                    │   Redis Cache    │
                    │   (Query Cache + │
                    │   Session Store) │
                    └──────────────────┘
                                │
                    ┌───────────┼───────────┐
                    │           │           │
                    ▼           ▼           ▼
        ┌─────────────────┐ ┌─────────────┐ ┌─────────────────┐
        │ Data Processing │ │ Query Engine│ │ Time Series DB  │
        │ Engine          │ │ (SQL +      │ │ (InfluxDB)      │
        │ (Pandas + NumPy)│ │ Analytics)  │ │                 │
        └─────────────────┘ └─────────────┘ └─────────────────┘
                    │           │           │
                    └───────────┼───────────┘
                                ▼
                    ┌──────────────────┐
                    │   PostgreSQL     │
                    │   (Data Warehouse│
                    │   + Materialized │
                    │   Views)         │
                    └──────────────────┘
                                │
                                ▼
        ┌─────────────────────────────────────────────────────────────┐
        │                    ETL Pipeline                             │
        │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐│
        │  │   Apache    │  │   Data      │  │   Data Quality      ││
        │  │   Airflow   │  │ Validation  │  │   Monitoring        ││
        │  │ (Scheduler) │  │ (Great      │  │   (Data Lineage)    ││
        │  │             │  │Expectations)│  │                     ││
        │  └─────────────┘  └─────────────┘  └─────────────────────┘│
        └─────────────────────────────────────────────────────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Data Sources  │    │   File Storage  │    │   External APIs │
│   (MySQL, Oracle│    │   (CSV, JSON,   │    │   (REST APIs,   │
│   SQL Server)   │    │   Parquet)      │    │   GraphQL)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘`,
        components: [
          {
            name: 'Analytics Frontend',
            tech: 'React + TypeScript + D3.js + Recharts',
            responsibility: 'Interactive dashboards, real-time charts, custom visualizations, responsive design'
          },
          {
            name: 'Analytics API',
            tech: 'FastAPI + Pydantic + SQLAlchemy',
            responsibility: 'Data aggregation, query optimization, API endpoints, request validation'
          },
          {
            name: 'WebSocket Server',
            tech: 'Socket.IO + Redis Pub/Sub',
            responsibility: 'Real-time data updates, live chart streaming, user notifications'
          },
          {
            name: 'Data Processing Engine',
            tech: 'Pandas + NumPy + SciPy',
            responsibility: 'Data transformation, statistical analysis, aggregations, calculations'
          },
          {
            name: 'Query Engine',
            tech: 'PostgreSQL + Materialized Views',
            responsibility: 'Complex SQL analytics, pre-computed aggregations, query optimization'
          },
          {
            name: 'Cache Layer',
            tech: 'Redis + Query Result Caching',
            responsibility: 'Query result caching, session management, performance optimization'
          },
          {
            name: 'ETL Pipeline',
            tech: 'Apache Airflow + Great Expectations',
            responsibility: 'Data extraction, transformation, quality validation, scheduling'
          },
          {
            name: 'Export Service',
            tech: 'ReportLab + OpenPyXL + Celery',
            responsibility: 'PDF/Excel generation, scheduled reports, asynchronous processing'
          }
        ],
        visualizationTypes: [
          'Time Series Charts: Line charts with zoom, pan, and real-time updates',
          'Statistical Charts: Histograms, box plots, scatter plots with trend lines',
          'Geographic Maps: Choropleth maps, heat maps, marker clustering',
          'Business Intelligence: KPI cards, gauge charts, funnel analysis',
          'Interactive Tables: Sortable, filterable data grids with export options',
          'Custom Dashboards: Drag-and-drop dashboard builder with widgets'
        ],
        dataFlow: [
          'Data Sources → ETL Pipeline → Data Validation → PostgreSQL Data Warehouse',
          'User Query → FastAPI → Query Engine → PostgreSQL → Data Processing → JSON Response',
          'Real-time Updates → WebSocket → Redis Pub/Sub → Frontend Chart Updates',
          'Export Request → Celery Queue → Background Processing → File Generation → Download'
        ],
        performanceOptimizations: [
          'Materialized views: Pre-computed aggregations for complex queries',
          'Query result caching: Redis-based caching with TTL strategies',
          'Database indexing: Optimized indexes for analytical workloads',
          'Data pagination: Efficient handling of large datasets',
          'Chart virtualization: Optimized rendering for large datasets'
        ],
        designDecisions: [
          {
            id: 'ADR-001',
            title: 'Choice of FastAPI over Django for Analytics API',
            status: 'Accepted',
            date: '2024-01-15',
            context: 'Need high-performance API for real-time analytics with automatic OpenAPI documentation',
            decision: 'Use FastAPI with Pydantic for type validation and automatic API docs',
            rationale: 'FastAPI provides 2-3x better performance than Django, native async support, and automatic validation',
            consequences: 'Faster query responses, better developer experience, but smaller ecosystem than Django',
            alternatives: ['Django REST Framework', 'Flask with extensions', 'Express.js'],
            tradeoffs: 'Performance and type safety vs ecosystem maturity'
          },
          {
            id: 'ADR-002',
            title: 'PostgreSQL with Materialized Views vs Time-Series Database',
            status: 'Accepted',
            date: '2024-01-18',
            context: 'Need efficient storage and querying for large volumes of analytical data',
            decision: 'Use PostgreSQL with materialized views for pre-computed aggregations',
            rationale: 'Team expertise in PostgreSQL, ACID compliance, and complex query support outweighed specialized TSDB benefits',
            consequences: 'Leveraged existing skills, strong consistency, but manual optimization required',
            alternatives: ['InfluxDB', 'TimescaleDB', 'ClickHouse'],
            tradeoffs: 'Familiar tooling vs specialized time-series optimizations'
          },
          {
            id: 'ADR-003',
            title: 'React with D3.js vs Pre-built Chart Libraries',
            status: 'Accepted',
            date: '2024-01-22',
            context: 'Requirements for highly customizable, interactive visualizations with real-time updates',
            decision: 'Combine React for UI state management with D3.js for custom visualizations',
            rationale: 'Maximum flexibility for custom charts, smooth real-time updates, and responsive design',
            consequences: 'Higher development time initially, but unlimited customization and better performance',
            alternatives: ['Chart.js', 'Recharts only', 'Highcharts', 'Observable Plot'],
            tradeoffs: 'Development time vs customization flexibility'
          },
          {
            id: 'ADR-004',
            title: 'Redis Caching Strategy Implementation',
            status: 'Accepted',
            date: '2024-02-01',
            context: 'Query response times exceeding 2 seconds for complex analytical queries',
            decision: 'Implement multi-layer caching with Redis for query results and session management',
            rationale: 'Reduced average query time from 2.1s to 180ms, improved user experience significantly',
            consequences: 'Added complexity in cache invalidation, but dramatic performance improvement',
            alternatives: ['Database query optimization only', 'Application-level caching', 'CDN caching'],
            tradeoffs: 'System complexity vs query performance'
          },
          {
            id: 'ADR-005',
            title: 'Apache Airflow for ETL Pipeline Orchestration',
            status: 'Accepted',
            date: '2024-02-05',
            context: 'Complex data pipeline with multiple sources, transformations, and quality checks',
            decision: 'Use Apache Airflow for workflow orchestration with Great Expectations for data validation',
            rationale: 'Mature ecosystem, visual DAG representation, extensive logging, and retry mechanisms',
            consequences: 'Robust pipeline management but requires dedicated infrastructure and monitoring',
            alternatives: ['Prefect', 'Dagster', 'Custom cron jobs', 'AWS Step Functions'],
            tradeoffs: 'Infrastructure overhead vs pipeline reliability and visibility'
          }
        ]
      },
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
      architecture: {
        overview: 'ML Pipeline architecture with real-time inference, batch training, and A/B testing framework for production recommendation systems',
        diagram: `
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Mobile Apps   │◄──►│   Load Balancer  │◄──►│   Web Apps      │
│   (iOS/Android) │    │   (NGINX/ALB)    │    │   (React/Vue)   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 ▼
                    ┌──────────────────┐
                    │   FastAPI Gateway│
                    │   (Python 3.9+)  │
                    │   Auth & Routing │
                    └──────────────────┘
                                 │
                    ┌────────────┼────────────┐
                    │            │            │
                    ▼            ▼            ▼
        ┌─────────────────┐ ┌─────────────┐ ┌─────────────────┐
        │ Recommendation  │ │ A/B Testing │ │ User Profile    │
        │ Service         │ │ Service     │ │ Service         │
        │ (TensorFlow     │ │ (MLflow)    │ │ (FastAPI)       │
        │ Serving)        │ │             │ │                 │
        └─────────────────┘ └─────────────┘ └─────────────────┘
                    │            │            │
                    ▼            ▼            ▼
        ┌─────────────────┐ ┌─────────────┐ ┌─────────────────┐
        │   Redis Cache   │ │ Experiment  │ │   PostgreSQL    │
        │   (Embeddings   │ │ Store       │ │   (User Data &  │
        │   & Results)    │ │ (MongoDB)   │ │   Interactions) │
        └─────────────────┘ └─────────────┘ └─────────────────┘
                                 │
                                 ▼
                    ┌──────────────────┐
                    │   ML Pipeline    │
                    │   (Apache Airflow│
                    │   + Kubeflow)    │
                    └──────────────────┘
                                 │
            ┌────────────────────┼────────────────────┐
            │                    │                    │
            ▼                    ▼                    ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Data Ingestion  │    │ Model Training  │    │ Model Deployment│
│ (Apache Kafka + │    │ (TensorFlow +   │    │ (TensorFlow     │
│ Spark Streaming)│    │ PyTorch)        │    │ Serving + K8s)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Data Lake     │    │   Model Store   │    │   Monitoring    │
│   (S3 + Delta   │    │   (MLflow +     │    │   (Prometheus + │
│   Lake)         │    │   S3)           │    │   Grafana)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘`,
        components: [
          {
            name: 'FastAPI Gateway',
            tech: 'FastAPI + Pydantic + JWT',
            responsibility: 'API routing, authentication, request validation, rate limiting, response caching'
          },
          {
            name: 'Recommendation Service',
            tech: 'TensorFlow Serving + gRPC',
            responsibility: 'Real-time inference, model serving, embeddings computation, similarity calculation'
          },
          {
            name: 'A/B Testing Service',
            tech: 'MLflow + Statistical Testing',
            responsibility: 'Experiment management, traffic splitting, statistical significance testing, result analysis'
          },
          {
            name: 'User Profile Service',
            tech: 'FastAPI + SQLAlchemy',
            responsibility: 'User behavior tracking, preference learning, interaction logging, profile updates'
          },
          {
            name: 'ML Pipeline',
            tech: 'Apache Airflow + Kubeflow',
            responsibility: 'ETL workflows, feature engineering, model training orchestration, automated retraining'
          },
          {
            name: 'Data Ingestion',
            tech: 'Apache Kafka + Spark Streaming',
            responsibility: 'Real-time event processing, user interaction streaming, data validation, feature extraction'
          },
          {
            name: 'Model Training',
            tech: 'TensorFlow + PyTorch + Ray',
            responsibility: 'Collaborative filtering, content-based filtering, deep learning models, hyperparameter tuning'
          },
          {
            name: 'Model Store',
            tech: 'MLflow + S3 + Docker Registry',
            responsibility: 'Model versioning, artifact storage, metadata tracking, deployment automation'
          }
        ],
        mlPatterns: [
          'Collaborative Filtering: Matrix factorization with neural collaborative filtering',
          'Content-Based: TF-IDF + Word2Vec embeddings for item similarity',
          'Hybrid Approach: Weighted ensemble of collaborative and content-based models',
          'Deep Learning: Neural networks for learning complex user-item interactions',
          'Cold Start: Content-based recommendations for new users/items',
          'Real-time Learning: Online learning with incremental model updates'
        ],
        dataFlow: [
          'User interaction → Kafka → Spark Streaming → Feature Store → Real-time recommendations',
          'Batch data → Airflow ETL → Feature engineering → Model training → Model deployment',
          'A/B test assignment → Experiment tracking → Performance metrics → Model selection',
          'Model predictions → Redis cache → API response → User experience tracking'
        ],
        performanceOptimizations: [
          'Redis caching: Sub-100ms response times for cached recommendations',
          'Model quantization: 4x faster inference with minimal accuracy loss',
          'Batch prediction: Pre-computed recommendations for frequent users',
          'Feature store: Centralized feature serving with microsecond latency',
          'Model pruning: 60% model size reduction while maintaining quality'
        ],
        designDecisions: [
          {
            id: 'ADR-001',
            title: 'Hybrid Recommendation Approach vs Single Algorithm',
            status: 'Accepted',
            date: '2024-03-10',
            context: 'Cold start problem for new users/items and need for diverse recommendation quality',
            decision: 'Implement hybrid approach combining collaborative filtering, content-based, and deep learning models',
            rationale: 'Collaborative filtering excels for existing users, content-based handles cold start, deep learning captures complex patterns',
            consequences: 'Better overall recommendation quality but increased system complexity and training time',
            alternatives: ['Pure collaborative filtering', 'Content-based only', 'Deep learning only'],
            tradeoffs: 'System complexity vs recommendation quality and coverage'
          },
          {
            id: 'ADR-002',
            title: 'TensorFlow Serving vs Custom Model API',
            status: 'Accepted',
            date: '2024-03-15',
            context: 'Need production-grade model serving with high availability and performance',
            decision: 'Use TensorFlow Serving with gRPC for model inference and version management',
            rationale: 'Built-in model versioning, A/B testing support, optimized inference, and industry standard',
            consequences: 'Robust production serving but vendor lock-in to TensorFlow ecosystem',
            alternatives: ['Custom FastAPI service', 'MLflow serving', 'Triton Inference Server'],
            tradeoffs: 'Framework dependency vs production features and reliability'
          },
          {
            id: 'ADR-003',
            title: 'Real-time vs Batch Recommendation Generation',
            status: 'Accepted',
            date: '2024-03-18',
            context: 'Balance between recommendation freshness and system performance at scale',
            decision: 'Hybrid approach: pre-computed batch recommendations with real-time personalization layer',
            rationale: 'Handles high throughput efficiently while maintaining personalization for user context',
            consequences: 'Optimal performance and user experience but requires cache management strategy',
            alternatives: ['Pure real-time', 'Pure batch', 'Streaming recommendations'],
            tradeoffs: 'System complexity vs latency and resource utilization'
          },
          {
            id: 'ADR-004',
            title: 'MLflow for Experiment Tracking and Model Registry',
            status: 'Accepted',
            date: '2024-03-22',
            context: 'Need comprehensive ML lifecycle management with model versioning and A/B testing',
            decision: 'Implement MLflow for experiment tracking, model registry, and deployment management',
            rationale: 'Centralized experiment management, model lineage, and seamless deployment pipeline integration',
            consequences: 'Better ML operations and reproducibility but additional infrastructure overhead',
            alternatives: ['Weights & Biases', 'Neptune', 'Custom tracking solution'],
            tradeoffs: 'Infrastructure complexity vs ML experiment management capabilities'
          },
          {
            id: 'ADR-005',
            title: 'Feature Store Implementation with Redis',
            status: 'Accepted',
            date: '2024-03-25',
            context: 'Need low-latency feature serving for real-time recommendations with feature consistency',
            decision: 'Build feature store using Redis with background batch updates from data pipeline',
            rationale: 'Microsecond latency for feature lookup, consistent features across training and serving',
            consequences: 'Excellent performance and consistency but requires careful feature versioning and updates',
            alternatives: ['Database-based features', 'In-memory application cache', 'Dedicated feature store (Feast)'],
            tradeoffs: 'Development effort vs feature serving performance and consistency'
          }
        ]
      },
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
      architecture: {
        overview: 'Multi-region AWS infrastructure with GitOps workflows, automated provisioning, and comprehensive monitoring across dev/staging/prod environments',
        diagram: `
┌─────────────────────────────────────────────────────────────────────────┐
│                          GitHub Repository                              │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐      │
│   │ Terraform       │  │ Kubernetes      │  │ GitHub Actions  │      │
│   │ Modules         │  │ Manifests       │  │ Workflows       │      │
│   │ (Infrastructure)│  │ (Applications)  │  │ (CI/CD)         │      │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘      │
└─────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
                      ┌──────────────────┐
                      │  GitHub Actions  │
                      │  Runner          │
                      │  (Terraform +    │
                      │  kubectl + AWS   │
                      │  CLI)            │
                      └──────────────────┘
                                   │
        ┌──────────────────────────┼──────────────────────────┐
        │                          │                          │
        ▼                          ▼                          ▼
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│ Development     │      │ Staging         │      │ Production      │
│ Environment     │      │ Environment     │      │ Environment     │
│ (us-east-1)     │      │ (us-west-2)     │      │ (us-east-1 +    │
│                 │      │                 │      │  us-west-2)     │
└─────────────────┘      └─────────────────┘      └─────────────────┘

Each Environment Contains:
┌─────────────────────────────────────────────────────────────────────────┐
│                          AWS Region (Multi-AZ)                         │
│                                                                         │
│  ┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐  │
│  │   Route 53      │◄──►│  CloudFront CDN  │◄──►│   WAF/Shield    │  │
│  │   (DNS)         │    │  (Global Edge)   │    │   (Security)    │  │
│  └─────────────────┘    └──────────────────┘    └─────────────────┘  │
│                                   │                                    │
│                                   ▼                                    │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │                Application Load Balancer                        │ │
│  │              (Multi-AZ with SSL Termination)                   │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                   │                                    │
│         ┌─────────────────────────┼─────────────────────────┐         │
│         │                         │                         │         │
│         ▼                         ▼                         ▼         │
│  ┌─────────────┐           ┌─────────────┐           ┌─────────────┐ │
│  │   EKS       │           │   EKS       │           │   EKS       │ │
│  │ Cluster     │           │ Cluster     │           │ Cluster     │ │
│  │ (AZ-1a)     │           │ (AZ-1b)     │           │ (AZ-1c)     │ │
│  │             │           │             │           │             │ │
│  │ ┌─────────┐ │           │ ┌─────────┐ │           │ ┌─────────┐ │ │
│  │ │Worker   │ │           │ │Worker   │ │           │ │Worker   │ │ │
│  │ │Nodes    │ │           │ │Nodes    │ │           │ │Nodes    │ │ │
│  │ │(EC2 +   │ │           │ │(EC2 +   │ │           │ │(EC2 +   │ │ │
│  │ │Fargate) │ │           │ │Fargate) │ │           │ │Fargate) │ │ │
│  │ └─────────┘ │           │ └─────────┘ │           │ └─────────┘ │ │
│  └─────────────┘           └─────────────┘           └─────────────┘ │
│         │                         │                         │         │
│         └─────────────────────────┼─────────────────────────┘         │
│                                   ▼                                    │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │                    Data Layer                                   │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────┐│ │
│  │  │    RDS      │  │ ElastiCache │  │     S3      │  │ DynamoDB││ │
│  │  │(Multi-AZ +  │  │  (Redis)    │  │ (Versioned) │  │(Global  ││ │
│  │  │Read Replica)│  │             │  │             │  │Tables)  ││ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────┘│ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │                Monitoring & Logging                             │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────┐│ │
│  │  │ CloudWatch  │  │   X-Ray     │  │    VPC      │  │  AWS    ││ │
│  │  │(Metrics +   │  │(Distributed │  │ Flow Logs   │  │Config   ││ │
│  │  │Logs)        │  │Tracing)     │  │             │  │         ││ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────┘│ │
│  └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘`,
        components: [
          {
            name: 'Terraform State Management',
            tech: 'Terraform + S3 Backend + DynamoDB',
            responsibility: 'Infrastructure state management, remote state locking, state versioning, collaborative access'
          },
          {
            name: 'GitHub Actions CI/CD',
            tech: 'GitHub Actions + OIDC + AWS CLI',
            responsibility: 'GitOps workflows, automated deployments, infrastructure validation, security scanning'
          },
          {
            name: 'AWS EKS Clusters',
            tech: 'Kubernetes + EC2 + Fargate + CNI',
            responsibility: 'Container orchestration, auto-scaling, service mesh, ingress management'
          },
          {
            name: 'Networking Layer',
            tech: 'VPC + Subnets + NAT + IGW + Route53',
            responsibility: 'Network isolation, traffic routing, DNS management, security group policies'
          },
          {
            name: 'Data Layer',
            tech: 'RDS + ElastiCache + S3 + DynamoDB',
            responsibility: 'Data persistence, caching, object storage, backup and recovery'
          },
          {
            name: 'Security & Compliance',
            tech: 'IAM + KMS + WAF + GuardDuty + Config',
            responsibility: 'Identity management, encryption, threat detection, compliance monitoring'
          },
          {
            name: 'Monitoring & Observability',
            tech: 'CloudWatch + X-Ray + Prometheus + Grafana',
            responsibility: 'Metrics collection, distributed tracing, alerting, performance monitoring'
          },
          {
            name: 'Load Balancing',
            tech: 'ALB + NLB + CloudFront + Route53',
            responsibility: 'Traffic distribution, SSL termination, global content delivery, health checks'
          }
        ],
        infrastructurePatterns: [
          'Infrastructure as Code: Version-controlled, immutable infrastructure deployments',
          'GitOps: Git-based workflow for infrastructure changes and deployments',
          'Multi-Environment: Consistent dev/staging/prod environments with parameter variations',
          'Blue-Green Deployment: Zero-downtime deployments with instant rollback capability',
          'Disaster Recovery: Multi-region setup with automated failover and data replication',
          'Cost Optimization: Spot instances, reserved capacity, resource right-sizing'
        ],
        deploymentFlow: [
          'Code push → GitHub Actions trigger → Terraform plan → Manual approval → Apply changes',
          'Infrastructure validation → Security scan → Compliance check → Deployment',
          'Kubernetes manifest deployment → Rolling updates → Health checks → Monitoring',
          'Automated testing → Performance validation → Smoke tests → Production promotion'
        ],
        securityMeasures: [
          'Zero-trust networking with VPC isolation and security groups',
          'IAM roles with least privilege access and temporary credentials',
          'Encryption at rest and in transit using AWS KMS and TLS',
          'Automated security scanning with AWS Config and GuardDuty',
          'Network monitoring with VPC Flow Logs and threat detection'
        ],
        designDecisions: [
          {
            id: 'ADR-001',
            title: 'Terraform vs AWS CloudFormation for Infrastructure as Code',
            status: 'Accepted',
            date: '2024-02-10',
            context: 'Need multi-cloud capable IaC solution with team expertise and community support',
            decision: 'Use Terraform with AWS provider for all infrastructure provisioning',
            rationale: 'Multi-cloud portability, extensive provider ecosystem, better state management, and HCL readability',
            consequences: 'Team needed to learn HCL syntax but gained cloud-agnostic skills and better tooling',
            alternatives: ['AWS CloudFormation', 'AWS CDK', 'Pulumi'],
            tradeoffs: 'Learning curve vs multi-cloud flexibility and ecosystem'
          },
          {
            id: 'ADR-002',
            title: 'EKS vs ECS for Container Orchestration',
            status: 'Accepted',
            date: '2024-02-15',
            context: 'Need scalable container platform with ecosystem compatibility and team skills',
            decision: 'Deploy applications on Amazon EKS with mixed EC2 and Fargate node groups',
            rationale: 'Kubernetes standard ensures portability, extensive ecosystem, and team had K8s experience',
            consequences: 'Higher operational complexity but gained standard orchestration and ecosystem benefits',
            alternatives: ['Amazon ECS', 'AWS Fargate only', 'Self-managed Kubernetes'],
            tradeoffs: 'Operational complexity vs ecosystem compatibility and portability'
          },
          {
            id: 'ADR-003',
            title: 'Multi-Region Architecture Strategy',
            status: 'Accepted',
            date: '2024-02-18',
            context: 'Business requirements for high availability and disaster recovery with global user base',
            decision: 'Implement active-passive multi-region setup with automated failover mechanisms',
            rationale: 'Balanced cost and complexity while meeting RTO/RPO requirements of 15 minutes',
            consequences: 'Increased infrastructure costs by 40% but achieved 99.9% availability target',
            alternatives: ['Single region with multi-AZ', 'Active-active multi-region', 'Manual failover'],
            tradeoffs: 'Infrastructure cost vs availability and disaster recovery capabilities'
          },
          {
            id: 'ADR-004',
            title: 'GitOps Workflow with GitHub Actions vs GitLab CI',
            status: 'Accepted',
            date: '2024-02-22',
            context: 'Need automated deployment pipeline integrated with existing GitHub repositories',
            decision: 'Implement GitOps using GitHub Actions with OIDC for secure AWS access',
            rationale: 'Seamless integration with existing GitHub repos, OIDC eliminates long-lived credentials',
            consequences: 'Improved security posture and simplified credential management but GitHub dependency',
            alternatives: ['GitLab CI/CD', 'Jenkins', 'AWS CodePipeline'],
            tradeoffs: 'Platform lock-in vs integration simplicity and security'
          },
          {
            id: 'ADR-005',
            title: 'Monitoring Strategy with CloudWatch vs Third-party Tools',
            status: 'Accepted',
            date: '2024-02-25',
            context: 'Need comprehensive monitoring solution balancing cost, features, and AWS integration',
            decision: 'Use CloudWatch for basic metrics with Prometheus/Grafana for advanced application monitoring',
            rationale: 'CloudWatch for infrastructure monitoring, Prometheus for detailed application metrics and alerting',
            consequences: 'Optimal cost-performance balance but requires managing two monitoring systems',
            alternatives: ['CloudWatch only', 'Datadog', 'New Relic', 'Full Prometheus stack'],
            tradeoffs: 'System complexity vs monitoring capabilities and cost optimization'
          }
        ]
      },
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
      architecture: {
        overview: 'Progressive Web App architecture with offline-first design, service worker caching, and native app-like features',
        diagram: `
┌─────────────────────────────────────────────────────────────────────────┐
│                          User Devices                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │
│  │   Mobile    │  │   Tablet    │  │   Desktop   │  │    PWA      │  │
│  │   Browser   │  │   Browser   │  │   Browser   │  │  Installed  │  │
│  │   (Chrome,  │  │   (Safari,  │  │   (Firefox, │  │   App       │  │
│  │   Edge)     │  │   Chrome)   │  │   Chrome)   │  │             │  │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
        ┌─────────────────────────────────────────────────────────────┐
        │                   Service Worker                            │
        │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐│
        │  │   Network   │  │   Cache     │  │   Background Sync   ││
        │  │   Proxy     │  │ Strategies  │  │   & Push Notifications││
        │  │             │  │             │  │                     ││
        │  └─────────────┘  └─────────────┘  └─────────────────────┘│
        └─────────────────────────────────────────────────────────────┘
                    │                │                │
                    ▼                ▼                ▼
        ┌─────────────────┐ ┌─────────────┐ ┌─────────────────┐
        │   Cache API     │ │ IndexedDB   │ │ Web Push API    │
        │   (Static       │ │ (App Data   │ │ (Notifications) │
        │   Resources)    │ │ Storage)    │ │                 │
        └─────────────────┘ └─────────────┘ └─────────────────┘
                    │                │                │
                    └────────────────┼────────────────┘
                                     ▼
                        ┌──────────────────┐
                        │   React App      │
                        │   (TypeScript)   │
                        │                  │
                        │ ┌──────────────┐ │
                        │ │   Offline    │ │
                        │ │   State      │ │
                        │ │   Manager    │ │
                        │ └──────────────┘ │
                        └──────────────────┘
                                     │
                    ┌────────────────┼────────────────┐
                    │                │                │
                    ▼                ▼                ▼
        ┌─────────────────┐ ┌─────────────┐ ┌─────────────────┐
        │   CDN/Static    │ │   API       │ │   WebSocket     │
        │   Assets        │ │   Server    │ │   Server        │
        │   (Cloudflare)  │ │   (REST)    │ │   (Real-time)   │
        └─────────────────┘ └─────────────┘ └─────────────────┘
                                     │
                                     ▼
                        ┌──────────────────┐
                        │   Backend        │
                        │   Services       │
                        │   (FastAPI +     │
                        │   PostgreSQL)    │
                        └──────────────────┘`,
        components: [
          {
            name: 'Service Worker',
            tech: 'Workbox + TypeScript + Cache API',
            responsibility: 'Offline functionality, caching strategies, background sync, push notifications'
          },
          {
            name: 'React Application',
            tech: 'React + TypeScript + Context API',
            responsibility: 'UI rendering, state management, offline detection, user interaction handling'
          },
          {
            name: 'Offline State Manager',
            tech: 'React Context + Custom Hooks',
            responsibility: 'Offline/online state tracking, queue management, sync status updates'
          },
          {
            name: 'IndexedDB Store',
            tech: 'Dexie.js + TypeScript',
            responsibility: 'Local data persistence, offline data storage, query capabilities'
          },
          {
            name: 'Cache Layer',
            tech: 'Cache API + Workbox Strategies',
            responsibility: 'Static asset caching, API response caching, cache invalidation'
          },
          {
            name: 'Background Sync',
            tech: 'Background Sync API + Service Worker',
            responsibility: 'Offline action queuing, automatic retry, data synchronization'
          },
          {
            name: 'Push Notification System',
            tech: 'Web Push API + Firebase FCM',
            responsibility: 'Real-time notifications, user engagement, background messaging'
          },
          {
            name: 'Manifest & Installation',
            tech: 'Web App Manifest + BeforeInstallPrompt',
            responsibility: 'App installation prompts, home screen icons, app-like experience'
          }
        ],
        pwaFeatures: [
          'Offline-First: Cache-first strategy for all static assets and critical data',
          'Background Sync: Queue actions when offline, sync when connection restored',
          'Push Notifications: Real-time notifications even when app is closed',
          'Installable: Add to home screen with native app-like experience',
          'Responsive: Optimized for all screen sizes and orientations',
          'Fast Loading: Service worker pre-caching for instant loading'
        ],
        offlineStrategy: [
          'Static Assets: Cache-first with fallback to network for updates',
          'API Responses: Network-first with cache fallback for reliability',
          'User Actions: Queue in IndexedDB when offline, sync when online',
          'Critical Data: Always cached locally with background updates'
        ],
        performanceOptimizations: [
          'Resource pre-loading: Critical resources cached on first visit',
          'Code splitting: Lazy loading of non-critical components',
          'Image optimization: WebP format with fallbacks, responsive images',
          'Bundle optimization: Tree shaking, compression, minification',
          'Service worker registration: Deferred until after app initialization'
        ],
        designDecisions: [
          {
            id: 'ADR-001',
            title: 'Offline-First vs Online-First Architecture',
            status: 'Accepted',
            date: '2024-04-05',
            context: 'Target users often experience unreliable network connectivity, need seamless offline experience',
            decision: 'Implement offline-first architecture with cache-first strategies for critical resources',
            rationale: 'Better user experience in poor connectivity, faster load times, and true native app-like behavior',
            consequences: 'Increased complexity in sync logic and cache management but significantly improved UX',
            alternatives: ['Online-first with offline fallback', 'Network-first strategies', 'Hybrid approach'],
            tradeoffs: 'Development complexity vs user experience and reliability'
          },
          {
            id: 'ADR-002',
            title: 'Workbox vs Custom Service Worker Implementation',
            status: 'Accepted',
            date: '2024-04-08',
            context: 'Need robust caching strategies with minimal development overhead and maintenance',
            decision: 'Use Workbox for service worker functionality with custom extensions where needed',
            rationale: 'Battle-tested caching strategies, automatic precaching, and extensive PWA feature support',
            consequences: 'Faster development and fewer bugs but some vendor dependency and bundle size increase',
            alternatives: ['Custom service worker', 'sw-precache + sw-toolbox', 'PWA Builder'],
            tradeoffs: 'Bundle size and vendor dependency vs development speed and reliability'
          },
          {
            id: 'ADR-003',
            title: 'IndexedDB vs LocalStorage for Offline Data',
            status: 'Accepted',
            date: '2024-04-10',
            context: 'Need to store large amounts of structured data offline with query capabilities',
            decision: 'Use IndexedDB with Dexie.js wrapper for complex offline data storage and querying',
            rationale: 'Large storage capacity, structured queries, transactions, and better performance than localStorage',
            consequences: 'More complex API but unlimited storage and better data management capabilities',
            alternatives: ['localStorage', 'WebSQL (deprecated)', 'Raw IndexedDB', 'Cache API only'],
            tradeoffs: 'API complexity vs storage capacity and query capabilities'
          },
          {
            id: 'ADR-004',
            title: 'Firebase FCM vs Web Push Protocol',
            status: 'Accepted',
            date: '2024-04-12',
            context: 'Need cross-platform push notifications with reliable delivery and analytics',
            decision: 'Implement Firebase Cloud Messaging for push notifications with fallback to standard Web Push',
            rationale: 'Simplified cross-platform implementation, analytics, and better delivery rates on Android',
            consequences: 'Google service dependency but significantly easier implementation and better features',
            alternatives: ['Pure Web Push API', 'OneSignal', 'Pusher', 'Custom push service'],
            tradeoffs: 'Vendor lock-in vs implementation simplicity and feature richness'
          },
          {
            id: 'ADR-005',
            title: 'Background Sync Strategy for Offline Actions',
            status: 'Accepted',
            date: '2024-04-15',
            context: 'Users need to perform actions offline that must sync when connectivity returns',
            decision: 'Implement Background Sync API with IndexedDB queue for reliable action synchronization',
            rationale: 'Automatic retry when online, survives page refreshes, and provides reliable eventual consistency',
            consequences: 'Complex sync logic implementation but guaranteed data integrity and user action persistence',
            alternatives: ['Manual sync on page load', 'Periodic sync', 'WebSocket reconnection', 'No offline actions'],
            tradeoffs: 'Implementation complexity vs data reliability and user experience'
          }
        ]
      },
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
      architecture: {
        overview: 'Event sourcing and CQRS architecture with Kafka streams, dead letter queues, and comprehensive monitoring for high-throughput event processing',
        diagram: `
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Web Apps      │◄──►│   Mobile Apps    │◄──►│   IoT Devices   │
│   (React/Vue)   │    │   (iOS/Android)  │    │   (Sensors)     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 ▼
                    ┌──────────────────┐
                    │   Event Gateway  │
                    │   (Go + Gin)     │
                    │   Rate Limiting  │
                    │   Auth & Valid.  │
                    └──────────────────┘
                                 │
                                 ▼
        ┌─────────────────────────────────────────────────────────────┐
        │                Apache Kafka Cluster                        │
        │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐│
        │  │   Events    │  │  Commands   │  │   Dead Letter       ││
        │  │   Topic     │  │   Topic     │  │   Queue Topic       ││
        │  │(Partitioned)│  │(Partitioned)│  │   (DLQ)             ││
        │  └─────────────┘  └─────────────┘  └─────────────────────┘│
        └─────────────────────────────────────────────────────────────┘
                    │                │                │
        ┌───────────┴───────┬────────┴────────┬───────┴────────────┐
        │                   │                 │                    │
        ▼                   ▼                 ▼                    ▼
┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│Event Sourcing│   │ Command     │   │ Query       │   │ DLQ         │
│Service       │   │ Handler     │   │ Service     │   │ Processor   │
│(Go + Kafka  │   │ Service     │   │ (CQRS Read  │   │ (Go +       │
│Streams)      │   │ (Go)        │   │ Models)     │   │ Retry Logic)│
└─────────────┘   └─────────────┘   └─────────────┘   └─────────────┘
         │                │                 │                │
         ▼                ▼                 ▼                ▼
┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│ Event Store │   │ Write DB    │   │ Read DB     │   │ Error DB    │
│(PostgreSQL  │   │(PostgreSQL) │   │(PostgreSQL │   │(PostgreSQL) │
│Event Table) │   │             │   │Materialized │   │             │
│             │   │             │   │Views)       │   │             │
└─────────────┘   └─────────────┘   └─────────────┘   └─────────────┘
                                             │
                                             ▼
                        ┌─────────────────────────────────────┐
                        │          Redis Cache                │
                        │   ┌─────────────┐ ┌─────────────┐  │
                        │   │   Query     │ │ Session     │  │
                        │   │   Cache     │ │ Store       │  │
                        │   └─────────────┘ └─────────────┘  │
                        └─────────────────────────────────────┘
                                             │
                                             ▼
        ┌─────────────────────────────────────────────────────────────┐
        │                  Monitoring & Observability                 │
        │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐│
        │  │ Prometheus  │  │   Grafana   │  │   Distributed       ││
        │  │ (Metrics)   │  │ (Dashboard) │  │   Tracing (Jaeger)  ││
        │  └─────────────┘  └─────────────┘  └─────────────────────┘│
        │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐│
        │  │ ELK Stack   │  │ Alertmanager│  │   Health Checks     ││
        │  │ (Logs)      │  │ (Alerts)    │  │   (Kubernetes)      ││
        │  └─────────────┘  └─────────────┘  └─────────────────────┘│
        └─────────────────────────────────────────────────────────────┘`,
        components: [
          {
            name: 'Event Gateway',
            tech: 'Go + Gin + JWT + Rate Limiter',
            responsibility: 'Event ingestion, authentication, validation, rate limiting, protocol translation'
          },
          {
            name: 'Event Sourcing Service',
            tech: 'Go + Kafka Streams + SARAMA',
            responsibility: 'Event storage, event replay, aggregate reconstruction, snapshot management'
          },
          {
            name: 'Command Handler Service',
            tech: 'Go + Domain Logic + Validation',
            responsibility: 'Business logic execution, command validation, state transitions, side effects'
          },
          {
            name: 'Query Service (CQRS)',
            tech: 'Go + SQL + Read Models',
            responsibility: 'Read model maintenance, query optimization, data projections, caching'
          },
          {
            name: 'Dead Letter Queue Processor',
            tech: 'Go + Exponential Backoff + Circuit Breaker',
            responsibility: 'Failed event handling, retry logic, error classification, manual intervention'
          },
          {
            name: 'Kafka Cluster',
            tech: 'Apache Kafka + Zookeeper + Schema Registry',
            responsibility: 'Event streaming, message persistence, topic partitioning, consumer groups'
          },
          {
            name: 'Event Store',
            tech: 'PostgreSQL + Event Table + Indexes',
            responsibility: 'Immutable event storage, version tracking, aggregate boundaries, concurrency'
          },
          {
            name: 'Monitoring Stack',
            tech: 'Prometheus + Grafana + Jaeger + ELK',
            responsibility: 'Metrics collection, visualization, distributed tracing, log aggregation'
          }
        ],
        eventPatterns: [
          'Event Sourcing: Complete audit trail with event replay capabilities',
          'CQRS: Separate read/write models for optimal performance',
          'Saga Pattern: Distributed transaction management across services',
          'Outbox Pattern: Reliable event publishing from database transactions',
          'Dead Letter Queue: Failed event handling with retry strategies',
          'Event Versioning: Schema evolution and backward compatibility'
        ],
        dataFlow: [
          'Event ingestion → Gateway validation → Kafka topic → Event store → Command processing',
          'Event stream → Kafka Streams → Read model updates → Materialized views → Query responses',
          'Failed events → DLQ → Retry logic → Manual intervention → Reprocessing',
          'Event replay → Historical events → Aggregate reconstruction → State recovery'
        ],
        reliabilityFeatures: [
          'At-least-once delivery: Kafka consumer acknowledgment patterns',
          'Idempotency: Event deduplication and idempotent processing',
          'Circuit breaker: Prevent cascade failures during outages',
          'Bulkhead pattern: Service isolation and resource segregation',
          'Health checks: Kubernetes liveness and readiness probes'
        ],
        performanceOptimizations: [
          'Kafka partitioning: Parallel processing for high throughput',
          'Batch processing: Grouped event handling for efficiency',
          'Read replicas: Query load distribution across multiple databases',
          'Connection pooling: Optimized database connection management',
          'Prometheus caching: Aggregated metrics for faster queries'
        ],
        designDecisions: [
          {
            id: 'ADR-001',
            title: 'Event Sourcing vs Traditional CRUD Operations',
            status: 'Accepted',
            date: '2024-05-01',
            context: 'Need complete audit trail, temporal queries, and ability to rebuild system state from events',
            decision: 'Implement Event Sourcing pattern with immutable event store and event replay capabilities',
            rationale: 'Complete audit trail, ability to replay events for debugging, and temporal queries for business analytics',
            consequences: 'Increased storage requirements and complexity but gained powerful debugging and analytics capabilities',
            alternatives: ['Traditional CRUD with audit log', 'Change Data Capture', 'Hybrid approach'],
            tradeoffs: 'Storage and complexity vs audit capabilities and temporal queries'
          },
          {
            id: 'ADR-002',
            title: 'Apache Kafka vs Amazon SQS for Event Streaming',
            status: 'Accepted',
            date: '2024-05-05',
            context: 'Need high-throughput event streaming with ordering guarantees and replay capabilities',
            decision: 'Use Apache Kafka for event streaming with topic partitioning for scalability',
            rationale: 'Superior throughput, ordering guarantees, built-in replication, and event replay capabilities',
            consequences: 'More operational overhead but significantly better performance and feature set',
            alternatives: ['Amazon SQS/SNS', 'Redis Streams', 'RabbitMQ', 'Apache Pulsar'],
            tradeoffs: 'Operational complexity vs performance and event streaming capabilities'
          },
          {
            id: 'ADR-003',
            title: 'CQRS Implementation with Separate Read/Write Models',
            status: 'Accepted',
            date: '2024-05-08',
            context: 'Different performance requirements for write operations vs complex analytical queries',
            decision: 'Implement CQRS with separate write database and read-optimized materialized views',
            rationale: 'Optimized write performance, complex read queries without affecting writes, independent scaling',
            consequences: 'Eventual consistency challenges but optimal performance for both read and write operations',
            alternatives: ['Single database model', 'Read replicas only', 'Microservices per bounded context'],
            tradeoffs: 'Data consistency complexity vs read/write performance optimization'
          },
          {
            id: 'ADR-004',
            title: 'Go vs Java for High-Performance Event Processing',
            status: 'Accepted',
            date: '2024-05-10',
            context: 'Need high-throughput, low-latency event processing with efficient resource utilization',
            decision: 'Use Go for all event processing services due to superior concurrency and resource efficiency',
            rationale: 'Excellent concurrency with goroutines, low memory footprint, fast compilation, and simple deployment',
            consequences: 'Team learning curve but achieved 3x better resource efficiency and lower latency',
            alternatives: ['Java with Spring Boot', 'Node.js', 'Rust', 'C#/.NET'],
            tradeoffs: 'Team learning curve vs performance and resource efficiency'
          },
          {
            id: 'ADR-005',
            title: 'Dead Letter Queue Strategy with Exponential Backoff',
            status: 'Accepted',
            date: '2024-05-12',
            context: 'Need robust error handling for failed events without losing data or blocking processing',
            decision: 'Implement DLQ with exponential backoff, circuit breaker, and manual intervention capabilities',
            rationale: 'Prevents event loss, avoids cascade failures, and provides operational visibility into failures',
            consequences: 'Additional infrastructure complexity but significantly improved system resilience',
            alternatives: ['Simple retry without DLQ', 'Immediate failure without retry', 'Fixed retry intervals'],
            tradeoffs: 'System complexity vs error handling robustness and operational visibility'
          }
        ]
      },
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
      architecture: {
        overview: 'Reactive streams architecture with non-blocking I/O, backpressure handling, and event-driven communication patterns',
        diagram: `
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Client Apps   │◄──►│  Spring Cloud    │◄──►│   Admin Portal  │
│   (Mobile/Web)  │    │  Gateway         │    │   (React)       │
└─────────────────┘    │  (WebFlux)       │    └─────────────────┘
                       └──────────────────┘
                                │
                                ▼
      ┌─────────────────────────────────────────────────────────────┐
      │                 Reactive Service Mesh                       │
      │               (Spring WebFlux + Netty)                      │
      └─────────────────────────────────────────────────────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│User Service │       │Order Service│       │Product      │
│(WebFlux +   │       │(WebFlux +   │       │Service      │
│ R2DBC)      │       │ R2DBC)      │       │(WebFlux +   │
│             │       │             │       │ R2DBC)      │
└─────────────┘       └─────────────┘       └─────────────┘
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│PostgreSQL   │       │PostgreSQL   │       │PostgreSQL   │
│(Reactive    │       │(Reactive    │       │(Reactive    │
│ Pools)      │       │ Pools)      │       │ Pools)      │
└─────────────┘       └─────────────┘       └─────────────┘
                                │
                                ▼
        ┌─────────────────────────────────────────────────┐
        │              Redis Reactive                     │
        │         (Pub/Sub + Caching Layer)              │
        └─────────────────────────────────────────────────┘`,
        components: [
          {
            name: 'Spring Cloud Gateway',
            tech: 'Spring WebFlux + Netty',
            responsibility: 'Non-blocking request routing, rate limiting, circuit breaker, reactive filters'
          },
          {
            name: 'User Service',
            tech: 'Spring WebFlux + R2DBC',
            responsibility: 'Reactive user management, non-blocking authentication, reactive security'
          },
          {
            name: 'Order Service',
            tech: 'Spring WebFlux + Project Reactor',
            responsibility: 'Reactive order processing, event streaming, backpressure handling'
          },
          {
            name: 'Product Service',
            tech: 'Spring WebFlux + R2DBC',
            responsibility: 'Reactive product catalog, streaming search, real-time updates'
          },
          {
            name: 'Reactive Database Layer',
            tech: 'R2DBC + Connection Pools',
            responsibility: 'Non-blocking database operations, reactive transactions, connection management'
          },
          {
            name: 'Redis Reactive',
            tech: 'Lettuce + Reactive Streams',
            responsibility: 'Reactive caching, pub/sub messaging, session management'
          }
        ],
        reactivePatterns: [
          'Mono/Flux composition for data transformation pipelines',
          'Backpressure handling with buffer and drop strategies',
          'Error handling with retry, fallback, and circuit breaker patterns',
          'Reactive stream composition with flatMap, concatMap, and mergeWith',
          'Non-blocking I/O with Netty event loops'
        ],
        performanceOptimizations: [
          'Thread pool optimization: Reduced from 200 threads to 20 event loop threads',
          'Memory efficiency: 25% reduction through reactive streams',
          'Latency improvement: 40% faster response times under load',
          'Throughput: Handles 10k+ concurrent connections with minimal resource usage'
        ],
        designDecisions: [
          {
            id: 'ADR-001',
            title: 'Spring WebFlux vs Traditional Spring MVC',
            status: 'Accepted',
            date: '2024-06-01',
            context: 'Legacy system experiencing performance bottlenecks with high concurrent loads and blocking I/O operations',
            decision: 'Migrate from Spring MVC to Spring WebFlux for non-blocking reactive programming',
            rationale: 'WebFlux provides non-blocking I/O, better resource utilization, and handles high concurrency with fewer threads',
            consequences: '40% performance improvement and 25% memory reduction, but team needed reactive programming training',
            alternatives: ['Spring MVC with async', 'Node.js migration', 'Vert.x framework', 'Micronaut reactive'],
            tradeoffs: 'Learning curve and paradigm shift vs significant performance gains'
          },
          {
            id: 'ADR-002',
            title: 'R2DBC vs Traditional JPA for Reactive Data Access',
            status: 'Accepted',
            date: '2024-06-05',
            context: 'Need fully reactive stack without blocking database operations that would negate WebFlux benefits',
            decision: 'Use Spring Data R2DBC for reactive database access instead of JPA/Hibernate',
            rationale: 'R2DBC provides non-blocking database operations, maintaining reactive streams end-to-end',
            consequences: 'True reactive stack but limited ecosystem compared to JPA and requires connection pool tuning',
            alternatives: ['JPA with @Async', 'MongoDB reactive', 'Cassandra reactive', 'JDBC with thread pools'],
            tradeoffs: 'Ecosystem maturity vs end-to-end reactive performance'
          },
          {
            id: 'ADR-003',
            title: 'Project Reactor vs RxJava for Reactive Streams',
            status: 'Accepted',
            date: '2024-06-08',
            context: 'Need to choose reactive library for composing asynchronous and event-driven applications',
            decision: 'Use Project Reactor (Mono/Flux) as the reactive streams implementation',
            rationale: 'Native Spring integration, better Spring WebFlux compatibility, and superior debugging tools',
            consequences: 'Seamless Spring integration but team needed to learn Reactor operators and patterns',
            alternatives: ['RxJava 3', 'Akka Streams', 'Vert.x reactive streams', 'Java 9 Flow API'],
            tradeoffs: 'Framework coupling vs optimal Spring ecosystem integration'
          },
          {
            id: 'ADR-004',
            title: 'Netty vs Tomcat for Reactive Server Runtime',
            status: 'Accepted',
            date: '2024-06-10',
            context: 'Traditional servlet containers not optimized for reactive workloads and non-blocking operations',
            decision: 'Use Netty as the embedded server runtime for reactive applications',
            rationale: 'Event-loop architecture, non-blocking I/O, and optimized for reactive workloads with low memory footprint',
            consequences: 'Superior reactive performance but different threading model requiring operational adjustments',
            alternatives: ['Reactive Tomcat', 'Undertow reactive', 'Jetty reactive', 'Custom NIO server'],
            tradeoffs: 'Operational complexity vs reactive runtime optimization'
          },
          {
            id: 'ADR-005',
            title: 'Backpressure Strategy Implementation',
            status: 'Accepted',
            date: '2024-06-12',
            context: 'Need to handle scenarios where data producers exceed consumer processing capacity',
            decision: 'Implement multiple backpressure strategies: buffering, dropping, and error signals based on use case',
            rationale: 'Different scenarios require different strategies - buffer for bursty loads, drop for real-time data, error for critical flows',
            consequences: 'Robust handling of load spikes but requires careful strategy selection per endpoint',
            alternatives: ['Single global strategy', 'No backpressure handling', 'Custom backpressure implementation'],
            tradeoffs: 'Configuration complexity vs system resilience and performance'
          },
          {
            id: 'ADR-006',
            title: 'Reactive Security with Spring Security WebFlux',
            status: 'Accepted',
            date: '2024-06-15',
            context: 'Traditional Spring Security blocks threads, contradicting reactive programming benefits',
            decision: 'Implement Spring Security WebFlux with reactive authentication and authorization',
            rationale: 'Maintains non-blocking security pipeline, integrates with reactive JWT validation and RBAC',
            consequences: 'Consistent reactive behavior but limited documentation and fewer examples available',
            alternatives: ['Custom reactive security', 'Blocking security with separate thread pool', 'Gateway-level security only'],
            tradeoffs: 'Implementation complexity vs end-to-end reactive consistency'
          },
          {
            id: 'ADR-007',
            title: 'Circuit Breaker Pattern with Resilience4j',
            status: 'Accepted',
            date: '2024-06-18',
            context: 'Microservices need protection against cascading failures and service degradation',
            decision: 'Implement Resilience4j circuit breaker with reactive operators for fault tolerance',
            rationale: 'Native reactive support, metrics integration, and configurable failure thresholds with fallback mechanisms',
            consequences: 'Improved system resilience but requires proper threshold tuning and fallback strategy design',
            alternatives: ['Netflix Hystrix', 'Custom circuit breaker', 'Timeout-only approach', 'Spring Retry'],
            tradeoffs: 'Configuration overhead vs system fault tolerance and reliability'
          }
        ]
      },
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
      designDecisions: [
        {
          id: 'ADR-001',
          title: 'Spring WebFlux vs Traditional Spring MVC',
          status: 'Accepted',
          date: '2024-04-01',
          context: 'Need to handle high concurrent load with limited resources and improve response times',
          decision: 'Migrate from Spring MVC to Spring WebFlux for reactive, non-blocking I/O operations',
          rationale: 'WebFlux provides better resource utilization, handles more concurrent requests with fewer threads',
          consequences: 'Paradigm shift in programming model but 40% performance improvement and better scalability',
          alternatives: ['Spring MVC with async', 'Node.js', 'Go with Gin', 'Vert.x'],
          tradeoffs: 'Learning curve and paradigm shift vs performance and resource efficiency'
        },
        {
          id: 'ADR-002',
          title: 'R2DBC vs Traditional JDBC for Database Access',
          status: 'Accepted',
          date: '2024-04-03',
          context: 'Need non-blocking database operations to maintain reactive streams throughout the application',
          decision: 'Use R2DBC (Reactive Relational Database Connectivity) for all database interactions',
          rationale: 'Maintains reactive streams end-to-end, prevents blocking operations that would negate WebFlux benefits',
          consequences: 'Limited ORM features compared to JPA but true non-blocking database operations',
          alternatives: ['JDBC with thread pools', 'JPA with async wrappers', 'NoSQL databases', 'JOOQ reactive'],
          tradeoffs: 'ORM feature richness vs true reactive database operations'
        },
        {
          id: 'ADR-003',
          title: 'Project Reactor vs RxJava for Reactive Streams',
          status: 'Accepted',
          date: '2024-04-05',
          context: 'Need reactive library that integrates seamlessly with Spring ecosystem',
          decision: 'Use Project Reactor (Mono/Flux) as it\'s the foundation of Spring WebFlux',
          rationale: 'Native integration with Spring, better performance, and simpler learning curve within Spring ecosystem',
          consequences: 'Framework dependency but optimal integration and performance within Spring applications',
          alternatives: ['RxJava', 'Akka Streams', 'Reactive Streams TCK only'],
          tradeoffs: 'Framework coupling vs optimal integration and performance'
        },
        {
          id: 'ADR-004',
          title: 'Netty vs Undertow for Reactive Web Server',
          status: 'Accepted',
          date: '2024-04-08',
          context: 'Need high-performance, non-blocking web server for WebFlux applications',
          decision: 'Use Netty as the underlying web server for Spring WebFlux applications',
          rationale: 'Default choice for WebFlux, excellent performance, mature async I/O implementation',
          consequences: 'Optimal performance and memory usage with Spring WebFlux reactive stack',
          alternatives: ['Undertow', 'Jetty reactive', 'Tomcat with NIO'],
          tradeoffs: 'Limited choice flexibility vs optimal performance and Spring integration'
        },
        {
          id: 'ADR-005',
          title: 'Reactive Redis vs Traditional Redis Operations',
          status: 'Accepted',
          date: '2024-04-10',
          context: 'Need non-blocking cache operations and pub/sub messaging in reactive architecture',
          decision: 'Use Lettuce driver for reactive Redis operations with Spring Data Redis Reactive',
          rationale: 'Maintains reactive streams for caching and messaging, prevents blocking in reactive pipeline',
          consequences: 'Different API patterns but maintains non-blocking operations throughout the stack',
          alternatives: ['Jedis with thread pools', 'Redisson reactive', 'Custom reactive wrapper'],
          tradeoffs: 'API learning curve vs maintaining reactive principles throughout the stack'
        },
        {
          id: 'ADR-006',
          title: 'Backpressure Strategy for High-Load Scenarios',
          status: 'Accepted',
          date: '2024-04-12',
          context: 'Need to handle varying load patterns without overwhelming downstream services',
          decision: 'Implement adaptive backpressure with buffer, drop, and throttle strategies based on load',
          rationale: 'Prevents system overload, maintains responsiveness, and provides graceful degradation',
          consequences: 'Complex backpressure management but system stability under varying load conditions',
          alternatives: ['Fixed buffer sizes', 'No backpressure handling', 'Circuit breaker only'],
          tradeoffs: 'Implementation complexity vs system stability and performance under load'
        },
        {
          id: 'ADR-007',
          title: 'WebTestClient vs MockMvc for Reactive Testing',
          status: 'Accepted',
          date: '2024-04-15',
          context: 'Need testing approach that works with reactive streams and async operations',
          decision: 'Use WebTestClient and StepVerifier for testing reactive endpoints and streams',
          rationale: 'Designed for reactive applications, supports async testing patterns, integrates with WebFlux',
          consequences: 'New testing patterns to learn but proper testing of reactive behavior',
          alternatives: ['MockMvc with async', 'TestRestTemplate', 'Custom reactive test utilities'],
          tradeoffs: 'Learning new testing approaches vs proper reactive application testing'
        }
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
  profilePicture: '/images/profile-2.png', // Profile picture located at public/images/profile.png
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
