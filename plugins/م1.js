import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'

const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`

    // إضافة الأمر الجديد هنا
 await conn.sendMessage(m.chat, { react: { text: '1️⃣', key: m.key } })
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
    *✧║🌋⃝•║《.ميمز》*
    *✧║🌋⃝•║《.اديت》*
    *✧║🌋⃝•║《.خط》*
    *✧║🌋⃝•║《.نرد》*
    *✧║🌋⃝•║《.زخرفه》*
    *✧║🌋⃝•║《.قلب》*
    *✧║🌋⃝•║《.نينجا》*
    *✧║🌋⃝•║《.انحراف》*
    *✧║🌋⃝•║《.كذاب》*
    *⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*
    *✧║⌬ حقـوق السيد اكيرا✍︎* 
    *✧║ا⌬ https://wa.me/201020639057*
    *✧║ا⌬┋𝑇𝐸𝑁𝐷𝛩𝑈, 𝐴𝐾𝐼𝑅𝐴  〖🐉〗*
    *⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*

    `.trim()
    m.reply(love, null, { mentions: conn.parseMention(love) })}

    let videoUrl = 'https://telegra.ph/file/83c441223214cb1b0b09d.mp4';
    let vn = './media/menu.mp3';
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    let { min, xp, max } = xpRange(user.level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let sn = createHash('md5').update(who).digest('hex')
    let totalreg = Object.keys(global.db.data.users).length;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(900) 
    const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
    let str = ` 
    *⧠━──━⧈⇓《🌋》⇓⧈━──━⧠*
    *اهلا ب
