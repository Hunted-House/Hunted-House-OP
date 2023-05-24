import Concept1 from '@/components/Concept1';
import Concept2 from '@/components/Concept2';
import Hero from '@/components/Hero.js';
import Nav from '@/components/Nav.js';
import Opdracht from '@/components/Opdracht';
import Proces1 from '@/components/Proces1';
import Proces2 from '@/components/Proces2';
import Team from '@/components/Team.js';

export default function Home() {
  return (
    <main>
      {/* <Nav /> */}
      <Hero />
      <Team />
      <Opdracht />
      <Proces1 />
      <Proces2 />
      <Concept1 />
      <Concept2 />
    </main>
  );
}
