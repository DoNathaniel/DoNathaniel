const data = [
    {
        degree: "Ingeniería Civil en Informática",
        institution: "Universidad de Valparaíso",
        graduationDate: "2025 - 2030",
    },
    {
        degree: "Técnico en Programación / Desarrollo Web",
        institution: "Instituto Comercial Bicentenario de Viña del Mar",
        graduationDate: "2023 - 2024",
    }
];

export default function Education() {
    return (
        <section id="education" className="w-full max-w-4xl flex flex-col bg-[#0D1117] text-[#F1F1F1] py-24 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left">Educación</h2>
            <div className="flex flex-col gap-6">
                {data.map((edu, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                        <h3 className="text-xl md:text-2xl font-semibold">{edu.degree}</h3>
                        <p className="text-blue-400 mt-1">{edu.institution}</p>
                        <p className="text-gray-500 text-sm mt-2">{edu.graduationDate}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}