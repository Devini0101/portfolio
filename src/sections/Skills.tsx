import { BsDatabase, BsTypescript } from "react-icons/bs";
import { DiJava, DiJavascript1, DiMongodb, DiMysql, DiRedis, DiPhp, DiPostgresql, DiPython, DiNginx, DiDocker, DiGit } from "react-icons/di";
import { FaTools } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";
import { SiAngular, SiBootstrap, SiBruno, SiC, SiFramework, SiLaravel, SiNeo4J, SiPostman, SiReact, SiTailwindcss, SiGo, SiSpringboot } from "react-icons/si";
import { Reveal } from "../components/Reveal";
import { useTheme } from "../App";
import { useTranslation } from "react-i18next";

export function Skills () {
    const { t } = useTheme();
    const { t: tr } = useTranslation();
    return (
        <section className="py-10" id="skills">
            <Reveal>
                <div className="flex items-center justify-center mb-3">
                    <LuCodeXml className={`text-2xl mr-5 ${t.accent}`} />
                    <h2 className={`text-2xl font-bold font-mono ${t.accent}`}>{tr('skills.title')}</h2>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="border border-purple-600 rounded-lg p-6">
                        <div className="flex items-center gap-5">
                            <LuCodeXml className="text-2xl text-purple-600" />
                            <h3 className="text-lg font-bold font-mono">{tr('skills.programming_languages')}</h3>
                        </div>

                        <ul className="flex mt-2">

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <DiPhp size={40} className="text-md " />
                                <span className={`block text-center  font-bold font-mono mt-1`}>PHP</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <DiJava size={40} className="text-md" />
                                <span className={`block text-center  font-bold font-mono mt-1`}>Java</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <DiPython size={40} className="text-md" />
                                <span className={`block text-center  font-bold font-mono mt-1`}>Python</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <DiJavascript1 size={40} className="text-md" />
                                <span className={`block text-center  font-bold font-mono mt-1`}>JavaScript</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <BsTypescript size={40} className="text-md" />
                                <span className={`block text-center  font-bold font-mono mt-1`}>TypeScript</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <SiC size={40} className="text-md" />
                                <span className={`block text-center  font-bold font-mono mt-1`}>C</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <SiGo size={40} className="text-md" />
                                <span className={`block text-center  font-bold font-mono mt-1`}>Go</span>
                            </li>

                        </ul>
                    </div>

                    <div className="border border-purple-600 rounded-lg p-6 mt-3">
                        <div className="flex items-center gap-5">
                            <SiFramework className="text-2xl text-purple-600" />
                            <h3 className="text-lg font-bold font-mono">{tr('skills.frameworks')}</h3>
                        </div>

                        <ul className="flex mt-2">

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <SiLaravel size={40} className="text-md" />
                                <span className={`block text-centerhover:text-white font-bold font-mono mt-1`}>Laravel</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <SiSpringboot size={40} className="text-md" />
                                <span className={`block text-centerhover:text-white font-bold font-mono mt-1`}>Spring Boot</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <SiReact size={40} className="text-md" />
                                <span className={`block text-centerhover:text-white font-bold font-mono mt-1`}>React</span>
                            </li>

                            <li className={`mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center`}>
                                <SiAngular size={40} className="text-md" />
                                <span className={`block text-centerhover:text-white font-bold font-mono mt-1`}>Angular</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <SiTailwindcss size={40} className="text-md" />
                                <span className={`block text-centerfont-bold font-mono mt-1`}>Tailwind</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <SiBootstrap size={40} className="text-md" />
                                <span className={`block text-centerfont-bold font-mono mt-1`}>Bootstrap</span>
                            </li>

                        </ul>
                    </div>

                    <div className="border border-purple-600 rounded-lg p-6 mt-3">
                        <div className="flex items-center gap-5">
                            <BsDatabase className="text-2xl text-purple-600" />
                            <h3 className="text-lg font-bold font-mono">{tr('skills.databases')}</h3>
                        </div>

                        <ul className="flex mt-2">

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <DiMysql size={40} className="text-md" />
                                <span className={`block text-center  font-bold font-mono mt-1`}>MySQL</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <DiPostgresql size={40} className="text-md" />
                                <span className={`block text-center  font-bold font-mono mt-1`}>PostgreSQL</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <SiNeo4J size={40} className="text-md" />
                                <span className={`block text-center  font-bold font-mono mt-1`}>Neo4j</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <DiMongodb size={40} className="text-md" />
                                <span className={`block text-center  font-bold font-mono mt-1`}>MongoDB</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <DiRedis size={40} className="text-md" />
                                <span className={`block text-center  font-bold font-mono mt-1`}>Redis</span>
                            </li>

                        </ul>
                    </div>

                    <div className="border border-purple-600 rounded-lg p-6 mt-3">
                        <div className="flex items-center gap-5">
                            <FaTools className="text-2xl text-purple-600" />
                            <h3 className="text-lg font-bold font-mono">{tr('skills.tools')}</h3>
                        </div>

                        <ul className="flex mt-2">

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <DiNginx size={40} className="text-md" />
                                <span className={`block text-center  font-bold font-mono mt-1`}>Nginx</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <DiDocker size={40} className="text-md" />
                                <span className={`block text-center  font-bold font-mono mt-1`}>Docker</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <DiGit size={40} className="text-md" />
                                <span className={`block text-center  font-bold font-mono mt-1`}>Git</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <SiPostman size={40} className="text-md" />
                                <span className={`block text-center  font-bold font-mono mt-1`}>Postman</span>
                            </li>

                            <li className="mr-4 border border-gray-600 text-purple-600 transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-md p-2 flex flex-col items-center">
                                <SiBruno size={40} className="text-md" />
                                <span className={`block text-center  font-bold font-mono mt-1`}>Bruno</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}