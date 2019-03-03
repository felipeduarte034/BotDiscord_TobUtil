const emoji = require("./emoji.json");
const box = require("./Embed.js");

module.exports.run = async (msg) => {
    //if (!msg.member.roles.find(r => r.name === 'ADM' || r.name === 'DEV')) return msg.channel.send("Requer cargo: ADM ou DEV");
    //if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send("Requer permissão: Administrador");

    //let b = box.createEmbed(0x00ff00, "Title", "Descrição...", "Footer", msg.author.username);
    //let resp = await msg.channel.send(b);

    //let d = new Date();
    let counter = 10;
    let resp = await msg.channel.send(`Time: ${counter}`);

    setInterval(() => {
        counter -= 5;
        if (counter < 0) counter = 10;
        resp.edit(`Time: ${counter}`);
    }, 5000);
}