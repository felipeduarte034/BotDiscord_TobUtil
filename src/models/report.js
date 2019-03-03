const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
    title: { type: String, required: true, default: "title here" },
    description: { type: String, required: true, default: "descrição..." },
    createdAt: { type: Date, default: Date.now },
    price: { type: String, require: true, default: "0" }
});

mongoose.model("Report", ReportSchema);