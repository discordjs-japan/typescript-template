import { Client, Message } from 'discord.js'

const client = new Client()

function replyAvatarURL(message: Message): void {
  if (message.content === '私のアバター') {
    message.reply(message.author.avatarURL)
  }
}

client.on('message', message => replyAvatarURL(message))

client.login()
