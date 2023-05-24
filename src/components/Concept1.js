import React from 'react';
import Logo from './Logo.js';
import Icon from './Icon.js';
import Image from 'next/image';

export default function Concept1() {

  

    return (
        <div className='bg-secondary h-screen w-full flex'>
          <div className='flex flex-col lg:flex-row items-center justify-center lg:place-content-around w-screen p-4 lg:p-24 '>
            <p className='text-l lg:text-xl text-center lg:w-1/3'>
            <b>Concept 1: Table</b>
            <br></br>Veel mensen hebben geen enkel idee hoe belangrijk vleermuizen zijn voor verschillende ecosystemen binnen Nederland. Het is voor ons dus de bedoeling dat wij het nut van de vleermuis binnen ecosystemen laten zien. Dit willen we doen door middel van een immersieve ervaring waarin ecosystemen weergegeven worden als er geen vleermuizen meer zouden zijn.
            <br></br>Wij willen dit bereiken met gebruik van een projectie van een kaart van Nederland, waarop verschillende locaties weergegeven zijn (dit kan zowel op een tafel als een muur o.i.d.). Deze locaties vallen allemaal binnen verschillende ecosystemen, en als er op een locatie geklikt / getikt wordt, wordt er laten zien hoe dit specifieke ecosysteem eruit zou zien als vleermuizen uit zouden sterven / zouden verdwijnen. Dit kan bijvoorbeeld via een video of afbeelding.
            </p>
            <div className='text-l lg:text-xl text-center lg:w-1/3'>
            <Image
                src="/img/png/moodboard1.png"
                width={600}
                height={600}
            />
            </div>
          </div>
        </div>
      );
    }