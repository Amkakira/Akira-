let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`❖┃${toM(a)},  *المنيوك الي اتناك🗿*
❐┃${toM(b)},*الفاجر الي ناك🌋* \n\ٕ`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['نيك','منيوك']
handler.group = true
export default handler

