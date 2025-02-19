import { FromLanguage, Language } from "../Types/types";

export const actionTranslate = async (text: string, fromLanguage : FromLanguage,tolanguage: Language) => {
    console.log('fromLanguage', fromLanguage)
    console.log('tolanguage', tolanguage)
    if(fromLanguage === tolanguage) return text

    try {
        
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLanguage}|${tolanguage}`)
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
        throw new Error('Algo salio mal')
    }
}