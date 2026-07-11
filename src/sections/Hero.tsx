import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import Typewriter from 'typewriter-effect';
import { useTheme } from "../App";
import perfilImg from '/public/Vinicius_pfp.jpeg';
import { useTranslation } from "react-i18next";

export function Hero () {
    const { t } = useTheme();
    const { t: tr } = useTranslation();
    return (
        <section className="py-20" id="about">
            <div className="flex items-center mx-auto px-6 gap-35">
                <div>
                    <div className="p-1 mb-3 text-center rounded-xl w-60 bg-purple-800 text-white">{tr('hero.opportunities')}</div>
                    <h1 className="text-4xl font-bold font-mono">
                        <Typewriter
                            options={{
                                strings: ['Vinicius Dias'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <h3 className={`text-2xl ${t.accent} font-bold font-mono`}> {tr('hero.title')} </h3>
                    <p className={`text-md w-120 mt-4 ${t.accent}`}>{tr('hero.subtitle')}</p>

                    <div className="mt-5 flex flex-col gap-3">
                        <div className="flex items-center">
                            <LuMapPin className={`inline-block mr-2 ${ t.text }`} />
                            <span className={t.text}>{tr('hero.address')}</span>
                        </div>

                        <div className="flex items-center">
                            <LuMail className={`inline-block mr-2 ${ t.text }`} />
                            <a className={`text-purple-600 ${ t.text }`} href="mailto:vinieduardodias18@gmail.com">vinieduardodias18@gmail.com</a>
                        </div>

                        <div className="flex items-center">
                            <BsLinkedin className={`inline-block mr-2 ${ t.text }`} />
                            <a className={`text-purple-600 ${ t.text }`} href="https://www.linkedin.com/in/vinicius-eduardo-564211216/" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/vinicius-eduardo-564211216/
                            </a>
                        </div>

                        <div className="flex items-center">
                            <BsGithub className={`inline-block mr-2 ${ t.text }`} />
                            <a className={`text-purple-600 ${ t.text }`} href="https://github.com/Devini0101" target="_blank" rel="noopener noreferrer">
                                github.com/Devini0101
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className={`mt-5 px-4 py-2 bg-purple-600 rounded-lg flex items-center cursor-pointer transition-transform duration-300 hover:scale-105`}>
                            <FaDownload className={`inline-block mr-2 text-white`} />
                            <a href={tr('hero.resumeExtension')} download className={`text-white`}>
                                {tr('hero.downloadResume')}
                            </a>
                        </div>

                        <div className={`mt-5 px-4 py-2 bg-purple-600 rounded-lg flex items-center cursor-pointer transition-transform duration-300 hover:scale-105`}>
                            <a href="#experience" className={`text-white`}>
                                {tr('hero.experiences')}
                            </a>
                        </div>
                    </div>

                </div>

                <div className="w-64 h-64 md:w-80 md:h-80 shrink-0">
                    <div className="relative w-full h-full">
                        <div className={`absolute -inset-1 bg-purple-800 rounded-full blur opacity-25` }></div>
                        <img
                            className={`relative rounded-full w-full h-full object-cover shadow-2xl border-4 border-purple-600`}
                            src={perfilImg}
                            alt="Imagem de perfil Vinicius Dias"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}