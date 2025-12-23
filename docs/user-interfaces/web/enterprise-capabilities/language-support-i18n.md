---
last_update: { author: "Author Name" }
---

# Language Support i18n

Implementing internationalization (i18n) and localization (l10n) to support multiple languages and regions in your application.

## Overview

Internationalization (i18n) is the process of designing and developing applications to support multiple languages, regions, and cultures. Localization (l10n) is the adaptation of your application to meet the language, cultural, and other requirements of a specific target market.

## Why Internationalization Matters

- **Global Reach**: Expand your user base to international markets
- **User Experience**: Provide content in users' native languages
- **Market Requirements**: Some markets require local language support
- **Competitive Advantage**: Localized apps have better adoption rates
- **Legal Compliance**: Some regions require content in local languages

## Key Concepts

### i18n vs l10n

- **i18n (Internationalization)**: Designing your app to support multiple languages
- **l10n (Localization)**: Adapting your app for specific languages/regions

### Locale

A locale identifier specifies a language and optionally a region:
- `en` - English
- `en-US` - English (United States)
- `en-GB` - English (United Kingdom)
- `es` - Spanish
- `es-MX` - Spanish (Mexico)
- `fr-FR` - French (France)

## Popular i18n Libraries

### react-i18next

Most popular i18n framework for React.

**Installation:**
```bash
npm install react-i18next i18next
```

**Basic Setup:**
```javascript
// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: 'Welcome',
          greeting: 'Hello, {{name}}!',
          itemCount: 'You have {{count}} item',
          itemCount_plural: 'You have {{count}} items',
        },
      },
      es: {
        translation: {
          welcome: 'Bienvenido',
          greeting: '¡Hola, {{name}}!',
          itemCount: 'Tienes {{count}} artículo',
          itemCount_plural: 'Tienes {{count}} artículos',
        },
      },
      fr: {
        translation: {
          welcome: 'Bienvenue',
          greeting: 'Bonjour, {{name}}!',
          itemCount: 'Vous avez {{count}} article',
          itemCount_plural: 'Vous avez {{count}} articles',
        },
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```

**Usage in Components:**
```jsx
import { useTranslation } from 'react-i18next';

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('greeting', { name: 'John' })}</p>
      <p>{t('itemCount', { count: 1 })}</p>
      <p>{t('itemCount', { count: 5 })}</p>
    </div>
  );
};
```

### react-intl (FormatJS)

Powerful i18n library by FormatJS.

**Installation:**
```bash
npm install react-intl
```

**Setup:**
```jsx
import { IntlProvider } from 'react-intl';

const messages = {
  en: {
    welcome: 'Welcome',
    greeting: 'Hello, {name}!',
  },
  es: {
    welcome: 'Bienvenido',
    greeting: '¡Hola, {name}!',
  },
};

function App() {
  const [locale, setLocale] = useState('en');

  return (
    <IntlProvider messages={messages[locale]} locale={locale}>
      <YourApp />
    </IntlProvider>
  );
}
```

**Usage:**
```jsx
import { FormattedMessage, useIntl } from 'react-intl';

const Welcome = () => {
  const intl = useIntl();

  return (
    <div>
      <h1>
        <FormattedMessage id="welcome" />
      </h1>
      <p>
        <FormattedMessage
          id="greeting"
          values={{ name: 'John' }}
        />
      </p>
      <p>{intl.formatMessage({ id: 'welcome' })}</p>
    </div>
  );
};
```

## Translation Files Organization

### JSON Structure

```
locales/
├── en/
│   ├── common.json
│   ├── navigation.json
│   ├── forms.json
│   └── errors.json
├── es/
│   ├── common.json
│   ├── navigation.json
│   ├── forms.json
│   └── errors.json
└── fr/
    ├── common.json
    ├── navigation.json
    ├── forms.json
    └── errors.json
```

**Example - common.json (English):**
```json
{
  "app": {
    "title": "My Application",
    "tagline": "Building amazing experiences"
  },
  "actions": {
    "save": "Save",
    "cancel": "Cancel",
    "delete": "Delete",
    "edit": "Edit",
    "submit": "Submit"
  },
  "messages": {
    "success": "Operation completed successfully",
    "error": "An error occurred",
    "loading": "Loading..."
  }
}
```

**Example - common.json (Spanish):**
```json
{
  "app": {
    "title": "Mi Aplicación",
    "tagline": "Construyendo experiencias increíbles"
  },
  "actions": {
    "save": "Guardar",
    "cancel": "Cancelar",
    "delete": "Eliminar",
    "edit": "Editar",
    "submit": "Enviar"
  },
  "messages": {
    "success": "Operación completada con éxito",
    "error": "Ocurrió un error",
    "loading": "Cargando..."
  }
}
```

### Loading Translation Files

```javascript
// i18n.js with namespaces
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['common', 'navigation', 'forms', 'errors'],
    defaultNS: 'common',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
```

## Language Switching

### Language Selector Component

```jsx
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem('language', languageCode);
    document.documentElement.lang = languageCode;
  };

  return (
    <select
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
      aria-label="Select language"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.flag} {lang.name}
        </option>
      ))}
    </select>
  );
};
```

### Persisting Language Preference

```javascript
// Initialize with saved language
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    lng: savedLanguage,
    fallbackLng: 'en',
    // ... other config
  });

// Update HTML lang attribute
document.documentElement.lang = savedLanguage;
```

## Number Formatting

### Using Intl.NumberFormat

```jsx
import { useTranslation } from 'react-i18next';

const PriceDisplay = ({ amount, currency = 'USD' }) => {
  const { i18n } = useTranslation();

  const formatter = new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency: currency,
  });

  return <span>{formatter.format(amount)}</span>;
};

// Usage
<PriceDisplay amount={1234.56} currency="USD" />
// en-US: $1,234.56
// es-ES: 1234,56 US$
// de-DE: 1.234,56 $
```

### Number Abbreviation

```javascript
const formatNumber = (num, locale) => {
  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(num);
};

// Usage
formatNumber(1234, 'en'); // "1.2K"
formatNumber(1234, 'es'); // "1,2 mil"
formatNumber(1000000, 'en'); // "1M"
```

## Date and Time Formatting

### Using Intl.DateTimeFormat

```jsx
import { useTranslation } from 'react-i18next';

const DateDisplay = ({ date }) => {
  const { i18n } = useTranslation();

  const formatter = new Intl.DateTimeFormat(i18n.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return <span>{formatter.format(new Date(date))}</span>;
};

// Usage
<DateDisplay date="2025-01-15" />
// en-US: January 15, 2025
// es-ES: 15 de enero de 2025
// fr-FR: 15 janvier 2025
```

### Relative Time Formatting

```jsx
const RelativeTime = ({ date }) => {
  const { i18n } = useTranslation();

  const formatter = new Intl.RelativeTimeFormat(i18n.language, {
    numeric: 'auto',
  });

  const getRelativeTime = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - new Date(date)) / 1000);

    if (diffInSeconds < 60) {
      return formatter.format(-diffInSeconds, 'second');
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return formatter.format(-diffInMinutes, 'minute');
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return formatter.format(-diffInHours, 'hour');
    }

    const diffInDays = Math.floor(diffInHours / 24);
    return formatter.format(-diffInDays, 'day');
  };

  return <span>{getRelativeTime(date)}</span>;
};

// Usage
// en: "2 hours ago"
// es: "hace 2 horas"
// fr: "il y a 2 heures"
```

## Pluralization

### Simple Pluralization

```javascript
// Translation file
{
  "items": {
    "one": "{{count}} item",
    "other": "{{count}} items"
  }
}
```

```jsx
const ItemCount = ({ count }) => {
  const { t } = useTranslation();
  return <span>{t('items', { count })}</span>;
};
```

### Complex Pluralization

```javascript
// For languages with complex plural rules
{
  "items": {
    "zero": "No items",
    "one": "One item",
    "few": "{{count}} items",
    "many": "{{count}} items",
    "other": "{{count}} items"
  }
}
```

## Context-Based Translations

```javascript
// Translation file
{
  "button": {
    "save": "Save",
    "save_male": "Guardado",
    "save_female": "Guardada"
  }
}
```

```jsx
const SaveButton = ({ gender }) => {
  const { t } = useTranslation();

  const key = gender ? `button.save_${gender}` : 'button.save';

  return <button>{t(key)}</button>;
};
```

## Right-to-Left (RTL) Support

### Detecting RTL Languages

```javascript
const RTL_LANGUAGES = ['ar', 'he', 'fa', 'ur'];

const isRTL = (language) => {
  return RTL_LANGUAGES.includes(language.split('-')[0]);
};
```

### Applying RTL Styles

```jsx
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const isRTL = ['ar', 'he', 'fa', 'ur'].includes(i18n.language);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return <div>{/* Your app */}</div>;
};
```

### RTL-Aware Styles

```css
/* Logical properties for RTL support */
.container {
  margin-inline-start: 20px; /* Changes based on direction */
  margin-inline-end: 20px;
  padding-inline-start: 16px;
}

/* RTL-specific styles */
[dir='rtl'] .icon {
  transform: scaleX(-1);
}
```

## Best Practices

### 1. Use Keys, Not English Text

```jsx
// ✅ Good - Translation keys
<h1>{t('welcome.title')}</h1>

// ❌ Bad - Hardcoded English
<h1>Welcome to our app</h1>
```

### 2. Avoid String Concatenation

```javascript
// ❌ Bad - String concatenation breaks in other languages
const message = t('hello') + ' ' + name + '!';

// ✅ Good - Use interpolation
const message = t('greeting', { name });
```

### 3. Provide Context for Translators

```javascript
// ❌ Bad - Ambiguous
{
  "button": "Close"
}

// ✅ Good - Clear context
{
  "dialog.closeButton": "Close",
  "store.closedStatus": "Closed"
}
```

### 4. Handle Missing Translations

```javascript
i18n.init({
  // ... other config
  fallbackLng: 'en',
  saveMissing: true, // Save missing keys for translation
  missingKeyHandler: (lng, ns, key) => {
    console.warn(`Missing translation: ${key} for ${lng}`);
  },
});
```

### 5. Test with Long Translations

Some languages (German, Russian) have longer words. Test your UI with longer text.

```css
/* Allow text to wrap */
.button-text {
  overflow-wrap: break-word;
  word-wrap: break-word;
}
```

### 6. Separate Translator-Facing Keys

```javascript
// Use descriptive keys for translators
{
  "userProfile": {
    "editButton": "Edit Profile",
    "saveButton": "Save Changes",
    "cancelButton": "Cancel"
  }
}
```

## Dynamic Content Translation

### Translating API Responses

```javascript
// Store translations with content
const fetchContent = async (locale) => {
  const response = await fetch(`/api/content?locale=${locale}`);
  return response.json();
};

// Or translate on client side
const translateContent = (content, locale) => {
  return {
    ...content,
    title: content.translations[locale]?.title || content.title,
    description: content.translations[locale]?.description || content.description,
  };
};
```

## Performance Optimization

### Lazy Loading Translations

```javascript
import i18n from 'i18next';
import Backend from 'i18next-http-backend';

i18n.use(Backend).init({
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  ns: ['common'], // Load only common namespace initially
  defaultNS: 'common',
  // Other namespaces loaded on demand
});

// Load namespace when needed
const loadNamespace = async (namespace) => {
  await i18n.loadNamespaces(namespace);
};
```

### Caching Translations

```javascript
// Service Worker caching for translations
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/locales/')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
```

## Testing i18n

```javascript
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

// Test with different languages
test('displays welcome message in English', () => {
  i18n.changeLanguage('en');

  render(
    <I18nextProvider i18n={i18n}>
      <Welcome />
    </I18nextProvider>
  );

  expect(screen.getByText('Welcome')).toBeInTheDocument();
});

test('displays welcome message in Spanish', () => {
  i18n.changeLanguage('es');

  render(
    <I18nextProvider i18n={i18n}>
      <Welcome />
    </I18nextProvider>
  );

  expect(screen.getByText('Bienvenido')).toBeInTheDocument();
});
```

## Translation Management Tools

### Popular Tools

- **Lokalise**: Translation management platform
- **Crowdin**: Localization management platform
- **Phrase**: Translation management system
- **POEditor**: Collaborative translation platform

### Integration Example

```javascript
// Download translations from service
const downloadTranslations = async () => {
  const response = await fetch('https://api.translation-service.com/download', {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });

  const translations = await response.json();

  // Save to local files
  Object.entries(translations).forEach(([lang, content]) => {
    fs.writeFileSync(
      `./locales/${lang}/translation.json`,
      JSON.stringify(content, null, 2)
    );
  });
};
```

## i18n Checklist

- [ ] All user-facing text uses translation keys
- [ ] Translation files organized by namespace
- [ ] Language selector implemented
- [ ] Language preference persisted
- [ ] Numbers formatted per locale
- [ ] Dates/times formatted per locale
- [ ] Pluralization handled correctly
- [ ] RTL languages supported
- [ ] Missing translations have fallbacks
- [ ] Long text doesn't break UI
- [ ] HTML lang attribute updates on language change
- [ ] Translations tested in all supported languages

## Related Documentation

- [Role based Access Control](./role-based-access-control.md)
- [Accessibility](./accessibility.md)
- [State Management](../develop/state-management.md)
- [UI Event handling](../develop/ui-event-handling.md)
