let welcomeMessage = "أهلاً بك في الجروب الجديد! نتمنى لك وقتًا ممتعًا معنا.";
let goodbyeMessage = "نأسف لرؤيتك تغادر الجروب. نتمنى لك كل التوفيق!";

let handler = async (m, { conn, participants }) => {
    let user = participants.find(user => user.jid === m.sender);
    if (user) {
        let desc = await conn.groupMetadata(m.chat).catch(() => {});
        let welcomeMessageWithDesc = `${welcomeMessage}\n\nوصف الجروب:\n${desc.desc}`;
        await conn.reply(m.chat, `${welcomeMessageWithDesc}`, m);
    }
};

let handler2 = async (m, { conn, participants }) => {
    let user = participants.find(user => user.jid === m.sender);
    if (user) {
        let target = m.action.split(" ")[0].replace('@', '').replace('c.us', '');
        await conn.reply(m.chat, `${goodbyeMessage}`, m);
        await conn.sendMessage(target + '@c.us', `يتم الوداع من الجروب. رقم العضو: ${m.action.split(" ")[0].replace('@', '').replace('c.us', '')}`);
    }
};

let handler3 = async (m, { conn, participants }) => {
    let user = participants.find(user => user.jid === m.sender);
    if (user) {
        let newUser = m.action.split(" ")[0].replace('@', '').replace('c.us', '');
        let desc = await conn.groupMetadata(m.chat).catch(() => {});
        let welcomeMessageWithDesc = `${welcomeMessage}\n\nوصف الجروب:\n${desc.desc}\n\n@${newUser}`;
        await conn.reply(m.chat, `${welcomeMessageWithDesc}`, m);
    }
};

let handler4 = async (m, { conn, participants }) => {
    let user = participants.find(user => user.jid === m.sender);
    if (user) {
        let newUser = m.participants[0];
        let desc = await conn.groupMetadata(m.chat).catch(() => {});
        let welcomeMessageWithDesc = `${welcomeMessage}\n\nوصف الجروب:\n${desc.desc}\n\n@${newUser}`;
        await conn.reply(m.chat, `تمت إضافة عضو جديد إلى الجروب.\n${welcomeMessageWithDesc}`, m);
    }
};

let handler5 = async (m, { conn, participants }) => {
    let user = participants.find(user => user.jid === m.sender);
    if (user) {
        let target = m.participants[0];
        await conn.sendMessage(target + '@c.us', `تمت طرد العضو من الجروب.`);
    }
};

// تعيين الأحداث والأوامر لكل معالج
handler.group = true;
handler.event = ["groupJoin"];
handler.command = /^$/i;

handler2.group = true;
handler2.event = ["groupLeave"];
handler2.command = /^$/i;

handler3.group = true;
handler3.event = ["groupJoin"];
handler3.command = /^$/i;

handler4.group = true;
handler4.event = ["groupAdd"];
handler4.command = /^$/i;

handler5.group = true;
handler5.event = ["groupRemove"];
handler5.command = /^$/i;

// تصدير كل المعالجات
module.exports = {
    handler,
    handler2,
    handler3,
    handler4,
    handler5
};
