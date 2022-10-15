import { MessengerContext } from 'bottender';

export const HandleEcho = async (context: MessengerContext) => {
    await context.sendText(`received the echo: ${context.event.payload}`);
};
