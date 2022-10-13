import { Action, MessengerContext, Messenger } from 'bottender';
import { router, messenger } from 'bottender/router';

export default async function App(contextT: MessengerContext): Promise<Action<MessengerContext> | void> {
    /* Note: You need to implement those functions */
    async function HandleMessage(context: MessengerContext) {
        console.log(context.event.isText);

        // if (context.event.isText && !context.event.isEcho) {
        //     if (context.event.isStandby) {
        //         if (context.event.text === '/back') {
        //             await context.takeThreadControl();
        //             await context.sendText('Taking thread control back.');
        //         }
        //     } else if (context.event.text === '/help') {
        //         await context.sendText('Passing thread control to the page inbox.');
        //         await context.passThreadControlToPageInbox();
        //     } else {
        //         await context.sendText('Respond by bot.');
        //     }
        // }

        if (context.event.isText && context.event.text === 'tutuanle') {
            await context.sendButtonTemplate('Bạn muốn sử dụng dịch vụ nào của chúng tôi ?', [
                {
                    type: 'postback',
                    title: 'Truy cập và mua tiêu chuẩn.',
                    payload: 'START_SERVICE_FIRST',
                },
                {
                    type: 'postback',
                    title: 'Các dịch vụ đăng ký trực tuyến',
                    payload: 'START_SERVICE_SECOND',
                },
                {
                    type: 'postback',
                    title: 'Các dich vụ về tiêu chuẩn',
                    payload: 'START_SERVICE_THREE',
                },
            ]);
        } else if (context.event.isText !== 'tutuanle') {
            await context.sendText('mã của bạn không chính xác, vui lòng nhập lại mã !!');
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
            await context.sendText(`received the location: lat: ${coordinates.lat}, long: ${coordinates.long}`);
        }
        if (context.event.isDelivery) {
            await context.sendText(`Watermark: ${context.event.delivery.watermark}`);
        }
        if (context.event.isRead) {
            await context.sendText(`Watermark: ${context.event.read.watermark}`);
        }
    }

    async function HandleDelivery(context: MessengerContext) {
        await context.sendText(`received the delivery: ${context.event.payload}`);
    }

    async function HandleEcho(context: MessengerContext) {
        await context.sendText(`received the echo: ${context.event.payload}`);
    }
    async function HandleGamePlay(context: MessengerContext) {}
    async function HandlePassThreadControl(context: MessengerContext) {}
    async function HandleTakeThreadControl(context: MessengerContext) {}
    async function HandleRequestThreadControl(context: MessengerContext) {}
    async function HandleAppRoles(context: MessengerContext) {}
    async function HandleOptin(context: MessengerContext) {}
    async function HandlePolicyEnforcement(context: MessengerContext) {}
    async function HandlePostback(context: MessengerContext) {
        // await context.sendText(`received the postback: ${context.event.payload}`);
        if (context.event.payload === 'CARE_HELP') {
            await context.sendText('thank for you choose the template !!');
            await context.sendButtonTemplate('Bạn muốn làm gì?', [
                {
                    type: 'postback',
                    title: 'bắt đầu sử dụng dịch vụ tư vấn',
                    payload: 'START_SERVICE_ADVISORY',
                },
                {
                    type: 'postback',
                    title: 'Tim hiểu về sản phẩm',
                    payload: 'LEARN_ABOUT_PRODUCT',
                },
            ]);
        }
        if (context.event.payload === 'LEARN_ABOUT_PRODUCT') {
            await context.sendText('why you chat from me ??');
            await context.sendReceiptTemplate({
                recipientName: 'Stephane Crozatier',
                orderNumber: '12345678902',
                currency: 'USD',
                paymentMethod: 'Visa 2345',
                orderUrl: 'http://petersapparel.parseapp.com/order?order_id=123456',
                timestamp: '1428444852',
                elements: [
                    {
                        title: 'Classic White T-Shirt',
                        subtitle: '100% Soft and Luxurious Cotton',
                        quantity: 2,
                        price: 50,
                        currency: 'USD',
                        imageUrl: 'http://petersapparel.parseapp.com/img/whiteshirt.png',
                    },
                    {
                        title: 'Classic Gray T-Shirt',
                        subtitle: '100% Soft and Luxurious Cotton',
                        quantity: 1,
                        price: 25,
                        currency: 'USD',
                        imageUrl: 'http://petersapparel.parseapp.com/img/grayshirt.png',
                    },
                ],
                address: {
                    street1: '1 Hacker Way',
                    street2: '',
                    city: 'Menlo Park',
                    postalCode: '94025',
                    state: 'CA',
                    country: 'US',
                },
                summary: {
                    subtotal: 75.0,
                    shippingCost: 4.95,
                    totalTax: 6.19,
                    totalCost: 56.14,
                },
                adjustments: [
                    {
                        name: 'New Customer Discount',
                        amount: 20,
                    },
                    {
                        name: '$10 Off Coupon',
                        amount: 10,
                    },
                ],
            });
        }
        if (context.event.payload === 'START_SERVICE_FIRST') {
            await context.sendText(
                'BSI đã định hình nhiều tiêu chuẩn hàng đầu thế giới, và các giảng viên kinh nghiệm của chúng tôi sẽ hướng dẫn bạn trở thành một chuyên gia trong việc gắn kết tiêu chuẩn để doanh nghiệp của bạn vận hành tốt nhất.',
            );
        }
        if (context.event.payload === 'START_SERVICE_SECOND') {
            await context.sendText(
                'Chúng tôi đã đảm bảo sự an toàn và chất lượng cho các nhà sản xuất trong nhiều năm, thông qua các xem xét quản lý chất lượng nghiêm ngặt và chứng nhận sản phẩm.',
            );
        }
        if (context.event.payload === 'START_SERVICE_THREE') {
            await context.sendText(
                'Các công cụ phần mềm và giải pháp dành cho việc quản trị, an ninh không gian mạng, rủi ro và quản lý chuỗi cung ứng',
            );
        } else if (context.event.payload === 'START_SERVICE_ADVISORY') {
            await context.sendText('Vui lòng nhập mã code ?');
        }
    }
    async function HandleReactionReact(context: MessengerContext) {
        await context.sendText('Good! ❤❤❤');
    }
    async function HandleReactionUnreact(context: MessengerContext) {
        await context.sendText('why un react ?? ');
    }
    async function HandleReaction(context: MessengerContext) {
        await context.sendText('Yup :v');
    }
    async function HandleRead(context: MessengerContext) {}
    async function HandleReferral(context: MessengerContext) {}
    async function HandleStandby(context: MessengerContext) {}
    async function HandleMessenger(context: MessengerContext) {}

    return router<MessengerContext>([
        messenger.message(HandleMessage),
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
}
