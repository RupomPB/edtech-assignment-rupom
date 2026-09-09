import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className="flex items-center gap-1" href={"/"}>
      <Image
      
        alt="logo-edtech.pnd"
        src={"/assets/logo.png"}
        width={50}
        height={40}
      >
        
      </Image>
      <h2 className="text-xl font-bold">Ed <span className="text-primary">  Tech</span></h2>
    </Link>
  );
};

export default Logo;
