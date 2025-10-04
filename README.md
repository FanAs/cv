# CV

## Introduction

This project is a personal CV webpage built with **Vite** and **React 19** using TypeScript.

## Tech Stack

- **React 19**
- **TypeScript 5.9**
- **Vite 7**
- **styled-components**
- **lucide-react**
- **ESLint 9**
- **Prettier**
- **Docker**

## Prerequisites

For development, ensure you have installed:
- [Node.js 22+](https://nodejs.org/)
- npm (comes with Node.js)

For deployment:
- [Docker](https://www.docker.com/)

## Getting Started

### Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/FanAs/cv/
   cd cv
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The application will be available at http://localhost:5173

### Building for Production

Build the optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Running with Docker

1. Build the Docker image:

   ```bash
   docker build -t cv .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 8080:80 cv
   ```

CV webpage is now running inside a Docker container and is accessible at http://localhost:8080.

## Development

### Available Scripts

- `npm run dev` - Start Vite development server with hot reload
- `npm run build` - Build for production (TypeScript check + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted

### Deployment

The project uses a multi-stage Docker build:
1. **Build stage**: Node.js 22 Alpine builds the Vite bundle
2. **Production stage**: Nginx Alpine serves the static files

For deployment instructions, see the "Running with Docker" section above.
