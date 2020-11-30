export default {
  github: 'https://github.com/BaseQL',     // link of the project repo
  siteGithub: 'https://github.com/BaseQL/baseql-docs', // link of the docs repo path
  titleSuffix: ' – BaseQL',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,                              // <- customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: 'Copyright 2020 © BaseQL',
  footerEditOnGitHubLink: true,                    // will link to the docs repo
  logo: (
    <React.Fragment>
      <span className="mr-2 font-extrabold hidden md:inline text-indigo-500">BaseQL</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Documentation
      </span>
    </React.Fragment>
  ),
  head: (
    <React.Fragment>
      <meta name="msapplication-TileColor" content="#4c51bf" />
      <meta name="theme-color" content="#4c51bf" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="BaseQL: GraphQL for Airtable" />
      <meta name="og:description" content="BaseQL: GraphQL for Airtable" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BaseQL" />
      <meta name="og:title" content="BaseQL: GraphQL for Airtable" />
      <meta name="apple-mobile-web-app-title" content="BaseQL" />
    </React.Fragment>
  )
}
