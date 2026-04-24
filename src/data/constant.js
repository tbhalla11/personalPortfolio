import {
    FaJava,
    FaPython,
    FaReact,
    FaAngular,
    FaAws,
    FaDocker,
    FaGitAlt,
    FaNodeJs,
    FaJs,
} from "react-icons/fa";
import {
    SiSpringboot,
    SiPostgresql,
    SiRedis,
    SiMongodb,
    SiMysql,
    SiKubernetes,
    SiJenkins,
    SiApachekafka,
    SiTypescript,
    SiCypress,
    SiPostman,
    SiJunit5,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BsDiagram3Fill } from "react-icons/bs";


export const Bio = {
    name: "Tarun Bhalla",
    roles: [
        "Backend Software Engineer",
        "Distributed Systems Engineer",
        "Platform Engineer",
        "Java / Spring Boot Engineer",
    ],
    description:
        "Backend software engineer with 4+ years building production microservices in Java and Spring Boot on AWS. I work on the harder parts of distributed systems — data pipelines that can't drop records, REST APIs that have to stay up under load, and the CI/CD and observability that keep them honest. Currently pursuing an MS in Computer Science at Georgia Tech with a focus on Machine Learning and Computing Systems.",
    github: "https://github.com/tbhalla11",
    resume:
    "/resume.pdf",
    linkedin: "https://www.linkedin.com/in/tarun-bhalla/",
    email: "mailto:tarunbhalla96@gmai.com",
};

export const skills = [
    {
        title: "Languages",
        skills: [
            { name: "Java", icon: FaJava },
            { name: "Python", icon: FaPython },
            { name: "JavaScript", icon: FaJs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "SQL", icon: SiPostgresql },
        ],
    },
    {
        title: "Backend & Distributed Systems",
        skills: [
            { name: "Spring Boot", icon: SiSpringboot },
            { name: "REST APIs", icon: TbApi },
            { name: "Microservices", icon: BsDiagram3Fill },
            { name: "Kafka", icon: SiApachekafka },
            { name: "Node.js", icon: FaNodeJs },
        ],
    },
    {
        title: "Cloud & Infrastructure",
        skills: [
            { name: "AWS", icon: FaAws },
            { name: "Docker", icon: FaDocker },
            { name: "Kubernetes", icon: SiKubernetes },
            { name: "Jenkins / CI-CD", icon: SiJenkins },
        ],
    },
    {
        title: "Data",
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Redis", icon: SiRedis },
            { name: "MongoDB", icon: SiMongodb },
            { name: "MySQL", icon: SiMysql },
        ],
    },
    {
        title: "Frontend & Tooling",
        skills: [
            { name: "React", icon: FaReact },
            { name: "Angular", icon: FaAngular },
            { name: "Git", icon: FaGitAlt },
            { name: "Cypress", icon: SiCypress },
            { name: "JUnit", icon: SiJunit5 },
            { name: "Postman", icon: SiPostman },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        company: "CGI",
        role: "Software Engineer",
        date: "January 2022 - Present",
        desc:
            "Backend-focused engineer on a team delivering production microservices for enterprise clients. Designed and shipped an AWS Glue + Step Functions ETL pipeline that recovered 64,000 misprocessed records with zero data loss during an incident. Cleared a 150+ ticket end-to-end testing backlog in two sprints by restructuring the Jira workflow and parallelizing the Cypress test suite. Day-to-day work spans Java/Spring Boot microservice design, REST API development, PostgreSQL schema and query optimization, Dockerized deployments, and Jenkins CI/CD pipelines.",
        skills: [
            "Java",
            "Spring Boot",
            "AWS (Glue, Step Functions, Lambda, S3)",
            "PostgreSQL",
            "Docker",
            "Jenkins",
            "REST APIs",
            "Cypress",
            "React",
        ],
    },
    {
        id: 1,
        company: "Safety & Security Solutions",
        role: "Software Engineer Intern",
        date: "January 2021 - January 2022",
        desc:
            "Built internal tooling and customer-facing dashboards in Angular, integrating with SQL-backed REST services. Contributed to full request/response flows from UI through API.",
        skills: ["Angular", "JavaScript", "REST APIs", "SQL", "HTML", "CSS"],
    },
];

export const education = [
    {
        id: 0,
        school: "Georgia Institute of Technology",
        date: "September 2024 - Present",
        desc:
            "MS in Computer Science — specialization in Machine Learning and Computing Systems. Coursework focused on distributed systems, high-performance computing, and applied ML.",
        degree: "Master of Science, Computer Science",
    },
    {
        id: 1,
        school: "York University",
        date: "September 2018 - January 2022",
        desc:
            "Bachelor of Information Technology. Concentration in software engineering fundamentals, databases, and cloud operations.",
        degree: "Bachelor of Information Technology",
    },
];

export const projects = [
    {
        id: 0,
        title: "Travel Journal API",
        tagline: "Spring Boot · PostgreSQL · Redis · Docker",
        date: "2024 - Present",
        description:
            "Production-style backend service for logging, tagging, and retrieving travel entries. Built as a microservice with a Spring Boot REST API, PostgreSQL for durable storage, and Redis as a read-through cache for hot endpoints (entry lookup by user). Dockerized for local parity with deployed environments. Focus areas: idiomatic Spring Boot layering (controller/service/repository), DTO validation, cache invalidation strategy, and containerized local dev.",
        tags: [
            "Java",
            "Spring Boot",
            "PostgreSQL",
            "Redis",
            "Docker",
            "REST APIs",
        ],
        github: "https://github.com/tbhalla11", // <-- REPLACE with actual repo URL
        demo: null,
    },
    {
        id: 1,
        title: "CrossPaymentService",
        tagline: "Java · Spring Boot · FX validation",
        date: "2024",
        description:
            "A small microservice exploring cross-currency payment validation: request routing, currency-pair lookup, and defensive validation of payment intents before they hit a downstream ledger. Built to practice service boundary design and structured error handling in a domain where edge cases matter.",
        tags: ["Java", "Spring Boot", "REST APIs", "Microservices"],
        github: "https://github.com/tbhalla11", // <-- REPLACE with actual repo URL
        demo: null,
    },
    {
        id: 2,
        title: "ML for Trading — Strategy Evaluator",
        tagline: "Python · scikit-learn · pandas · Georgia Tech OMSCS",
        date: "2024 - 2025",
        description:
            "Coursework project from Georgia Tech's Machine Learning for Trading. Built and evaluated a set of strategy learners — including a Q-learner-based trading agent and a Random Forest-based manual strategy — against historical market data. Focus on feature engineering from price/indicator signals, proper train/test split discipline to avoid lookahead bias, and performance evaluation against benchmark portfolios. Reinforced the 'data quality and evaluation rigor matter more than model choice' lesson.",
        tags: [
            "Python",
            "scikit-learn",
            "pandas",
            "NumPy",
            "Machine Learning",
            "Reinforcement Learning",
        ],
        github: null, // Georgia Tech honor code - keep null
        demo: null,
    },
];