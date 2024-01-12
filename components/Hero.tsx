import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="mx-20">
      <div className="flex justify-center  p-6 gap-40  ">
        <div className="flex flex-col gap-10 justify-between ">
          <div className="">
            <h1 className="my-10 max-w-xl">En sevdiğin oturma alanını seç</h1>
            <p>
              Geniş ve ferah oturma alanlarıyla nereyi seçerseniz seçin keyifli
              vakit geçirirsiniz..
            </p>
          </div>
          <div className="flex ">
            <Image
              src="/DSCF9251.jpg"
              alt={"genel"}
              width={600}
              height={100}
            ></Image>
          </div>
        </div>
        <div className="flex">
          <Image
            src="/Tezza-5286.jpg"
            alt={"genel"}
            width={450}
            height={200}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
