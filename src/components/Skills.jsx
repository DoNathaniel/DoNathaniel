const skills = [
    "Microsoft Office",
    "Administración de Microsoft Office 365",
    "Google Workspace Admin",
    "Desarrollo Web",
    "Full Stack",
    "ISO 27001",
    "Desarrollo Seguro",
    "Transformación Digital",
];

export default function Skills() {
    return (
        <section id="skills" className="w-full max-w-4xl flex flex-col bg-[#0D1117] text-[#F1F1F1] py-24 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left">Habilidades</h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm md:text-base">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}
