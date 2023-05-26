import { CheckIcon } from '@heroicons/react/24/outline'

export default function Concept1() {
  return (
    <section id="concept" className="relative isolate overflow-hidden bg-secondary px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="title">Concept 1: Table</h2>
              <p className="mt-6 text-xl leading-8 text-white">
              Veel mensen hebben geen enkel idee hoe belangrijk vleermuizen zijn voor verschillende ecosystemen binnen Nederland. Het is voor ons dus de bedoeling dat wij het nut van de vleermuis binnen ecosystemen laten zien. Dit willen we doen door middel van een immersieve ervaring waarin ecosystemen weergegeven worden als er geen vleermuizen meer zouden zijn.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-white shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/img/png/moodboard1.png"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
