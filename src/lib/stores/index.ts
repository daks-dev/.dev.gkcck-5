/*
import { readable, writable } from 'svelte/store';

export const admindata = (() => {
  const { subscribe, update, set } = writable<Record<string, unknown[]>>({});
  return {
    subscribe,
    set,
    clear: () => update(() => ({}))
  };
})();

export const toastMessage = (() => {
  const { subscribe, update, set } = writable('');

  return {
    subscribe,
    set,
    once: (message: string, local?: string) =>
      (local && `toast-${local}` in localStorage) ||
      update(() => {
        local && localStorage.setItem(`toast-${local}`, 'done');
        return message.trim().replace(/\n/g, '').replace(/\s{2}/g, ' ');
      }),
    clear: () => update(() => '')
  };
})();

export const time = readable(0, function start(set) {
  const date = Date.now();
  const interval = setInterval(() => {
    set(Date.now() - date);
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

export const theme = (() => {
  const { subscribe, update } = writable(true);

  return {
    subscribe,
    change: () =>
      update((value) => {
        const htmlTag = document.getElementsByTagName('html').item(0);
        if (htmlTag) {
          htmlTag.className = value ? 'light' : 'dark';
        }
        return !value;
      })
  };
})();

export const route = (() => {
  const { subscribe, update } = writable(0);

  return {
    subscribe,
    change: () => update((value) => (value < 2 ? ++value : 0))
  };
})();
*/
export {};
