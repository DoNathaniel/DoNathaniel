"use client";

import { useState } from "react";

const serviceTypes = [
    { value: "", label: "Selecciona un servicio" },
    { value: "web-estatica", label: "Web Estática (Landing, Portfolio, Blog)" },
    { value: "app-web", label: "Aplicación Web (Dashboard, Sistema)" },
    { value: "mantenimiento", label: "Mantenimiento / Actualizaciones" },
    { value: "otro", label: "Otro (especificar en mensaje)" },
];

const ONE_HOUR = 60 * 60 * 1000;
const LAST_SUBMISSION_KEY = "contact_last_submission";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");

    const checkRateLimit = () => {
        if (typeof window === "undefined") return true;
        
        const lastSubmission = localStorage.getItem(LAST_SUBMISSION_KEY);
        if (lastSubmission) {
            const timePassed = Date.now() - parseInt(lastSubmission);
            if (timePassed < ONE_HOUR) {
                const remainingMinutes = Math.ceil((ONE_HOUR - timePassed) / 60000);
                return `Ya enviaste un mensaje. Intenta en ${remainingMinutes} minuto${remainingMinutes > 1 ? "s" : ""}.`;
            }
        }
        return null;
    };

    const updateRateLimit = () => {
        if (typeof window !== "undefined") {
            localStorage.setItem(LAST_SUBMISSION_KEY, Date.now().toString());
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setError("");

        if (!form.name || !form.email || !form.message) {
            setError("Por favor completa todos los campos requeridos.");
            setStatus("idle");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setError("Por favor ingresa un email válido.");
            setStatus("idle");
            return;
        }

        const rateLimitError = checkRateLimit();
        if (rateLimitError) {
            setError(rateLimitError);
            setStatus("idle");
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    service: form.service,
                    message: form.message,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                updateRateLimit();
                setStatus("success");
                setForm({ name: "", email: "", service: "", message: "" });
            } else {
                setError(data.error || "Error al enviar el mensaje. Intenta nuevamente.");
                setStatus("idle");
            }
        } catch (err) {
            setError("Error de conexión. Intenta nuevamente.");
            setStatus("idle");
        }
    };

    return (
        <section id="contact" className="w-full max-w-4xl flex flex-col bg-[#0D1117] text-[#F1F1F1] py-24 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">¿Listo para tener tu presencia online?</h2>
            <p className="text-gray-400 text-sm md:text-base mb-10 max-w-xl">
                Cuéntame tu idea y la convertimos en una <span className="text-blue-400 font-semibold">web profesional</span>. Respuesta garantizada y <span className="text-blue-400 font-semibold">asesoría gratuita</span> vía email o Meet.
            </p>

            <form onSubmit={handleSubmit} className="bg-[#161B22] border border-gray-800 rounded-xl p-6 md:p-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Nombre *</label>
                        <input
                            type="text"
                            id="name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full bg-[#0D1117] border border-gray-700 rounded-lg px-4 py-3 text-[#F1F1F1] focus:border-blue-500 focus:outline-none transition-colors"
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email *</label>
                        <input
                            type="email"
                            id="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full bg-[#0D1117] border border-gray-700 rounded-lg px-4 py-3 text-[#F1F1F1] focus:border-blue-500 focus:outline-none transition-colors"
                            placeholder="tu@email.com"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="service" className="block text-sm text-gray-400 mb-1">Servicio de interés</label>
                    <select
                        id="service"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-[#0D1117] border border-gray-700 rounded-lg px-4 py-3 text-[#F1F1F1] focus:border-blue-500 focus:outline-none transition-colors"
                    >
                        {serviceTypes.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Mensaje *</label>
                    <textarea
                        id="message"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={5}
                        className="w-full bg-[#0D1117] border border-gray-700 rounded-lg px-4 py-3 text-[#F1F1F1] focus:border-blue-500 focus:outline-none transition-colors resize-none"
                        placeholder="Cuéntame sobre tu proyecto..."
                    />
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
                        {error}
                    </div>
                )}

                {status === "success" && (
                    <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm">
                        ¡Mensaje enviado! Te contactaré pronto. Revisa tu email para la confirmación.
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                </button>
            </form>
        </section>
    );
}
