# 🚀 FastAPI Application with Docker & GitHub Actions

Welcome to the **FastAPI application** repository! This guide will help you set up, run, and deploy the application using **Docker** and **GitHub Actions**. 

---

## 📥 How to Install and Run Locally

### 🔧 Prerequisites
Before running the application, ensure you have the following installed:
- ✅ **Python 3.x** (Latest version recommended)
- ✅ **pip** (Python package manager)
- ✅ **Virtual Environment** (Recommended for dependency management)

### ⚡ Steps to Run Locally
Follow these steps to run the FastAPI app on your local machine:

1️⃣ **Clone the Repository**
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

2️⃣ **Create and Activate a Virtual Environment**
```bash
python3 -m venv .venv  # Create virtual environment
source .venv/bin/activate  # macOS/Linux
.venv\Scripts\activate     # Windows
```

3️⃣ **Install Dependencies**
```bash
pip install -r requirements.txt
```

4️⃣ **Run the FastAPI Application**
```bash
uvicorn apiserver:app --reload
```

5️⃣ **Open the API in Browser**
- 🌐 API Documentation: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- ⚙ Interactive API: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

---

## 🐳 How to Build and Run Docker Image

### 🏗️ Build Docker Image
```bash
docker build -t fastapi-app .
```

### 🚀 Run the Docker Container
```bash
docker run -p 8000:8000 fastapi-app
```

Now, your API is running inside a **Docker container**! 🎉

You can access the API documentation at:
- [http://localhost:8000/docs](http://localhost:8000/docs)

---

## ⚙️ GitHub Actions Workflow Explanation

### 🔄 CI/CD Pipeline Overview
The **GitHub Actions workflow** automates building and pushing the Docker image to **Docker Hub** whenever code is pushed to the `main` branch.

### 🔥 Workflow Steps:
1️⃣ **Trigger:** The workflow runs on every push or pull request to `main`.
2️⃣ **Checkout Code:** The latest version of the repository is pulled.
3️⃣ **Set Up Docker:** Logs into **Docker Hub** using secrets.
4️⃣ **Build & Push Image:** The Docker image is built and pushed to **Docker Hub**.

### 📜 GitHub Actions Workflow (`.github/workflows/DockerBuild.yml`):
```yaml
name: Build and Push Docker Image

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Login to Docker Hub
        run: echo "${{ secrets.DOCKERTOKEN }}" | docker login -u "<your-dockerhub-username>" --password-stdin

      - name: Build Docker Image
        run: docker build -t <your-dockerhub-username>/fastapi-app .

      - name: Push Docker Image to Docker Hub
        run: docker push <your-dockerhub-username>/fastapi-app
```

---

## 🔑 Setting Up Docker Token and GitHub Secrets

To enable **GitHub Actions** to push images to **Docker Hub**, follow these steps:

### **1️⃣ Generate a Docker Access Token**
1. 🔗 Go to [Docker Hub](https://hub.docker.com/).
2. **Sign in** with your credentials.
3. Click on your profile and go to **Account Settings → Security**.
4. Under **Access Tokens**, click **New Access Token**.
5. Name the token (e.g., `GitHubActionsToken`), set **Read/Write permissions**, and click **Generate Token**.
6. **Copy and save the token** (you won’t see it again!).

### **2️⃣ Add the Token as a GitHub Secret**
1. Open your **GitHub Repository**.
2. Go to **Settings → Secrets and variables → Actions**.
3. Click **New Repository Secret**.
4. Set the secret name as **DOCKERTOKEN**.
5. Paste the copied **Docker Token**.
6. Click **Add Secret**.

Now, GitHub Actions can use this token to authenticate with Docker Hub and push images securely. 🔐

---

## ✅ Final Checks and Deployment
Now, every push to the `main` branch will **automatically build and push** the Docker image to **Docker Hub**. 🚀

### 🔄 **To Manually Test the Process**
Try running:
```bash
echo "YOUR_NEW_DOCKER_TOKEN" | docker login -u "<your-dockerhub-username>" --password-stdin
```
You should see: `Login Succeeded` ✅

If everything is set up correctly, the CI/CD pipeline will take care of the rest!

---

## 🎉 Congratulations! You're All Set!
Now your **FastAPI app** is containerized and automatically deployed via **GitHub Actions**. 🚀

If you have any questions, feel free to reach out! 🔥
