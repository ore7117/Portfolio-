import {Code, User, Briefcase} from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="px-4 relative py-24">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> 
                About<span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold"> Passionate Software Developer & Student </h3>

                <p className = "text-muted-foreground">
                    I’m a second-year Computer Science student at Western University with a passion for solving real-world problems through technology. My work focuses on blending AI, clean UI design, and efficient architecture to create tools people actually enjoy using.
                    Outside of coursework, I’ve built projects like an AI-powered travel recommendation system and a Depop listing optimization tool, applying data analysis and automation to improve user experiences. I’m also contributing new features to open-source games, expanding my skills in collaborative development and game mechanics.
                    I thrive in Python and Java, with additional skills in C, SQL, and React, and I’m always looking for opportunities to collaborate on innovative, impactful projects.
                </p>
                <p>
                    Outside of tech, I’m big into fashion, gaming, making Spotify playlists and staying active, whether that’s at the gym or playing sports. I also love hunting down new food spots.
                </p>
                <div className = "flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                    <a href="#contact" className = "my-button text-white">
                              {" "}
                            Download Resume
                    </a>

                      <a href="#contact" className="my-button text-white px-6 py-2 rounded-full border-primary text-primary hover:bg-primary duration-300">
                              {" "}
                            Contact Me!
                    </a>
                    
                </div>

                {/* Make this into a picture of me? */}
            </div>
            <div className="grid grid-cols-1 gap-6"> 
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-lg">Full-Stack Development</h4>
                            <p className="text-muted-foreground">Blah Blah Blah im goated</p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-lg">Full-Stack Development</h4>
                            <p className="text-muted-foreground">Blah Blah Blah im goated</p>
                        </div>
                    </div>
                </div>
                
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-lg">Full-Stack Development</h4>
                            <p className="text-muted-foreground">Blah Blah Blah im goated</p>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    </section>
};