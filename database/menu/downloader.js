const downloader = (prefix, botName, ownerName) => {
	return `
╔══ ❯ ${botName} ❮ ═══
║
╠═════ ❯ 𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫 ❮ ════════
║ ❯ *${prefix}pinterest* <query>
║      *Desc* : Download de imagens do Pinterest
║
║ ❯ *${prefix}ytmp3* <linkyt>
║      *Desc* : Download em áudio mp3 via YouTube
║
║ ❯ *${prefix}ytmp4* <linkyt>
║      *Desc* : Download de Vídeo via YouTube
║
║ ❯ *${prefix}tiktok* <linktiktok>
║      *Desc* : Download de vídeo do tiktok 
║
╚════❯ *Developer © ${botName}`
}
exports.downloader = downloader
