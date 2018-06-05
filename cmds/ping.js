exports.metadata = {
  catagory: 'utils',
  description: 'PONG',
  usage: 'ping <no args>',
  example: 'ping'
}

module.exports = (msg, { reply }) => {
  return reply('Pinging...').then(M => M.edit(`Bot ping is \`${new Date().now() - M.createdTimestamp}ms\``));
}
