# 🐳 Docker Compose for Restful Booker, Elasticsearch, Filebeat, Kibana

<p align="center">
  🌍 <a href="README.md">English</a> |
  🇷🇺 <a href="README_RU.md">Русский</a>
</p>

![Docker Compose](https://img.shields.io/badge/docker-compose-2496ED?logo=docker\&logoColor=white\&style=flat-square)
![Elasticsearch](https://img.shields.io/badge/elasticsearch-005571?logo=elasticsearch\&logoColor=white\&style=flat-square)
![Kibana](https://img.shields.io/badge/kibana-E8478B?logo=kibana\&logoColor=white\&style=flat-square)
![Filebeat](https://img.shields.io/badge/filebeat-00BFB3?style=flat-square)
![Python](https://img.shields.io/badge/python-3.9+-3776AB?logo=python\&logoColor=white\&style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

# 👨‍🏫 Author

**Daniil Nikolaev**

QA Automation & DevOps Engineer  
Creator of open-source testing platforms

Mentor in software testing and distributed systems  
Consulting companies on test automation and CI/CD infrastructure

Telegram  
https://t.me/danilfg

---

# 📚 About This Project

This repository provides a **ready-to-use environment for learning log monitoring and observability** using the **ELK stack**.

The environment includes:

* **Restful Booker** — test API used in QA automation training
* **Elasticsearch** — log storage and search engine
* **Filebeat** — log collector
* **Kibana** — visualization and monitoring interface

All services run using **Docker Compose**, allowing students to quickly start a complete environment for **testing and log analysis practice**.

---

# 🏗 Architecture

The environment contains the following services:

| Service        | Purpose                               |
| -------------- | ------------------------------------- |
| Restful Booker | Test API used for automation practice |
| Elasticsearch  | Stores logs and provides search       |
| Filebeat       | Collects container logs               |
| Kibana         | Visualizes logs and metrics           |

---

# 🐳 Docker Images

All images are hosted in **GitHub Container Registry (GHCR)**.

| Service        | Image                            | Version |
| -------------- | -------------------------------- | ------- |
| Restful Booker | `ghcr.io/danilfg/restful-booker` | latest  |
| Elasticsearch  | `ghcr.io/danilfg/elasticsearch`  | 8.8.0   |
| Kibana         | `ghcr.io/danilfg/kibana`         | 8.8.0   |
| Filebeat       | `ghcr.io/danilfg/filebeat`       | 8.8.0   |

All images are **public**, no authentication required.

---

# 💻 System Requirements

Running Elasticsearch requires sufficient system resources.

### Minimum requirements

| Resource | Recommended |
| -------- | ----------- |
| CPU      | 2 cores     |
| RAM      | 4 GB        |
| Disk     | 10 GB       |

### Recommended for smooth work

| Resource | Recommended |
| -------- | ----------- |
| CPU      | 4 cores     |
| RAM      | 8 GB        |
| Disk     | 20+ GB      |

⚠ Elasticsearch is memory-intensive.
If you experience slow performance, increase Docker memory allocation.

---

# 🚀 Getting Started

## 1️⃣ Clone the repository

```bash
git clone https://github.com/danilfg/course_qa_manual_restful-booker-elasticsearch-filebeat-kibana.git
cd course_qa_manual_restful-booker-elasticsearch-filebeat-kibana
```

---

## 2️⃣ Make sure Docker is running

Verify Docker:

```bash
docker --version
```

---

## 3️⃣ Start the environment

```bash
docker compose up -d
```

Docker will start:

* Restful Booker API
* Elasticsearch
* Filebeat
* Kibana

---

## 4️⃣ Check running containers

```bash
docker ps
```

---

# 📊 Open Kibana

Open in your browser:

👉 [http://localhost:5601](http://localhost:5601)

---

# 🔎 Configure Index Pattern in Kibana

After Filebeat starts sending logs to Elasticsearch, configure an index pattern.

### Steps

1️⃣ Open Kibana
[http://localhost:5601](http://localhost:5601)

2️⃣ Go to

```
Stack Management → Index Patterns
```

3️⃣ Click

```
Create index pattern
```

4️⃣ Enter

```
filebeat-*
```

5️⃣ Select time field

```
@timestamp
```

6️⃣ Click

```
Create index pattern
```

---

# 📈 View Logs

Now open:

👉 [http://localhost:5601/app/discover](http://localhost:5601/app/discover)

You should see logs from containers.

---

# 🧪 Learning Scenarios

This environment is useful for learning:

### QA Automation

Analyzing logs from automated API tests.

### Observability

Understanding how logs flow through the ELK stack.

### Debugging

Finding errors in containerized services.

### CI/CD pipelines

Using Elasticsearch and Kibana for monitoring test runs.

---

# ⏹ Stop the Environment

```bash
docker compose down
```

---

# ⭐ Support the Project

If this project helps you:

⭐ Star the repository
🔁 Share it with others
💬 Provide feedback

---

🚀 **Now your ELK stack and test API environment are ready!**
