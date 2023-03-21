const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    const username = "username";
    const password = "password";

    await mongoose.connect(
      `mongodb+srv://${username}:${password}@cluster0.1hg5ugx.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("Conectado ao banco de dados!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
