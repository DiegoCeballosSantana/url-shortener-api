import type { UrlRecord } from '../types/url.js';

export interface UrlRepository {
  create(url: UrlRecord): Promise<UrlRecord>;
  findByCode(shortCode: string): Promise<UrlRecord | null>;
  existsByCode(shortCode: string): Promise<boolean>;
}
