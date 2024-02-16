/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'FREEAI',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'big-AGI',
  },
  Meta: {
    Description: 'Launch big-AGI to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'FREEAI | Precision AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '@enricoros',
  },
  URIs: {
    Home: 'https://freeai.luvnft.com',
    // App: 'https://get.big-agi.com',
    CardImage: 'https://freeai.luvnft.com/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/enricoros/big-agi',
    OpenProject: 'https://github.com/users/enricoros/projects/4',
    SupportInvite: 'https://discord.com/channels/910051231437819914/shop',
    // Twitter: 'https://www.twitter.com/luvnft',
    PrivacyPolicy: 'https://big-agi.com/privacy',
  },
};