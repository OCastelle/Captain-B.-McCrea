const Discord = require("discord.js");

const TOKEN = "Mzg0NTEzNjg4Mjk3NTM3NTM2.DPz6Rg.9XO3WJGvcs32Ra-y9mKNahF8XxU";

var bot = new Discord.Client();

bot.on("ready", function() {
  console.log("Ready");
bot.user.setPresence({ game: { name: "!+=Music=+!" , type: 0 } });
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (message.content == "XD!"){
      message.channel.sendMessage("LOL!");
  }
});

bot.login(TOKEN);
