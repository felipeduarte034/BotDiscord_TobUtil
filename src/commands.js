const config = require("./config.json");
const poll = require("./poll.js");
const timer = require("./timer.js");
const report = require("./report.js");
const roles = require("./roles.js");
const dbmongo = require("./dbmongo.js");
const prodmanager = require("./product-manager.js");

const prefix = config.prefix;

module.exports.verify = async (msg) => {
    let args = msg.content.split(" ");
    let cmd = args.shift();

    if (cmd === "!poll" || cmd === "!p") {
        poll.run(msg);
    } else if (cmd === "!timer" || cmd === "!t") {
        timer.run(msg);
    } else if (cmd === `${prefix}report` || cmd === `${prefix}r`) {
        const rUser = args[0];
        const parts = msg.content.split(" +m ", 2);
        const reason = parts[1];
        report.run(msg, rUser, reason);
    } else if (cmd === `${prefix}role` || cmd === `${prefix}rl`) {
        const user = args[0];
        const action = args[1];
        let role;
        if (action === "+") {
            const parts = msg.content.split(" + ", 2);
            role = parts[1];
            roles.add(msg, user, role);
        }
        else if (action === "-") {
            const parts = msg.content.split(" - ", 2);
            role = parts[1];
            roles.remove(msg, user, role);
        }
        else
            await msg.channel.send("!help");
    } else if (cmd === `${prefix}mongodb` || cmd === `${prefix}m`) {
        const who = args[0];
        const action = args[1];
        dbmongo.run(); //abrir conecxao com o banco de dados
        if (who === "p" || who === "product") {
            if (action === "ga" || action === "getall") {
                //dbmongo.run();
                prodmanager.showAll(msg);
            } else if (action === "c" || action === "create") {
                const prod_default = { title: "Titulo padão", description: "descriçao padrão...", price: "0.0" };
                prodmanager.create(msg, prod_default);
            } else
                await msg.channel.send("!help");
        } else if (who === "r" || who === "report") {
            //collection reports
        } else
            await msg.channel.send("!help");
    } else if (cmd === "!help" || cmd === "!h") {
        await msg.channel.send("*** HELP ***");
    } else {
        await msg.channel.send("!help");
    }
}