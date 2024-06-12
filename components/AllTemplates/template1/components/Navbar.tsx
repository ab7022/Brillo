"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/AllTemplates/template1/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Navbar({ className }: { className?: String }) {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
const basePath = pathname.split('/').slice(0, 3).join('/'); 

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <Link href={`${basePath}/`}>
      <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
      
        <Link href={`${basePath}/#about`}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About"
          ></MenuItem>
        </Link>
  
        <Link href={`${basePath}/#project`}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
          ></MenuItem>
        </Link>
        <Link href={`${basePath}/#contact`}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Me"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
export default Navbar;
