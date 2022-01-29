import dotenv from 'dotenv';

import client from './client';

dotenv.config();

client.login(process.env.BOT_TOKEN);
