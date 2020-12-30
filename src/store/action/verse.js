import * as actionTypes from "./actionTypes";

export const getVerses = () =>{
    return {
        type : actionTypes.GET_VERSES
    }
}
export const getVerse = (verseNumber,chapterNumber) =>{
    return {
        type : actionTypes.GET_CHAPTER,
        payload : { verseNumber : verseNumber , chapterNumber : chapterNumber }
    }
}