import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaCss3 } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import {
    SiHtml5, SiJavascript, SiReact, SiTypescript, SiTailwindcss, 
    SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql, 
    SiGit, SiGithub, SiDocker, SiFigma, 
    SiPostman, SiRabbitmq, 
} from "react-icons/si";

const skills = [
    //Frontend
    {name: "HTML/CSS", level: 85, category: "frontend", icon: [SiHtml5, FaCss3]},
    {name: "JavaScript", level: 80, category: "frontend", icon: [SiJavascript]},
    {name: "React", level: 65, category: "frontend", icon: [SiReact]},
    {name: "TypeScript", level: 85, category: "frontend", icon: [SiTypescript]},
    {name: "Tailwind CSS", level: 80, category: "frontend", icon: [SiTailwindcss]},
    {name: "Next.js", level: 70, category: "frontend", icon: [SiNextdotjs]},

    //Backend
    {name: "Node.js", level: 75, category: "backend", icon: [SiNodedotjs]},
    {name: "Express", level: 60, category: "backend", icon: [SiExpress]},
    {name: "MongoDB", level: 60, category: "backend", icon: [SiMongodb]},
    {name: "PostgreSQL", level: 90, category: "backend", icon: [SiPostgresql]},
    {name: "GraphQL", level: 40, category: "backend", icon: [SiGraphql]},

    //Tools
    {name: "Git/Github", level: 90, category: "tools", icon: [SiGit, SiGithub]},
    {name: "Docker", level: 50, category: "tools", icon: [SiDocker]},
    {name: "Figma", level: 70, category: "tools", icon: [SiFigma]},
    {name: "VS Code", level: 95, category: "tools", icon: [VscVscode]},
    {name: "Postman", level: 75, category: "tools", icon: [SiPostman]},
    {name: "RabbitMQ", level: 65, category: "tools", icon: [SiRabbitmq]},
];


const skillIconColors = new Map([
    [SiHtml5, "#E34F26"], [FaCss3, "#1572B6"], [SiJavascript, "#F7DF1E"],
    [SiReact, "#61DAFB"], [SiTypescript, "#3178C6"], [SiTailwindcss, "#06B6D4"],
    [SiNodedotjs, "#5FA04E"], [SiExpress, "#FFFFFF"], [SiMongodb, "#47A248"],
    [SiPostgresql, "#4169E1"], [SiGraphql, "#E10098"], [SiGit, "#F05032"],
    [SiDocker, "#2496ED"], [SiFigma, "#F24E1E"], [VscVscode, "#007ACC"],
    [SiPostman, "#FF6C37"], [SiRabbitmq, "#FF6600"],
]);

const monochromeIcons = new Set([
    SiNextdotjs,
    SiGithub,
    SiExpress,
]);

// const iconsWithLightTile = new Set([
//     SiPostgresql,
// ]);

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button 
                            key={category} 
                            onClick={() => setActiveCategory(category)}
                            aria-pressed={activeCategory === category}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category 
                                    ? "bg-primary text-primary-foreground" 
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name} </h3>

                                <div className="flex items-center gap-2">
                                    {skill.icon.map((Icon) => {
                                        const isMonochrome = monochromeIcons.has(Icon);

                                        return (
                                            <span
                                                key={Icon.name}
                                                className={cn(
                                                    "skill-icon inline-flex items-center justify-center",
                                                    isMonochrome && "skill-icon--monochrome",
                                                    // iconsWithLightTile.has(Icon) && "skill-icon-tile"
                                                )}
                                            >
                                                <Icon
                                                    className="text-xl"
                                                    style={
                                                        isMonochrome 
                                                            ? undefined
                                                            : skillIconColors.has(Icon)
                                                                ? { color: skillIconColors.get(Icon) }
                                                                : undefined
                                                    }
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        );  
                                    })}
                                </div>
                            </div>

                            <div
                                role="progressbar"
                                aria-label={`${skill.name} proficiency`}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-valuenow={skill.level}
                                className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden"
                            >
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />   
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};