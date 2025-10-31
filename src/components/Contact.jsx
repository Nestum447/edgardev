import { useEffect, useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Enviando...");

    const formData = new FormData(event.target);
    formData.append("access_key", "--- ingresa tu access key aquí ---");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Éxito", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">

      <h4 className="text-center mb-2 text-lg font-semibold text-[#2563eb]">
        Contáctame
      </h4>
      <h2 className="text-center text-5xl mb-5 font-semibold">
        Ponte en contacto
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-[#1f2937]/80 dark:text-gray-300">
        ¡Me encantaría saber de ti! Si tienes alguna pregunta, comentario o sugerencia, utiliza el formulario a continuación.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <input type="hidden" name="subject" value="Nuevo envío de formulario" />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input 
            type="text" 
            placeholder="Ingresa tu nombre" 
            className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" 
            required 
            name="name" 
          />
          <input 
            type="email" 
            placeholder="Ingresa tu correo electrónico" 
            className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" 
            required 
            name="email" 
          />
        </div>

        <textarea 
          rows="6" 
          placeholder="Escribe tu mensaje" 
          className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30" 
          required 
          name="message"
        ></textarea>

        <button 
          type='submit' 
          className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover"
        >
          Enviar ahora
          <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
        </button>

        <p className='mt-4'>{result}</p>
      </form>
    </div>
  );
}
