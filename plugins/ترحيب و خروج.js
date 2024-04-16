let welcomeMessage = "اهلا بك  منور/ه.";
let goodbyeMessage = "الي الجحيم";

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
        await conn.sendMessage(target + '@c.us', `خرج المستخدم . رقم العضو: ${m.action.split(" ")[0].replace('@', '').replace('c.us', '')}`);
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

handler.group = true;
handler.event = ["groupJoin"];
handler.command = /^$/i;

handler2.group = true;
handler2.event = ["groupLeave"];
handler2.command = /^$/i;

handler3.group = true;
handler3.event = ["groupJoin"];
handler3.command = /^$/i;

module.exports = {
    handler,
    handler2,
    handler3
};
