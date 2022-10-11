import { Action, MessengerContext, Messenger } from 'bottender';

export default async function App(context: MessengerContext): Promise<Action<MessengerContext> | void> {
    if (context.event.isText) {
        await context.sendText('xin chao cac ban');
    }
}
