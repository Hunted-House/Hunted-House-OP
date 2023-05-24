import React from 'react'

export default function Team() {

    const team = [
        { name: 'Jeroen', role: 'Developer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
        { name: 'Jeroen', role: 'Developer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
        { name: 'Jeroen', role: 'Developer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
        { name: 'Jeroen', role: 'Developer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
        { name: 'Jeroen', role: 'Developer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
        { name: 'Jeroen', role: 'Developer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' }
    ]

    return (
        <div className="bg-secondary flex flex-col items-center p-24 h-screen">
            <h1 className="text-4xl font-bold text-white">Ontdek het Team</h1>
            <div className="flex flex-wrap justify-center">
                {team.map((member) => (
                    <div className="flex flex-col items-center justify-center m-4">
                        <img className="rounded-full w-32 h-32" src={member.image} alt={member.name} />
                        <h2 className="text-white text-xl font-bold">{member.name}</h2>
                        <p className="text-white text-lg">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
