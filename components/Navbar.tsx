import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NAV_LİNKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <section className="text-lg">
      <nav className="flex justify-around">
        <Link href={"/"}>
          <Image
            src="/crumble_logo.png"
            alt="logo"
            width={120}
            height={100}

          ></Image>
        </Link>
        <ul className="flex my-auto gap-10  ">
          {NAV_LİNKS.map((link, index) => (
            <li
              className="hover:border-b-2 hover:border-color2 hover:font-bold"
              key={index}
            >
              <a href={link.href}>{link.label} </a>
            </li>
          ))}
        </ul>
        <div className="my-auto">
          <Button title={"Bu Bi Buton Olcak"} color={"brown"}></Button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
