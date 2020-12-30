import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationMenu from './components/layout/NavigationMenu';
// eslint-disable-next-line
import {Container} from 'react-bootstrap';
import { createStore , combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as chapterReducer } from './store/reducers/chapter'
import { reducer as verseReducer } from './store/reducers/verse'

const rootReducer = combineReducers({ ch: chapterReducer , vr : verseReducer });
const store  = createStore(rootReducer);

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
