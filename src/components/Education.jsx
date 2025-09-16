const data = [
    {
        degree: "Ingenieria Civil en Informática",
        institution: "Universidad de Valparaíso",
        graduationDate: "Cursando",
    },
    {
        degree: "Tecnico en Programación",
        institution: "Instituto Comercial Bicentenario Viña del Mar",
        graduationDate: "Septiembre 2025",
    }
]

export default function Education() {
    return (
        <section className="w-4xl flex flex-col justify-center bg-[#0D1117] text-[#F1F1F1] py-10">
            <h2 className="text-4xl font-bold mb-6">Educación</h2>
            <div className="w-full max-w-4xl flex flex-col">    
                {data.map((edu, index) => (
                    <div key={index} className={`py-5 px-5 flex items-center gap-6 border-l-4 border-white/50 hover:border-white transition duration-300`}>
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                            <p className="text-lg text-gray-400">{edu.institution} | {edu.graduationDate}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}