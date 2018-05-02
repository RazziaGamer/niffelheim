const Discord = require('discord.js');
const client = ned Discord.Client();

client.on('ready', message => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
});

client.login(pocess.env.BOT_TOKEN);
