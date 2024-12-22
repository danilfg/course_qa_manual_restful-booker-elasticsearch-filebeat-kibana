const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const xmlparser = require('express-xml-bodyparser');
const crypto = require('crypto'); // Для генерации session_id

const routes = require('./routes/index');

const app = express();

// Middleware для логирования запроса и ответа
app.use((req, res, next) => {
  const sessionId = crypto.randomUUID(); // Генерируем уникальный session_id
  const requestLog = {
    log_type: "REQUEST",
    session_id: sessionId,
    timestamp: new Date().toISOString(),
    request: {
      method: req.method,
      url: req.originalUrl,
      headers: req.headers,
      body: req.body || null,
      queryParams: req.query || null
    }
  };

  console.log(JSON.stringify(requestLog)); // Логируем запрос

  const oldWrite = res.write;
  const oldEnd = res.end;
  const chunks = [];

  // Перехватываем тело ответа
  res.write = function (chunk) {
    chunks.push(Buffer.from(chunk));
    oldWrite.apply(res, arguments);
  };

  res.end = function (chunk) {
    if (chunk) {
      chunks.push(Buffer.from(chunk));
    }
    const responseBody = Buffer.concat(chunks).toString();

    // Определяем, является ли тело текстовым
    const contentType = res.getHeader('content-type') || '';
    if (contentType.includes('application/json') || contentType.includes('text') || contentType.includes('html')) {
      // Логируем только текстовые данные
      const responseLog = {
        log_type: "RESPONSE",
        session_id: sessionId,
        timestamp: new Date().toISOString(),
        response: {
          statusCode: res.statusCode,
          url: req.originalUrl,
          headers: res.getHeaders(),
          body: responseBody.toString() // Преобразуем в текст только текстовые данные
        }
      };
      console.log(JSON.stringify(responseLog));
    } else {
      // Логируем только метаданные ответа для бинарного контента
      const responseLog = {
        log_type: "RESPONSE",
        session_id: sessionId,
        timestamp: new Date().toISOString(),
        response: {
          statusCode: res.statusCode,
          url: req.originalUrl,
          headers: res.getHeaders(),
          body: '[binary data]' // Указываем, что данные бинарные
        }
      };
      console.log(JSON.stringify(responseLog));

    }
    oldEnd.apply(res, arguments);
  };
    // const responseLog = {
    //   log_type: "RESPONSE",
    //   session_id: sessionId,
    //   timestamp: new Date().toISOString(),
    //   response: {
    //     statusCode: res.statusCode,
    //     url: req.originalUrl,
    //     headers: res.getHeaders(),
    //     body: responseBody
    //   }
    // };

  //   console.log(JSON.stringify(responseLog)); // Логируем ответ
  //   oldEnd.apply(res, arguments);
  // };

  next();
});

// app.use(logger('common', { skip: () => true })); // Полностью отключает вывод Morgan
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(xmlparser({ trim: false, explicitArray: false }));

// Редирект с "/" на "/apidoc/index.html"
app.get('/', (req, res) => {
  console.log('Redirecting to /apidoc/index.html');
  res.redirect('/apidoc/index.html');
});

app.use('/', routes);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Development error handler
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    console.error(err);
    res.sendStatus(err.status || 500);
  });
}

// Production error handler
app.use(function (err, req, res, next) {
  res.sendStatus(err.status || 500);
});

module.exports = app;