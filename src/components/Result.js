import { CheckIcon } from '@heroicons/react/24/outline'

export default function Result() {
  return (
    <section id="concept" className="relative isolate overflow-hidden bg-primary px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="title">Het resultaat: Beleef de Nacht</h2>
              <p className="mt-6 text-xl leading-8">
            Aan het eind van het project kwam alles bij elkaar om ons uiteindelijke product te vormen: Beleef de Nacht. Beleef de Nacht is een installatie ingebouwd in een container, waarin een immersieve ervaring te beleven is aan de hand van een game. In de game kruip je in de huid van een vleermuis en beleef je zo het nachtelijke leven, en kom je te weten wat de hindernissen zijn voor vleermuizen in de stad. 

            <ul role="list" className="mt-8 space-y-8 text-gray-100">
                <li className="flex gap-x-3">
                  <CheckIcon className="mt-1 h-5 w-5 flex-none text-white" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-300">Wat het is:</strong> Een immersieve game waarin je in de huid stapt van een vleermuis.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="mt-1 h-5 w-5 flex-none " aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-300">Hoe we dit doen:</strong> Wij laten de gebruiker het leven en de belemmeringen van de vleermuis ervaren.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="mt-1 h-5 w-5 flex-none " aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-300">Waarom we dit doen:</strong> Wij willen mensen meer verbinden met de vleermuis in de stad.
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
            src="/img/png/container.PNG"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
