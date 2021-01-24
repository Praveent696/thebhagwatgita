import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationMenu from './components/layout/NavigationMenu';
// eslint-disable-next-line
import {Container} from 'react-bootstrap';
import { createStore , combineReducers , compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer as chapterReducer } from './store/reducers/chapter'
import { reducer as verseReducer } from './store/reducers/verse'

const enhancers = [];
const windowIfDefined = typeof window === 'undefined' ? null : window;
if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
}

const rootReducer = combineReducers({ chapters: chapterReducer , verses : verseReducer });
const store  = createStore(rootReducer,compose(...enhancers));

console.log(store)

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
           <NavigationMenu />
        </Provider>
      </div>
    </>
    
  );
}

export default App;
