const prodctrl = require("./controllers/ProductController");
const { RichEmbed } = require('discord.js');


module.exports.showAll = async (msg) => {
    const prods = await prodctrl.readAll();

    if (prods) {
        const tam = prods.length;
        prods.map((item, index, array) => {
            const embed = new RichEmbed()
                .setColor(0x0000ff)
                .addField("Titulo", item.title, true)
                .addField("Preço", item.price, true)
                .addField("Descrição", item.description, true)
                .addField("Data", item.createdAt, true)
                .setFooter(`Item: ${index + 1}/${tam}`);

            msg.channel.send(embed);
        });
    }
    else
        await msg.channel.send("(DB:Mongo - Collection:Product):\n 0 produtos no banco de dados.");
}

module.exports.create = async (msg, product) => {
    const prod = await prodctrl.create(product);

    if (prod) {
        const embed = new RichEmbed()
            .setColor(0xff0000)
            .addField("Titulo", prod.title, true)
            .addField("Preço", prod.price, true)
            .addField("Descrição", prod.description, true)
            .addField("Data", prod.createdAt, true)
            .setFooter(`Produto criado!!!`);

        msg.channel.send(embed);
    }
    else
        await msg.channel.send("(DB:Mongo - Collection:Product):\n Ops! o produto não pode ser criado.");
}