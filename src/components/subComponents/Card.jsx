import React from "react";
import { motion } from "framer-motion";

function Card({ userClass = `` }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      className={`w-80 flex justify-center items-center h-[28rem] border border-textColor1 rounded-md backdrop-blur-lg ${userClass}`}
    >
      <figure>
        <img
          src="https://res.cloudinary.com/dpqdgcipi/image/upload/v1719200986/Trasnparent12_1_d7siyr.png"
          alt=""
        />
      </figure>
    </motion.div>
  );
}

export default Card;
