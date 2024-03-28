"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";

function nav() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <nav
      className="lg:container mx-auto  px-3 py-8 bg-yellow-200 sm:bg-red-700 md:bg-slate-700 xl:bg-blue-700
  "
    >
      <div className="flex justify-between items-center gap-10">
        <div>
          <span className="text-xl uppercase font-bold">tflorentina</span>
          <span className="ml-3">Inicio</span>
        </div>

        <div>
          <FiMenu
            className="size-7 cursor-pointer md:hidden"
            id="toggle"
            onClick={toggleMenu}
          />
        </div>

        <div className="hidden md:flex md:justify-between grow items-center">
          <div className="space-x-5">
            <Link href={"/"}>Nosotros</Link>
            <Link href={"/"}>Servicios</Link>
            <Link href={"/"}>Contacto</Link>
          </div>
          <div className="space-x-5">
            <span>
              <FiGlobe className="inline-block mr-2" />
              Idioma
            </span>
            <span className="bg-[#59A3F9] py-1 px-2 rounded">Intranet</span>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}

      <div className={menuVisible ? "" : "hidden"} id="menu">
        <div className=" mt-10 shadow-md md:hidden hidden">
          <div className="flex flex-col text-center space-y-3 text-lg border-b-2 p-5">
            <Link href={"/"}>Nosotros</Link>
            <Link href={"/"}>Servicios</Link>
            <Link href={"/"}>Contacto</Link>
          </div>
          <div className="flex justify-center space-x-5 items-center p-5">
            <span>
              <FiGlobe className="inline-block mr-2" />
              Idioma
            </span>
            <span className="bg-[#59A3F9] py-1 px-2 rounded">Intranet</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default nav;
