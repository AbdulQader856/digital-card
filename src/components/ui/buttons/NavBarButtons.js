import { motion } from "framer-motion";

export default function NavLink({ label, target }) {
  return (
    <motion.div
      className="relative group inline-block px-4"
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() =>
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    >
      <span className="cursor-pointer text-base text-orange-600 dark:text-gray-100 group-hover:text-black ">
        {label}
      </span>
    </motion.div>
  );
}
