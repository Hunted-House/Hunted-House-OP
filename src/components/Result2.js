

export default function Result2() {
  return (
    <section id="endResult" className="relative isolate overflow-hidden bg-secondary px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6">
        <div className="mx-auto mb-8 lg:mb-16">
          <h2 className="title">Het resultaat: Beleef de Nacht</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-top justify-center lg:place-content-around gap-24">
          <div className='flex-1 w-1/2'>
            <p className="mb-4 sm:text-xl"></p>
            <p className="mt-6 text-xl leading-8">
              De game begint met een intro, welke voorzien is van ondertiteling. Na de intro komt wat tot nu toe het enig uitgewerkte level is: het jagen op insecten door middel van sonar. De gebruiker tikt het scherm aan om de sonar te gebruiken, en kan zo de insecten vangen.
              Nadat alle insecten gevangen zijn, komt het volgende level (als deze uitgewerkt is), of komt de outro van de game. <br>
              </br>
              Er zijn voor de doorontwikkeling van de game ook nog een aantal aanbevelingen. Er zouden natuurlijk meer levels uitgewerkt moeten worden om de game een goed verhaal te geven. Verder zou het eindproduct in de container gemakkelijk verplaatst kunnen worden om het aan meer mensen aan te bieden.
            </p>
          </div>
          <div className="relative flex-1">
            <video
              className="w-full max-w-none rounded-xl bg-white shadow-xl ring-1 ring-gray-400/10"
              src="/video/Medialab2-Prototype.mov"
              alt=""
              width={100}
              height={100}
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>
    </section >
  )
}
