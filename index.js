const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); 
{
  "name": "24-voice-account",
  "version": "0.1.0",
  "description": "24-voice-account",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "discord.js-selfbot-v13": "^3.1.4",
    "@discordjs/voice": "^0.17.0",
    "express": "^4.18.3"
  },
  "engines": {
    "node": "16.x"
  }
}
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
//ثبات فويس 24 ساعه v13 بدون اي مشاكل
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
    
    setInterval( async () => {
    client.channels.fetch(process.env.channel) 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: process.env.guild, 
       selfMute: true,
       selfDeaf: true,
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
}); 
//https://ra3dstudio.com CopyRight Codes
client.login(process.env.token);
