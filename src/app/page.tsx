"use client"

import { Button } from "@nextui-org/react";
import React from "react";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle, 
  NavbarMenu, 
  NavbarMenuItem, 
  Link, 
} from "@nextui-org/react";
import CardSlider from "@/components/CardSlider";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const cards = [ 
    { title: "NextUI", subtitle: "nextui.org", description: "Make beautiful websites regardless of your design experience.", imageUrl: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4", linkUrl: "https://github.com/nextui-org/nextui", linkText: "Visit source code on GitHub." }, 
    { title: "NextUI", subtitle: "nextui.org", description: "Make beautiful websites regardless of your design experience.", imageUrl: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4", linkUrl: "https://github.com/nextui-org/nextui", linkText: "Visit source code on GitHub." }, 
    { title: "NextUI", subtitle: "nextui.org", description: "Make beautiful websites regardless of your design experience.", imageUrl: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4", linkUrl: "https://github.com/nextui-org/nextui", linkText: "Visit source code on GitHub." }, 
    { title: "NextUI", subtitle: "nextui.org", description: "Make beautiful websites regardless of your design experience.", imageUrl: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4", linkUrl: "https://github.com/nextui-org/nextui", linkText: "Visit source code on GitHub." }, 
    { title: "NextUI", subtitle: "nextui.org", description: "Make beautiful websites regardless of your design experience.", imageUrl: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4", linkUrl: "https://github.com/nextui-org/nextui", linkText: "Visit source code on GitHub." }, 
    { title: "NextUI", subtitle: "nextui.org", description: "Make beautiful websites regardless of your design experience.", imageUrl: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4", linkUrl: "https://github.com/nextui-org/nextui", linkText: "Visit source code on GitHub." }, 
    // Add more card objects here 
    ];


  return (
    <div className="grid grid-cols-12 grid-rows-8 gap-0">
      {/* <div className="col-span-12">
        <Navbar onMenuOpenChange={setIsMenuOpen}>
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand>
              <p className="font-bold text-inherit"></p>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                  }
                  className="w-full"
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div> */}
      
        <div className="col-span-12 row-span-7 row-start-2 flex justify-center items-center"> 
          <div className="w-full max-w-screen-lg"> 
            <CardSlider title="Hiring" titleLink="#" cards={cards} /> 
          </div> 
        </div> 
      
    </div>
  );
};

export default HomePage;
