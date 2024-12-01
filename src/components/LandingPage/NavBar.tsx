"use client"

import React from "react";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
} from "@nextui-org/react";
import { Link } from "@nextui-org/link";

const NavBar: React.FC = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-primary">Bio</p>
      </NavbarBrand>

      {/* Uncomment this section if you want to add other nav items */}
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarContent as="div" justify="end">
        {/* Add any other items you need here */}
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar;
