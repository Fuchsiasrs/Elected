const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '**Bot yardım menüsü**\n\n\n' + '``e!öneri`` Bot hakkındaki önerilerinizi bot sahibine ulaştırır \n``-`` e!profil =Profilinizi gösterir      \nSağ ok emojisine tıklayarak ileri Sol ok emojisine tıklayarak önceki sayfaları görebilisiniz .',
              '**Eğlence komutları**\n\n\n' + '``-``  e!8ball =Sihirli 8ball sorularınızı cevaplar \n``-``  e!avatar =Avatarınızı veya etiketlediğiniz kişinin avatarını gösterir \n``-``  e!balık =Balık tutma oyunu(şansına güveney musun uşağum) \n``-`` e!yaz =Bot sizin mesajınızı yazar  \n``-``  e!çekiliş =Tüm sunucu arasında çekiliş yapar \n``-``  e!emoji =Mesajınızı emojiler ile yazar \n``-``  e!çay =Çay içersiniz \n``-``  e!mesajküçült =Mesajınızı küçültür \n``-``  e!nitro =Avatarınıza nitro efekti verir \n``-``  e!144p =Etiketlediğiniz kişinin avatarını pikselleştirir \n``-``  e!slots =Basit bir slot oyunu oynarsınız \n``-``  e!coolimg =Sizin için görsellerden havalı fotoğraf atar \n``-``  e!tkm =Bot ile Taş kağıt makas oynarsınız \n``-``  e!wasted =Avatarınıza wasted efekti verir \n``-``  e!yazıtura =Yazı tura oynarsınız',
              '**Moderatör komutları**\n\n\n' + '``-``  e!ban [kullanıcı] [sebep] =Etiketlediğiniz kişiyi banlar \n``-`` e!kick [kullanıcı] [sebep] =Etiketlediğiniz kişiyi sunucunuzdan atar \n``-`` e!kanalagönder <kanal adı> <mesaj> =Mesajınızı ismini yazdığınız kanala gönderir \n``-`` e!temizle =Belirttiğiniz miktar kadar mesaj siler \n``-`` e!unban [kullanıcı] [sebep] =Sunucunuzda banlı kişiyi affeder \n``-`` e!uyar [kullanıcı] [sebep] =Etiketlediğiniz kişiyi uyarır \n``-`` e!reklamtara =Oynuyor yerinde reklam yapanları bulup söyler  \n``-``  e!kilit <süre> =Kanalı istediğiniz süre kadar kilitler \n``-`` e!unload =İstenmeyen komutu devre dışı bırakır \n``-`` e!sustur [@kişi] =Etiketlediğiniz kişiyi susturur ',
              '**Müzik**\n\n\n' + '``-``  e!çal = Youtubeda İstediğiniz Bir Şarkıyı Aratır Ve Oynatır. \n``-``  e!duraklat = Oynatılan Şarkıyı Devam Etmek Üzere Durdurur. \n``-``  e!devam = Duraklatılan Şarkıyı Devam Ettir. \n``-``  e!geç = Oynatılan Şarkıyı Geçer. \n``-``  e!kuyruk = Kuyruk’ta Olan Müzikleri Gösterir. \n``-``  e!çalan = Oynatılan Müziği Gösterir. \n``-``  e!ses = Ses Seviyesini Ayarlarsınız.',
              '**Yardımcı komutlar**\n\n\n ' + '``-`` e!avatar =Avatarınızı gösterir \n``-`` e!bilgi =Bot hakkında bilgi verir \n``-`` e!çevir =Çeviri yapmanızı sağlar \n``-`` e!havadurumu [Şehir] =Belirttiğiniz yerin havadurumu hakkında bilgi verir \n``-`` e!hesapla [İşlem] =Belirtilen işlemi yapar \n``-`` e!botinfo =Botun istatistiklerini gösterir \n``-`` e!userinfo =Komutu kullanan kişi hakkında bilgi verir \n``-`` e!ping =Botun pingini gösterir \n``-`` e!rolbilgi [@rol] =Etiketlediğiniz rol hakkında bilgi verir \n``-`` e!servericon =Serverin iconunu gösterir \n``-`` e!speedtest =İnternet hızınızı pinginizi vb gösterir \n``-`` e!steamfiyat [isim] =Aradağınız oyunun steamdaki fiyatına bakmanızı sağlar \n``-`` e!serverinfo =Sunucu hakkında bilgi verir \n``-`` e!sunucular =Botun bulunduğu sunucuları gösterir \n``-`` e!  ',
              '**Kurucu Komutları**\n\n\n' + '``-`` e!mesajat =Botu kullanarak istenilen kişiye özelden mesaj atar \n``-`` e!eval =Kod denemek için kullanılır \n``-`` e!load =Yeni eklenen komutu yükler \n``-`` e!reboot =Botu yeniden başlatır \n``-`` e!reload =Belirtilen komutu tekrardan başlatır',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};