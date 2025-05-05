import { siteConfig } from './lib/site-config'

export default siteConfig({
  // your site's root Notion page ID (required)
  rootNotionPageId: '1db6e7d4054180c381c1f5e2c2108835',

  // optional: restrict pages to a specific workspace
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Customer Support Hub',  // your site name
  domain: 'multiversenvsupporthub.xyz',  // your custom domain
  author: 'Duong',  // your name

  // open graph metadata (optional)
  description: 'Support hub for the Multiverse Network',  // description for sharing

  // optional social media links
  twitter: '',  // add your twitter handle if applicable
  github: 'felixngxn',  // your GitHub username
  linkedin: '',  // add your LinkedIn if applicable

  // default page icon and cover images (optional)
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether to enable preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether redis caching is enabled (optional)
  isRedisEnabled: false,

  // custom URL overrides (optional)
  pageUrlOverrides: null,

  // navigation style (default or custom)
  navigationStyle: 'default'
})
