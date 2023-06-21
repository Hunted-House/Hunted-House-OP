import Image from 'next/image.js'
import React from 'react'

export default function Team() {

    const team = [
        { name: 'Mischa de Zeeuw', role: 'Student CMD', description: 'Ik focus mij graag op maatschappelijke en duurzame thema’s. Ik heb een passie voor fashion en grafisch ontwerp. Een esthetisch strelend ontwerp met een sterke boodschap is altijd mijn doel.', image: '/img/webp/mischa.webp' },
        { name: 'Louis Laureys', role: 'Student CMGT', description: 'Ik hou er van om technisch ingewikkelde problemen aan te pakken, en dan ook op een goede manier. Van frontend tot backend tot linux, allemaal leuk. M\'n huis is een enorme jungle, en ik hou stiekem wel van koken.', image: '/img/webp/louis.webp'},
        { name: 'Thyra van Asperen', role: 'Student CMD', description: 'Mijn sterkste punten als CMDer zijn onderzoek en conceptvorming, maar ik ben nog veel breder inzetbaar. In mijn vrije tijd ben ik altijd creatief bezig. Voor deze Design Challenge is het mijn doel om op een zo creatief mogelijke manier met het vraagstuk om te gaan.', image: '/img/webp/thyra.webp' },
        { name: 'Dewi Henninger', role: 'Student CMD', description: 'Ik houd mij graag bezig met de opleiding en ben in mijn vrije tijd ook bezig met webdesign. Ik ben graag met mijn vrienden buiten om te genieten van het goede weer.', image: '/img/webp/dewi.webp' },
        { name: 'Olivier Vromans', role: 'Student CMGT', description: 'Ik ben een full stack programmeur waarbij ik de focus leg op backed development. Buiten mijn studie werk ik in de keuken van een pannekoekenrestaurant.', image: '/img/webp/olivier.webp' },
        { name: 'Luc Karlas', role: 'Student CMGT', description: 'Ik houd mij vooral bezig met back-end programmeren. Als ik niet aan het programmeren ben, ga ik graag naar de sportschool of verdiep ik me in de wereld van de paleontologie. Tijdens dit project hoop ik mijn interesse in de natuur goed te kunnen combineren met mijn liefde voor technologie.', image: '/img/webp/luc.webp' }
    ]

    return (
        <section id='team' className="bg-secondary min-h-screen w-full">
            <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="title">Het Team achter Hunted House</h2>
                </div>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    {team.map((person) => (
                        <div className="items-center rounded-lg shadow flex flex-col sm:flex-row bg-gray-800 border-gray-700">
                            <div className='h-full w-64 relative'>
                                <Image className="rounded-lg sm:rounded-none sm:rounded-l-lg object-contain" src={person.image} alt={`${person.name}'s Avatar`} fill style={{objectFit: "cover"}} placeholder='blur' blurDataURL='/img/png/icon-white.png' 
                                sizes='(min-width: 1024px) 640px, (min-width: 768px) 50vw, 100vw'
                                />
                            </div>
                            <div className="h-full w-full flex-1 flex flex-col p-5">
                                <h3 className="text-xl font-bold tracking-tight">
                                    <p>{person.name}</p>
                                </h3>
                                <span className="text-gray-200 ">{person.role}</span>
                                <p className="mt-3 mb-4 font-light text-gray-300">{person.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </section>
    )
}
