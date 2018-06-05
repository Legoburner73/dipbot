exports.metadata {
  catagory: 'info',
  description: 'command list and command help',
  usage: 'help [command (optional)]',
  example: 'help'
}

module.exports = (msg, { reply, send, sendDM, args }) => {
  if(args[0] === undefined) {
    return sendDM(`**__DipBot Help__**\nPrefix is ${global.settings.prefix}.\n`
          +`ping - ${require('../cmds/prefix.js').metadata.description} usage: ${require('../cmds/prefix.js').metadata.usage}`
          +`help - ${require('../cmds/help.js').metadata.description} usage: ${require('../cmds/help.js').metadata.usage}`
          );
  }else{
    // TODO: Finish this part.
  }
}
