import { FaDiagramProject, FaGithub } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Reveal } from "../components/Reveal";

const MyProjects = [
    {
        title: "Fastyping",
        desc: "Website de digitação competitiva com ranking, estatísticas e níveis de dificuldade, construído com PHP puro e MySQL para armazenar os dados",
        img: "./Vinicius_pfp.jpeg",
        github: "https://github.com/Devini0101/Fastyping"
    },
    {
        title: "Gestão de Funcionários",
        desc: "Projeto de CRUD para gestão de funcionários, utilizando Python",
        img: "./Vinicius_pfp.jpeg",
        github: "https://github.com/Devini0101/gestaofuncionarios"
    },
    {
        title: "LeetCode",
        desc: "Soluções de problemas do LeetCode, implementando algoritmos e estruturas de dados em Java e Python, com explicações detalhadas para cada solução.",
        img: "./Vinicius_pfp.jpeg",
        github: "https://github.com/Devini0101/Leetcode"
    },
    {
        title: "DSA With C Language",
        desc: "implementação de algoritmos e estruturas de dados em C, como Matriz Esparsa.",
        img: "./Vinicius_pfp.jpeg",
        github: "https://github.com/Devini0101/DSA"
    },
];

export function Projects () {
    return(
        <section className="flex flex-col gap-10 reveal py-10" id="projects">
            <Reveal>
                <div className="flex items-center justify-center mb-3">
                    <FaDiagramProject className="text-2xl mr-5 text-purple-600" />
                    <h2 className="text-2xl font-bold font-mono">Projetos</h2>
                </div>

                <div className="relative px-10"> {/* Padding para as setas não ficarem em cima do conteúdo */}
                    <Swiper modules={[Navigation, Pagination]} spaceBetween={30}
                    slidesPerView={1} // 1 por vez no mobile
                    navigation pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2 }, // 2 no tablet
                        1024: { slidesPerView: 3 }, // 3 no desktop (o que você pediu)
                    }}
                    className="pb-12" >
                        {MyProjects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-600/50 transition-all group">
                                    <img src={project.img} alt={project.title + " image"}
                                    className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />

                                    <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 h-35 line-clamp-2">
                                        {project.desc}
                                    </p>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="transition-transform duration-200  border inline-flex items-center gap-2 text-purple-500 border-transparent hover:border-purple-600 hover:text-white hover:bg-purple-600 rounded-md font-medium p-2">
                                        <FaGithub /> Ver Repositório
                                    </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>
            </Reveal>
        </section>
    );
}