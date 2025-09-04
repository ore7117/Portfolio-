import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    // component links to hero section in navbar, is styled
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, </span>
                    <span className="opacity-0 animate-fade-in-delay-1">My Name is </span>
                    <span className="opacity-0 animate-fade-in-delay-2 !text-[rgb(1,135,255)]"> Ore Ogundipe</span>
                </h1>

                <p> I am a CS student at Western Universtity who has a passion for building smart, user-focused, minimalistic design software.  My mission is to provide software solutions to real-world problems at any scale. I create AI-powered tools, responsive web apps, and data-driven solutions that blend clean design with real world impact </p>
                <p className="!text-[rgb(1,135,255)]"> My favourite languages to program in are Python and Java. I am also proficient in C, SQL and React</p>

                <div>
                    <a href="#projects" className="my-button text-white">View My Projects</a>
                </div>
            </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className ="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className = "h-5 w-5 text-primary"/>
        </div>
    </section>
}