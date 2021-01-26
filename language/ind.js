exports.noregis = () => {
        return `*---「BELUM DAPTAL」---*\n\n*cara DAPTAL ${prefix}daftar nama|umur* \n*Contoh: ${prefix}daftar Udin ganteng|16*`
}

exports.rediregis = () => {
        return `*「 SUDAH DAPTAL 」*\n\n*kamu sudah DAPTAL di database bot*`
}

exports.wrongf = () => {
        return`*format salah/text kosong atau otak kamu kosong*`
}

exports.clears = () => {
        return`*clear all Success*`
}

exports.pc = () => {
        return`*---「PENDAPTALAN」---*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*---「DATA DAPTAL」----*\n\nkamu sudah terdaftar dengan data \n\n◪ *DATA* \n  │ \n  ├─ ❏ Nama : ${namaUser} \n  ├─ ❏ Nomor : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Umul : ${umurUser} \n  ├─ ❏ Waktu pendaptalan : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTE : \n JANGAN SAMPAI LUPA NOMOR INI KARENA INI PENTING:v`
}

exports.cmdnf = (prefix, command) => {
        return`Perintah *${prefix}${command}* tidak di temukan\nCOBA BELI KACA PEMBESAR MUKA DAN LIHAT KEMBALI *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*maaf tapi ${pushname} bukan owner bot*`
}

exports.limitend = (pushname) => {
        return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap owner mereset nya:v sabar ngab:v*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 JUMLEH LIMIT 」*
sisa limit udin : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau beli limit, kalo gapunya duit jangan maksain nyolong ke emak`
}

exports.satukos = () => {
        return`*Tambah parameter 1/enable atau 0/disable ya udinku`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nama* : ${pushname}\n  ❏ *Nomer* : ${sender.split("@")[0]}\n  ❏ *Uang* : ${uangkau}`
}
