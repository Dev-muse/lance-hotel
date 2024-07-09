import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav className="flex justify-between space-x-20 my-2  items-center">
      <Logo />
      <ul className="flex space-x-4 justify-center my-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/cabins">Cabins</Link>
        </li>
        <li>
          <Link href="/accounts">accounts</Link>
        </li>
      </ul>
      <button className="bg-accent-600  text-white px-4 py-2 rounded-full">
        Contact
      </button>
    </nav>
  );
};

export default Nav;
