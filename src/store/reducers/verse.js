import * as actionTypes from "../action/actionTypes";


let initialState = []

export const reducer = ( state = initialState , action ) =>{
   switch(action.type){
    case actionTypes.GET_VERSES:
        return [...state];
    case actionTypes.GET_VERSE:
        return [...state]
        case actionTypes.SET_VERSE_FAV_STATUS:
          let verse_to_change = state.find(x=>x.chapter_number===action.payload.chapterNumber && x.verse_number===action.payload.verseNumber);
          verse_to_change.is_favorate = action.payload.is_favorate;
          console.log(verse_to_change)
          return [...state , verse_to_change]  
    case actionTypes.SET_VERSES:
      state = [...state , action.payload.verses]
      state = state.sort((a,b)=>a.verse-b.verse)
      return [...state];
    case actionTypes.CLEAN_VERSES:
      state = []
      return [...state];          
    default:
        return [...state];   
   } 
}