import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Amit Kumar",
  title: "AI/ML Engineer",
  
  // ==================================================================================
  // HOW TO USE YOUR OWN PHOTO FROM GOOGLE DRIVE:
  // 1. Upload your photo to Google Drive.
  // 2. Right-click the file -> Share -> Share -> Change to "Anyone with the link".
  // 3. Copy the link. It looks like: https://drive.google.com/file/d/1AbC-12345_XYZ/view?usp=sharing
  // 4. Copy ONLY the ID part (e.g., "1AbC-12345_XYZ").
  // 5. Use this format: https://lh3.googleusercontent.com/d/YOUR_FILE_ID_HERE
  // ==================================================================================
  
  // Using the high-reliability Google Drive hosting link format:
  avatarUrl: "https://lh3.googleusercontent.com/d/13KUBEGMbuz8Rr7CcRzihbDhbcYjQf__F", 
  
  summary: "AI/ML Engineer with almost 2 years of experience in applied Machine Learning, GenAI, Computer Vision, and NLP. Building production GenAI solutions (RAG, Multi-agent AI, LLMOps) using Python, FastAPI, AWS/Azure. Delivered 10+ AI systems processed 10M+ records at 92%+ accuracy, reducing costs by 70-90% through automation.",
  
  // YOU CAN EDIT THE CONTACT TEXT HERE:
  contactDescription: "I'm currently available for work for full-time opportunities. If you have a products/projects that needs some AI magic, I'd love to hear about it.",
  
  // ==================================================================================
  // CONTACT FORM SETUP (Free & Permanent):
  // 1. Go to https://web3forms.com/
  // 2. Create a form (Use '*' as the domain to allow it to work anywhere).
  // 3. Copy the Access Key they give you.
  // 4. Paste it inside the quotes below (replace YOUR_ACCESS_KEY_HERE).
  // ==================================================================================
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
          title: "AutoEnrich AI: Web Intelligence Data Enrichment",
          description: "Architected AWS-hosted Web scraping pipeline processing 1M+ websites using Bright Data API (Browser Scraping, Unlocker for CAPTCHA solving, SerpAPI) via WebSocket protocol, Beautiful Soup for HTML parsing, and asyncio-based FastAPI microservices. System takes MFR-MPN inputs, auto searches and scrapes, utilize Fine tuned Azure GPT-4o with optimized Prompt engineering to enrich product attributes at 95%+ Precision, reducing 60%+ cost, and 80%+ manual efforts."
        },
        {
          title: "AutoDeDup AI: Master Data Quality Self-Learning Deduplication System",
          description: "Built & deployed closed-loop feedback MLOps pipeline with automated Contrastive fine-tuning on customer-labeled duplicate pairs, processed 5M+ records via SFTP-based ETL with APScheduler cron jobs, sentence-transformers (AllMiniLM/all-mpnet/Qwen) embeddings, Qdrant Vector DB with HNSW indexing, normalized number matching, DBSCAN clustering, and Claude-4 Sonnet validation, achieving 95%+ accuracy while reducing 70%+ cost & manual efforts."
        },
        {
          title: "AutoSpecs: Intelligent Attribute Extraction",
          description: "Design and implemented RAG based extraction pipeline with Claude 3.5/4 Sonnet and utilizing pgvector for Semantic match and Few Shots context injection, implementing Chain-of-Thought (COT) Prompting, Closed-Loop feedback and Post-Processing logic ensuring 96%+ F1 Score while eliminating 85% of manual data extraction efforts."
        },
        {
          title: "AutoDoc AI: Multimodal Intelligence Document Processing",
          description: "Architected Scalable Cloud-native document intelligence platform using Gemini 2.5 Pro for extraction from (invoices, POs, PDFs, CAD images), with FastAPI Microservices backend on AWS, implementing OCR preprocessing,structured JSON parsing, vendor normalization, and LLM-powered natural language query interface (SourceIQ) translating plain English to MongoDB aggregations, processing 100K+ documents monthly at 94%+ accuracy while reducing processing time by 95%."
        },
        {
          title: "MRO-360: Predictive Maintenance & Demand Forecasting",
          description: "Developed multi-model forecasting platform utilized ARIMA, XGBoost, LightGBM, LSTM, Transformers, and LLM based predictions with Speech To Text (STT) search enabled, MongoDB raw data storage, and PostgreSQL for processed forecasts, delivering advance demand visibility and Equipment Criticality analysis to enable proactive procurement decisions, reduce emergency orders, and optimize maintenance scheduling."
        },
        {
          title: "Marketing Automation: AI-Driven Lead Generation",
          description: "Built marketing automation pipeline with Bright Data API for Web/LinkedIn scraping (5K+ leads/month), ZoomInfo API for enrichment, Bounceban validation, AI based personalization by industry/role/context, QuickMail API campaigns, and Streamlit UI, reducing efforts by 75%+ and 85% faster outreach."
        }
      ]
    },
    {
      role: "Data-Science Intern",
      company: "TCS R&D",
      duration: "May 2023 – July 2023",
      projects: [
        {
          title: "Agricultural Field Boundary Detection using SAM",
          description: "Assessment of META’s AI Segment-Anything Model (SAM) for Field Boundary Detection and Comparison with ResU-Net, Time series of MSAVI2 and Deep Learning Models."
        },
        {
          title: "Vision Transformer Optimization for Geospatial Segmentation",
          description: "Optimized model architecture with pre-trained Vision Transformer (ViT), CLIP, self cross attention, Pre-processed Japan, Brazil image dataset to Segment-Geospatial Model trained on 11M+ Images, 1B+ Masks."
        },
        {
          title: "Multi-Model Agricultural Boundary Extraction",
          description: "Developed 6 Distinct models: GT Agri-Mask & Area Threshold utilized geopandas, leafmap library & QGIS and Achieved highest Modified Recall 0.80, Recall 0.98; IoU Threshold: 0.5, significant improvement for Japan."
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