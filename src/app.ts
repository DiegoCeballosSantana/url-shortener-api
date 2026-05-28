import express from 'express';
import { UrlController } from './controllers/url.controller.js';
import { InMemoryUrlRepository } from './repositories/in-memory-url.repository.js';
import { createUrlRoutes } from './routes/url.routes.js';
import { UrlService } from './services/url.service.js';

const app = express();

const urlRepository = new InMemoryUrlRepository();
const urlService = new UrlService(urlRepository);
const urlController = new UrlController(urlService);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'URL Shortener API está corriendo perfectamente!' });
});

app.use(createUrlRoutes(urlController));

export default app;
