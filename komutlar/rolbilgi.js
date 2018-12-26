const { RichEmbed } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

exports.run = async(client, message, args) => {
    var aylar = {
      "01": "Ocak",
      "02": "�ubat",
      "03": "Mart",
      "04": "Nisan",
      "05": "May�s",
      "06": "Haziran",
      "07": "Temmuz",
      "08": "A�ustos",
      "09": "Eyl�l",
      "10": "Ekim",
      "11": "Kas�m",
      "12": "Aral�k"
    }
    var duration = moment.duration(client.uptime).format(" D [g�n] H [saat] m [dakika] s [saniye]")
    let rol = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.id === args[0]);
    if (!args[0]) {
        var embed = new RichEmbed()
          .setDescription(`Do�ru kullan�m: prefixin!rol-bilgi [@rol]`)
          .setColor(client.ayarlar.renk)
          .setTimestamp()
        var embed = new RichEmbed()
            .setColor(client.ayarlar.renk)
            .addField(`Rol �smi`, `${args[0]}`, true)
            .addField('Role Sahip Kullan�c�(lar)', rol.members.size, true)
            .addField('Rol�n Rengi', rol.hexColor, true)
            .addField('Olu�turulma Tarihi', `${moment(rol.createdAt).format('DD')} ${aylar[moment(rol.createdAt).format('MM')]} ${moment(rol.createdAt).format('YYYY HH:mm:ss')}`, true)
            .addField('ID', rol.id, true);
    return message.channel.send({
        embed: embed
    });
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rolbilgi", "rolara", "rol-ara", "role-info", "roleinfo", "search-role", "searchrole"],
  permLevel: 0,
}

exports.help = {
  name: 'rol-bilgi',
  description: 'Etiketledi�iniz rol hakk�nda bilgi al�rs�n�z.',
  usage: 'rol-bilgi [rol]'
};