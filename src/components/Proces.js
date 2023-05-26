import React from 'react';
import Image from 'next/image.js';

export default function Proces() {



  return (
    <section id='progress' className='bg-quaternary min-h-screen w-full'>
      <div className='absolute w-full h-1/2' >
        <Image className="top-0 left-0 z-0 rotate-180 opacity-80 hidden lg:block" src='/img/png/bats.png' alt='progress' fill style={{ objectFit: "cover" }} />
      </div>
      <div class="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6 lg:pt-96 z-10 relative">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16 lg:pt-24">
          <h2 class="title text-black">Het proces</h2>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center lg:place-content-around gap-24'>
          <p className='text-black text-l lg:text-xl lg:w-1/2'>Wij zijn ons ontwerpproces begonnen met onderzoek doen naar vleermuizen. Hiervoor hebben we deskresearch gedaan, en hebben we een interview gehad met stadsecoloog Martin. Hier kregen we veel informatie over het gedrag van de vleermuizen, hun verblijfplaatsen, en hun overwinteringsplaatsen. Aan de hand van dit interview en deskresearch hebben wij een how-might-we vraag opgesteld die onze hoofdvraag werd.
          </p>
          <p className='text-l lg:text-xl lg:w-1/2 text-black text-center'>
            "Hoe kunnen wij mensen in de stad verbinden met vleermuizen in en rond Den Haag met het zichtbaar maken van de nachtelijke rituelen door middel van immersive technologie?"
          </p>
        </div>
      </div>
    </section>
  );
}