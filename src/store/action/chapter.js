import * as actionTypes from './actionTypes';

export const getChapters = () =>{
    return {
        type : actionTypes.GET_CHAPTERS
    }
}
export const getChapter = (chapterNumber) =>{
    return {
        type : actionTypes.GET_CHAPTER,
        payload : { chapterNumber : chapterNumber }
    }
}