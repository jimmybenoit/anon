const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");

const admin = ["279509151330074683", "256704545504231424"];
var prefix = '>';

bot.on("ready", () => {
    console.log("Online");
  });

  bot.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

        if(command === 'say') {
          if (message.author.id !== admin) return;
          message.delete();
          message.channel.send(args)
        }
  });
bot.login(process.env.BOT_TOKEN)
