exports.wait = () => {
	return`*「❗」TUNGGU BENTAR BEB😘*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「❗」LEVELING ENABLE*`
}

exports.lvloff = () => {
	return`*「❗」LEVELING DISABLE*`
}

exports.lvlnul = () => {
	return`*「❗」LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*「❗」LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「❗」BELUM VERIFIKASI「❗」*\n\nketik : @verify`
}

exports.baned = () => {
	return`*「❗」ANDA SUDAH TERBANNED*`
}

exports.premium = (prefix) => {
	return`Lu Siapa? Fitur ini khusus user premium!
Upgrade ke premium dulu beb
hubungi owner Rian Senpai😘
Ketik : ${prefix}owner`
}

exports.rediregis = () => {
	return`*Kamu sudah melakukan verify -_-*`
}

exports.stikga = () => {
	return`*「 GAGAL 」Coba reply/tag ulang kak*`
}

exports.linkga = () => {
	return`*「❗」maaf linknya tidak valid kak*`
}

exports.groupo = () => {
	return`*「❗」GROUP ONLY*`
}

exports.ownerb = () => {
	return`*「❗」OWNER BOT ONLY*`
}

exports.ownerg = () => {
	return`*「❗」OWNER GROUP ONLY*`
}

exports.admin = () => {
	return`*「❗」ADMIN GROUP ONLY*`
}

exports.badmin = () => {
	return`*「❗」BOT HARUS JADI ADMIN*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*「🗿」Teks nya mana kak?*`
}

exports.clears = () => {
	return`*Sukses bosku*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 LEVEL UP 」*
\`\`\`➸ Nama : ${pushname}\`\`\`
\`\`\`➸ Nomor : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ Xp : ${getLevelingXp(sender)}\`\`\`
\`\`\`➸ Level : ${getLevel} ➸ ${getLevelingLevel(sender)}\`\`\`
`}
 
exports.limitend = (pushname, prefix) => {
	return`*maaf ${pushname} limit hari ini habis*
*Limit di reset setiap jam 24:00*

\`\`\`Upgrade Premium Bebas Limit\`\`\`
\`\`\`➸ 10K : 1 Bulan\`\`\`
\`\`\`Jika berminat silahkan hubungi owner\`\`\`
\`\`\`Kirim perintah : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${isPrem ? '5' : `${limitCounts}`}

Upgrade premium bosku, biar bebas gunain bot`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ NOMOR : ${sender.split("@")[0]}
┃│➸ UANG : ${uangkau}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}

exports.donasi = () => {
return`*DONASI KAK*
Ovo : 087810115807
Gopay : 087810115807
Dana : 087810115807
Link aja : 087810115707

Donasi supaya bot terus update & Aktif`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return`🔰 -----[ 「 *IKLAN ${botName}* 」 ]----- 🔰
──────────────────────────────
◯ *DAFTAR SEWA & BUAT BOT :*
◯ *SEWA : 15K/GRUP (BULAN)*
◯ *BUAT : 30K (BISA JADI OWNER)*
buat bot bisa chat ke wa.me/6287810115807
untuk sewa bot chat ke wa.me/6287810115807
◯ *PEMBAYARAN BISA MELALUI :*
◯ *OVO, GOPAY, DANA, PULSA+10K*
──────────────────────────────
◯ *KEUNTUNGAN SEWA BOT :*
◯ *1. BISA MEMASUKAN BOT KE GROUP*
◯ *2. BISA MENGGUNAKAN FITUR PREMIUM*

◯ *KEUNTUNGAN BUAT BOT :*
◯ *1. BISA MENJADI OWNER BOT SENDIRI*
◯ *2. BISA MENGGANTI NAMA BOT SENDIRI*
◯ *3. BISA MEMBAWA BOT KE GROUP*
◯ *4. BISA MENGGUNAKAN COMMAND OWNER*
◯ *5. BISA MENYEWAKAN BOT KEMBALI*
──────────────────────────────
🔰 -----[「 *POWERED BY ${ownerName}* 」]----- 🔰`
}