import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function ParaContent({ d, title }) {
  return (
    <div className="">
      <AnimatePresence mode="wait">
        <motion.div
          key={title}
          initial={{ opacity: 0, y:"180%" }}
          animate={{ opacity: 1, y:"5%" }}
          exit={{ scale: 0, delay: 0, }}
        >
          <div className="  pt-6 text-[1pc]">
            <p className=" h-[8.4pc] ">{d[title].content}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ParaContent;
