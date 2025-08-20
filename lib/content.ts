// lib/content.ts
export const profile = {
    name: "Chaimae Aboulouafa",
    title: "AI Engineer · LLM Infrastructure · Generative AI",
    tagline:
      "I build LLM agents, RAG systems, and reliable CI/CD for AI at scale.",
    location: "Île-de-France, Europe",
    email: "abl.chaimaie.2000@gmail.com",
    phone: "06 52 41 93 66",
    github: "https://github.com/chmaicha",
    linkedin: "https://www.linkedin.com/in/chaimae-aboulouafa-3bb",
    cvUrl: "/cv.pdf",
  } as const;
  
  export const skills = {
    Programming: ["Python", "Regex", "PostgreSQL"],
    "Generative AI": ["LLMs (Mistral, fine‑tuning)", "RAG / Ragas", "LangChain", "Agents"],
    DevOps: ["Docker", "Linux", "CI/CD (GitHub Actions, Jenkins)", "Pytest"],
    Cloud: ["GCP (Vertex, BigQuery, Run, CF, Storage, Pub/Sub)", "AWS (S3, Lambda, EC2)"],
    NLP: ["BERT", "TF‑IDF", "Clustering"],
  };
  
  export type Project = {
    slug: string;
    title: string;
    summary: string;
    bullets: string[];
    tech: string[];
    metrics?: { label: string; value: string }[];
    heroImage?: string;
    gallery?: string[];
    links?: { label: string; href: string }[];
  };
  
  export const projects: Project[] = [
    {
      slug: "rag-evaluator",
      title: "LLM Agent RAG Evaluator",
      summary: "Evaluation pipeline for RAG systems using Ragas + Pytest for regression testing.",
      bullets: [
        "Benchmarks multi‑prompts et variantes de retrieval (BM25, dense, hybrid).",
        "Tests de non‑régression (Pytest) + rapports HTML pour la CI.",
        "Export métriques (faithfulness, answer‑relevancy, context‑recall).",
      ],
      tech: ["Python", "LangChain", "Ragas", "Pytest"],
      metrics: [
        { label: "Tests automatiques", value: "120+" },
        { label: "Gain qualité", value: "+18% relevancy" },
      ],
      heroImage: "/projects/ragas.png",
      gallery: [
        "/projects/rag-evaluator/bench.png",
        "/projects/rag-evaluator/report.png",
      ],
      links: [
        { label: "Repository", href: "#" },
        { label: "Demo", href: "#" },
      ],
    },
    {
      slug: "multi-agent-extractor",
      title: "Multi‑Agent Data Extractor",
      summary: "Agents orchestrés pour extraction documentaire & analytics sur GCP.",
      bullets: [
        "Orchestration d’agents avec rôles spécialisés (parsing, QA, validation).",
        "Déploiement GCP (Cloud Run) + gestion secrets & artefacts.",
      ],
      tech: ["Mistral", "LangChain", "Docker", "GCP"],
      metrics: [
        { label: "Docs / h", value: "400+" },
        { label: "Latence", value: "-35%" },
      ],
      heroImage: "/projects/multi-agent/cover.png",
      links: [{ label: "Repository", href: "#" }],
    },
    {
      slug: "ci-log-intelligence",
      title: "CI Log Intelligence",
      summary: "Triage & classification d’erreurs CI (BERT + Regex) avec dashboards.",
      bullets: [
        "Pipeline Jenkins → GCP (BQ) + Looker Studio.",
        "Clustering & rules regex pour typologie d’erreurs.",
      ],
      tech: ["BERT", "Regex", "GCP", "AWS"],
      metrics: [{ label: "Temps d’investigation", value: "-40%" }],
      heroImage: "/projects/ci-log/cover.png",
    },
  ];
  
  export const experiences = [
    {
      role: "Machine Learning Engineer",
      company: "Fingreen AI",
      location: "Paris, France",
      dates: "Oct 2024 — Jul 2025",
      bullets: [
        "RAG evaluation pipeline (Ragas) pour scoring & bench.",
        "Déploiement Mistral sur Vertex AI (Docker + GitHub Actions).",
        "Multi‑agents pour extraction/analysis ; fine‑tuning Mistral ; CI/CD agents.",
      ],
    },
    {
      role: "Data Scientist",
      company: "VALEO CDA",
      location: "Créteil, France",
      dates: "Feb 2024 — Aug 2024",
      bullets: [
        "Amélioration qualité CI/CD via analyse de logs & classification d’erreurs.",
        "Ingestion Jenkins → AWS/GCP ; dashboards Looker Studio.",
      ],
    },
    {
      role: "Backend Developer",
      company: "Ringob",
      location: "Tangier, Morocco",
      dates: "Jul 2022 — Oct 2023",
      bullets: ["Plateforme social gaming (profils, posts, tournois).", "Stack: Node.js, GraphQL, MongoDB."],
    },
  ];
  
  // export const certifications = [
  //   { title: "Google Cloud – Vertex AI", org: "Google Cloud", year: "2024", logo: "/certifications/aws.jpeg" },
  //   { title: "MLOps Fundamentals", org: "Coursera", year: "2024", logo: "/certifications/cnn.jpeg" },
  //   { title: "Google Cloud – Vertex AI", org: "Google Cloud", year: "2024", logo: "/certifications/coursera.jpg" },
  //   { title: "MLOps Fundamentals", org: "Coursera", year: "2024", logo: "/certifications/ibm.png" },
  // ];
  
  // lib/content.ts
export type Certification = {
  id: string;
  title: string;
  org: string;
  date: string;              // display value
  verifyUrl: string;
  logo: string;              // /public/logos/...
  gradientFrom: string;      // Tailwind color tokens
  gradientTo: string;
  skills: string[];          // chips to show
};


export const certifications: Certification[] = [
  {
    id: "ibm-big-data",
    title: "Big Data Engineer Certificate",
    org: "IBM",
    date: "January 2025",
    verifyUrl:
      "https://www.credly.com/badges/77ddb24e-f98c-4c15-821b-747400202d3b/linked_in_profile",
    logo: "/logos/ibm.jpeg",
    // IBM brand blue
    gradientFrom: "from-[#0F62FE]",
    gradientTo: "to-[#0043CE]",
    skills: [
      "Hadoop", "Spark", "Kafka", "Hive",
      "HDFS", "HBase", "Watson Studio", "Jupyter"
    ],
  },
  {
    id: "deeplearningai-cnn-tf",
    title: "Convolutional Neural Networks in TensorFlow",
    org: "DeepLearning.AI",
    date: "2024",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/38DXJTHG3BZ6",
    logo: "/logos/deep.png",
    // DeepLearning.AI magenta/pink vibe
    gradientFrom: "from-[#FF4D8D]",
    gradientTo:   "to-[#B24592]",
    skills: [
      "Deep Learning", "CNNs", "TensorFlow", "Keras",
      "Computer Vision", "Supervised Learning"
    ],
  },
  {
    id: "aws-genai-llm",
    title: "Generative AI with Large Language Models",
    org: "Amazon Web Services",
    date: "September 2024",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/TLUUW2QUZFDE",
    logo: "/logos/aws.png",
    // AWS orange -> dark slate (brand)
    gradientFrom: "from-[#FF9900]",
    gradientTo:   "to-[#232F3E]",
    skills: [
      "Generative AI", "LLMs", "Prompt Engineering",
      "AI/ML", "NLP", "Performance Tuning"
    ],
  },
  {
    id: "gcp-ml-pipelines",
    title: "ML Pipelines on Google Cloud",
    org: "Google Cloud",
    date: "2024",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/P53FZMTBNQ43",
    logo: "/logos/google.jpg",
    // Google Cloud blue -> green
    gradientFrom: "from-[#1A73E8]",
    gradientTo:   "to-[#34A853]",
    skills: [
      "Vertex AI", "Pipeline Orchestration", "MLOps", "GCP"
    ],
  },
];


// lib/content.ts

export type Education = {
  degree: string;
  school: string;
  start: string;    // "YYYY-MM"
  end: string;      // "YYYY-MM" or "present"
  city?: string;
};

export const education: Education[] = [
  {
    degree: "Master2  AI Engineering",
    school: "DataScientest",
    start: "2025-03",
    end: "2026-03",
    city: "Paris",
  },
  {
    degree: "Master — Data Science & Big Data",
    school: "Faculté des Sciences et Techniques (FST Tanger)",
    start: "2022-09",
    end: "2024-07",
    city: "Tanger",
  },
  {
    degree: "Bachelor — Computer Engineering",
    school: "Faculté des Sciences et Techniques",
    start: "2021-10",
    end: "2022-07",
    city: "Tanger",
  },
];

  export const partners = [
    { name: "VALEO",       src: "/logos/valeo.png" },
    { name: "Fingreen AI", src: "/logos/fingreenai.png" },
    { name: "Capgemini",   src: "/logos/capgemini.png" },
    { name: "Wafa Assurance", src: "/logos/wafaassurance.png" },
  ];
  