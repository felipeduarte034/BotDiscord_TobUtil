//OFF
/*
const emoji = require("./emoji.json");

module.exports.run = async (msg) => {
    let resp = await msg.channel.send("Vote!");
    await resp.react("👍");
    await resp.react("👎");
    const reactions = await resp.awaitReactions(r => {
        r.emoji.name === "👍" || r.emoji.name === "👎",
            { time: 5000 }
    }).then((value) => {
        console.log(value);
        console.log(value.size);
    }).catch(console.error);
    console.log(reactions);
}
module.exports.run2 = async (bot, msg, args) => {
    let resp = await msg.channel.send("Vote!");
    await resp.react("👍");
    await resp.react("👎");

    // Create a reaction collector
    const filter = (r, user) => r.emoji.name === "👍" || r.emoji.name === "👎"
    const recs = await msg.awaitReactions(filter, { time: 15000 })
        .then(collected => {
            console.log(`Collected ${collected.size} reactions`);
        })
        .catch(console.error);
    console.log("recs: ");
    console.log(recs);
}

module.exports.help = {
    name: "vote with reaction"
}
*/