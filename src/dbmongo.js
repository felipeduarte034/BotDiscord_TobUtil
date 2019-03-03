const mongoose = require("mongoose");
//const requiredir = require("require-dir");
const config = require("./config.json");

module.exports.run = async () => {
    //const urllocal = "mongodb://localhost:27017/my_database";
    //const urlserver = "mongodb+srv://lipe_013:88dxxf32@cluster0-x8yue.mongodb.net/BotTobUtil";
    mongoose.connect(config.url_conn, { useNewUrlParser: true });
    //requiredir("./models");

    //const prod = mongoose.model("Product");
    //prod.create({ title: "Super Bot", description: "Bot pra jogos de RPG de Mesa...", price: "15.95" });
}