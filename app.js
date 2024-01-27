import generateName from './utils/generateName.js';
import putPhraseOnPhoto from './utils/putPhraseOnPhoto.js';
import putVocabOnPhoto from './utils/putVocabOnPhoto.js';
import currentDate from './utils/createDate.js';

const data = [
    {
        englishText: "Professionally",
        hindiText: "व्यावसायिक",
    }
    // {
    //     englishText: "I need to deposit some money into my account.",
    //     hindiText: "मुझे अपने खाते में कुछ पैसे जमा करने हैं।",
    // }
    // {
    //     englishText: "What are the current interest rates for savings",
    //     hindiText: "बचत खातों के लिए वर्तमान ब्याज दरें क्या हैं?",
    // }
]

function useManualUrl(height, width, urls, folderName, type){
  const time = currentDate();

  for(let i = 0; i < 1; i++){
    const {englishText, hindiText} = data[i];
    // console.log(text);
    const photoPath = `${urls}${i+1}.jpg`;
    // const photoPath = urls[i];
    // console.log(photoPath);
    const fileName = generateName();
    const outputPath = (`E:/Instagram/${folderName}/${time}/${fileName}.jpg`);

    if(type == 'phrase'){
        putPhraseOnPhoto(photoPath, englishText, hindiText, outputPath, height, width);
    }else{
        putVocabOnPhoto(photoPath, englishText, hindiText, outputPath, height, width);
    }
  }
}

(() => {
    try {
        const height = 1920;
        const width = 1080;
        const lang = "hindi";

        useManualUrl(height, width, './utils/imagesData/local-images/', "English Sikho AK", "vocab");
        // useManualUrl(height, width, './utils/imagesData/local-images/', "English Sikho AK", "phrase");

    } catch (error) {
        console.log("app.js", error);
    }

})();