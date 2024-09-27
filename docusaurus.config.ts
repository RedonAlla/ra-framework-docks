import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const path = require("path");

const config: Config = {
  title: 'RA Framework',
  tagline: 'RA Framework is a component library that enables developers to build universal design systems. It is built on top of React Native, allowing you to develop apps for Android, iOS, and the Web.',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://redonalla.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ra-framework-docks/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RedonAlla', // Usually your GitHub org/user name.
  projectName: 'ra-framework-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/RedonAlla/ra-framework-docks',
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            return `https://github.com/RedonAlla/ra-framework-docks/edit/main/docs/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/docs.css'),
            require.resolve('./src/css/icons.css'),

            
            require.resolve('./src/css/homepage/animate.css'),
            // require.resolve('./src/css/homepage/bootstrap.min.css'),
            require.resolve('./src/css/homepage/lineicons.css'),
            require.resolve('./src/css/homepage/default.css'),
            require.resolve('./src/css/homepage/style.css'),
          ]
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    '@docusaurus/theme-live-codeblock',
    [require.resolve('./customWebpack5Plugin.js'), {}],
    ["@gorhom/docusaurus-react-native-plugin",
      {
        alias: {
          "expo-font": path.resolve(
            __dirname,
            "node_modules/@expo/vector-icons"
          ),
          "expo-image": path.resolve(
            __dirname,
            "node_modules/expo-image"
          ),
          "expo-blur": path.resolve(
            __dirname,
            "node_modules/expo-blur"
          ),
          "@expo/vector-icons": path.resolve(
            __dirname,
            "node_modules/@expo/vector-icons"
          ),
          "ra-icons": path.resolve(
            __dirname,
            "node_modules/ra-icons"
          ),
          "ra-buttons": path.resolve(
            __dirname,
            "node_modules/ra-buttons"
          ),
          "ra-avatar": path.resolve(
            __dirname,
            "node_modules/ra-avatar"
          ),
          "ra-bottom-sheet": path.resolve(
            __dirname,
            "node_modules/ra-bottom-sheet"
          ),
          "react-native-reanimated": path.resolve(
            __dirname,
            "node_modules/react-native-reanimated"
          ),
          "react-native": path.resolve(
            __dirname,
            "node_modules/react-native"
          )
        },
      }
    ]
  ],

  //Add custom js.
  // clientModules: [
  //   require.resolve('./static/js/_clarity.js'),
  // ],
  clientModules: [
    './static/js/popper.min.js',  './static/js/wow.min.js','./static/js/modernizr-3.7.1.min.js',
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.svg',
	  announcementBar: {
      id: 'work_in_progress',
      content: 'work in progress...'
    },
    navbar: {
      title: 'RA Framework',
      logo: {
        alt: 'RA Framework Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'componentsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://redonalla.github.io/ra-framework-demo',
          label: 'Demo App',
          position: 'left',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/RedonAlla/ra-framework-docks',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Theme',
              to: '/docs/theme',
            },
            {
              label: 'Components',
              to: '/docs/getting-components',
            },
            {
              label: 'Utilities',
              to: '/docs/utilities',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Demo App',
              href: 'https://redonalla.github.io/ra-framework-demo/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/RedonAlla/ra-framework-docks',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RA Framework, Inc. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: [
        'bash'
      ],
      theme: prismThemes.nightOwlLight,
      darkTheme: prismThemes.nightOwl,
    },
    themes: ['@docusaurus/theme-live-codeblock'],
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
