const mineflayer = require("mineflayer");
const config = require("./config.json");
const log = (...args) => require("process").stdout.write((config.afkbot.logTime ? `<${new Date(Date.now()).toLocaleTimeString()}> ` : "") + args.join("") + "[0m\n");
const sleep = ms => new Promise(r => setTimeout(r, ms));

const bot = mineflayer.createBot({
    host: config.server.ip,
    port: config.server.port,
    username: config.account.username,
    version: "1.8.9",
    auth: "microsoft",
})

bot.once("login", () => log("Bot joined the server."))

// Any kind of world change
// Regardless of the world you are spawned in, this should move you back to island.
bot.on("spawn", async () => {
    // Goto Lobby
    bot.chat("/lobby");
    await sleep(2000);

    // Goto Skyblock
    bot.chat("/play sb");
    await sleep(2000);       

    // Goto Island
    bot.chat("/is");

});

bot.on("message", event => {
    let message = event.toString().trim();
    if (config.afkbot.logAllMessages) log(message);
});
