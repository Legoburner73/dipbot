global.D=require('discord.js');
global.C=new D.Client();
global.fs=require('fs');
global.COLOR=require('chalk');
global.settings=require('./settings.json');

global.C.on('ready', () => {
  console.log(global.COLOR.bgBlackBright.yellow.bold('[Dip] ')+global.COLOR.bgBlackBright.green.bold('Ready!'));
});
global.C.on('message', M => {
  if(M.content.startsWith(global.settings.prefix)) {
    let cmd = M.content.split(' ').splice(0)[0].replace(global.settings.prefix, '');
    let args = M.content.split(' ').splice(1);
    if(fs.existsSync("./cmds/"+cmd+".js")) {
      let temp = require("./cmds/"+cmd+".js");
      temp(M, { 'send':M.channel.send, 'reply':M.reply, 'author':M.author, 'guild':M.guild, 'args':args, 'react':M.react, 'id':M.id, 'channel':M.channel, 'mentions':M.mentions, 'sendDM':M.author.send });
    }else{
      //No command.
    }
  }
});
global.C.on('error', e => {
  console.error(global.COLOR.red.bold('[CRITICAL] ')+global.COLOR.red(e));
  process.exit(1);
});
global.C.login(global.settings.token);
