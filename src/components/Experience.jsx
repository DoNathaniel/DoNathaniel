const data = [
    {
        responsability: "Ingeniero de Software",
        company: "Concordia",
        date: "Mayo 2025 - Actualidad",
        location: "Santiago, Chile",
    },
    {
        responsability: "Director de Tecnología e Innovación",
        company: "Fundación Adolescente Impacta",
        date: "Septiembre 2025 - Actualidad",
        location: "Chile",
    },
    {
        responsability: "Desarrollador",
        company: "Concordia",
        date: "Diciembre 2024 - Febrero 2025",
        location: "Chile",
    }
];

export default function Experiencie() {
    return (
        <section id="experience" className="w-full max-w-4xl flex flex-col bg-[#0D1117] text-[#F1F1F1] py-24 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left">Experiencia</h2>
            <div className="flex flex-col gap-6">
                {data.map((exp, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                        <h3 className="text-xl md:text-2xl font-semibold">{exp.responsability}</h3>
                        <p className="text-blue-400 mt-1">{exp.company}</p>
                        <p className="text-gray-400 text-sm mt-2">{exp.date}</p>
                        <p className="text-gray-500 text-sm">{exp.location}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}