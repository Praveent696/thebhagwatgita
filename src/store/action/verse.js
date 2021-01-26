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

export const cleanVerses = () =>{
    return {
        type : actionTypes.CLEAN_VERSES
    }
}

export const setVersesSync = (verses) =>{
    return {
        type : actionTypes.SET_VERSES,
        payload : { verses: verses }
    }
}

export const setVerse = (chapterNumber,verseNumber) => {
    return dispatch => {
        dispatch(cleanVerses())
        fetch(`https://vedicscripturesapi.herokuapp.com/gita/${chapterNumber}/${verseNumber}`).then(
            (response)=>response.json()).then(
                (data)=>{
                    console.log(data)
                    dispatch(setVersesSync(data))
                }
            ).catch(
                (error)=>{
                    console.error(error)
                }
            )
    }
}

export const setVerses = (chapterNumber,versesCount) =>{
    return dispatch => {
        dispatch(cleanVerses())
        for(var i=1; i<=versesCount; i++){
            fetch(`https://vedicscripturesapi.herokuapp.com/gita/${chapterNumber}/${i}`).then(
            (response)=>response.json()).then(
                (data)=>{
                    console.log(data)
                    dispatch(setVersesSync(data))
                }
            ).catch(
                (error)=>{
                    console.error(error)
                }
            )
        }
    }
}