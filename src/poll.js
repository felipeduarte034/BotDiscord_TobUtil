const emoji = require("./emoji.json");
const { RichEmbed } = require('discord.js');
const box = require("./Embed");

module.exports.run = async (msg) => {
    if (!msg.member.roles.find(r => r.name === 'ADM' || r.name === 'DEV')) return msg.channel.send("Requer cargo: ADM ou DEV");
    if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send("Requer permissão: Administrador");

    /*
    const embed = new RichEmbed()
        .setColor(0xff0000)
        .setFooter("React to vote.")
        .setDescription("Descrição...")
        .setTitle(`Poll created by ${msg.author.username}`);
    let resp = await msg.channel.send(embed);
    await resp.react(emoji.hand_pos);
    await resp.react(emoji.hand_neg);
    msg.delete({ timeout: 10000 });
    */

    let b = box.createEmbed(0x00ff00, "Title", "Descrição...", "Footer", msg.author.username);
    let resp = await msg.channel.send(b);
    await resp.react(emoji.hand_pos);
    await resp.react(emoji.hand_neg);
    await msg.channel.send("...");
    // Create a reaction collector
    const filter = (reaction) => reaction.emoji.name === emoji.hand_pos || reaction.emoji.name === emoji.hand_neg;
    const collector = resp.createReactionCollector(filter, { time: 5000 });
    collector.on('collect', r => {
        console.log(`Collected ${r.emoji.name}`);
    });
    collector.on('end', collected => {
        console.log(`Collected ${collected.size} items`);
        let var1 = 0;
        let var2 = 0;
        if (collected.get(emoji.hand_pos)) {
            var1 = collected.get(emoji.hand_pos).count - 1;
        }
        if (collected.get(emoji.hand_neg)) {
            var2 = collected.get(emoji.hand_neg).count - 1;
        }
        msg.channel.send(`***Finalizado!*** \n ${emoji.hand_pos}:  **${var1}** \n\n ${emoji.hand_neg}:  **${var2}**`);
    });
}