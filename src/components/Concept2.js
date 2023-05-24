import React from 'react';
import Logo from './Logo.js';
import Icon from './Icon.js';
import Image from 'next/image';

export default function Concept2() {

  

    return (
        <div className='bg-tertiary h-screen w-full flex'>
          <div className='flex flex-col lg:flex-row items-center justify-center lg:place-content-around w-screen p-4 lg:p-24 '>            
            <div className='text-l lg:text-xl text-center lg:w-1/3'>
            <Image
                src="/img/png/moodboard2.png"
                width={600}
                height={600}
            />
            </div>
            <p className='text-l lg:text-xl text-center lg:w-1/3'>
            <b>Concept 2: Sonar</b>
            <br></br>Er bestaat een kloof tussen wat mensen weten over de nachtelijke avonturen van een vleermuis en wat vleermuizen daadwerkelijk meemaken in een nacht. Om deze kloof te verkleinen, gebruikt Sonar een audiovisuele ervaring om duidelijk te maken hoe de sonargeluiden van een vleermuis gebruikt worden tijdens onder andere het jagen op prooi en het vinden van andere vleermuizen.
            In elke ruimte (deze ruimte is donker) kun je zoeken naar informatie (in het thema van de ruimte) met behulp van de audiovisuele ervaring. Denk hierbij aan het jagen op prooi en deze prooien proberen te identificeren.
            <br></br>Door middel van microfoons & bewegingssensoren worden de geluiden en bewegingen vanuit de kamer waargenomen en wordt de richting hiervan bepaald. Door middel van de richting waar het geluid naartoe gaat wordt er een lichtgolf geprojecteerd / weergegeven, waardoor de ruimte waarin verschillende objecten te vinden zijn zichtbaar wordt gemaakt.
            </p>

          </div>
        </div>
      );
    }