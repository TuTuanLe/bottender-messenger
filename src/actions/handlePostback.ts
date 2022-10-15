import { MessengerContext } from 'bottender';

export const HandlePostback = async (context: MessengerContext) => {
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
};
