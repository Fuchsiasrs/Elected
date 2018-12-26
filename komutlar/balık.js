const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Balık Tuttun Balığı Çekiyorsun..').then(message => {
   var espriler = ['Sazan Tuttun! :fishing_pole_and_fish:' ,'Köpek Balığı Tuttun İyi Para Eder Sat Sat :D' ,'Uskumru Tuttun! :fishing_pole_and_fish:' ,'Mezgit Tuttun! Havyarıda Var hee ;) :fishing_pole_and_fish:' ,'Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?' ,'Hamsi Tuttun! :fishing_pole_and_fish:' ,'Levrek Tuttun! :fishing_pole_and_fish:' ,'Hiçbirşey Tutamadın Maalesef! :wastebasket:' ,'Alabalık Tuttun! :fishing_pole_and_fish:' ,'Maalesef Balık Oltadan Kaçtı! :wastebasket:' ,'İstavrit Tuttun! :fishing_pole_and_fish:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['balık', 'bt', 'tb', 'fish'],
  permLevel: 0
};

exports.help = {
  name: 'balıktut',
  description: 'Balık Tutarsın.',
  usage: 'balıktut'
};