exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🇮🇩[ *MENU ${BotName}* ]🇮🇩
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 
Berikut adalah info pada bot ini,tak banyak info :)

[ ️ *${tampilTanggal}* ]
[️ *${tampilWaktu}* ]

 INFO BOT! :

=> *AUTHOR*: Anggery
=> *YOUTUBE*: Gamerz wibu official ™️

📺 *Iklan* :

yang mau follow sialakan
 Follow akun instagram admin ${instagramlu}

⚠️ INFORMASI COVID-19 TERBARU!

POSITIF: *${corohelp.confirmed.value}*
SEMBUH: *${corohelp.recovered.value}*
MENINGGAL: *${corohelp.deaths.value}*
UPDATE: *${corohelp.lastUpdate}*

 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

Mau pasang iklan di *${BotName} ?*
WA : *${whatsapplu}*
  
Gunakan dengan bijak ‼️
Bot ini berjalan ${kapanbotaktif} ‼️

  
🇮🇩[ *POWERED BY ${BotName}* ]🇮🇩`
}
