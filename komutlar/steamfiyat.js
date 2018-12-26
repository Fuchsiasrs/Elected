 const Discord = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();

exports.run = (client, message, args) => {
    let game = args[0]
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) return message.reply('L�tfen Steamde Olan Bir Oyunun Ad�n� Yaz�n. �rnek: `!steamfiyat PUBG`')
    provider.search(game).then(result => {
    provider.detail(result[0].id, "turkey", "tr").then(results => {
        console.log(results)
    const embed = new Discord.RichEmbed()
    .setAuthor('Steam Store', steampng)
  .setColor("#36393F")
    .setTitle(result[0].name)
    .addField(`Oyunun ID's�`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('T�rleri', results.genres)
    .addField('Fiyati', `Normal Fiyat **${results.priceData.initialPrice}** TL
�ndirimli Fiyat **${results.priceData.finalPrice}** TL`, true)
    .addField('Platformlar', results.otherData.platforms, true)
    .addField('Metacritic Puan�', results.otherData.metacriticScore, true)
    .addField('Etiketleri', results.otherData.features, true)
    .addField('Geli�tiricileri', results.otherData.developer, true)
    .addField('Yay�mc�lar�', results.otherData.publisher)
  .setColor("#36393F")
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.reply('Hata Olustu Yada `' + game + '` Adl� Oyun Bulunamad�')
    })
})
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'steamfiyat',
  description: 'Arada��n�z oyunun steamdaki fiyat�na bakman�z� sa�lar',
  usage: '!steamfiyat PUBG'
};