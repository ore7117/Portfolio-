import { useState } from "react";
import {cn} from "@/lib/utils";

const ProficiencyDot = ({ level }) => {
  const colors = {
    high: 'bg-green-500',
    medium: 'bg-yellow-500', 
    learning: 'bg-red-500'
  };
  
  return <div className={`w-3 h-3 rounded-full ${colors[level]}`}></div>;
};

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", proficiency: "high" },
  { name: "JavaScript", category: "frontend", proficiency: "high" },
  { name: "React", category: "frontend", proficiency: "high" },
  { name: "Tailwind", category: "frontend", proficiency: "medium" },

  // Backend
  { name: "Python", category: "backend", proficiency: "high" },
  { name: "Java", category: "backend", proficiency: "high" },
  { name: "C", category: "backend", proficiency: "medium" },
  { name: "SQL", category: "backend", proficiency: "medium" },
  { name: "Node.js", category: "backend", proficiency: "medium" },
  { name: "FastAPI", category: "backend", proficiency: "medium" },

  // AI / ML
  { name: "NumPy", category: "ai-ml", proficiency: "medium" },
  { name: "PyTorch", category: "ai-ml", proficiency: "medium" },
  { name: "Transformers", category: "ai-ml", proficiency: "learning" },
  { name: "pandas", category: "ai-ml", proficiency: "learning" },

  // Tools
  { name: "GitHub", category: "tools", proficiency: "high" },
  { name: "VS Code", category: "tools", proficiency: "high" },
  { name: "Playwright", category: "tools", proficiency: "high" },
  { name: "Postman", category: "tools", proficiency: "medium" },
  { name: "SQLite", category: "tools", proficiency: "medium" },
];

const categories = ["all", "frontend", "backend", "tools"]



export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState ("all")

    const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
);
    return <section id="skills"
            className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className=" text-center text-3xl md:text-4xl font-bold mb-12 ">
                My <span className="text-primary">Skills </span>

            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key) => (
                    <button key={key}
                    onClick={() => setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}
                    >
                        {category}
                    </button>
                ))}
                 

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill,key) => (

                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                            <ProficiencyDot level={skill.proficiency} />
                        </div>
                    </div>

                ))}
            </div>


        </div>

    </section>
}