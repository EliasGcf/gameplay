export const discordAuthConfig = {
  redirectURL: process.env.DISCORD_OAUTH_REDIRECT_URL,
  clientId: process.env.DISCORD_CLIENT_ID,
  responseType: 'token',
  scope: 'identify email connections guilds',
  cdnURL: 'https://cdn.discordapp.com',
} as const;
