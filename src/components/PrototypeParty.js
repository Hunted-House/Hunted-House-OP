import { CheckIcon } from '@heroicons/react/24/outline'

export default function PrototypeParty() {
  return (
    <section id="concept" className="relative isolate overflow-hidden bg-quaternary px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="title">Prototype Party</h2>
              <p className="mt-6 text-xl leading-8">
            Na de tussenpresentatie hebben wij ook nog een prototype party gehad, waarop wij onze (lo-fi) prototypes konden presenteren en testen. Wij hebben hiervoor zowel een kijkdoos als een prototype van de sonarfunctie getest.
            Hieruit kwamen de volgende testresultaten:

            <ul role="list" className="mt-8 space-y-8 text-gray-100">
                <li className="flex gap-x-3">
                  <CheckIcon className="mt-1 h-5 w-5 flex-none text-white" aria-hidden="true" />
                  <span>
                    "Houd rekening met beperkingen zoals gehoorverlies of epilepsie. Door het gebruik van licht en geluid is dit erg belangrijk."
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="mt-1 h-5 w-5 flex-none " aria-hidden="true" />
                  <span>
                    "Focus op storytelling om de inleving in het zijn van een vleermuis nog beter naar voren te laten komen."
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="mt-1 h-5 w-5 flex-none " aria-hidden="true" />
                  <span>
                    "Maak gebruik van geluid en verschillende kleuren licht."
                  </span>
                </li>
              </ul>

              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-white shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/img/png/prototypeparty.PNG"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
