import { Action, MessengerContext } from 'bottender';
import { router, messenger } from 'bottender/router';

import { PrismaClient } from '@prisma/client';
import {
    HandleDelivery,
    HandleEcho,
    HandleMessage,
    HandleMessenger,
    HandlePassThreadControl,
    HandlePostback,
    HandleReaction,
    HandleReactionReact,
    HandleReactionUnreact,
    HandleRequestThreadControl,
    HandleStandby,
    HandleTakeThreadControl,
} from './actions';

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
    const users = await prisma.user.findMany();
    console.log(users);

    // MessengerContext.setState({
    //     timeRemaining: 20,
    // });
};

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

const App = async (context: MessengerContext): Promise<Action<MessengerContext> | void> => {
    console.log(context.state.timeRemaining);

    return router<MessengerContext>([
        messenger.message(HandleMessage),
        messenger.delivery(HandleDelivery),
        messenger.echo(HandleEcho),
        messenger.passThreadControl(HandlePassThreadControl),
        messenger.takeThreadControl(HandleTakeThreadControl),
        messenger.requestThreadControl(HandleRequestThreadControl),
        messenger.postback(HandlePostback),
        messenger.reaction.react(HandleReactionReact),
        messenger.reaction.unreact(HandleReactionUnreact),
        messenger.reaction(HandleReaction),
        messenger.standby(HandleStandby),
        messenger.any(HandleMessenger),
    ]);
};

export default App;
