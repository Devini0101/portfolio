import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Experience} from './sections/Experience';
import { Skills} from './sections/Skills';
import { Education } from './sections/Education';
import { Projects } from './sections/Projects';
// import { About } from './sections/About';
// import { Contact } from './sections/Contact';

export const themes = {
  dark: {
    background: "bg-[#0a0a0a]",
    surface: "bg-zinc-900/50",
    text: "text-purple-500",
    textSecondary: "text-zinc-400",
    border: "border-purple-800",
    accent: "text-white",
	btn_bg: "bg-purple-600",
  },
  light: {
    background: "bg-zinc-50",
    surface: "bg-white",
    text: "text-zinc-900",
    textSecondary: "text-black",
    border: "border-gray-400",
    accent: "text-purple-600",
	btn_bg: "bg-white",
  }
};

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {},
  t: themes.dark // Atalho para as classes do tema
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);
  const t = isDark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, t }}>
      <div className={`${t.background} ${t.text} min-h-screen transition-colors duration-300`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

function App() {
  const { t } = useTheme();
  return (
    <div className={` ${t.background} ${t.text} min-h-screen`}>

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