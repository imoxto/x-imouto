import { TEXT_COMMAND_START } from '../constants';
import { Client, Message } from 'discord.js';
import { parseArguments } from '../utils';
import {
	pingInteraction,
	pingMessage,
	serverInteraction,
	serverMessage,
	userInteraction,
	userMessage,
} from './commands';

export default function addCommands(client: Client) {
	// text commands
	client.on('messageCreate', async (message: Message) => {
		if (message.content.startsWith(TEXT_COMMAND_START)) {
			const arg = parseArguments(message.content);
			switch (arg[0]) {
				case 'ping':
					await pingMessage(message);
					break;
				case 'server':
					await serverMessage(message);
					break;
				case 'user':
					await userMessage(message);
					break;
				default:
			}
		}
	});

	// slash commands
	client.on('interactionCreate', async (interaction) => {
		if (!interaction.isCommand()) return;

		const { commandName } = interaction;

		if (commandName === 'ping') {
			await pingInteraction(interaction);
		} else if (commandName === 'server' && interaction.guild) {
			await serverInteraction(interaction);
		} else if (commandName === 'user') {
			await userInteraction(interaction);
		}
	});
}
