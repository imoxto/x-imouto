import { Message, User, Guild, CommandInteraction } from 'discord.js';

export const PingStr = () => 'Pong!';

export const ServerStr = (guild: Guild) =>
	`Server name: ${guild.name}\nTotal members: ${guild.memberCount}\n Creation Date: ${guild.createdAt}`;

export const UserStr = (user: User) => [
	`Your tag: ${user.tag}\nYour id: ${user.id}\nYour username: ${user.username}`,
	user.avatar,
];

export const pingMessage = async (msg: Message) => await msg.reply(PingStr());

export const serverMessage = async (msg: Message) => await msg.reply(ServerStr(msg.guild as Guild));

export const userMessage = async (msg: Message) => {
	const [st1, st2] = UserStr(msg.author);
	await msg.reply(st1 as string);
	await msg.reply(st2 as string);
};

export const pingInteraction = async (int: CommandInteraction) =>
	await int.reply({ ephemeral: true, content: PingStr() });

export const serverInteraction = async (int: CommandInteraction) =>
	await int.reply(ServerStr(int.guild as Guild));

export const userInteraction = async (int: CommandInteraction) => {
	const [st1, st2] = UserStr(int.user);
	await int.reply({ ephemeral: true, content: (st1 + `\n${st2}`) as string });
};
