import { MessengerContext } from 'bottender';

export const HandleReactionReact = async (context: MessengerContext) => {
    await context.sendText('Good! ❤❤❤');
};
export const HandleReactionUnreact = async (context: MessengerContext) => {
    await context.sendText('why un react ?? ');
};
export const HandleReaction = async (context: MessengerContext) => {
    await context.sendText('Yup :v');
};
