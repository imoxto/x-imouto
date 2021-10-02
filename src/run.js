require('dotenv').config();
const discord= require('discord.js');
const client= new discord.Client({ 
	intents: [
		discord.Intents.FLAGS.GUILDS,
		discord.Intents.FLAGS.GUILD_MESSAGES
	]
});

client.once('ready', () => {
    console.log(`[BOT] I'm ready! Logged in as ${client.user.tag}`);
    console.log(`Creation Date: ${client.user.createdAt}`);
})

client.on('messageCreate',  message => {
	if (message.content==='ping') {
		message.reply({
			content:'pong'
		});
	}
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === 'hello') {
		await interaction.reply(`Hi ${interaction.user.tag}`);
	}
});

client.login(process.env.BOT_TOKEN);