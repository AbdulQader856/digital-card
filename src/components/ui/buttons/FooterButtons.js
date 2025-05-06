import { motion } from "framer-motion";

export default function FooterLink({ label, target }) {
  return (
    <motion.div
      className="relative group inline-block"
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() =>
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    >
      <span className="cursor-pointer text-base dark:text-gray-100 group-hover:text-orange-500 ">
        {label}
      </span>
    </motion.div>
  );
}
