import React from 'react';

export default function Assignment() {
  return (
    <section id='assignment' className="bg-tertiary min-h-screen">
      <div class="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">Het Team achter Hunted House</h2>
          <p class="font-light text-white lg:mb-16 sm:text-xl">Voor het project voor de vakken Medialab 2 (CMGT) en Design Challenge 8 (CMD) zijn wij aan het werk gezet voor de gemeente Den Haag. Wij kregen een aantal mogelijke opdrachten, waaruit wij gekozen hebben om aan het werk te gaan met vleermuizen in de stad.  De opdrachtbeschrijving gaat als volgt.</p>
        </div>
        <hr class="h-px my-8 bg-gray-200" />
        <div class="flex flex-wrap items-center justify-center">
          <p className='text-l lg:text-xl text-center pb-8'>
            Er leven dieren en planten op allerlei plekken waar de meeste mensen geen weet van hebben. Dit maakt ook dat wij tot sommige plekken geen toegang hebben, zoals bunkers waar vleermuizen nestelen of gebieden waar vogels broeden tijdens het broedseizoen. De opdracht aan jullie is om het leven op deze plekken zichtbaar te maken. Twee opties daarvoor zijn bijvoorbeeld:
          </p>
          <ul class="mb-8 space-y-4 text-left text-white">
            <li class="flex items-center space-x-3">
              {/* TODO MAKE CIRCLES */}
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <span>
                Het leven van een vleermuis: er zijn veel vleermuizen in de stad die wij nauwelijks zien. Hoe huizen deze vleermuizen in onze gebouwen? Hoe ziet hun nachtelijke tocht door de stad er uit? Wat doen ze in de spouwmuur als het te warm of te koud is? Hoe gaan ze naar hun jachtgebieden?
              </span>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <span>
                Bunkers in natuurgebieden: in het Meijendel en Westduinpark staan een aantal bunkers die niet toegankelijk zijn voor mensen. Hier leven wel dieren in, zoals vleermuizen. Hoe kunnen we bezoekers laten zien hoe de bunkers er van binnen uitzien en wat voor leven daar zit?”
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section >
  );
}