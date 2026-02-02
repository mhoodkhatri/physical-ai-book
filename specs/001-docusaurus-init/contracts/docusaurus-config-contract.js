/**
 * Physical AI & Humanoid Robotics Textbook
 * Docusaurus Configuration Contract
 *
 * This file defines the expected configuration per spec requirements FR-002, FR-003.
 * The actual docusaurus.config.js should include these settings.
 */

/** @type {import('@docusaurus/types').Config} */
const config = {
  // FR-002: Title and organization
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A comprehensive textbook for modern robotics education',

  // FR-003: GitHub Pages deployment settings
  url: 'https://hood.github.io',
  baseUrl: '/physical-ai-book/',
  organizationName: 'hood',
  projectName: 'physical-ai-book',

  // Recommended settings
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Internationalization (foundation for Urdu)
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Docs at root
          editUrl: 'https://github.com/hood/physical-ai-book/tree/main/',
        },
        blog: false, // Disabled per textbook focus
        theme: {
          customCss: './src/css/custom.css', // RTL variables here
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Physical AI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Textbook',
          },
          {
            href: 'https://github.com/hood/physical-ai-book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Textbook',
            items: [
              { label: 'Introduction', to: '/intro' },
              { label: 'Module 1: ROS 2', to: '/module-1-ros2' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'Hardware Setup', to: '/hardware' },
              { label: 'Assessments', to: '/appendix/assessments' },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} Panaversity. Built with Docusaurus.`,
      },
    }),
};

export default config;
