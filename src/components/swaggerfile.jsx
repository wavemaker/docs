// src/components/SwaggerUI.jsx
import React, { useEffect } from 'react';

export default function RedocDocs({ specUrl }) {
  useEffect(() => {
    // Add Swagger UI CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/swagger-ui-dist@5/swagger-ui.css';
    document.head.appendChild(link);

    // Add custom CSS to hide unnecessary elements
    const style = document.createElement('style');
    style.textContent = `
      .swagger-ui .topbar {
        display: none !important;
      }
      .swagger-ui .info {
        margin: 20px 0 !important;
      }
      .swagger-ui .info .base-url {
        display: none !important;
      }
      .swagger-ui .info hgroup.main a {
        display: none !important;
      }
      .swagger-ui .scheme-container {
        display: none !important;
      }
      .swagger-ui .servers {
        display: none !important;
      }
      .swagger-ui .servers-title {
        display: none !important;
      }
      .swagger-ui .models {
        display: none !important;
      }
      .swagger-ui section.models {
        display: none !important;
      }
      .swagger-ui #operations-UserController {
        display: none !important;
      }
      .swagger-ui .opblock-tag[data-tag="UserController"] {
        display: none !important;
      }
      .swagger-ui .opblock-tag-section[data-tag="UserController"] {
        display: none !important;
      }
      .swagger-ui div[id*="UserController"] {
        display: none !important;
      }
      .swagger-ui .opblock[id*="/hrdb/User"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    // Load Swagger UI
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js';
    script.async = true;
    script.onload = () => {
      window.SwaggerUIBundle({
        url: specUrl,
        dom_id: '#swagger-container',
        deepLinking: true,
        presets: [
          window.SwaggerUIBundle.presets.apis,
          window.SwaggerUIBundle.SwaggerUIStandalonePreset
        ],
        plugins: [
          window.SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: 'BaseLayout',
        defaultModelsExpandDepth: -1,
        defaultModelExpandDepth: -1,
        docExpansion: 'list',
        filter: false,
        showRequestHeaders: false,
        supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch', 'head', 'options'],
      });
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, [specUrl]);

  return (
    <div
      id="swagger-container"
      style={{
        width: '100%',
        minHeight: '100vh'
      }}
    />
  );
}
