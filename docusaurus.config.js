// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gilt Edged Systems',
  tagline: 'Agent-Based Monetary System Models',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://giltedged-systems.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'danodriscoll', // Usually your GitHub org/user name.
  projectName: 'giltedged-systems', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarCollapsed: false,
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false, // Disable the blog plugin
        // blog: {
        //   showReadingTime: false,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        //   blogTitle: 'GEM Blog',
        //   blogDescription: 'GEM Model Output',
        //   postsPerPage: 'ALL',
        //   blogSidebarCount: 5,
        //   blogSidebarTitle: 'Latest Model Outputs',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-9VW0F9HBP8',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      image: 'img/development_icon.png',
      navbar: {
        title: 'GiltEdged Systems',
        logo: {
          alt: 'GiltEdged Systems',
          src: 'img/development_icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'modelSidebar',
            position: 'left',
            label: 'GEM Overview & Models',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {to: '/blog/tags', label: 'Tags', position: 'left'},
          {to: '/reading', label: 'Reading', position: 'right'},
          {
            href: 'https://danodriscoll.github.io/',
            label: 'Project Outputs',
            position: 'right',            
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} GiltEdged.systems`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        docs: {
          sidebar: {
            hideable: true,
          },
        },
      },
    }),
};

export default config;
