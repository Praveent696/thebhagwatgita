import * as actionTypes from "../action/actionTypes";


let initialState = [
        {
            chapter_number: 1,
            meaning: "Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?",
            text: "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय |||1||",
            transliteration: "dhṛitarāśhtra uvācha dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya",
            verse_number: 1,
            word_meanings: "dhṛitarāśhtraḥ uvācha—Dhritarashtra said; dharma-kṣhetre—the land of dharma; kuru-kṣhetre—at Kurukshetra; samavetāḥ—having gathered; yuyutsavaḥ—desiring to fight; māmakāḥ—my sons; pāṇḍavāḥ—the sons of Pandu; cha—and; eva—certainly; kim—what; akurvata—did they do; sañjaya—Sanjay",
            is_favorate : false
          },
          {
            chapter_number: 1,
            meaning: "Sanjay said: On observing the Pandava army standing in military formation, King Duryodhan approached his teacher Dronacharya, and said the following words.",
            text: "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् | ||2||",
            transliteration: "sañjaya uvācha dṛiṣhṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanastadā āchāryamupasaṅgamya rājā vachanamabravīt",
            verse_number: 2,
            word_meanings: "sanjayaḥ uvācha—Sanjay said; dṛiṣhṭvā—on observing; tu—but; pāṇḍava-anīkam—the Pandava army; vyūḍham—standing in a military formation; duryodhanaḥ—King Duryodhan; tadā—then; āchāryam—teacher; upasaṅgamya—approached; rājā—the king; vachanam—words; abravīt—spoke",
            is_favorate : false
          },
          {
            chapter_number: 1,
            meaning: "O teacher, (please) see this vast army of the sons of Pandu, arrayed for battle by the son of Drupada, your intelligent disciple, Dhrishtadyumna.",
            text: "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् । व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ॥3॥",
            transliteration: "paśhyaitāṁ pāṇḍu-putrāṇām āchārya mahatīṁ chamūm vyūḍhāṁ drupada-putreṇa tava śhiṣhyeṇa dhīmatā",
            verse_number: 3,
            word_meanings: "paśhya—behold; etām—this; pāṇḍu-putrāṇām—of the sons of Pandu; āchārya—respected teacher; mahatīm—mighty; chamūm—army; vyūḍhām—arrayed in a military formation; drupada-putreṇa—son of Drupad, Dhrishtadyumna; tava—by your; śhiṣhyeṇa—disciple; dhī-matā—intelligent",
            is_favorate : false
          },
          {
              chapter_number:1,
              verse_number:4,
              text:"अत्र शूरा महेष्वासा भीमार्जुनसमा युधि | युयुधानो विराटश्च द्रुपदश्च महारथ: ॥4॥",
              transliteration:"atra śhūrā maheṣhvāsā bhīmārjuna-samā yudhi yuyudhāno virāṭaśhcha drupadaśhcha mahā-rathaḥ",
              word_meanings:"atra—here; śhūrāḥ—powerful warriors; mahā-iṣhu-āsāḥ—great bowmen; bhīma-arjuna-samāḥ—equal to Bheem and Arjun; yudhi—in military prowess; yuyudhānaḥ—Yuyudhan; virāṭaḥ—Virat; cha—and; drupadaḥ—Drupad; cha—also; mahā-rathaḥ—warriors who could single handedly match the strength of ten thousand ordinary warriors;",
              meaning:"There are in this army, heroes wielding great bows, and equal in military prowess to Bhima and Arjuna: Yuyudhana (Satyaki) and Virata, and the maharatha (great chariot-rider) Drupada;",
              is_favorate : false
          },
          {
            chapter_number: 2,
            meaning: "Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?",
            text: "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय |||1||",
            transliteration: "dhṛitarāśhtra uvācha dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya",
            verse_number: 1,
            word_meanings: "dhṛitarāśhtraḥ uvācha—Dhritarashtra said; dharma-kṣhetre—the land of dharma; kuru-kṣhetre—at Kurukshetra; samavetāḥ—having gathered; yuyutsavaḥ—desiring to fight; māmakāḥ—my sons; pāṇḍavāḥ—the sons of Pandu; cha—and; eva—certainly; kim—what; akurvata—did they do; sañjaya—Sanjay",
            is_favorate : false
          },
          {
            chapter_number: 2,
            meaning: "Sanjay said: On observing the Pandava army standing in military formation, King Duryodhan approached his teacher Dronacharya, and said the following words.",
            text: "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् | ||2||",
            transliteration: "sañjaya uvācha dṛiṣhṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanastadā āchāryamupasaṅgamya rājā vachanamabravīt",
            verse_number: 2,
            word_meanings: "sanjayaḥ uvācha—Sanjay said; dṛiṣhṭvā—on observing; tu—but; pāṇḍava-anīkam—the Pandava army; vyūḍham—standing in a military formation; duryodhanaḥ—King Duryodhan; tadā—then; āchāryam—teacher; upasaṅgamya—approached; rājā—the king; vachanam—words; abravīt—spoke",
            is_favorate : false
          },
          {
            chapter_number: 3,
            meaning: "Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?",
            text: "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय |||1||",
            transliteration: "dhṛitarāśhtra uvācha dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya",
            verse_number: 1,
            word_meanings: "dhṛitarāśhtraḥ uvācha—Dhritarashtra said; dharma-kṣhetre—the land of dharma; kuru-kṣhetre—at Kurukshetra; samavetāḥ—having gathered; yuyutsavaḥ—desiring to fight; māmakāḥ—my sons; pāṇḍavāḥ—the sons of Pandu; cha—and; eva—certainly; kim—what; akurvata—did they do; sañjaya—Sanjay",
            is_favorate : false
          },
          {
            chapter_number: 3,
            meaning: "Sanjay said: On observing the Pandava army standing in military formation, King Duryodhan approached his teacher Dronacharya, and said the following words.",
            text: "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् | ||2||",
            transliteration: "sañjaya uvācha dṛiṣhṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanastadā āchāryamupasaṅgamya rājā vachanamabravīt",
            verse_number: 2,
            word_meanings: "sanjayaḥ uvācha—Sanjay said; dṛiṣhṭvā—on observing; tu—but; pāṇḍava-anīkam—the Pandava army; vyūḍham—standing in a military formation; duryodhanaḥ—King Duryodhan; tadā—then; āchāryam—teacher; upasaṅgamya—approached; rājā—the king; vachanam—words; abravīt—spoke",
            is_favorate : false
          },
          {
            chapter_number: 4,
            meaning: "Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?",
            text: "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय |||1||",
            transliteration: "dhṛitarāśhtra uvācha dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya",
            verse_number: 1,
            word_meanings: "dhṛitarāśhtraḥ uvācha—Dhritarashtra said; dharma-kṣhetre—the land of dharma; kuru-kṣhetre—at Kurukshetra; samavetāḥ—having gathered; yuyutsavaḥ—desiring to fight; māmakāḥ—my sons; pāṇḍavāḥ—the sons of Pandu; cha—and; eva—certainly; kim—what; akurvata—did they do; sañjaya—Sanjay",
            is_favorate : false
          },
          {
            chapter_number: 4,
            meaning: "Sanjay said: On observing the Pandava army standing in military formation, King Duryodhan approached his teacher Dronacharya, and said the following words.",
            text: "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् | ||2||",
            transliteration: "sañjaya uvācha dṛiṣhṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanastadā āchāryamupasaṅgamya rājā vachanamabravīt",
            verse_number: 2,
            word_meanings: "sanjayaḥ uvācha—Sanjay said; dṛiṣhṭvā—on observing; tu—but; pāṇḍava-anīkam—the Pandava army; vyūḍham—standing in a military formation; duryodhanaḥ—King Duryodhan; tadā—then; āchāryam—teacher; upasaṅgamya—approached; rājā—the king; vachanam—words; abravīt—spoke",
            is_favorate : false
          }
    ]

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
    default:
        return [...state];   
   } 
}