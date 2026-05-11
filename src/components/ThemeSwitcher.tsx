import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../App"; // Ajuste o caminho conforme sua pasta

export function ThemeSwitcher() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      // Usamos as classes do tema para o botão também se integrar ao design
      className={`
        p-2 rounded-xl transition-all duration-300 border
        ${isDark ? 'bg-zinc-800 border-zinc-700 text-yellow-400' : 'bg-white border-zinc-200 text-purple-600'}
        hover:scale-110 active:scale-95 shadow-lg
      `}
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <HiSun className="text-xl" />
      ) : (
        <HiMoon className="text-xl" />
      )}
    </button>
  );
}