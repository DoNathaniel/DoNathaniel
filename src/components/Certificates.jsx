const certificates = [
    {
        name: "Liderazgo y Gestión del Cambio",
        issuer: "Escuela de Postgrado y Educación Continua FCFM - Universidad de Chile",
        date: "Octubre 2025",
        skills: "Liderazgo, Desarrollo de liderazgo",
    },
    {
        name: "Introducción a la ISO 27001",
        issuer: "Hackmetrix",
        date: "Junio 2025",
        skills: "ISO 27001",
    },
    {
        name: "Concientización de Seguridad de Información",
        issuer: "Hackmetrix",
        date: "Julio 2025",
        skills: "ISO 27001",
    },
    {
        name: "Desarrollo Seguro",
        issuer: "Hackmetrix",
        date: "Julio 2025",
        skills: "Gestión de proyectos, Desarrollo Backend",
    },
];

export default function Certificates() {
    return (
        <section id="certifications" className="w-full max-w-4xl flex flex-col bg-[#0D1117] text-[#F1F1F1] py-24 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left">Certificaciones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certificates.map((cert, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-blue-500/50 transition-colors">
                        <h3 className="text-lg font-semibold">{cert.name}</h3>
                        <p className="text-blue-400 text-sm mt-1">{cert.issuer}</p>
                        <p className="text-gray-500 text-sm mt-2">{cert.date}</p>
                        {cert.skills && (
                            <div className="flex flex-wrap gap-2 mt-3">
                                {cert.skills.split(", ").map((skill, i) => (
                                    <span key={i} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        )}
                        {cert.url && (
                            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm mt-3 inline-block">
                                Ver credencial →
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
