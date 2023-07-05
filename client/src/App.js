import Main from './components/Main';
import Header from './components/Header';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';
import Navigation from './components/Navigation';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='navigationMain'>
        <Navigation/>
        <Main>
          <div className='tresSubContents'>
            <SubContents/>
            <SubContents/>
            <SubContents/>
          </div>
          <Advertisement/>  
        </Main>
      </div>
    </div>
  );
}

export default App;