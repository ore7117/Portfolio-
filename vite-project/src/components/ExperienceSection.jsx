import { Calendar, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Western AI",
      location: "London, Ontario",
      period: "Sep 2025 - Present",
      logo: "/images/westernuai_logo.jpeg", // Add your logo here
      description: [
        "Developed a spatio-temporal machine learning system that predicts neighborhood-level condo prices and helps users plan down payments based on income and savings",
        "Implemented a PostGIS-based data pipeline integrating CMHC and Census datasets.",
        "Built predictive models using LightGBM and XGBoost on open municipal and federal datasets to forecast Toronto neighborhood prices.",
      ],
    },
    {
      title: "Software Developer",
      company: "Western Cyber Society",
      location: "London, Ontario",
      period: "Sep 2025 - Present",
      logo: "/images/images.jpeg", // Add your logo here
      description: [
        "Working on Motorshield, software that detects motor failure using AI machine learning models and neural networks.",
        "Collaborating with a team of student developers to implement fault detection pipelines and data-driven diagnostics.",
        "Contributing to real-time monitoring modules and model evaluation for predictive maintenance applications.",
      ],
    },
    {
      title: "Software Developer",
      company: "Hotspex",
      location: "Toronto, Ontario",
      period: "Jul 2024 - Sep 2024",
      logo: "/images/609447d14c54360f64d5c3d1_Logo-circle.png", // Add your logo here
      description: [
        "Developed a recommendation app using React, FastAPI, and the OpenAI API.",
        "Designed a photo-sorting interface to capture user preferences.",
        "• Used Unsplash and Google Places APIs for real-time data and image content.",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the roles I've held
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background"></div>

                {/* Content Card */}
                <div className="md:w-1/2 ml-20 md:ml-0">
                  <div className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-primary mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                        />
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
