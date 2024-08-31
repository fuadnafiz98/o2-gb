import { motion } from "framer-motion";
export const Heading = ({ title }: { title: string }) => {
  return (
    <motion.div
      className="grid place-content-center h-40"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-sarif font-bold text-emerald-950 text-center">
        {title}
      </h2>
    </motion.div>
  );
};
