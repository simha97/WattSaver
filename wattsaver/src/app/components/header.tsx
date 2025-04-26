import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="bg-white flex justify-center p-3">
      <Image src="/logo_wattsaver.png" alt="Logo" width={70} height={30} />

      <h1 className="py-5 mx-4 text-2xl">WattSaver</h1>
    </div>
  );
}

export default Header;
