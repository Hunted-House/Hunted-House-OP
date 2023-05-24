import Hero from '@/components/Hero.js';
import Nav from '@/components/Nav.js';
import Opdracht from '@/components/Opdracht';
import Team from '@/components/Team.js';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Team />
      <Opdracht />
    </main>
  );
}
