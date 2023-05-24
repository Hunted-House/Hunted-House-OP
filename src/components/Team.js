import Image from 'next/image.js'
import React from 'react'

export default function Team() {

    const team = [
        { name: 'Mischa de Zeeuw', role: 'Student CMD', description: 'Ik focus mij graag op maatschappelijke en duurzame thema’s. Ik heb een passie voor fashion en grafisch ontwerp. Een esthetisch strelend ontwerp met een sterke boodschap is altijd mijn doel.', image: '/img/png/mischa.png' },
        { name: 'Louis', role: 'Student CMGT', description: 'lorem ipsum', image: '/img/png/louis.png' },
        { name: 'Thyra', role: 'Student CMD', description: 'Mijn sterkste punten als CMDer zijn onderzoek en conceptvorming, maar ik ben nog veel breder inzetbaar. In mijn vrije tijd ben ik altijd creatief bezig. Voor deze Design Challenge is het mijn doel om op een zo creatief mogelijke manier met het vraagstuk om te gaan.', image: '/img/png/thyra.png' },
        { name: 'Dewi', role: 'Student CMD', description: 'Ik houd mij graag bezig met de opleiding en ben in mijn vrije tijd ook bezig met webdesign. Ik ben graag met mijn vrienden buiten om te genieten van het goede weer.', image: '/img/png/dewi.png' },
        { name: 'Olivier Vromans', role: 'Student CMGT', description: 'Ik ben een full stack programmeur waarbij ik de focus leg op backed development. Buiten mijn studie werk ik in de keuken van een pannekoekenrestaurant.', image: '/img/png/olivier.png' },
        { name: 'Luc Karlas', role: 'Student CMGT', description: 'Ik houd mij vooral bezig met back-end programmeren. Als ik niet aan het programmeren ben, ga ik graag naar de sportschool of verdiep ik me in de wereld van de paleontologie. Tijdens dit project hoop ik mijn interesse in de natuur goed te kunnen combineren met mijn liefde voor technologie.', image: '/img/png/luc.png' }
    ]

    return (
        <section id='team' className="bg-secondary">
            <div class="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">Het Team achter Hunted House</h2>
                    {/* <p class="font-light text-white lg:mb-16 sm:text-xl">Hier moet nog een kleine text over het team zelf !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p> */}
                </div>
                <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    {team.map((person) => (
                        <div class="items-center rounded-lg shadow flex flex-col sm:flex-row bg-gray-800 border-gray-700">
                            <div className='h-full w-64 relative'>
                                <Image className="rounded-lg sm:rounded-none sm:rounded-l-lg object-contain" src={person.image} alt={`${person.name}'s Avatar`} fill style={{objectFit: "cover"}} placeholder='blur' blurDataURL='/img/png/icon-white.png' />
                            </div>
                            <div class="p-5 w-full flex-1">
                                <h3 class="text-xl font-bold tracking-tight text-white">
                                    <a href="#">{person.name}</a>
                                </h3>
                                <span class="text-gray-500 ">{person.role}</span>
                                <p class="mt-3 mb-4 font-light text-gray-500">{person.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </section>
    )
}
