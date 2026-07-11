import { FaBriefcase } from "react-icons/fa6"
import { Reveal } from "../components/Reveal";
import { useTheme } from "../App";
import { useTranslation } from "react-i18next";

interface Job {
  role: string;
  company: string;
  time: string;
  address: string;
  abilities: string[];
}


export function Experience (){
    const { t } = useTheme();
    const { t: tr } = useTranslation();

    const jobs = (tr("experience.jobs", { returnObjects: true }) as Job[]) || [];
    return (
        <section className="py-20 reveal" id="experience">
            <Reveal>
                <div className="flex items-center justify-center mb-3">
                    <FaBriefcase className="text-2xl mr-5 text-purple-600" />
                    <h2 className="text-2xl font-bold font-mono">{tr('experience.title')}</h2>
                </div>

                <div className="flex flex-col gap-3">
                    {jobs.map((job, index) => (
                    <div key={index} className="border border-purple-600 rounded-lg p-6">
                        <div className="job-header">
                            <h3 className={`text-lg font-bold font-mono ${t.accent}`}>
                                {job.role}
                            </h3>
                            <p className={`font-bold font-mono text-lg ${t.textSecondary}`}>
                                {job.company}
                            </p>
                            <p className={`${t.textSecondary}`}>{job.time}</p>
                            <p className={`${t.textSecondary}`}>{job.address}</p>
                            <ul className="list-none mt-2">
                                {job.abilities && job.abilities.map((ability, idx) => (
                                    <li key={idx} className="before:content-['\2192'] before:mr-2 before:text-purple-600">
                                        {ability}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}