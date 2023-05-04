// import React from "react";
// import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex items-start gap-5`}>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 h-40 sm:h-80 violet-gradient" />
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I am <span className="text-[#915eff]">Malin</span>
						<p
							className={`${styles.heroSubText} mt-2 text-white-100`}>
							A frontend engineer with expert skills in{" "}
							<br className="hidden sm:block" />
							developing 3D visuals and web applications.
						</p>
					</h1>
				</div>
			</div>

			<ComputersCanvas />
		</section>
	);
};

export default Hero;
