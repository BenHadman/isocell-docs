/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
    title: "Customer Portal", // Title for your website.
    tagline: "Manuals, Guides and Technical Support",
    // For github.io type URLs, you would set the url and baseUrl like:
    url: "https://generator-create-docusaurus.netlify.com",
    baseUrl: "/",
    editUrl: "https://github.com/BenHadman/generator-create-docusaurus/edit/master",
  
    // Used for publishing and more
    projectName: "generator-create-docusaurus",
    organizationName: "BenHadman",
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'
  
    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
      { doc: "isocell-manual", label: "Documentation" },
    //  {blog: true, label: 'Guides'},
      { page: 'support', label: 'Support' },
      { page: 'store', label: 'Store' },
      { search: true }
    ],
  
    algolia: {
      apiKey: 'my-api-key',
      indexName: 'my-index-name',
      algoliaOptions: {}, // Optional, if provided by Algolia
      placeholder: 'search site'
    },
  
    /* path to images for header/footer */
    headerIcon: "img/logo.png",
    footerIcon: "img/logo.png",
    favicon: "img/favicon/favicon.ico",
  
    /* Colors for website */
    colors: {
      primaryColor: "rgba(31, 50, 56, 0.9) ",
      secondaryColor: "#61dafb"
    },
  
    /*added custom font here */
  
    stylesheets: [
      "https://fonts.googleapis.com/css?family=Poppins&display=swap",
      "/css/code-block-buttons.css",
      "https://s3.amazonaws.com/assets.freshdesk.com/widget/freshwidget.css"
    ],
  
    /* Custom fonts for website */
    
    fonts: {
      myFont: [
        "Poppins",
        "Verdana",
        "sans-serif"
      ],
      myOtherFont: [
        "Poppins",
        "Verdana",
        "sans-serif"
      ]
    },
    
  
    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} iotaSciences.`,
  
    highlight: {
      // Highlight.js theme to use for syntax highlighting in code blocks.
      theme: "default"
    },
  
    // Add custom scripts here that would be placed in <script> tags.
    scripts: ["https://buttons.github.io/buttons.js","https://s3.amazonaws.com/assets.freshdesk.com/widget/freshwidget.js"],
  
    // On page navigation for the current documentation page.
    onPageNav: "separate",
    // No .html extensions for paths.
    cleanUrl: true,
  
    // Open Graph and Twitter card images.
    ogImage: "img/logo-og.png",
    twitterImage: "img/logo-og.png",
  
    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    repoUrl: "https://github.com/BenHadman/generator-create-docusaurus",
  
    scrollToTop: true,
    enableUpdateTime: true,
    enableUpdateBy: true,
    docsSideNavCollapsible: true
  };
  
  
  
  module.exports = siteConfig;
  