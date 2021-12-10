import { URL_ATTRIBUTE } from '../constants/constants';
import { WebsiteReference } from './types';

export function getUrl(urls: WebsiteReference[]): string {
    const url = urls && urls.find((item: WebsiteReference) => item.website_reference === URL_ATTRIBUTE);
    return url?.url || '';
}