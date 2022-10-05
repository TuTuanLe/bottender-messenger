module.exports = async function App(context) {
  if (context.event.isText) {
    await context.sendText(`received the text message: ${context.event.text}`);
  }
  if (context.event.isPayload) {
    await context.sendText(`received the payload: ${context.event.payload}`);
  }
  if (context.event.isImage) {
    await context.sendText(`received the image: ${context.event.image.url}`);
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

  if (context.event.isLikeSticker) {
    await context.sendText('Good to know you like us!');
  }
};
