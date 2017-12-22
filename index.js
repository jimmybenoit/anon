const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");

let prefix = config.prefix;
let admin = config.adminids;

bot.on("ready", () => {
    console.log("JimboBot Online!");
  });



  bot.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
  
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


        if(command === 'ping') {
            message.channel.send("Pong");
        } else


        if(command === 'faggot') {
            message.delete();
            message.channel.send("", {
    file: "https://cdn.discordapp.com/attachments/379078172035121153/380943553091600384/939bbc22da95d7bf98e0951b0d60077c4f382590da39a3ee5e6b4b0d3255bfef95601890afd80709da39a3ee5e6b4b0d3255.png"
});
        } else
            
            
            
        if(command === 'nerdle') {
            message.delete();
            message.channel.send("", {
     file: "https://cdn.discordapp.com/attachments/377637188721967114/387471227737997324/snapper2.png"
            });
        } else



        if(command === 'imagination') {
            message.delete();
            message.channel.send("", {
    file: "https://cdn.discordapp.com/attachments/377637188721967114/387472062580654101/hqdefault.png"
});
        } else
            
            
      
        if(command === 'credit') {
            message.channel.send("JimboBot made by jimmybenoit#6651")
        } else



        if(command === 'say') {
          message.delete();
          if (message.author.id !== admin) {
            message.channel.send(message.author + ', You do not have permission for this!')
        return;
          };
          let saymsg = message.content.split(" ").slice(1).join(" ");
          message.channel.send(saymsg)
        } else



        if(command === 'setprefix') {
           message.delete();
           if (message.author.id !== admin) {
              message.channel.send(message.author + ', You do not have permission for this!')
          return;
           };
            let newPrefix = message.content.split(" ").slice(1, 2)[0];
            config.prefix = newPrefix;
            fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
            message.channel.send("Prefix set to " + newPrefix)
        } else



        if(command === 'embed') {
          message.delete();
          if (message.author.id !== admin) {
            message.channel.send(message.author + ', You do not have permission for this!')
        return;
          };
          let [title1, description1] = args;
          let thisistitle = title1;
          let thisisdesc = args.slice(1).join(" ");
          message.channel.send({embed: {
            color: 3447003,
            title: thisistitle,
            description: thisisdesc,
          }});
        } else
    


        if(command === 'help') {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: bot.user.username,
                  icon_url: bot.user.avatarURL
                },
                title: "**Help Menu**",
                description: "Tells you info on the commands",
                url: "https://discord.gg/Tc5JBEv",
                fields: [{
                    name: config.prefix + "help",
                    value: "Shows this menu"
                  },
                  {
                    name: config.prefix + "ping",
                    value: "Pong"
                  },
                  {
                    name: config.prefix + "setprefix",
                    value: "Changes the prefix"
                  },
                  {
                    name: config.prefix + "embed",
                    value: "Makes an embeded message of your choice"
                  },
                  {
                    name: config.prefix + "nerdle",
                    value: "NERDLE",
                  },
                  {
                    name: config.prefix + "faggot",
                    value: "Minecraft Fag"
                  },
                  {
                    name: config.prefix + "imagination",
                    value: "IMAGINATION"
                  },
                  {
                    name: config.prefix + "credit",
                    value: "Gives credit"
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: bot.user.avatarURL,
                  text: "© JimboBot",
                }
              }
            });
        }
});  

bot.login(process.env.BOT_TOKEN)
