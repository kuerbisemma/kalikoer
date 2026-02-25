import type { Language } from './index';

function splitHash(href: string) {
  const hashIndex = href.indexOf('#');

  if (hashIndex === -1) {
    return { path: href, hash: '' };
  }

  return {
    path: href.slice(0, hashIndex),
    hash: href.slice(hashIndex)
  };
}

export function withLanguage(href: string, language: Language) {
  const { path, hash } = splitHash(href);
  const safePath = path.length > 0 ? path : '/index.html';
  const url = new URL(safePath, 'https://kalikoer.local');

  url.searchParams.set('lang', language);

  return `${url.pathname}${url.search}${hash}`;
}
