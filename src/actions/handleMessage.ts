import { MessengerContext } from 'bottender';
export const HandleMessage = async (context: MessengerContext) => {
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
};
