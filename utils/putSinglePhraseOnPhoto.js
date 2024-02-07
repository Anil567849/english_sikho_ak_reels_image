import Jimp from 'jimp';
import fs from 'fs';
import path from 'path';
import { registerFont, createCanvas, loadImage } from 'canvas';
  

// Register the Hindi font
// const fontPath = path.join('C:/Users/HP/Documents/NodeJs/spokupai-reel-images/font/', 'TiroDevanagariHindi-Regular.ttf');
// registerFont(fontPath, { family: 'Tiro Devanagari Hindi' });
// const fontPath = path.join('C:/Users/HP/Documents/NodeJs/spokupai-reel-images/font/', 'Sura-Regular.ttf');
// registerFont(fontPath, { family: 'Sura' });
const fontPath = path.join('C:/Users/HP/Documents/NodeJs/spokupai-reel-images/font/', 'Sura-Bold.ttf');
registerFont(fontPath, { family: 'Sura' });


function wrapText(context, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && i > 0) {
      context.fillText(line, x, y);
      line = words[i] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}


export default async function putSinglePhraseOnPhoto(inputImage, englishText, hindiText, outputPath, height, width) {

  try {
    // Read Image 
    const image = await Jimp.read(inputImage);
    await image.cover(width, height);

    // Create a new canvas for the card
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Load the card image
    const cardImgPath = 'C:/Users/HP/Documents/NodeJs/spokupai-reel-images/utils/card.png';
    const cardImage = await loadImage(cardImgPath);

    // Draw the card image on the canvas
    ctx.drawImage(cardImage, 0, 0, width, height);

    // Set font properties
    ctx.font = 'bold 60px "Sura"'; // Adjust font size and family as needed
    ctx.fillStyle = 'black'; // Text color
    ctx.textAlign = 'center';

    // Add English text to the card
    const englishTextX = (width/2)+15;
    const englishTextY = (height/2)+10;

    const hindiTextX = (width/2)+15;
    const hindiTextY = (height/2)+120;


    wrapText(ctx, englishText, englishTextX, englishTextY, 580, 80)
    wrapText(ctx, hindiText, hindiTextX, hindiTextY, 580, 80)

    // Convert canvas to Jimp image
    const card = await Jimp.read(canvas.toBuffer());

    // Composite the card onto the image at the top-left corner (0, 0)
    image.composite(card, 0, 0);

    // Save the modified image
    await image.writeAsync(outputPath);

    console.log("Success: Single Phrase");
      
  } catch (error) {
    console.log("failed",  error);
  }
}