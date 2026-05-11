import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import {Experience} from './sections/Experience';
import {Skills} from './sections/Skills';
import { Education } from './sections/Education';
import { Projects } from './sections/Projects';
// import { About } from './sections/About';
// import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="bg-[#0d1219] text-white min-h-screen">

		<Header />
		<main className="mx-auto max-w-6xl px-8 sm:px-12 max-w-6xl">
			<Hero />
			<Experience />
			<Skills />
			<Education />
			<Projects />
			{/* <About />
			<Contact /> */}
		</main>
    </div>
  );
}

export default App;