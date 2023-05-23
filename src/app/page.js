import Hero from '@/components/Hero.js';
import Nav from '@/components/Nav.js';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <div className="bg-secondary flex flex-col items-center justify-between p-24 h-screen">
        <p className='text-center'>This is for the next components</p>
      </div>
    </main>
  );
}
