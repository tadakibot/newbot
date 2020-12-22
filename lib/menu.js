exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🇮🇩[ *MENU ${BotName}* ] 🇮🇩
  
Hi ngab, ${id.split("@s.whatsapp.net")[0]} 
Berikut adalah daftar commands

*${tampilTanggal}*
*${tampilWaktu}*

 *Command YANG TERSEDIA DI ${BotName}*
   
*1.#sticker*

 *2.#nulis -fitur lagi error 404-*

 *3.#pantun*

*4.#yt -fitur lagi error 404-*

*5.#quotes -fitur lagi error 404-*

*6.#gacha (cewek/cowok)*

*7.#randomanime *

*8.#ttsid -fitur lagi error 404-*

*9.#quran*

*10.#info*

*11.#say*

*12.#ytmp3 -fitur lagi error 404-*

*13.#ig -fitur lagi error 404-*

*14.#fb -fitur lagi error 404-*

*15.#twt -fitur lagi error 404-*

*16.#wiki -fitur lagi error 404-*

KALOK MAU DONASI AJA :)
BISA KETIK #donate

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

Official Grub [1] : ${grupch1} fitur error404

Official Grub [2] : ${grupch2} fitur error404

  
🇮🇩[ *POWERED BY ${BotName}* ]🇮🇩`
}
