import {Client} from 'discord.js';
import {config} from 'dotenv'
import {} from './config.json'

config();
const client = new Client({intents:[129023]});


client.on('ready',()=>{
    console.log(`Logged in as ${client.user?.tag}! `);
    client.user?.setActivity('Sex with Hitler');
});

client.on('interactionCreate',async interaction =>{
    if(!interaction.isChatInputCommand())return;

    if(interaction.commandName==='ping'){
        await interaction.reply('pong!');
    }
})

client.login(process.env.DISCORD_TOKEN)