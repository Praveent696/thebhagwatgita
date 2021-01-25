import * as actionTypes from "../action/actionTypes";


let initialState = [
        {
            chapter_number: 1, 
            name: "अर्जुनविषादयोग", 
            name_english: "Arjuna Dilemma", 
            name_transliterated: "Arjun Viṣhād Yog", 
            name_transliterated_simple: "Arjuna Visada Yoga", 
            verses_count: 47,
            is_favorate : false
          }, 
          {
            chapter_number: 2, 
            name: "सांख्ययोग", 
            name_english: "Transcendental Knowledge", 
            name_transliterated: "Sānkhya Yog", 
            name_transliterated_simple: "Sankhya Yoga", 
            verses_count: 72,
            is_favorate : false
          },
          {
            chapter_number: 3, 
            name: "सांख्ययोग", 
            name_english: "Transcendental Knowledge", 
            name_transliterated: "Sānkhya Yog", 
            name_transliterated_simple: "Sankhya Yoga", 
            verses_count: 72,
            is_favorate : false
          },
          {
            chapter_number: 4, 
            name: "सांख्ययोग", 
            name_english: "Transcendental Knowledge", 
            name_transliterated: "Sānkhya Yog", 
            name_transliterated_simple: "Sankhya Yoga", 
            verses_count: 72,
            is_favorate : false
          }
];

export const reducer = ( state = initialState , action ) =>{
   switch(action.type){
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