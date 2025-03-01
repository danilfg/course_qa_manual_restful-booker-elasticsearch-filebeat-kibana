### 🐳 Docker Compose для Restful Booker, Elasticsearch, Filebeat, Kibana

![GitHub release](https://img.shields.io/github/v/release/danilfg/docker-compose-setup?style=for-the-badge)  
![Docker](https://img.shields.io/badge/Docker-Compose-blue?style=for-the-badge)  
![Status](https://img.shields.io/badge/Status-Active-green?style=for-the-badge)


---
Автор - ментор по ручному и автоматизированному тестированию: Николаев Даниил - https://t.me/aqa_pro_mentor
## 📜 Описание
Этот репозиторий содержит конфигурацию для развертывания **Restful Booker, Elasticsearch, Filebeat и Kibana** с использованием **Docker Compose**.  
Все образы **публичны** и доступны без авторизации в **GitHub Container Registry (GHCR)**.

🔗 **Репозиторий:** [GitHub - danilfg/course_qa_manual_restful-booker-elasticsearch-filebeat-kibana](https://github.com/danilfg/course_qa_manual_restful-booker-elasticsearch-filebeat-kibana.git)

---

## 📂 Основные файлы

- **`docker-compose.yml`**  
  🔹 Запускает все контейнеры и определяет их зависимости.  
  🔹 Подключает конфигурационные файлы для корректной работы сервисов.

- **`filebeat.yml`**  
  🔹 Настраивает Filebeat для сбора логов с контейнеров.  
  🔹 Отправляет данные в **Elasticsearch**.

---

## 🐳 Используемые образы и версии
| Сервис          | Образ                                      | Версия |
|----------------|-------------------------------------------|--------|
| Restful Booker | `ghcr.io/danilfg/restful-booker`         | latest |
| Elasticsearch  | `ghcr.io/danilfg/elasticsearch`          | 8.8.0  |
| Kibana         | `ghcr.io/danilfg/kibana`                 | 8.8.0  |
| Filebeat       | `ghcr.io/danilfg/filebeat`               | 8.8.0  |

📌 **Все образы доступны публично, поэтому логин в GHCR не требуется!** 🎉

---

## 🚀 Как запустить

1️⃣ **Клонируем репозиторий:**
```bash
git clone https://github.com/danilfg/course_qa_manual_restful-booker-elasticsearch-filebeat-kibana.git
cd course_qa_manual_restful-booker-elasticsearch-filebeat-kibana
```

2️⃣ **Запускаем контейнеры:**
```bash
docker-compose up -d
```

3️⃣ **Проверяем работу сервисов:**
```bash
docker ps
```

4️⃣ **Открываем Kibana в браузере:**  
🔗 `http://localhost:5601`

---

## 🏗 Как настроить индекс в Kibana

После запуска Filebeat данные попадут в **Elasticsearch**, но для их отображения в Kibana нужно **создать индексный шаблон**.

### **📌 Шаги для настройки индекса в Kibana**
1️⃣ Открыть **Kibana**:  
   🔗 `http://localhost:5601`

2️⃣ Перейти в раздел **"Stack Management" → "Index Patterns"**.

3️⃣ Нажать **"Create index pattern"**.

4️⃣ В поле **Index pattern name** ввести:
   ```
   filebeat-*
   ```

5️⃣ Выбрать временное поле (`@timestamp`) и нажать **"Create index pattern"**.

6️⃣ Готово! Теперь можно перейти в **Discover** (`http://localhost:5601/app/discover`) и увидеть логи.

---

## ⏹ Как остановить
```bash
docker-compose down
```

---

### ✅ Готово! Теперь все сервисы работают, а логи доступны в Kibana.  
🚀 **Используй и не забудь поставить ⭐ в репозитории!** 😊
