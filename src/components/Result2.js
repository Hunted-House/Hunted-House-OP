import { CheckIcon } from '@heroicons/react/24/outline'

export default function Result2() {
  return (
    <section id="concept" className="relative isolate overflow-hidden bg-secondary px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="title">Beleef de Nacht</h2>
              <p className="mt-6 text-xl leading-8">
              De game begint met een intro, welke voorzien is van ondertiteling. Na de intro komt wat tot nu toe het enig uitgewerkte level is: het jagen op insecten door middel van sonar. De gebruiker tikt het scherm aan om de sonar te gebruiken, en kan zo de insecten vangen.
              Nadat alle insecten gevangen zijn, komt het volgende level (als deze uitgewerkt is), of komt de outro van de game. <br>
              </br>
              Er zijn voor de doorontwikkeling van de game ook nog een aantal aanbevelingen. Er zouden natuurlijk meer levels uitgewerkt moeten worden om de game een goed verhaal te geven. Verder zou het eindproduct in de container gemakkelijk verplaatst kunnen worden om het aan meer mensen aan te bieden.  
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
