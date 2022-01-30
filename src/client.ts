import { Client, Intents } from 'discord.js';

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once('ready', () => {
	console.log(`[BOT] I'm logged in as ${client.user ? client.user.tag : 'xImouto'}`);
	console.log(`Creation Date: ${client.user ? client.user.createdAt : 'unknown'}`);
});

client.on('messageCreate', (message) => {
	if (message.content === 'ping') {
		message.reply('pong!');
	}
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply({ ephemeral: true, content: 'Pong!' });
	} else if (commandName === 'server' && interaction.guild) {
		await interaction.reply(
			`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
		);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === 'hello') {
		await interaction.reply(`Hi ${interaction.user.tag}`);
	}
});

export default client;
