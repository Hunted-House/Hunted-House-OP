import React from 'react';
import Logo from './Logo.js';
import Icon from './Icon.js';

export default function Proces1() {

  

    return (
        <div className='bg-quaternary h-screen w-full flex'>
          <div className='flex flex-col lg:flex-row items-center justify-center lg:place-content-around w-screen p-4 lg:p-24 '>
            <div className='text-l lg:text-xl text-center lg:w-1/3'>
            <b>Het proces</b>
            <p>Wij zijn ons ontwerpproces begonnen met onderzoek doen naar vleermuizen. Hiervoor hebben we deskresearch gedaan, en hebben we een interview gehad met stadsecoloog Martin. Hier kregen we veel informatie over het gedrag van de vleermuizen, hun verblijfplaatsen, en hun overwinteringsplaatsen. Aan de hand van dit interview en deskresearch hebben wij een how-might-we vraag opgesteld die onze hoofdvraag werd. </p>
            </div>
            <p className='text-l lg:text-xl text-center lg:w-1/3'>
            <b>"Hoe kunnen wij mensen in de stad verbinden met vleermuizen in en rond Den Haag met het zichtbaar maken van de nachtelijke rituelen door middel van immersive technologie?"</b></p>
          </div>
        </div>
      );
    }