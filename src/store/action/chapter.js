import * as actionTypes from './actionTypes';

export const getChaptersSync = () =>{
    return {
        type : actionTypes.GET_CHAPTERS
    }
}

export const setChaptersSync = (chapters) =>{
    return {
        type: actionTypes.SET_CHAPTERS,
        payload : {
            chapters : chapters
        }
    }
}

export const setChapters = () =>{
    return dispatch => {
        fetch("https://vedicscripturesapi.herokuapp.com/gita/chapters").then(
            (response)=>response.json()).then(
                (data)=>{
                    dispatch(setChaptersSync(data))
                }
            ).catch(
                (error)=>{
                    console.error(error)
                }
            )
    }
}

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

export const makeFavorateChapter = (chapterNumber, isFavorate) => {
    return {
        type: actionTypes.SET_CHAPTER_FAV_STATUS,
        payload: {
            chapterNumber : chapterNumber,
            isFavorate : isFavorate
        }
    }
}