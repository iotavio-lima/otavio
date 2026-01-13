import { MdError } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const ErrorMessage = ({ show }: { show: boolean }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed flex items-center justify-center top-0 z-50 bg-[#0D0D0D] h-12 w-96 max-[564px]:w-80 max-[416px]:w-64 max-[348px]:w-56 mt-4 rounded-2xl"
        >
          <span className="flex items-center justify-center gap-4 text-[#f2f2f2]">
            <MdError className="text-red-800" />
            Error sending message
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ErrorMessage