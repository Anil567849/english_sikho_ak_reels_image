import generateName from './utils/generateName.js';
import putPhraseOnPhoto from './utils/putPhraseOnPhoto.js';
import putVocabOnPhoto from './utils/putVocabOnPhoto.js';
import putSinglePhraseOnPhoto from './utils/putSinglePhraseOnPhoto.js';
import currentDate from './utils/createDate.js';

const data = [
    {
        hindiText: "असंभव, मेरा शब्द नहीं!",
        englishText: "Impossible isn't my vocabulary!",
    },
    {
        hindiText: "आज इतिहास रचेंगे!",
        englishText: "Making history today!",
    },
    {
        hindiText: "हर चुनौती में छुपा है जीत का रास्ता!",
        englishText: "Victory hidden in every challenge!",
    },
    {
        hindiText: "मुझे कोई नहीं रोक सकता!",
        englishText: "Nobody can stop me!",
    },
]

function useManualUrl(height, width, urls, folderName, type){
  const time = currentDate();

  for(let i = 0; i < data.length; i++){
    const {englishText, hindiText} = data[i];
    // console.log(englishText, hindiText);
    const photoPath = `${urls}${i+1}.jpg`;

    // const fileName = generateName(); // random name generator
    const fileName = "0" + (i + 1).toString();
    const outputPath = (`E:/Instagram/${folderName}/${time}/${fileName}.jpg`);
    
    if(type == 'phrase'){
        putPhraseOnPhoto(photoPath, englishText, hindiText, outputPath, height, width);
    }else if(type == 'vocab'){
        putVocabOnPhoto(photoPath, englishText, hindiText, outputPath, height, width);
    }else{
        putSinglePhraseOnPhoto(photoPath, englishText, hindiText, outputPath, height, width);
    }
  }
}

(() => {
    try {
        const height = 1920;
        const width = 1080;
        const lang = "hindi";

        // useManualUrl(height, width, './utils/imagesData/local-images/', "English Sikho AK", "vocab");
        useManualUrl(height, width, './utils/imagesData/local-images/', "English Sikho AK", "phrase");
        // useManualUrl(height, width, './utils/imagesData/local-images/', "English Sikho AK", "single-phrase"); // put your content under englishText obj and leave hindiText blank

    } catch (error) {
        console.log("app.js", error);
    }

})();