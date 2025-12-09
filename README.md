# Developer Portfolio

This is a personal developer portfolio built with Next.js, React, TypeScript, and Tailwind CSS. It showcases my skills, experience, and projects in a modern, responsive, and animated web interface. The portfolio also integrates Generative AI features using Google's Genkit.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v15.5)
- **UI Library**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)
- **Generative AI**: [Google Genkit](https://firebase.google.com/docs/genkit)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have the following software installed on your machine:

- [Node.js](https://nodejs.org/en) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/salman-momin08/myportfolio.git
cd myportfolio
```

### 2. Install Dependencies

Install all the project dependencies using npm (or your preferred package manager):

```bash
npm install
```

### 3. Set Up Environment Variables

The project uses Genkit for Generative AI features, which requires an API key from Google AI Studio.

1.  Create a new file named `.env.local` in the root of your project directory.
2.  Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
3.  Add the key to your `.env.local` file like this:

```plaintext
# .env.local
GOOGLE_GENAI_API_KEY="YOUR_API_KEY_HERE"
```

### 4. Running the Development Server

To run the application in development mode, use the following command. This will start the Next.js development server, typically on `http://localhost:9002`.

```bash
npm run dev
```

The application should now be running. Open your browser and navigate to the specified local URL.

### 5. Running Genkit (for AI Development)

If you are working on the AI features, you need to run the Genkit development server in a separate terminal. This allows you to inspect and debug AI flows.

```bash
npm run genkit:dev
```

This will start the Genkit developer UI, typically on `http://localhost:4000`.

---

## Building for Production

To create an optimized production build of the application, run the following command:

```bash
npm run build
```

This command compiles the application and optimizes it for performance. The output will be located in the `.next` directory.

To run the production server locally, use:

```bash
npm start
```