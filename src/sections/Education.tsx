import { FaGraduationCap } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { Reveal } from "../components/Reveal";
import { useTheme } from "../App";
import { useTranslation } from "react-i18next";

export function Education () {
    const { t } = useTheme();
    const { t : tr } = useTranslation();

    const educationList = tr("education.education", { returnObjects: true }) || [];
    const coursesList = tr("education.courses", { returnObjects: true }) || [];
    return(
        <section className="flex flex-col gap-10 py-10" id="education">
            <Reveal>
                <div className="flex items-center justify-center mb-3">
                    <FaGraduationCap className={`text-2xl mr-5 ${t.accent}`} />
                    <h2 className={`text-2xl font-bold font-mono ${t.accent}`}>{tr('education.title')}</h2>
                </div>

                <div className="flex flex-col gap-3">
                    {educationList.map((edu, index) => (
                    <div className="border border-purple-600 rounded-lg p-6">
                            <div className="education-header" key={index}>
                                <h3 className="text-lg font-bold font-mono">{edu.organization}</h3>
                                <p className={`text-md ${t.textSecondary}`}>{edu.degree}</p>
                                <p className={`text-md ${t.textSecondary}`}>{edu.duration}</p>
                                <p className={`text-md ${t.textSecondary}`}>{edu.address}</p>
                            </div>
                    </div>
                    ))}
                </div>


                <div className="flex items-center justify-center mt-10">
                    <FaBook className={`text-2xl mr-5 ${t.accent}`} />
                    <h2 className={`text-2xl font-bold font-mono ${t.accent}`}>{tr('education.courses_title')}</h2>
                </div>

                <div className="flex flex-col gap-3 mt-2">
                    {coursesList.map((course, index) => (
                        <div className="border border-purple-600 rounded-lg p-6" key={index}>
                            <div className="education-header">
                                <h3 className="text-lg font-bold font-mono">{course.name}</h3>
                                <p className={`text-md ${t.textSecondary}`}>{course.provider}</p>
                                <p className={`text-md ${t.textSecondary}`}>{course.duration}</p>
                                <p className={`text-md ${t.textSecondary}`}>{course.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}