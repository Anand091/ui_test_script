import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://invoice-financing-portal.services.dpw.us.virtusa.dev/?tenant=xbank', // Set the base URL here
  },
});