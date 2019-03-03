const { RichEmbed } = require('discord.js');

module.exports.run = async (msg, reported_user, reason) => {
    let rUser;
    try {
        rUser = msg.guild.member(msg.mentions.users.first() || msg.guild.member.get(reported_user));
    } catch (error) {
        //console.log(error);
    }
    if (!rUser) return msg.channel.send("Usuário não encontrado!");

    const embed = new RichEmbed()
        .setColor(0xffff00)
        .setTitle("Report")
        .addField("Channel", msg.channel)
        .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported By", `${msg.author} with ID: ${msg.author.id}`)
        .addField("Time", msg.createdAt)
        .addField("Reason", reason);

    let channelReports = msg.guild.channels.find(`name`, "reports");
    if (!channelReports) return msg.channel.send("Canal 'reports' não encontrado!");

    msg.delete().catch(O_o => { });
    await channelReports.send(embed);
}