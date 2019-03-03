module.exports.add = async (msg, user, role) => {
    if (!msg.member.roles.find(r => r.name === 'ADM' || r.name === 'DEV' || r.name === 'BOT ADM')) return msg.channel.send("Requer cargo: ADM ou DEV ou BOT ADM");
    if (!msg.member.hasPermission('MANAGE_MEMBERS')) return msg.channel.send("Requer permissão: MANAGE_MEMBERS");
    let aUser;
    try { aUser = msg.guild.member(msg.mentions.users.first() || msg.guild.member.get(user)); }
    catch (error) { /*console.log(error);*/ }
    if (!aUser) return msg.channel.send("Usuário não encontrado!");
    let aRole = msg.guild.roles.find(`name`, role);
    if (!aRole || !role) return msg.channel.send("Cargo não encontrado!");

    if (aUser.roles.has(aRole.id)) return msg.reply(` já possui o cargo.`);
    await (aUser.addRole(aRole.id));
    try {
        await aUser.send(`Você recebeu um novo cargo: ${aRole.name}`);
    } catch (error) {
        await msg.channel.send(`ops! error action in roles.`);
    }
}
module.exports.remove = async (msg, user, role) => {
    if (!msg.member.roles.find(r => r.name === 'ADM' || r.name === 'DEV' || r.name === 'BOT ADM')) return msg.channel.send("Requer cargo: ADM ou DEV ou BOT ADM");
    if (!msg.member.hasPermission('MANAGE_MEMBERS')) return msg.channel.send("Requer permissão: MANAGE_MEMBERS");
    let aUser;
    try { aUser = msg.guild.member(msg.mentions.users.first() || msg.guild.member.get(user)); }
    catch (error) { /*console.log(error);*/ }
    if (!aUser) return msg.channel.send("Usuário não encontrado!");
    let aRole = msg.guild.roles.find(`name`, role);
    if (!aRole || !role) return msg.channel.send("Cargo não encontrado!");

    if (!aUser.roles.has(aRole.id)) return msg.reply(` não possui o cargo.`);
    await (aUser.removeRole(aRole.id));
    try {
        await aUser.send(`Você perdeu o cargo: ${aRole.name}`);
    } catch (error) {
        await msg.channel.send(`ops! error action in roles.`);
    }
}