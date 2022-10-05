module.exports = require('./src');

const { router, messenger } = require('bottender/router');

module.exports = async function App() {
  return router([
    messenger.message(HandleMessage),
    messenger.accountLinking.linked(HandleAccountLinkingLinked),
    messenger.accountLinking.unlinked(HandleAccountLinkingUnlinked),
    messenger.accountLinking(HandleAccountLinking),
    messenger.delivery(HandleDelivery),
    messenger.echo(HandleEcho),
    messenger.gamePlay(HandleGamePlay),
    messenger.passThreadControl(HandlePassThreadControl),
    messenger.takeThreadControl(HandleTakeThreadControl),
    messenger.requestThreadControl(HandleRequestThreadControl),
    messenger.appRoles(HandleAppRoles),
    messenger.optin(HandleOptin),
    messenger.policyEnforcement(HandlePolicyEnforcement),
    messenger.postback(HandlePostback),
    messenger.reaction.react(HandleReactionReact),
    messenger.reaction.unreact(HandleReactionUnreact),
    messenger.reaction(HandleReaction),
    messenger.read(HandleRead),
    messenger.referral(HandleReferral),
    messenger.standby(HandleStandby),
    messenger.any(HandleMessenger),
  ]);
};

/* Note: You need to implement those functions */
async function HandleMessage(context) {
  if (context.event.isText) {
    // await context.sendText('Hi!', {
    //   quickReplies: [
    //     {
    //       contentType: 'user_phone_number',
    //     },
    //   ],
    // });
    await context.sendText(`received the text message: ${context.event.text}`);
    // await context.sendButtonTemplate('What do you want to do next?', [
    //   {
    //     type: 'web_url',
    //     url: 'https://petersapparel.parseapp.com',
    //     title: 'Show Website',
    //   },
    //   {
    //     type: 'postback',
    //     title: 'Start Chatting',
    //     payload: 'USER_DEFINED_PAYLOAD',
    //   },
    // ]);
    // await context.sendGenericTemplate([
    //   {
    //     title: "Welcome to Peter's Hats",
    //     imageUrl: 'https://petersfancybrownhats.com/company_image.png',
    //     subtitle: "We've got the right hat for everyone.",
    //     defaultAction: {
    //       type: 'web_url',
    //       url: 'https://peterssendreceiveapp.ngrok.io/view?item=103',
    //       messengerExtensions: true,
    //       webviewHeightRatio: 'tall',
    //       fallbackUrl: 'https://peterssendreceiveapp.ngrok.io/',
    //     },
    //     buttons: [
    //       {
    //         type: 'postback',
    //         title: 'Start Chatting',
    //         payload: 'DEVELOPER_DEFINED_PAYLOAD',
    //       },
    //     ],
    //   },
    // ]);
  }

  if (context.event.isPayload) {
    await context.sendText(`received the payload: ${context.event.payload}`);
  }
  if (context.event.isImage) {
    await context.sendText(`received the image: ${context.event.image.url}`);
    await context.sendImage(context.event.image.url);
  }
  if (context.event.isAudio) {
    await context.sendText(`received the audio: ${context.event.audio.url}`);
  }
  if (context.event.isVideo) {
    await context.sendText(`received the video: ${context.event.video.url}`);
  }
  if (context.event.isFile) {
    await context.sendText(`received the file: ${context.event.file.url}`);
  }
  if (context.event.isLocation) {
    const { coordinates } = context.event.location;
    await context.sendText(
      `received the location: lat: ${coordinates.lat}, long: ${coordinates.long}`,
    );
  }
  if (context.event.isDelivery) {
    await context.sendText(`Watermark: ${context.event.delivery.watermark}`);
  }
  if (context.event.isRead) {
    await context.sendText(`Watermark: ${context.event.read.watermark}`);
  }
}
async function HandleAccountLinkingLinked(context) {}
async function HandleAccountLinkingUnlinked(context) {}
async function HandleAccountLinking(context) {}
async function HandleDelivery(context) {}
async function HandleEcho(context) {}
async function HandleGamePlay(context) {}
async function HandlePassThreadControl(context) {}
async function HandleTakeThreadControl(context) {}
async function HandleRequestThreadControl(context) {}
async function HandleAppRoles(context) {}
async function HandleOptin(context) {}
async function HandlePolicyEnforcement(context) {}
async function HandlePostback(context) {
  // await context.sendText(`received the postback: ${context.event.payload}`);

  if (context.event.payload === 'TALKING_TO_THE_MOON') {
    await context.sendButtonTemplate('What do you want to do next?', [
      {
        type: 'web_url',
        url: 'https://postman-frontend.vercel.app/',
        title: 'Show Website',
      },
      {
        type: 'postback',
        title: 'Start Chatting',
        payload: 'USER_DEFINED_PAYLOAD',
      },
    ]);
  } else if (context.event.payload === 'USER_DEFINED_PAYLOAD') {
    await context.sendText('why you chat from me ??');
  }

  await context.sendMediaTemplate([
    {
      mediaType: 'image',
      attachmentId: '1854626884821032',
      buttons: [
        {
          type: 'web_url',
          url: 'https://en.wikipedia.org/wiki/Rickrolling',
          title: 'View Website',
        },
      ],
    },
  ]);
}
async function HandleReactionReact(context) {
  await context.sendText('Good! ❤❤❤');
}
async function HandleReactionUnreact(context) {
  await context.sendText('why un react ?? ');
}
async function HandleReaction(context) {
  await context.sendText('Yup :v');
}
async function HandleRead(context) {}
async function HandleReferral(context) {}
async function HandleStandby(context) {}
async function HandleMessenger(context) {}
