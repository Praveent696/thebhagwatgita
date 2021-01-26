import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationMenu from './components/layout/NavigationMenu';
// eslint-disable-next-line
import {Container} from 'react-bootstrap';
import { createStore , combineReducers   , compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as chapterReducer } from './store/reducers/chapter'
import { reducer as verseReducer } from './store/reducers/verse'
import thunk from "redux-thunk";
import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ chapters: chapterReducer , verses : verseReducer });
const store  = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk,logger)));

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
