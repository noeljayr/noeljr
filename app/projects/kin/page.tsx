"use client";

import { Suspense } from "react";
import { setUrlParam } from "@/utils/url-functions";
import Link from "next/link";
import "@/css/kin.css";
import DownloadModal from "@/components/kin/DownloadModal";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] overflow-hidden gap-4 p-6 pb-0">
      <nav className="flex items-center relative justify-center">
        <a
          target="_blank"
          href="mailto:noeljayr01@gmail.com"
          className="font-bold mr-auto"
        >
          Contact
        </a>

        <Link className="absolute" href={"/kin"}>
          <img src={"/kin/logo.png"} className=" h-auto w-10 object-contain" />
        </Link>

        <button onClick={() => setUrlParam("download", "true")} className="cta">
          Download
        </button>
      </nav>

      <div className="grid auto-rows-min overflow-y-auto gap-4">
        <div className="h-full w-full flex flex-col gap-6 items-center justify-center py-10">
          <span className="flex items-center font-p3 gap-2 opacity-60">
            <img src={"/kin/android.png"} className="h-4 w-4 object-contain" />
            Only available on android
          </span>
          <div className="gap-1 flex flex-col items-center justify-center  w-[30ch]">
            <h1 className="font-bold font-h2  text-center">
              Where did your money go?
            </h1>
            <p className="leading-[180%] opacity-75 text-center font-p2 w-[85%]">
              We all had that moment. K i n helps you answer the question by
              tracking transaction sms
            </p>
          </div>

          <button
            onClick={() => setUrlParam("download", "true")}
            className="cta"
          >
            Get K i n, Its free
          </button>

          <div className="flex gap-2 items-center justify-center">
            <img
              src={"/kin/tnm.png"}
              alt="tnm mpamba logo"
              className="h-10 w-10"
            />
            <img
              src={"/kin/nb.png"}
              alt="malawi nation bank logo"
              className="h-10 w-10"
            />
            <img
              src={"/kin/airtel.png"}
              alt="airtel money"
              className="h-10 w-10"
            />
          </div>

          <p className="opacity-60 font-p3">
            Your data never leaves your phone
          </p>
        </div>

        <img
          src={"/kin/main.png"}
          className="h-auto w-[50vw] max-sm:w-full mx-auto"
        />
      </div>

      <Suspense fallback={null}>
        <DownloadModal />
      </Suspense>
    </div>
  );
}
