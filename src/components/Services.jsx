const services = [
    {
        title: "Desarrollo Web",
        description: "Creación de sitios web modernos, responsivos y optimizados.",
        items: ["Landing pages", "Sitios informativos", "Portfolios profesionales", "Blogs"],
        icon: "fa-solid fa-globe"
    },
    {
        title: "Aplicaciones Web",
        description: "Sistemas dinámicos y herramientas de uso diario.",
        items: ["Dashboards", "Paneles de administración", "Sistemas de gestión", "APIs personalizadas"],
        icon: "fa-solid fa-code"
    },
    {
        title: "Mantenimiento",
        description: "Actualizaciones, mejoras y soporte técnico para tu sitio.",
        items: ["Actualización de contenidos", "Mejoras de diseño", "Optimización de rendimiento", "Corrección de errores"],
        icon: "fa-solid fa-wrench"
    }
];

export default function Services() {
    return (
        <section id="services" className="w-full max-w-4xl flex flex-col bg-[#0D1117] text-[#F1F1F1] py-24 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">Servicios</h2>
            <p className="text-gray-400 text-sm md:text-base mb-10 max-w-xl">
                Todos los servicios incluyen <span className="text-blue-400 font-semibold">asesoría gratuita inicial</span> vía email o videollamada Meet antes de comenzar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="bg-[#161B22] border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                            <i className={`${service.icon} text-blue-400 text-xl`}></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                        <ul className="text-gray-500 text-sm space-y-1">
                            {service.items.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <i className="fa-solid fa-check text-blue-500 text-xs"></i>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
