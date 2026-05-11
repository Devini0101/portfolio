import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "100%" }: Props) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 }, // Começa invisível e 75px abaixo
        visible: { opacity: 1, y: 0 },  // Termina visível e na posição original
      }}
      initial="hidden"
      whileInView="visible" // Ativa a animação quando entra na tela
      viewport={{ once: true, amount: 0.25 }} // Anima apenas uma vez quando 25% do elemento aparecer
      transition={{ duration: 0.5, delay: 0.25 }} // Duração e um pequeno delay
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};