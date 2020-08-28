export default {
  oidc: {
    //TODO clientId: '',
    //TODO issuer: '',
    redirectUri: 'http://localhost:8081/mfa/callback',
    logoutRedirectUri: 'http://localhost:8080',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
