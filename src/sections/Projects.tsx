import { FaDiagramProject, FaGithub, FaDownload } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from "react-i18next";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Reveal } from "../components/Reveal";
import { useTheme } from "../App";


export function Projects () {
    const { t } = useTheme();
    const { t : tr} = useTranslation();
    const MyProjects = tr("projects.projects_list", { returnObjects: true }) || [];

    return(
        <section className="flex flex-col gap-10 reveal py-10" id="projects">
            <Reveal>
                <div className="flex items-center justify-center mb-3">
                    <FaDiagramProject className="text-2xl mr-5 text-purple-600" />
                    <h2 className="text-2xl font-bold font-mono">{tr('projects.title')}</h2>
                </div>

                <div className="relative px-10">
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
                                <div className="bg-zinc-800 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-600/50 transition-all group">
                                    <img src={project.img} alt={project.title + " image"}
                                    className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />

                                    <div className="p-6">
                                        <h3 className={`text-xl font-bold text-purple-500 mb-2`}>{project.title}</h3>
                                        <p className={` text-sm mb-4 h-35 line-clamp-2 text-zinc-400`}>
                                            {project.desc}
                                        </p>
                                        <div className="flex justify-center gap-4">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className={`transition-transform duration-200  border inline-flex items-center gap-2 ${t.accent} border-transparent hover:border-purple-600 hover:${t.text} hover: ${t.background} rounded-md font-medium p-2 hover:scale-105`}>
                                                <FaGithub />{tr('projects.repository_label')}
                                            </a>
                                            {project.downloadable && (
                                                <a href={project.download} target="_blank" rel="noopener noreferrer" className={`transition-transform duration-200  border inline-flex items-center gap-2 ${t.accent} border-transparent hover:border-purple-600 hover:${t.text} hover: ${t.background} rounded-md font-medium p-2 hover:scale-105`}>
                                                <FaDownload />{tr('projects.download_label')}
                                                </a>
                                            )}
                                        </div>
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