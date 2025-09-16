import Education from "@/components/Education";

export default function Home() {
    const socials = [
        { name: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/DoNathaniel" },
        { name: "LinkedIn", icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/vicente-nathaniel/" },
        { name: "Instagram", icon: "fa-brands fa-instagram", url: "https://www.instagram.com/visho_xx_/" },
        { name: "Discord", icon: "fa-brands fa-discord", url: "https://discord.com/users/659953436355198987" },
    ];

    return (
        <main className="w-full flex flex-col items-center justify-start bg-[#0D1117] text-[#F1F1F1]">
            <section className="w-4xl h-screen flex">
                <div className="flex flex-col justify-center text-left hover:text-white">
                    <div className="flex flex-col">
                        <h1 className="text-6xl font-bold">
                            ¡Hola! Soy <span className="text-blue-500">Nathaniel</span>
                        </h1>
                        <p className="text-lg text-gray-400">Full Stack Developer</p>
                    </div>
                    <div className="flex mt-3 gap-[10px] text-start">
                        {socials.map((social) => (
                            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-3xl hover:scale-125 transition duration-200">
                                <i className={social.icon} aria-hidden="true"></i>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <Education />
        </main>
    );
}
