import { useRef } from 'react';
import moon from './gg.jpg';
import land from './hh.jpg';
import jump from './jump.gif';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();

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
    backgroundSize: 'contain',  
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center',  
  }}
></ParallaxLayer>


        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={jump} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>WELCOME TO SURFACE JUMP</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>  LET'S PLAY THE GAME!!</h2>
            <div class="container">
    <button class="start-button">START</button>
  </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
