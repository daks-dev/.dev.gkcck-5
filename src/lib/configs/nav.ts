import { Nav, type NavSite } from '@daks.dev/svelte.sdk';

const config: NavSite = {
  navbar: {
    links: [
      {
        href: '/about',
        label: 'О нас',
        links: [
          {
            href: '/permissions',
            base: '',
            label: 'Допуски'
          },
          {
            href: '/vacancies',
            label: 'Вакансии'
          }
        ]
      },
      {
        href: '/activity',
        label: 'Деятельность',
        links: [
          {
            href: '/technical-customer',
            label: 'Технический заказчик'
          },
          {
            href: '/construction-control',
            label: 'Строительный контроль'
          },
          {
            href: '/engineering',
            label: 'Проектирование'
          },
          {
            href: '/laboratory-support',
            label: 'Лабораторное сопровождение'
          }
        ]
      },
      {
        href: '/projects',
        label: 'Проекты'
      },
      {
        href: '/partners',
        label: 'Партнеры'
      },
      {
        href: '/news',
        label: 'Новости'
      },
      {
        href: '/contacts',
        label: 'Контакты'
      }
    ]
  },
  footer: {
    copylink: {
      href: '/',
      label: 'ГК&nbsp;ССК'
    },
    links: [
      {
        href: '/privacy',
        label: 'Конфиденциальность'
      },
      {
        href: '/admin',
        label: 'admin panel',
        icon: 'ic:outline-settings',
        disallow: true
      }
    ]
  }
};

export const map = [
  ...Nav.map(config.navbar.links),
  ...Nav.map(config.footer?.links ?? []),
  ...(config.allow ?? [])
].filter((el, idx, arr) => arr.indexOf(el) === idx);

export default config;
