# Hypixel AFK Bot

This bot logs into Hypixel Skyblock and stays on your island.
Give the Bot a pet to speed up minion production.

## Features
- Automatically reconnects and returns to your Skyblock island in case of disconnection or restarts.
- Logs into Hypixel using **Microsoft authentication**.

## Prerequisites
- Node.js installed on your system.
- A valid **Minecraft** account with its /sethome set in an AFK Pool.
- A config file with your credentials (see below for details).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aldoraz/hypixel-afk-bot.git
   cd hypixel-afk-bot
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up your `config.json` file:

   - Copy the example configuration file:
     ```bash
     cp config.example.json config.json
     ```

   - Edit `config.json` with your Minecraft credentials and server details. Here’s an example of what it should look like:

   ```json
   {
       "server": {
           "ip": "mc.hypixel.net",
           "port": 25565
       },
       "account": {
           "username": "your_minecraft_username"
       },
       "afkbot": {
           "logTime": true,
           "logAllMessages": false
       }
   }
   ```

## First-Time Microsoft Authentication

When running the bot for the first time with **Microsoft authentication**, you will be prompted to sign in via your browser. Follow these steps:

1. Run the bot:
   ```bash
   node .
   ```

2. You will see a message like:
   ```
   [msa] First time signing in. Please authenticate now:
   To sign in, use a web browser to open the page https://www.microsoft.com/link and use the code XXXXXXXX.
   ```

3. Open the provided URL in your browser (e.g., https://www.microsoft.com/link) and enter the code shown in the terminal.

4. After successful authentication, the bot will log into Hypixel and start the AFK routine.

## Usage

After setup and authentication, the bot will:
1. Log into Hypixel using `/lobby`, `/play sb`, and `/is`.
2. Reconnect to your island if the bot gets disconnected or moved to Limbo.
3. Stay AFK on your island.

## License

This project is licensed under the MIT License.
