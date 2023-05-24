import Image from 'next/image.js';
import React from 'react';

export default function StatementCard() {

  return (
    <div className='bg-primary min-h-screen w-full flex'>
      
      <div className='flex flex-col lg:flex-row items-center justify-center lg:place-content-around w-screen p-4 lg:p-24 '>
        <div class="flex items-center justify-center h-full mb-4rounded bg-gray-700 w-full flex-1 relative">
          <Image className="rounded-lg sm:rounded-none sm:rounded-l-lg object-contain" src='/img/png/statementCard.png' alt='StatementCard' fill style={{ objectFit: "cover" }} />
        </div>
        <p className='text-l lg:text-xl text-center lg:w-1/3 px-24 flex-1'>
          We zijn vervolgens verdergegaan met deskresearch, en hebben onze key Insights opgesteld. Verder hebben wij ook statement cards gemaakt om ons te steunen bij het brainstormen, en we hebben een korte enquete opgesteld om te weten te komen wat de gemiddelde Nederlander weet over vleermuizen en wat hun mening over vleermuizen is.
          Nadat wij alle kennis die we konden vinden in ons op hadden genomen, besloten we dat het tijd was om echt te conceptualiseren. We hebben dus een brainstormsessie / creatieve sessie gehouden, waarin we door middel van Crazy 8's en Brainwriting tot een aantal concepten zijn gekomen. We hebben vervolgens de I love you-methode toegepast om tot twee goede kandidaten te komen voor het eindproduct.  </p>
      </div>
    </div>
  );
}