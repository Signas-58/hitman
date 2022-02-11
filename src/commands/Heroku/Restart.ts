import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import Heroku from 'heroku-client'
const heroku = new Heroku({
    token: "your key"
});
const baseURI = '/apps/' + "your dyno name"

import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'
// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'restart',
            description: `test`,
            aliases: ['restart'],
            category: 'heroku',
            usage: `${client.config.prefix}restart`,
            modsOnly: true,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
//if (!this.client.config.hapi) return void M.reply("25538e6e-036b-4b05-b328-0c1597eb15f7");
    //if (!this.client.config.hname) return void M.reply("hitmann");
    await M.reply(`Restarting.............`)
await heroku.delete(baseURI + '/dynos').catch(async (error: any) => {
        await M.reply("Error");
    });
}
}
