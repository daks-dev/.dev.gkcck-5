import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'pnpm preview', // 'pnpm build && pnpm preview'
    port: 3000
  },
  testDir: '.',
  testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
