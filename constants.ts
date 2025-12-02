
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
  
  summary: "AI/ML Engineer with almost 2 years of experience in applied Machine Learning, GenAI, Computer Vision, and NLP. Building production GenAI solutions (RAG, Multi-agent AI, MLOps) using Python, FastAPI, AWS/Azure. Delivered 8+ scalable AI systems processing 1M+ records at 92%+ accuracy, reducing costs by 80-90% through automation.",
  
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
          title: "AutoEnrich: Enterprise Web Intelligence Enrichment",
          description: "Built and deployed AWS hosted Web-scraping pipeline processing 1M+ websites with Playwright/Selenium, Beautiful Soup, Bright Data API, and Asyncio based FastAPI service. Utilized Fine-tuned Azure GPT-4o with Prompt engineering for 95%+ accurate enrichment & cost reduction from MFR-MPN, address enrichment, and data standardization."
        },
        {
          title: "AutoDeDup: AI-Powered Master Data Quality System",
          description: "Implemented high-performance end-to-end GenAI based system for material/vendor/customer data processed 500K+ records in 2 hours. Utilized multi-model embeddings (AllMiniLM/all-mpnet/Qwen) with DBSCAN clustering and Claude-4 Sonnet validation. Integrated with MySQL MongoDB ETL pipeline via Cron scheduling."
        },
        {
          title: "AutoExtraction: Intelligent Material Master Extraction",
          description: "Designed and implemented intelligent material master pipeline with Claude 3.5/4 Sonnet LLMs and RAG architecture using Pgvector for Semantic match and context injection. Implemented Chain-of-Thought (COT) Prompting and Post-Processing logic ensuring 96%+ accuracy while eliminating 90% of manual data entry effort."
        },
        {
          title: "AutoDoc: Multimodal Document Intelligence Platform",
          description: "Architected Scalable Cloud-native document intelligence platform using Gemini 2.5 Pro for extraction from invoices, POs, PDFs, CAD images. FastAPI Microservices backend on AWS, implementing OCR preprocessing, structured JSON parsing, vendor normalization, and LLM-powered natural language query interface (SourceIQ)."
        },
        {
          title: "MRO-360: Predictive Maintenance & Demand Forecasting",
          description: "Developed multi-model forecasting platform utilized ARIMA, XGBoost, LightGBM, LSTM, Transformers, and LLM based predictions with Speech To Text (STT) search enabled. Delivered advance demand visibility and Equipment Criticality analysis to enable proactive procurement decisions."
        },
        {
          title: "Marketing Automation: AI-Driven Lead Generation",
          description: "Built marketing automation pipeline with Bright Data API for Web/LinkedIn scraping (5K+ leads/month), ZoomInfo API, Bounceban validation, and AI based personalization by industry/role/context. Reduced efforts by 75%+ and achieved 85% faster outreach."
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
          description: "Optimized model architecture with pre-trained Vision Transformer (ViT), CLIP, self cross attention. Pre-processed Japan, Brazil image dataset to Segment-Geospatial Model trained on 11M+ Images, 1B+ Masks."
        },
        {
          title: "Multi-Model Agricultural Boundary Extraction",
          description: "Developed 6 Distinct models: GT Agri-Mask & Area Threshold utilized geopandas, leafmap library & QGIS. Achieved highest Modified Recall 0.80, Recall 0.98; IoU Threshold: 0.5."
        }
      ]
    }
  ],
  skills: [
    {
      category: "GenAI & LLM Techniques",
      skills: ["Prompt Engineering", "RAG", "Agentic RAG", "Fine-Tuning", "Agentic AI", "LangChain", "LangGraph", "LlamaIndex", "Semantic Kernel", "Chain-of-Thought"]
    },
    {
      category: "AI Models",
      skills: ["OpenAI GPT-4o", "Claude 4 Sonnet", "Gemini 2.5 Pro", "Grok 3", "Whisper"]
    },
    {
      category: "ML & DL Frameworks",
      skills: ["PyTorch", "TensorFlow", "Keras", "Hugging Face", "Scikit-learn", "Sentence-Transformers", "Pydantic", "MLflow"]
    },
    {
      category: "Backend & APIs",
      skills: ["FastAPI", "Flask", "GraphQL", "Microservices", "Asyncio", "Playwright", "Selenium", "Beautiful Soup"]
    },
    {
      category: "Vector & Databases",
      skills: ["MongoDB", "PostgreSQL", "FAISS", "MySQL", "SQLite", "Redis", "SQL"]
    },
    {
      category: "Cloud & MLOps",
      skills: ["Docker", "Kubernetes", "AWS SageMaker", "AWS Lambda", "Azure ML Studio", "GCP", "Apache Airflow"]
    },
    {
      category: "Development Tools",
      skills: ["Python", "Git", "Pandas", "NumPy", "Jupyter", "Streamlit", "Postman", "Power BI", "Excel"]
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
      title: "Special Appreciation Award - Verdantis",
      date: "Jan’25",
      description: "Sole recipient from AI/ML team for exceptional performance and innovative solution development."
    },
    {
      title: "Best Team Award - Verdantis",
      date: "Jan’25",
      description: "Contributed to AI/ML team receiving Best Team Award among all departments for exceptional project execution."
    },
    {
      title: "Interview Placement Co-ordinator",
      date: "Jun’23 - Jun’24",
      description: "IIT Bombay Placement Cell. Collaborated with a team of 45+ to successfully place 2100+ students."
    }
  ]
};
