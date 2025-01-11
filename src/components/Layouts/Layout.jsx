import { Outlet } from "react-router-dom";
import Navbar from "../mainComponents/Navbar";
import Footer from "../mainComponents/Footer";
import { NextUIProvider } from "@nextui-org/react";

function Layout() {
  return (
    <NextUIProvider locale="en-IN" className="font-verna">
      <div className="flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </NextUIProvider>
  );
}

export default Layout;
