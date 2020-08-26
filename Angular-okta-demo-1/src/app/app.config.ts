export default {
  oidc: {
    clientId: '0oaoi573ptBXcWJs74x6',
    issuer: 'https://dev-657961.okta.com/oauth2/default',
    redirectUri: 'http://localhost:8080/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
