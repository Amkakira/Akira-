let handler = async (m, { conn, command, text }) => {
let love = `

*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*
*✧║اهلا بك في قسم الالعـ👾ـاب*
*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*
*✧║🌋⃝•║《.سؤال》*
*✧║🌋⃝•║《.كت》*
*✧║🌋⃝•║《.دين》*
*✧║🌋⃝•║《.عين》*
*✧║🌋⃝•║《.رهان》*
*✧║🌋⃝•║《.لعبه》*
*✧║🌋⃝•║《.كوره》*
*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*
*✧║⌬ حقـوق السيد اكيرا✍︎* 
*✧║ا⌬ https://wa.me/201020639057*
*✧║ا⌬┋𝑇𝐸𝑁𝐷𝛩𝑈, 𝐴𝐾𝐼𝑅𝐴⁵〖👾〗*
*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*

 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(2)$/i
export default handler
