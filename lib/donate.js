exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `[ *MENU DONASI ${BotName}* ]
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 
plis gak usah donasi

gak usah donasi :)
   
*OVO*:-
*DANA*:-
*PULSA*: 085232253580 kalok mau :)
*GOPAY*: gak ada :)

INFORMASI COVID-19 TERBARU!

POSITIF: *${corohelp.confirmed.value}*
SEMBUH: *${corohelp.recovered.value}*
MENINGGAL: *${corohelp.deaths.value}*
UPDATE: *${corohelp.lastUpdate}*

_TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

  
[ *POWERED BY ${BotName}* ]`
}
