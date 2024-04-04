'use client'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuItem, NavbarMenu, NavbarMenuToggle} from "@nextui-org/react";
import Logo from "./Logo";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" href="/" size="lg">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="/projects" size="lg">
            Projects
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="/contact" size="lg">
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}