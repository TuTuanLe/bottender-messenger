import { MessengerContext } from 'bottender';

export const HandleDelivery = async (context: MessengerContext) => {
    await context.sendText(`received the delivery: ${context.event.payload}`);
};
