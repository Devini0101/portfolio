import { FaBriefcase } from "react-icons/fa6"
import { Reveal } from "../components/Reveal";

export function Experience (){
    return (
        <section className="py-20 reveal" id="experience">
            <Reveal>
                <div className="flex items-center justify-center mb-3">
                    <FaBriefcase className="text-2xl mr-5 text-purple-600" />
                    <h2 className="text-2xl font-bold font-mono">Experiência Profissional</h2>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="border border-purple-600 rounded-lg p-6">
                        <div className="job-header">
                            <h3 className="text-lg font-bold font-mono">Estagiário de Desenvolvimento Java & PHP</h3>
                            <p className="font-bold font-mono text-lg text-purple-600">Banco do Brasil</p>
                            <p>Maio 2026 - Atualmente</p>
                            <p>Curitiba, Brasil</p>
                            <ul className="list-none mt-2">
                                <li className="before:content-['\2192'] before:mr-2 before:text-purple-600">Desenvolvimento e manutenção de sistemas backend utilizando Java & PHP.</li>
                                <li className="before:content-['\2192'] before:mr-2 before:text-purple-600">Criação de relatórios com ferramentas de BI.</li>
                                <li className="before:content-['\2192'] before:mr-2 before:text-purple-600">Colaboração em projetos ágeis, participando de reuniões diárias e revisões de código.</li>
                                <li className="before:content-['\2192'] before:mr-2 before:text-purple-600">Implementação de testes unitários e integração contínua para garantir a qualidade do código.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border border-purple-600 rounded-lg p-6">
                        <div className="job-header">
                            <h3 className="text-lg font-bold font-mono">Estagiário de Desenvolvimento PHP</h3>
                            <p className="font-bold font-mono text-lg text-purple-600">Meu Nominho</p>
                            <p>Agosto 2025 - Maio 2026</p>
                            <p>Curitiba, Brasil</p>
                            <ul className="list-none mt-2">
                                <li className="before:content-['\2192'] before:mr-2 before:text-purple-600">Desenvolvimento de sistemas backend com o Framework Laravel utilizando PHP e JavaScript.</li>
                                <li className="before:content-['\2192'] before:mr-2 before:text-purple-600">Manutenção de sistema legados Laravel com PHP.</li>
                                <li className="before:content-['\2192'] before:mr-2 before:text-purple-600">Manutenção de sistema Wordpress com WooCommerce.</li>
                                <li className="before:content-['\2192'] before:mr-2 before:text-purple-600">Implementação de melhoria em querys SQL.</li>
                                <li className="before:content-['\2192'] before:mr-2 before:text-purple-600">Reestruturei a arquitetura de processamento de lotes interna para que tivessemos categorização de dados e flexibilidade em sistemas internos.</li>
                                <li className="before:content-['\2192'] before:mr-2 before:text-purple-600">Implementação de ferramenta de geração de relatórios.</li>
                                <li className="before:content-['\2192'] before:mr-2 before:text-purple-600">Implementação de API de logística.</li>
                                <li className="before:content-['\2192'] before:mr-2 before:text-purple-600">Colaboração em projetos ágeis, participando de reuniões diárias e revisões de código.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}