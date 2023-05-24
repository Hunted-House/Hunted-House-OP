import React from 'react';
import Logo from './Logo.js';
import Icon from './Icon.js';

export default function Opdracht() {

  

  return (
    <div className='bg-tertiary h-screen w-full flex'>
      <div className='flex flex-col lg:flex-row items-center justify-center lg:place-content-around w-screen p-4 lg:p-24 '>
        <div className='text-l lg:text-xl text-center lg:w-1/3'>
        <b>De opdracht</b>
        <p >Voor het project voor de vakken Medialab 2 (CMGT) en Design Challenge 8 (CMD) zijn wij aan het werk gezet voor de gemeente Den Haag. Wij kregen een aantal mogelijke opdrachten, waaruit wij gekozen hebben om aan het werk te gaan met vleermuizen in de stad.  De opdrachtbeschrijving gaat als volgt. </p> 
        </div>
        <p className='text-l lg:text-xl text-center lg:w-1/3'>
        “Er leven dieren en planten op allerlei plekken waar de meeste mensen geen weet van hebben. Dit maakt ook dat wij tot sommige plekken geen toegang hebben, zoals bunkers waar vleermuizen nestelen of gebieden waar vogels broeden tijdens het broedseizoen. De opdracht aan jullie is om het leven op deze plekken zichtbaar te maken. Twee opties daarvoor zijn bijvoorbeeld:  
        <br></br>- Het leven van een vleermuis: er zijn veel vleermuizen in de stad die wij nauwelijks zien. Hoe huizen deze vleermuizen in onze gebouwen? Hoe ziet hun nachtelijke tocht door de stad er uit? Wat doen ze in de spouwmuur als het te warm of te koud is? Hoe gaan ze naar hun jachtgebieden?  
        <br></br>- Bunkers in natuurgebieden: in het Meijendel en Westduinpark staan een aantal bunkers die niet toegankelijk zijn voor mensen. Hier leven wel dieren in, zoals vleermuizen. Hoe kunnen we bezoekers laten zien hoe de bunkers er van binnen uitzien en wat voor leven daar zit?” 
        <br></br>Wij hebben gekozen voor de eerste optie, omdat wij dachten dat we meer konden doen met het concept van vleermuizen in het bewoonde deel van de stad. </p>
      </div>
    </div>
  );
}