import { useTheme } from "../App";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTranslation } from "react-i18next";
import { US, BR } from 'country-flag-icons/react/3x2';

export function Header() {
    const { t: theme } = useTheme();

    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'pt' ? 'en' : 'pt';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <header className={`flex justify-around items-center sticky top-0 z-50 w-full h-18 border-b ${theme.border} backdrop-blur-md`}>
            <h2 className="text-bold text-purple-600 font-mono">Vinicius Dias</h2>

            <nav>
                <ul className="flex gap-20">
                    <li>
                        <a href="#about" className="text-purple-600 font-mono">{t('header.about')}</a>
                    </li>
                    <li>
                        <a href="#experience" className="text-purple-600 font-mono">{t('header.experience')}</a>
                    </li>
                    <li>
                        <a href="#skills" className="text-purple-600 font-mono">{t('header.skills')}</a>
                    </li>
                    <li>
                        <a href="#education" className="text-purple-600 font-mono">{t('header.education')}</a>
                    </li>
                    <li>
                        <a href="#projects" className="text-purple-600 font-mono">{t('header.projects')}</a>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-4">
                <button
                    onClick={toggleLanguage}
                    className="text-2xl hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                >
                    {i18n.language === 'pt' ? <US title="Mudar para Inglês" className="w-6 h-4" /> : <BR title="Switch to Portuguese" className="w-6 h-4" /> }
                </button>

                <ThemeSwitcher />
            </div>
        </header>
    );
}