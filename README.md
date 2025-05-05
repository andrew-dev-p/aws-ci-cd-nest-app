# Simple NestJS App with AWS and GitHub Actions CI/CD

A **simple NestJS app** showcasing **AWS EC2 deployment** and **GitHub Actions CI/CD** for production and development environments. The app consists of two endpoints:
- `/`: Displays "Hello, world!"
- `/users`: Returns a list of seeded users.

## 🔍 Description

This app demonstrates the use of **NestJS** for building a backend API and **Prisma** for interacting with a database. The deployment process leverages **AWS EC2 instances**, with **GitHub Actions** automating CI/CD pipelines. The app is designed to run in both **development** and **production** environments, using **Docker** for containerization.

## 🚀 Features

- **Hello, world!** endpoint at `/`
- **Users** endpoint at `/users` displaying a list of preseeded users
- **Prisma** integration for database management
- **Dockerized** app for easy deployment
- **AWS ECR** for container registry
- **AWS EC2** for hosting both development and production environments
- **GitHub Actions CI/CD** for automated deployment
- **Sentry** integration for error tracking
- **BuildKit** for caching images

## 🛠️ Tech Stack

- **NestJS** for backend development
- **Prisma** for database management
- **Docker** for containerization
- **AWS ECR** for container registry
- **AWS EC2** for cloud hosting
- **GitHub Actions** for CI/CD
- **Sentry** for error monitoring

## 🧑‍💻 Deployment

### 1. AWS EC2 Setup

- Set up two **EC2 instances**: one for **development** and one for **production**.
- Both instances should have **Ubuntu** installed with at least **12 GB** of memory.
- Install the **self-hosted runner** on both instances using the GitHub Actions setup.

### 2. GitHub Actions CI/CD

#### 2.1. Development Deployment (Triggered on `dev` branch):

- Use a local **PostgreSQL** database on the development EC2 instance.

#### 2.2. Production Deployment (Triggered Manually on `main` branch):

- Use an **RDS** database on the production EC2 instance.

### 3. Accessing the App

- The development environment can be accessed via the **dev EC2 instance** IP or domain.
- The production environment can be accessed via the **prod EC2 instance** IP or domain.

## 💡 Improvements

- Used **BuildKit** to cache images and speed up the build process.
- Reused the `deploy.yml` file to implement the DRY principle.
