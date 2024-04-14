let handler = async (m, { conn, participants }) => {
    let users = participants.map(u => conn.user.jid)
    let q = m.quoted ? m.quoted : m
    let msg = await conn.sendMessage(m.chat, '', 'extendedTextMessage', { quoted: q })
    let mentionedJid = users.filter(user => user !== conn.user.jid)
    await conn.sendMessage(msg.key.remoteJid, '', 'extendedTextMessage', { contextInfo: { mentionedJid }, quoted: msg })
}
handler.help = ['hidetag']
handler.tags = ['group']
handler.command = /^(مخفي|مهم)$/i
handler.group = true
handler.owner = true
export default handler
