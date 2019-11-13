module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
  pathPrefix: '/goldlinesask',
  siteMetadata: {
    title: 'Goldline Negotiations',
    author: 'Design by Hunter Chang',
    description:
      'Software Engineering Negotiations consulting website built off Gatsby.js Starter based on Stellar by HTML5 UP',
  },
}
