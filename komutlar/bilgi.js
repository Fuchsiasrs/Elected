const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Bot sürümü:V1.0' + ayarlar.surum + ' Yapımcı **Fuchsia** \n\n_**Beni sunucuna davet etmek istermisin?**_\n\nhttps://discordapp.com/oauth2/authorize?client_id=489306954217553930&scope=bot&permissions=8 \n\n_**Linkler**_\n\n**Electeds** sunucusunun davet linki: https://discord.gg/GAcmdxs \nBotun davet linki: https://discordapp.com/oauth2/authorize?client_id=489306954217553930&scope=bot&permissions=8 \n\n');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
