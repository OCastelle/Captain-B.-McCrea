const Discord = require("discord.js");

const client = new Discord.Client();

var bot = new Discord.Client();

bot.on("ready", function() {
  console.log("Ready");
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (message.content == "Hi!"){
      message.channel.sendMessage("Greetings!");
  }
});

client.login(process.env.BOT_TOKEN);
