import type { UrlRepository } from '../repositories/url.repository.js';
import type { UrlRecord } from '../types/url.js';
import { generateShortCode } from '../utils/generate-short-code.js';

export class UrlService {
    constructor(private readonly urlRepository: UrlRepository) {}
    async shortenUrl(originalUrl: string): Promise<UrlRecord> {
        const now = new Date();
        const shortCode = await this.generateUniqueShortCode();

        const urlRecord: UrlRecord = {
            id: crypto.randomUUID(),
            originalUrl,
            shortCode,
            createdAt: now,
            updatedAt: now,
        };

        return this.urlRepository.create(urlRecord);
    }

    async getOriginalUrl(shortCode: string): Promise<string | null> {
        const urlRecord = await this.urlRepository.findByCode(shortCode);

        return urlRecord?.originalUrl ?? null;
    }

    private async generateUniqueShortCode(): Promise<string> {
        let shortCode = generateShortCode();

        while (await this.urlRepository.existsByCode(shortCode)) {
            shortCode = generateShortCode();
        }

        return shortCode;
    }

}