
# Suno AI - Mental Health Companion 
## Live Demo - [https://www.sunoai-gamma.vercel.app](https://sunoai-gamma.vercel.app/)

> A secure, AI-powered journaling platform designed to help you understand your thoughts and improve mental well-being.

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![Convex](https://img.shields.io/badge/Convex-DB-orange?style=for-the-badge)
![Hugging Face](https://img.shields.io/badge/Hugging%20Face-AI-yellow?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📖 Overview

**Suno AI** is a modern web application that provides a safe space for users to journal their daily thoughts and feelings. leveraging advanced AI sentiment analysis, the platform offers real-time emotional insights, helping users track their mood patterns over time. Built with privacy and user experience in mind, it combines a soothing interface with powerful backend technology.

## ✨ Key Features

- **🛡️ Secure Journaling**: Private, encrypted storage for your personal reflections using Convex.
- **🤖 AI Sentiment Analysis**: Automatically analyzes journal entries using the **RoBERTa-base** model to detect emotions (Positive, Neutral, Negative) and specific mood indicators.
- **📊 Mood Tracking**: Visual representation of your emotional journey over time.
- **💬 Generative Insights**: Uses Groq AI to provide personalized, empathetic feedback and coping strategies based on your journal entries.
- **🎨 Calming UI**: A responsive, accessible interface designed with soothing colors and animations to promote relaxation.

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (React framework), [Tailwind CSS](https://tailwindcss.com/) (Styling), [Radix UI](https://www.radix-ui.com/) (Accessible components).
- **Backend & Database**: [Convex](https://www.convex.dev/) (Real-time serverless backend).
- **AI & ML**:
  - [Hugging Face Inference API](https://huggingface.co/inference-api) (`cardiffnlp/twitter-roberta-base-sentiment` for sentiment analysis).
  - [Groq SDK](https://groq.com/) (Fast AI inference for text generation).
- **Authentication**: Custom implementation / Convex Auth (Modify as applicable).

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/suno-ai.git
   cd suno-ai
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add the following keys:

   ```env
   # Convex Configuration (Get these from your Convex dashboard)
   CONVEX_DEPLOYMENT=your_convex_deployment_name
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   NEXT_PUBLIC_CONVEX_SITE_URL=your_convex_site_url

   # AI API Keys
   GROQ_API_KEY=your_groq_api_key
   HF_TOKEN=your_hugging_face_access_token
   ```

4. **Start the Development Server:**

   First, run the Convex development server in a separate terminal:

   ```bash
   npx convex dev
   ```

   Then, start the Next.js app:

   ```bash
   npm run dev
   ```

5. **Open the App:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```bash
├── convex/          # Backend functions and schema (Convex)
├── src/
│   ├── app/         # Next.js App Router pages
│   │   ├── (home)/  # Landing page and related components
│   │   ├── session/ # Journaling session interface
│   │   └── api/     # API routes (Sentiment analysis)
│   ├── components/  # Reusable UI components
│   └── lib/         # Utility functions
├── public/          # Static assets
└── ...config files  # Tailwind, Next.js, TypeScript config
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

_Note: This is a mental health support tool, not a medical device. If you are in crisis, please contact local emergency services._


