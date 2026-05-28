import type { Request, Response } from 'express';
import type { UrlService } from '../services/url.service.js';
import { shortenUrlSchema } from '../schemas/url.schema.js';

export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  async shorten(req: Request, res: Response): Promise<void> {
    const input = shortenUrlSchema.parse(req.body);
    const urlRecord = await this.urlService.shortenUrl(input.originalUrl);

    res.status(201).json(urlRecord);
  }

  async redirect(req: Request, res: Response): Promise<void> {
    const code = String(req.params.code);
    const originalUrl = await this.urlService.getOriginalUrl(code);

    if (originalUrl === null) {
      res.status(404).json({ error: 'Short URL not found' });
      return;
    }

    res.redirect(originalUrl);
  }
}
