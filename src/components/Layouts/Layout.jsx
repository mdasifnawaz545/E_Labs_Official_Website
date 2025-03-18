import React from "react";
import { Outlet } from "react-router";
import { HeroUIProvider } from "@heroui/react";
import Footer from "../mainComponents/Footer"
import Navbar from "../mainComponents/Navbar";

const Layout = () => {
  return (
    <HeroUIProvider>
      <div className="min-h-screen flex flex-col overflow-x-hidden antialiased text-textColor2 selection:bg-textColor1 selection:text-textColor2">
        <div className="fixed top-0 left-0 -z-10 h-full w-full">
          <div
            className={`absolute inset-0 h-full w-full items-center px-3 py-12 bg-[url('https://res.cloudinary.com/dpqdgcipi/image/upload/v1720238432/Background_hxyroh.png')] bg-cover`}
          ></div>
        </div>
        <Navbar />
        <main className="flex-1 w-full">
          <div className="pt-20 pb-20">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </HeroUIProvider>
  );
};

export default Layout;