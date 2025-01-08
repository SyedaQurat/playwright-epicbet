import { defineConfig } from '@playwright/test';

module.exports = defineConfig({
    reporter: [
        ['html',
            { outputFolder: 'playwright-report'}
        ]
    ],
    use: {
        browserName: 'chromium',
        headless: true,
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
        baseURL: 'https://epicbet.com/en/sports/'
    },
});