const { RichEmbed } = require('discord.js');

module.exports.createEmbed = (color,title,desc,footer,author) => {
    return new RichEmbed()
    .setColor(color)
    .setTitle(title)
    .setDescription(desc)
    .setFooter(footer)
    .setAuthor(author);
}