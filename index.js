global.D=require('discord.js');
global.C=new D.Client();
global.fs=require('fs');
global.COLOR=require('chalk');
global.settings=require('./settings.json');

function send(msg) {
  
}

global.C.on('ready', () => {
  console.log(global.COLOR.bgBlackBright.yellow.bold('[Dip] ')+global.COLOR.bgBlackBright.green.bold('Ready!'));
});
global.C.on('message', M => {
  if(M.content.startsWith(global.settings.prefix)) {
    let cmd = M.content.split(' ').splice(0)[0].replace(global.settings.prefix, '');
    let args = M.content.split(' ').splice(1);
    if(fs.existsSync("./cmds/"+cmd+".js")) {
      let temp = require("./cmds/"+cmd+".js");
      temp(send,);
    }else{
      //No command.
    }
  }
});
global.C.on('rateLimit', info => {
  console.log(global.COLOR.yellow.bold('[WARNING] ')+global.COLOR.white('I\'m being ratelimited!');
}
