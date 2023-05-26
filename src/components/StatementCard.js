import Image from 'next/image.js';
import React from 'react';

export default function StatementCard() {

  return (
    <section className="bg-primary min-h-screen w-full flex">
      <div class="pt-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">Brainstorm</h2>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center lg:place-content-around p-4 relative'>
          <div class="flex rounded flex-1 relative w-24 h-24 lg:w-96 lg:h-96">
            <Image className="absolute" src='/img/png/statementCard.png' alt='StatementCard' fill style={{ objectFit: "contain" }} />
          </div>
          <p className='text-l lg:text-xl lg:w-1/3 lg:px-24 flex-1'>
            We zijn vervolgens verdergegaan met deskresearch, en hebben onze key Insights opgesteld. Verder hebben wij ook statement cards gemaakt om ons te steunen bij het brainstormen, en we hebben een korte enquete opgesteld om te weten te komen wat de gemiddelde Nederlander weet over vleermuizen en wat hun mening over vleermuizen is.
            Nadat wij alle kennis die we konden vinden in ons op hadden genomen, besloten we dat het tijd was om echt te conceptualiseren. We hebben dus een brainstormsessie / creatieve sessie gehouden, waarin we door middel van Crazy 8's en Brainwriting tot een aantal concepten zijn gekomen. We hebben vervolgens de I love you-methode toegepast om tot twee goede kandidaten te komen voor het eindproduct.
          </p>
        </div>
      </div>
    </section>
  );
}