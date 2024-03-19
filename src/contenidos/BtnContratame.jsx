import React from "react";
import K from "../assets/img/k.png";
import { motion, useTime, useTransform } from "framer-motion";
import { NavLink } from "react-router-dom";

const BtnContratame = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  return (
    <div className="items-center  ">
      <motion.div style={{ rotate }}>
        <NavLink to="/contacto">
          <img
            className="h-[128px] md:h-[250px] w-[128px] md:w-[250px]"
            src={K}
          />
        </NavLink>
      </motion.div>
    </div>
  );
};

export default BtnContratame;
