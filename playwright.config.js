import { defineConfig } from '@playwright/test';

module.exports = defineConfig({
    use: {
        browserName: 'chromium',
        headless: false,
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
        baseURL: 'https://epicbet.com/en/sports/'
    },
});