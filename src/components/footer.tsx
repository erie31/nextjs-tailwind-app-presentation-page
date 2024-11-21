"use client";
import Image from "next/image";
import { Typography} from "@material-tailwind/react";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="https://www.youtube.com/@DotDager"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              DOT DAGER
            </Typography>
            <Typography color="white" className="mb-12 font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Data innecesaria de gatos 
            </Typography>
            
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            
            <div className="flex flex-col gap-2">
           
              
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="https://t.me/LumberJackGame_bot" target="_blank">
              love
            </a>{" "}
            by{" "}
            <a href="https://t.me/LumberJackGame_bot" target="_blank">
             PickleRick
            </a>
            .
          </Typography>

         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
