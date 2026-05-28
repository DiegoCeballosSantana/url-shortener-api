import type { UrlRepository } from './url.repository.js';
import type { UrlRecord } from '../types/url.js';

export class InMemoryUrlRepository implements UrlRepository {
  private readonly urlsByCode = new Map<string, UrlRecord>();

  async create(url: UrlRecord): Promise<UrlRecord> {
    this.urlsByCode.set(url.shortCode, url);

    return url;
  }

  async findByCode(shortCode: string): Promise<UrlRecord | null> {
    return this.urlsByCode.get(shortCode) ?? null;
  }

  async existsByCode(shortCode: string): Promise<boolean> {
    return this.urlsByCode.has(shortCode);
  }
}
