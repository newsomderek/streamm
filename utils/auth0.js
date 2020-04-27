import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  domain: 'streamm.auth0.com',
  clientId: 'yRFZEzyitPVT4s0FhwR7UW5gnlNDrtNM',
  clientSecret: 'IFlbJ62VjpZYCfgFMh-C9YDgDVc85LcwuUrz_wl6xMX9gD42oUBUuL_mc-59Z_w9',
  scope: 'openid profile',
  redirectUri: 'http://localhost:3000/api/callback',
  postLogoutRedirectUri: 'http://localhost:3000/',
  session: {
    cookieSecret: 'some-very-very-very-very-very-very-very-very-long-secret',
    cookieLifetime: 60 * 60 * 8
  }
});