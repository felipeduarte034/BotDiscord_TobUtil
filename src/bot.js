const Discord = require("discord.js");
const client = new Discord.Client();const config = require("./config.json");
const vote = require("./vote-reaction.js");
const cmd = require("./commands.js");

////Link add bot
//// discordapp.com/oauth2/authorize?=&client_id=550396218493108246&scope=bot&permissions=8
//550396218493108246

//client.user.username

client.on("ready", () => {
    console.log(`--> ready: Bot iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
    client.user.setGame(`Guardião de: ${client.guilds.size} servidor/es.`);
});

client.on("guildCreate", (guild) => {
    console.log(`--> guildCreate: O bot entrou no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros`);
    client.user.setActivity(`Guardião de: ${client.guilds.size} servidor/es.`);
});

client.on("guildDelete", (guild) => {
    console.log(`--> guildDelete: O bot foi removido do servidor: ${guild.name} (id: ${guild.id}).`);
    client.user.setActivity(`Bye, vc perdeu minha proteção, ${client.guilds.size} servidores.`);
});

client.on("message", async msg => {
    if (msg.author.bot) return;
    if (msg.channel.type === "dm") return;
    const prefix = msg.content[0];
    if (prefix != config.prefix) return;
    
    //const line = msg.content.trim().toLowerCase(); //remove espaços e deixa todas as letras em minusculo
    cmd.verify(msg);
});

client.login(config.token);