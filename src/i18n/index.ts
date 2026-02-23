import de from './de';
import allg from './allg';

export type Language = 'de' | 'allg';

const resources = {
  de,
  allg
};

export function getTranslations(language: Language) {
  return resources[language];
}