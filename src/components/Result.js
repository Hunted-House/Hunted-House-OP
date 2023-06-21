import { CheckIcon } from '@heroicons/react/24/outline'
import Image from 'next/image.js'

export default function Result() {
  return (
    <section id="result" className="relative isolate overflow-hidden bg-primary px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6">
        <div className="mx-auto mb-8 lg:mb-16">
          <h2 className="title">Het resultaat: Beleef de Nacht</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-top justify-center lg:place-content-around gap-24">
          <div className="relative flex-1">
            <Image
              className="max-w-none rounded-xl bg-white shadow-xl ring-1 ring-gray-400/10"
              src="/img/png/container.PNG"
              alt=""
              fill
            />
          </div>
          <div className='flex-1 w-1/2'>
            <p className="mb-4 sm:text-xl"></p>
            <p className="mt-6 text-xl leading-8">
              Aan het eind van het project kwam alles bij elkaar om ons uiteindelijke product te vormen: Beleef de Nacht. Beleef de Nacht is een installatie ingebouwd in een container, waarin een immersieve ervaring te beleven is aan de hand van een game. In de game kruip je in de huid van een vleermuis en beleef je zo het nachtelijke leven, en kom je te weten wat de hindernissen zijn voor vleermuizen in de stad.
            </p>
            <ul role="list" className="mt-8 space-y-8 text-gray-100">
            <li className="flex gap-x-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-none " aria-hidden="true" />
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

          </div>
        </div>
      </div>
    </section>
  )
}
