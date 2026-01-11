import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Amit Kumar",
  title: "AI/ML Engineer",
  
  // Using the high-reliability Google Drive hosting link format:
  avatarUrl: "https://lh3.googleusercontent.com/d/13KUBEGMbuz8Rr7CcRzihbDhbcYjQf__F", 
  
  summary: "AI/ML Engineer with almost 2 years of experience in applied Machine Learning, GenAI, Computer Vision, and NLP. Building production GenAI solutions (RAG, Multi-agent AI, LLMOps) using Python, FastAPI, AWS/Azure. Delivered 10+ AI systems processed 10M+ records at 92%+ accuracy, reducing costs by 70-90% through automation.",
  
  contactDescription: "I'm currently available for work for full-time opportunities. If you have a products/projects that needs some AI magic, I'd love to hear about it.",
  
  web3FormsAccessKey: "c5ebcb42-751e-4189-9f9e-9657fece5175", 

  contact: {
    phone: "+91-9017170283",
    email: "ak.amit.iitb@gmail.com",
    linkedin: "https://www.linkedin.com/in/amit-kumar-6105191b8/", 
    github: "https://github.com/Amitkumar4596",  
  },
  education: [
    {
      institution: "Indian Institute of Technology (IIT), Bombay",
      degree: "Master of Technology – Geoinformatics (ML, DL, Computer Vision & GIS)",
      duration: "Aug 2022 – May 2024",
      details: "CGPA: 8.86/10"
    }
  ],
  experience: [
    {
      role: "AI/ML Engineer",
      company: "Verdantis Technologies Private Limited",
      duration: "June 24 – Present",
      projects: [
        {
          title: "AutoEnrich AI: Web Scraping & Intelligent Data Enrichment",
          points: [
            "Built AWS pipeline processing 1M+ websites using Bright Data API (Browser Scraping, Unlocker, SerpAPI) via WSS.",
            "Architected Asyncio FastAPI microservices for concurrent processing with Beautiful Soup for HTML parsing.",
            "Automated MFR-MPN, Address enrichment using Fine-tuned Azure GPT-4o with Dynamic CoT Prompting.",
            "Achieved 96%+ Precision, reducing 55%+ operational cost and 80%+ manual effort."
          ]
        },
        {
          title: "AutoDeDup AI: Contrastive Learning Master Data Deduplication",
          points: [
            "Built & Deployed Closed Loop MLOps pipeline processing 5M+ records via SFTP ETL & APScheduler cron jobs.",
            "Utilized Qdrant VectorDB (HNSW) with Contrastive Fine Tuning embeddings (all-mpnet/Qwen) on labeled pairs.",
            "Integrated DBSCAN clustering & normalized number matching with Claude Sonnet validation.",
            "Achieved 92%+ Precision, reducing 85%+ operational costs and 90%+ manual review efforts."
          ]
        },
        {
          title: "AutoSpecs AI: RAG Based Attribute Extraction System",
          points: [
            "Architected LlamaIndex RAG Attribute Extraction pipeline utilizing Claude Sonnet & pgvector for Semantic matching.",
            "Integrated Cross-Encoder Reranking, Few-Shot CoT prompting & Closed-Loop feedback to minimize Hallucinations.",
            "Achieved 96%+ F1 Score, eliminating 85+% of manual extraction efforts."
          ]
        },
        {
          title: "AutoDoc AI: Multimodal Intelligence Document Processing",
          points: [
            "Architected Scalable Cloud-native AWS platform with FastAPI microservices & Gemini 2.5 Pro thinking enabled.",
            "Automated extraction from Invoices, POs, PDFs, CAD images via OCR, JSON parsing & Vendor normalization.",
            "Built SourceIQ: An LLM interface translating natural language queries to MongoDB aggregations & Graph generation.",
            "Processed 100K+ documents/month at 94%+ Accuracy, reducing processing time by 95%+."
          ]
        },
        {
          title: "MRO-360: Predictive Maintenance & Demand Forecasting",
          points: [
            "Developed multi-model platform utilizing TFT, XGBoost, LSTM, ARIMA, Prophet & LLM based predictions.",
            "Integrated Speech To Text (STT), MongoDB (raw), PostgreSQL (processed) & Redis Pub/Sub for real-time updates.",
            "Enabled Equipment Criticality analysis for proactive procurement, reducing emergency orders & optimizing maintenance."
          ]
        }
      ]
    },
    {
      role: "Artificial Intelligence Intern",
      company: "TCS R&D",
      duration: "May 2023 – July 2023",
      projects: [
        {
          title: "Agricultural Field Boundary Detection using SAM",
          points: [
            "Assessment of META’s AI Segment-Anything Model (SAM) for Field Boundary Detection.",
            "Comparison with ResU-Net, Time series of MSAVI2 and Deep Learning Models."
          ]
        },
        {
          title: "Vision Transformer Optimization for Geospatial Segmentation",
          points: [
            "Optimized model architecture with pre-trained Vision Transformer (ViT), CLIP, self cross attention.",
            "Pre-processed Japan, Brazil image dataset to Segment-Geospatial Model trained on 11M+ Images, 1B+ Masks."
          ]
        },
        {
          title: "Multi-Model Agricultural Boundary Extraction",
          points: [
            "Developed 6 Distinct models: GT Agri-Mask & Area Threshold utilized geopandas, leafmap library & QGIS.",
            "Achieved highest Modified Recall 0.80, Recall 0.98; IoU Threshold: 0.5, significant improvement for Japan."
          ]
        }
      ]
    }
  ],
  skills: [
    {
      category: "GenAI & LLM Techniques",
      skills: ["Prompt Engineering", "RAG", "Agentic RAG", "Fine-Tuning", "Agentic AI (CrewAI)", "LangChain", "LangGraph", "LlamaIndex", "Semantic Kernel", "Chain-of-Thought (CoT)"]
    },
    {
      category: "AI Models",
      skills: ["OpenAI", "Anthropic", "Gemini", "Grok", "Mistral", "Llama", "Whisper"]
    },
    {
      category: "ML & DL Frameworks",
      skills: ["PyTorch", "TensorFlow", "Keras", "Hugging Face Transformers", "Scikit-learn", "Sentence-Transformers", "Pydantic", "MLflow"]
    },
    {
      category: "Backend & APIs",
      skills: ["FastAPI", "Flask", "RESTful APIs", "GraphQL", "Microservices", "Asyncio", "Playwright", "Selenium", "ZenRows"]
    },
    {
      category: "Vector & Databases",
      skills: ["Qdrant VectorDB", "MongoDB", "PostgreSQL", "FAISS", "MySQL", "SQLite", "Redis"]
    },
    {
      category: "Cloud & MLOps",
      skills: ["Docker", "AWS", "MLOps", "Azure (ML Studio, OpenAI)", "A/B Testing"]
    },
    {
      category: "Development Tools",
      skills: ["Python", "SQL", "Claude Code", "Git", "Pandas", "NumPy", "Jupyter", "Streamlit", "Postman", "Excel"]
    }
  ],
  projects: [
    {
      title: "Hyperspectral Image Classification",
      date: "Aug’23",
      points: [
        "Performed preprocessing, spatial patch extraction, and dimensionality reduction using PCA to improve accuracy.",
        "Implemented 3D-CNN, achieving 96% accuracy, outperforming SVM’s 88% accuracy for Indian Pines Dataset."
      ]
    },
    {
      title: "Dynamic PDF ChatBot System using LLM & Langchain",
      date: "Dec’23",
      points: [
        "Chunks multiple PDFs, converts them to HuggingFace Embeddings stores in FAISS vector database.",
        "Retrieved top-ranked results for Question Embedding through Semantic Search using RetrievalQA.",
        "Applied Prompt engineering and utilized GPT-3.5 LLM from OpenAI, then integrated with Streamlit UI."
      ]
    }
  ],
  achievements: [
    {
      title: "Work Achievements - Verdantis",
      date: "Jan’25",
      description: "• Awarded Special Appreciation Award, sole recipient from AI/ML team for exceptional performance and innovative solution development. \n• Contributed to AI/ML team receiving Best Team Award among all departments for exceptional project execution and innovative automation solutions."
    },
    {
      title: "Interview Placement Co-ordinator",
      date: "Jun’23 - Jun’24",
      description: "Collaborated as part of a dynamic 45+ member team dedicated to successfully placing 2100+ students across various departments at IIT Bombay, contributing to the institution’s high placement success rate."
    }
  ],
  publications: [
    {
      title: "CARC Based XFC System for EVs",
      authors: "Amit Kumar & D. Saxena",
      publishedIn: "Pattern Recognition and Data Analysis, Springer",
      date: "Sep’22",
      link: "https://link.springer.com/chapter/10.1007/978-981-19-1520-8_49"
    }
  ],
  coursework: [
    "Probability & Statistics",
    "Remote Sensing",
    "Satellite Image Processing",
    "Machine Learning",
    "Deep Learning",
    "Transformers",
    "Computer Vision",
    "GIS",
    "NLP",
    "GPS",
    "Predictive Modeling"
  ]
};