import Link from "next/link";
import React from "react";

export const Navbar = () => {

  return (
    <nav className="flex px-5 justify-between w-full mb-5 bg-yellow-400 py-5 rounded-md shadow-md">
      {/* Logo de Ébano*/}
      <div>
        <Link href="/">
          <span className={`font-bold antialiased`}> Rick and Morty API </span>
        </Link>
      </div>

      {/* Botones de la mitad de la pantalla*/}
      <div className="hidden sm:block">
        <Link
          href="/analyze"
          className="p-2 m-2 hover:bg-yellow-300 rounded-md transition-all font-bold"
        >
          Data Analysis
        </Link>
      </div>
    </nav>
  );
};
