"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://t.me/LumberJackGame_bot" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="juego"
          src="https://cdn4.cdn-telegram.org/file/bz5q-dCZ8BK03s_4lk82Naiq_9iHmExf1NRwaFy942kR_N1E40t06uzZE2itvowgnuA3bqfOb_mMbpu0v8WXgrL9OGjjAspC_qtx8uGauhrSjvnjVptCvou-uKsFGr01c-EHbTK_MPI7lCOhaPx5CaHWpou2OVEGAGTRbSHMjZ_sQl5qa88nFc5mXDeWYXfVN4LbGiiVdU0WAA7clVJwSf8F0z2aZow3tDQ1E4jB0Z6t_ACMMPQ58q8IeA4Q5ISIihaVtq8jRCwxpIY-AJCkzoSITOCiT30ErcV8q-zobBwtQitAaLzWuJuMBdSb32MgzDZOKAWSJOpmgT4Iouyb1w.jpg"
        />{" "}
        Lumberjack
      </Button>
    </a>
  );
}
