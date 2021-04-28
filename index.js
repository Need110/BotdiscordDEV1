const Discord = require('discord.js');

const { prefix, token } = require('./config.json')

const client = new Discord.Client();

client.once('ready', () => {
console.log('Ready!')

});



client.on('message', (message) => {
    if (message.content === `${prefix}ping`) {
        message.channel.send('Pong');
    }
else if (message.content === `${prefix}server`){
message.channel.send(`Nom du serveur : ${message.guild.name}\n Nombre d'utilisateur : ${message.guild.memberCount}`);


}

else if (message.content === `${prefix}avatar`) {
if (!message.mentions.users.size) {
return message.channel.send(`Est-ce bien cette avatar XD?? ${message.author.displayAvatarURL({ format: 'png' })}`)

}

}

if (message.content === `${prefix}author`) {
    message.channel.send('Ce bot a été DEV par 𝕹̮𝖊̯𝖊̮𝖉͜必要');
    
}


if (message.content === `${prefix}add`) {
    message.channel.send('Voila le lien de mon invitation pour me mettre sur votre serv : https://discord.com/oauth2/authorize?client_id=836607325753311325&scope=bot&permissions=4245683455');
    
}

if (message.content === `${prefix}help`) {
    message.channel.send('Le Bot est en DEV ! \n Les commandes sont : \n author : donne le nom du DEV \n avatar : donne l avatar de la personne executant la commande \n server : donne les stats du serveur \n ping : Répond avec Pong \n add : envoie le lien de l invitation pour m ajouter sur votre serv');
    
}



});

client.login(token);