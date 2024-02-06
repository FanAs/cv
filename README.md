# CV

## Introduction

This project is a personal CV webpage built with `create-react-app` using TypeScript. It incorporates ESLint for code quality and consistency, and is designed to run in a Docker container for ease of deployment.

## Features

- **React**: Utilizes the latest features of React for building user interfaces.
- **TypeScript**: Adds type safety to enhance development experience and reduce runtime errors.
- **ESLint**: Ensures code quality and consistency with ESLint configuration.
- **Docker**: Containerized for easy deployment and isolation.

## Prerequisites

Before you begin, ensure you have installed:

- [Docker](https://www.docker.com/)

## Getting Started

### Setup the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/FanAs/cv/
   cd cv

### Running with Docker

1. Build the Docker image:

```bash
docker build -t cv .
```

2. Run the Docker container:
```bash
docker run -p 8080:80 cv
```
Your CV webpage is now running inside a Docker container and is accessible at http://localhost:8080.

## Development
### Code Style and Linting
This project uses ESLint to enforce code style and quality. To lint the project, run:

```bash
npm run lint
```

### TypeScript
TypeScript is used for its type safety features. Ensure any new code complies with TypeScript standards and does not produce type errors.

### Deployment
For deployment instructions, see the section on Running with Docker.
