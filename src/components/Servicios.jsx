import React from "react";
import { motion } from "framer-motion";

import {
  TiShoppingCart,
  TiBrush,
  TiZoom,
  TiSocialAtCircular,
  TiSpannerOutline,
  TiCodeOutline,
} from "react-icons/ti";

const Servicios = () => {
  const servicio = [
    {
      id: 1,
      icono: <TiBrush />,
      titulo: "Diseño Web",
      descrip: "Paginas web con buen gusto, diseños webs a la medida.",
    },
    {
      id: 2,
      icono: <TiShoppingCart />,
      titulo: "E Commerce",
      descrip: "Tiendas on line, pasarelas de pagos, woocommerce, Prestashop.",
    },
    {
      id: 3,
      icono: <TiZoom />,
      titulo: "Optimización SEO",
      descrip:
        "No solo es el el diseño, tambien es necesario rankear en los motores de busquedas como Google.",
    },
    {
      id: 4,
      icono: <TiCodeOutline />,
      titulo: "Consultorias",
      descrip:
        "Te ayudo a elegir las mejores herramientas a implementar en tu web.",
    },
    {
      id: 5,
      icono: <TiSocialAtCircular />,
      titulo: "Gestion de Redes Sociales",
      descrip:
        "Mejora tu presencia en redes sociales, aumenta tu audiencia y potenciales clientes",
    },
    {
      id: 6,
      icono: <TiSpannerOutline />,
      titulo: "Mantenimiento de Sitios",
      descrip:
        "Manteniniento y actualizaciones a tu sitio web, manten tu web al día",
    },
  ];
  return (
    <div
      id="servicios"
      className="border-t-4 border-amber-500 bg-gradient-to-r from-black to-[#252734]"
    >
      <div className="encabezado py-16">
        <h2 className="text-white text-center  text-6xl">Servicios</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-1 md:gap-2 md:max-w-screen-lg justify-center mx-auto">
        {servicio.map(({ id, icono, titulo, descrip }) => (
          <div
            key={id}
            className="mb-4 mx-auto rounded bg-gradient-to-r from-cyan-500 to-blue-500 md:col-span-2 text-m md:text-xl shadow-2xl cursor-pointer"
          >
            <motion.div
              className="flex justify-center py-4 md:py-8"
              whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            >
              <span class="text-6xl shadow-inner rounded-full border border-sky-600">
                {icono}
              </span>
            </motion.div>
            <div className="px-2 md:px-6 py-4">
              <div className="mb-4">
                <h3 className="text-xl">{titulo}</h3>
              </div>
              <p className="justify-content">{descrip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
