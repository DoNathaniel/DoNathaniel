import Education from "@/components/Education";
import Experiencie from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
    const socials = [
        { name: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/DoNathaniel" },
        { name: "LinkedIn", icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/vicente-nathaniel/" },
        { name: "Instagram", icon: "fa-brands fa-instagram", url: "https://www.instagram.com/visho_xx_/" },
        { name: "Discord", icon: "fa-brands fa-discord", url: "https://discord.com/users/659953436355198987" },
    ];

    return (
        <main className="w-full flex flex-col items-center bg-[#0D1117] text-[#F1F1F1]">
            <nav className="fixed right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 z-50">
                <a href="#education" className="flex items-center gap-2 group">
                    <span className="w-3 h-3 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors"></span>
                    <span className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Educación</span>
                </a>
                <a href="#experience" className="flex items-center gap-2 group">
                    <span className="w-3 h-3 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors"></span>
                    <span className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Experiencia</span>
                </a>
                <a href="#skills" className="flex items-center gap-2 group">
                    <span className="w-3 h-3 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors"></span>
                    <span className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Habilidades</span>
                </a>
                <a href="#services" className="flex items-center gap-2 group">
                    <span className="w-3 h-3 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors"></span>
                    <span className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Servicios</span>
                </a>
                <a href="#certifications" className="flex items-center gap-2 group">
                    <span className="w-3 h-3 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors"></span>
                    <span className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Certificaciones</span>
                </a>
                <a href="#contact" className="flex items-center gap-2 group">
                    <span className="w-3 h-3 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors"></span>
                    <span className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Contacto</span>
                </a>
            </nav>
            <section className="w-full max-w-4xl h-[60vh] flex px-4">
                <div className="flex flex-col justify-center text-left hover:text-white">
                    <div className="flex flex-col">
                        <h1 className="text-3xl md:text-5xl font-bold">
                            ¡Hola! Soy <span className="text-blue-500">Nathaniel</span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-400 mt-2">Desarrollador FullStack</p>
                    </div>
                    <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed max-w-xl">
                        Estudiante de Ingeniería Civil en Informática en la Universidad de Valparaíso, con 7 años de experiencia como programador autodidacta. Me apasiona la tecnología y creo firmemente que es una herramienta poderosa para generar cambios positivos en la sociedad.
                        <br /><br />
                        Actualmente participo como voluntario en Technovation Girls, apoyando a niñas en el área STEM. También desempeño como Director de Tecnología e Innovación en Fundación Adolescente Impacta.
                    </p>
                    <div className="flex mt-4 gap-[10px] text-start">
                        {socials.map((social) => (
                            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-3xl hover:scale-125 transition duration-200">
                                <i className={social.icon} aria-hidden="true"></i>
                            </a>
                        ))}
                    </div>
                    <a href="#contact" className="inline-flex mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-fit">
                        ¡Hagamos tu web realidad!
                    </a>
                </div>
            </section>
            <Education />
            <Experiencie />
            <Skills />
            <Services />
            <Certificates />
            <Contact />
        </main>
    );
}
