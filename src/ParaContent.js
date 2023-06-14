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
      <div className=" pt-[2vh] text-[1.1rem]">
        <p className=" text-gray-400">Source:
        <a  rel="noreferrer" href={d[title].source} target="_blank" className=" pl-1 gap-[2px] inline-flex">
        <span><span  
        className=" text-gray-300 underline" >Wikipedia</span>
          </span> 
        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</span></a></p>
      </div>
    </div>
  );
}

export default ParaContent;
