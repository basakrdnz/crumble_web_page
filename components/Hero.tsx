import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section>
      <div className="flex justify-center gap-10 mb-20 mt-10">
        <div className="flex flex-col justify-between w-1/2 gap-6 ">
          <h1 className="flex text-8xl w-96">
            It is a long established fact that
          </h1>
          <p className="">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <Image
            src="/DSCF9251.jpg"
            alt={"genel"}
            width={800}
            height={100}
          ></Image>
        </div>
        <div className="flex ">
          <Image
            src="/Tezza-5286.jpg"
            alt={"genel"}
            width={480}
            height={200}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
