import { useState } from 'react';
import { useRef } from 'react';
import land from './land.png';
import moon from './moon.png';
import {Parallax, ParallaxLayer } from '@react-spring/parallax';
import cat from './cat.gif';


function App() {
  const ref=useRef();
  return (
    <div>
        <Parallax pages={4} ref={ref}>
          <ParallaxLayer 
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
          />
          <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

          <ParallaxLayer
          sticky={{ start: 0.97, end: 2.8 }}
          style={{ textAlign: 'center' }}
          >
              <img src={cat} />
            </ParallaxLayer>

            <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Hi Mom!</h2>
        </ParallaxLayer>

          

        </Parallax>
    </div>
  ); 
}

export default App;
