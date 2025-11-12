import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: IProps) => {


  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
     
        <nav>
          <Navbar />
        </nav>


      {/* Main content */}
      <main className="overflow-x-hidden flex-1">{children}</main>

      {/* Footer */}
      <footer className="px-4 md:px-6 max-w-7xl w-full container mx-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default CommonLayout;
