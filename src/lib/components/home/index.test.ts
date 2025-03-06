// @vitest-environment jsdom

import { describe, it, expect } from 'vitest';
import HomeHeader from './HomeHeader.svelte';

describe('Home header', () => {
  it('creates', () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const instance = new HomeHeader({ target: host });
    expect(instance).toBeTruthy();
  });

  it('renders', () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    new HomeHeader({ target: host });
    expect(host.innerHTML).toMatch(/Современные.+Стандарты.+Качества/);
  });
});
