import { FaGraduationCap } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { Reveal } from "../components/Reveal";

export function Education () {
    return(
        <section className="flex flex-col gap-10 py-10" id="education">
            <Reveal>
                <div className="flex items-center justify-center mb-3">
                    <FaGraduationCap className="text-2xl mr-5 text-purple-600" />
                    <h2 className="text-2xl font-bold font-mono">Escolaridade</h2>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="border border-purple-600 rounded-lg p-6">
                        <div className="education-header">
                            <h3 className="text-lg font-bold font-mono">Universidade Federal do Paraná (UFPR)</h3>
                            <p className="text-md text-gray-300">Análise e Desenvolvimento de Sistemas</p>
                            <p className="text-md text-gray-300">2025 - Atualmente (3° Semestre)</p>
                            <p className="text-md text-gray-300">Curitiba, Brasil</p>
                        </div>
                    </div>

                    <div className="border border-purple-600 rounded-lg p-6">
                        <div className="education-header">
                            <h3 className="text-lg font-bold font-mono">Uninter</h3>
                            <p className="text-md text-gray-300">Engenharia de Software (EAD)</p>
                            <p className="text-md text-gray-300">2025 - Atualmente (3° Semestre)</p>
                            <p className="text-md text-gray-300">Curitiba, Brasil</p>
                        </div>
                    </div>
                </div>


                <div className="flex items-center justify-center mt-10">
                    <FaBook className="text-2xl mr-5 text-purple-600" />
                    <h2 className="text-2xl font-bold font-mono">Cursos</h2>
                </div>

                <div className="flex flex-col gap-3 mt-2">
                    <div className="border border-purple-600 rounded-lg p-6">
                        <div className="education-header">
                            <h3 className="text-lg font-bold font-mono">CS-50 (Harvard)</h3>
                            <p className="text-md text-gray-300">Ciência da Computação</p>
                            <p className="text-md text-gray-300">2024 - 2025</p>
                            <p className="text-md text-gray-300">Curitiba, Brasil (Educação a Distância)</p>
                        </div>
                    </div>

                    <div className="border border-purple-600 rounded-lg p-6">
                        <div className="education-header">
                            <h3 className="text-lg font-bold font-mono">Wizard</h3>
                            <p className="text-md text-gray-300">Inglês</p>
                            <p className="text-md text-gray-300">2019 - 2021</p>
                            <p className="text-md text-gray-300">Curitiba, Brasil</p>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}