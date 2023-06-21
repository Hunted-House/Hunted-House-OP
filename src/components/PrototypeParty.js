import { CheckIcon } from '@heroicons/react/24/outline'

export default function PrototypeParty() {
  return (
    <section id="prototypeparty" className="relative isolate overflow-hidden bg-quaternary px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6">
        <div className="mx-auto mb-8 lg:mb-16">
          <h2 className="title text-black">Prototype Party</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-top justify-center lg:place-content-around gap-24">
          <div className='flex-1'>
            <p className="mb-4 sm:text-xl"></p>
            <p className="mt-6 text-xl leading-8 text-black">
              Na de tussenpresentatie hebben wij ook nog een prototype party gehad, waarop wij onze (lo-fi) prototypes konden presenteren en testen. Wij hebben hiervoor zowel een kijkdoos als een prototype van de sonarfunctie getest.
              Hieruit kwamen de volgende testresultaten:
            </p>
            <ul role="list" className="mt-8 space-y-8 ">
              <li className="flex gap-x-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-none stroke-black" aria-hidden="true" />
                <span className='text-black'>
                  "Houd rekening met beperkingen zoals gehoorverlies of epilepsie. Door het gebruik van licht en geluid is dit erg belangrijk."
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-none stroke-black" aria-hidden="true" />
                <span className='text-black'>
                  "Focus op storytelling om de inleving in het zijn van een vleermuis nog beter naar voren te laten komen."
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-none stroke-black" aria-hidden="true" />
                <span className='text-black'>
                  "Maak gebruik van geluid en verschillende kleuren licht."
                </span>
              </li>
            </ul>

          </div>
          <div className="flex-1">
            <img
              className="max-w-none rounded-xl bg-white shadow-xl ring-1 ring-gray-400/10"
              src="/img/png/prototypeparty.PNG"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}
