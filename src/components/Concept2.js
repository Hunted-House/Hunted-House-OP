import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline'


export default function Concept2() {

  return (
    <section id="concept" className="relative isolate overflow-hidden bg-tertiary px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="title">Concept 2: Sonar</h2>
              <p className="mt-6 text-xl leading-8 text-white">
                Er bestaat een kloof tussen wat mensen weten over de nachtelijke avonturen van een vleermuis en wat vleermuizen daadwerkelijk meemaken in een nacht. Om deze kloof te verkleinen, gebruikt Sonar een audiovisuele ervaring om duidelijk te maken hoe de sonargeluiden van een vleermuis gebruikt worden tijdens onder andere het jagen op prooi en het vinden van andere vleermuizen.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-white shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/img/png/moodboard2.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-100 text-xl lg:max-w-lg">
              <p>
                In elke ruimte (deze ruimte is donker) kun je zoeken naar informatie (in het thema van de ruimte) met behulp van de audiovisuele ervaring. Denk hierbij aan het jagen op prooi en deze prooien proberen te identificeren.
                <br></br>Door middel van microfoons & bewegingssensoren worden de geluiden en bewegingen vanuit de kamer waargenomen en wordt de richting hiervan bepaald. Door middel van de richting waar het geluid naartoe gaat wordt er een lichtgolf geprojecteerd / weergegeven, waardoor de ruimte waarin verschillende objecten te vinden zijn zichtbaar wordt gemaakt.
              </p>
              <p>
                <br></br>
                Hieronder misschien een lijst met waarom wij vinden dat dit een goed product is? of lijst weg?
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-100">
                <li className="flex gap-x-3">
                  <CheckIcon className="mt-1 h-5 w-5 flex-none text-white" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-300">Leerzaam:</strong> "Mensen leren het liefst wanneer dit op een interactieve manier is, zoals door een experience of installatie."
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="mt-1 h-5 w-5 flex-none text-white" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-300">Waarom deze manier:</strong> "vleermuizen gebruiken hun oren en stembanden om te communiceren" (sonar)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}