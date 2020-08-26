export default {
  oidc: {
    clientId: '0oarauxguuBF40l2K4x6',
    issuer: 'https://dev-657961.okta.com/oauth2/default',
    redirectUri: 'http://localhost:8081/mfa/callback',
    logoutRedirectUri: 'http://localhost:8080',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
