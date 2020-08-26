export default {
  oidc: {
    clientId: '0oaoo0hyvJZxcwnwN4x6',
    issuer: 'https://dev-657961.okta.com/oauth2/default',
    // clientId: '0oaqhz782wUge7t1V0x6',
    // issuer: 'https://hub-one.oktapreview.com',
    redirectUri: 'http://localhost:8090/implicit/callback',
    logoutRedirectUri: 'http://localhost:8090',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
