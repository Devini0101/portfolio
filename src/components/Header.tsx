import { useTheme } from "../App";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header () {
    const { t } = useTheme();
    return (
        <header className={`flex justify-around items-center sticky top-0 z-50 w-full h-18 border-b ${t.border}  backdrop-blur-md`}>
            <h2 className="text-bold text-purple-600 font-mono">Vinicius Dias</h2>
            <nav>
                <ul className="flex gap-20">
                    <li>
                        <a href="#about" className={" text-purple-600 font-mono"}>Sobre</a>
                    </li>

                    <li>
                        <a href="#experience" className={" text-purple-600 font-mono"}>Experiência</a>
                    </li>

                    <li>
                        <a href="#skills" className={" text-purple-600 font-mono"}>Habilidades</a>
                    </li>

                    <li>
                        <a href="#education" className={" text-purple-600 font-mono"}>Educação</a>
                    </li>
                </ul>
            </nav>
            <ThemeSwitcher />
        </header>
    );
}