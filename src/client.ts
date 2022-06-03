import addCommands from './commands/handler';
import { Client, Intents } from 'discord.js';

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once('ready', () => {
	console.log(`[BOT] I'm logged in as ${client.user ? client.user.tag : 'xImouto'}`);
	console.log(`Creation Date: ${client.user ? client.user.createdAt : 'unknown'}`);
});

addCommands(client);

export default client;
