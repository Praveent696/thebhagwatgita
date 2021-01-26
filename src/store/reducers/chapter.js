import * as actionTypes from "../action/actionTypes";


let initialState = [];

export const reducer = ( state = initialState , action ) =>{
   switch(action.type){
    case actionTypes.SET_CHAPTERS:
        state = action.payload.chapters.sort((a,b)=> a.chapter_number- b.chapter_number)
        console.log('STATE CHAPTERS',state)
        return [...state]; 
    case actionTypes.GET_CHAPTERS:
        return [...state];
    case actionTypes.GET_CHAPTER:
        return [...state.filter(x=>x.chapter_number===action.payload.chapterNumber)]
    case actionTypes.SET_CHAPTER_FAV_STATUS:
         let chapter_to_change = {...state.find(x=>x.chapter_number===action.payload.chapterNumber)};
         chapter_to_change.is_favorate = action.payload.isFavorate;
         state = state.filter(x=>x.chapter_number!==action.payload.chapterNumber)
         state = [...state,chapter_to_change]
         state = state.sort((a,b)=> a.chapter_number- b.chapter_number)
         return [...state];
    default:
        return [...state];   
   } 
}