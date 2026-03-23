# 🐳 Docker Compose for Restful Booker, Elasticsearch, Filebeat, Kibana

<p align="center">
  🌍 <a href="README.md">English</a> | 
  🇷🇺 <a href="README_RU.md">Русский</a>
</p>

![Release](https://img.shields.io/github/v/release/danilfg/docker-compose-setup?label=release&style=flat-square)
![Docker Compose](https://img.shields.io/badge/docker-compose-2496ED?logo=docker&logoColor=white&style=flat-square)
![Elasticsearch](https://img.shields.io/badge/elasticsearch-005571?logo=elasticsearch&logoColor=white&style=flat-square)
![Kibana](https://img.shields.io/badge/kibana-E8478B?logo=kibana&logoColor=white&style=flat-square)
![Filebeat](https://img.shields.io/badge/filebeat-00BFB3?style=flat-square)
![Python](https://img.shields.io/badge/python-3.9+-3776AB?logo=python&logoColor=white&style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/danilfg/docker-compose-setup?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

👨‍🏫 Author — QA Mentor (Manual & Automation Testing):
**Daniil Nikolaev** — [https://t.me/aqa_pro_mentor](https://t.me/aqa_pro_mentor)

---

## 📜 Description

This repository provides a ready-to-use configuration for deploying:

* **Restful Booker**
* **Elasticsearch**
* **Filebeat**
* **Kibana**

using **Docker Compose**.

All Docker images are **publicly available** via **GitHub Container Registry (GHCR)** — no authentication required 🎉

🔗 **Repository:**
[https://github.com/danilfg/course_qa_manual_restful-booker-elasticsearch-filebeat-kibana.git](https://github.com/danilfg/course_qa_manual_restful-booker-elasticsearch-filebeat-kibana.git)

---

## 📂 Main Files

### `docker-compose.yml`

* Starts all services
* Defines dependencies between containers
* Connects configuration files

### `filebeat.yml`

* Configures Filebeat to collect logs from containers
* Sends logs to **Elasticsearch**

---

## 🐳 Services & Images

| Service        | Image                            | Version |
| -------------- | -------------------------------- | ------- |
| Restful Booker | `ghcr.io/danilfg/restful-booker` | latest  |
| Elasticsearch  | `ghcr.io/danilfg/elasticsearch`  | 8.8.0   |
| Kibana         | `ghcr.io/danilfg/kibana`         | 8.8.0   |
| Filebeat       | `ghcr.io/danilfg/filebeat`       | 8.8.0   |

📌 All images are **public**, no GHCR login required.

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/danilfg/course_qa_manual_restful-booker-elasticsearch-filebeat-kibana.git
cd course_qa_manual_restful-booker-elasticsearch-filebeat-kibana
```

---

### 2️⃣ Make sure Docker is running

---

### 3️⃣ Start containers

```bash
docker-compose up -d
```

---

### 4️⃣ Check running services

```bash
docker ps
```

---

### 5️⃣ Open Kibana

👉 [http://localhost:5601](http://localhost:5601)

---

## 🏗 Configure Index Pattern in Kibana

After Filebeat starts sending logs to **Elasticsearch**, you need to configure an index pattern in Kibana.

### Steps:

1️⃣ Open Kibana
👉 [http://localhost:5601](http://localhost:5601)

2️⃣ Go to
**Stack Management → Index Patterns**

3️⃣ Click **Create index pattern**

4️⃣ Enter:

```text
filebeat-*
```

5️⃣ Select time field: `@timestamp`

6️⃣ Click **Create index pattern**

---

### ✅ Done!

Now go to:

👉 [http://localhost:5601/app/discover](http://localhost:5601/app/discover)

You should see logs from your containers 🎉

---

## ⏹ Stop Services

```bash
docker-compose down
```

---

## 🧪 Use Cases

* QA Automation practice
* Log analysis training
* ELK stack learning
* CI/CD environment simulation

---

## ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🔁 Share it
* 💬 Give feedback

---

🚀 **Now your full ELK stack + test API is up and running!**
