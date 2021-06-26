import axios from 'axios';

const discordApi = axios.create({
  baseURL: 'https://discord.com/api',
});

export { discordApi };
