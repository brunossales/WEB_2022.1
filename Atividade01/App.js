import './App.css';
import Hero from './components/A01/Hero';
import Enemy from './components/A01/Enemy';
import Word from './components/A01/Word';
import Arena from './components/A01/Arena';

function App(){
  return (
    <div className='classe'>
      <Word>
        <Arena arena = "Arena Castelão"> 
          <Hero name="Bruno"/>
          <Enemy name="Sales"/>
        </Arena>
      </Word>

      <Word>
        <Arena arena = "Arena Morumbi"> 
          <Hero name="Flamengoo"/>
          <Enemy name="Fluminensee"/>
        </Arena>
      </Word>
    </div>
  )
}

export default App;
