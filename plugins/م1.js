let handler = async (m, { conn, command, text }) => {
let love = `

*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*
*•┃❖اهلا بك في قسم الترفيــ🌋هه*
*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*
*✧║🌋⃝•║《.المطور》*
*✧║🌋⃝•║《.توب》*
*✧║🌋⃝•║《.الشخصيه》*
*✧║🌋⃝•║《.لو》*
*✧║🌋⃝•║《.ذكاء》*
*✧║🌋⃝•║《.غباء》*
*✧║🌋⃝•║《.حكمه》*
*✧║🌋⃝•║《.جميل》*
*✧║🌋⃝•║《.زواج》*
*✧║🌋⃝•║《.طلاق》*
*✧║🌋⃝•║《.بوست》*
*✧║🌋⃝•║《.تطقيم》*
*✧║🌋⃝•║《.خروف》*
*✧║🌋⃝•║《.ورع》*
*✧║🌋⃝•║《.تاج》*
*✧║🌋⃝•║《.هل》*
*✧║🌋⃝•║《.صراحه》*
*✧║🌋⃝•║《.صوره》*
*✧║🌋⃝•║《.اغنيه》*
*✧║🌋⃝•║《.تكرار》*
*✧║🌋⃝•║《.حروف》*
*✧║🌋⃝•║《.تصميم》*
*✧║🌋⃝•║《.بنترست》*
*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*
*✧║⌬ حقـوق السيد اكيرا✍︎* 
*✧║ا⌬ https://wa.me/201020639057*
*✧║ا⌬┋𝑇𝐸𝑁𝐷𝛩𝑈, 𝐴𝐾𝐼𝑅𝐴  〖🐉〗*
*⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*

 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م1)$/i
export default handler
