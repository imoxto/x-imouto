import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import dotenv from 'dotenv';

dotenv.config();

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
	new SlashCommandBuilder().setName('hello').setDescription('Greets a user'),
].map((command) => command.toJSON());

const { clientId, guildId, BOT_TOKEN } = process.env as {
	clientId: string;
	guildId: string;
	BOT_TOKEN: string;
};

const rest = new REST({ version: '9' }).setToken(BOT_TOKEN);

(async () => {
	try {
		if (process.env.NODE_ENV === 'production') {
			await rest.put(Routes.applicationCommands(clientId), { body: commands });
		} else {
			await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });
		}
		console.log('Successfully registered application commands.');
	} catch (error) {
		console.error(error);
	}
})();
