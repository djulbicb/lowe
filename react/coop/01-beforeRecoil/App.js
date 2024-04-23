import logo from './logo.svg';
import './App.css';
import Sprite from './components/objects-graphics/Sprite';
import { SPRITE_SHEET } from './util/Paths';
import { useEffect, useState } from 'react';
import RenderLevel from './components/level-layout/RenderLayout';

function App() {

  const [spriteSheetImg, setSpriteSheetImg] = useState()

  useEffect(() => {
    const image = new Image()
    image.src = SPRITE_SHEET
    image.onload = () => {
      setSpriteSheetImg(image)
    }
  }, [])

  if (!spriteSheetImg) {
    return null
  }


  return (
    <div className="App">
      <RenderLevel image={spriteSheetImg}></RenderLevel>
    </div>
  );
}

export default App;
