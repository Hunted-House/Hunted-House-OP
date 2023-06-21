import Concept1 from '@/components/Concept1';
import Concept2 from '@/components/Concept2';
import Hero from '@/components/Hero.js';
import Nav from '@/components/Nav.js';
import Assignment from '@/components/Assignment';
import Team from '@/components/Team.js';
import Proces from '@/components/Proces.js';
import StatementCard from '@/components/StatementCard.js';
import PrototypeParty from '@/components/PrototypeParty';
import Result from '@/components/Result';
import Result2 from '@/components/Result2';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Team />
      <Assignment />
      <Proces />
      <StatementCard />
      <Concept1 />
      <Concept2 />
      <PrototypeParty />
      <Result />
      <Result2 />
    </main>
  );
}
