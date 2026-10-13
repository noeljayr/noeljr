"use client";

import { deleteUrlParam, setUrlParam } from "@/utils/url-functions";
import { AnimatePresence, motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import IconX from "./icons/IconX";
import IconPlayCircle from "./icons/IconPlayCircle";
import IconChevronLeft from "./icons/IconChevronLeft";
import type { Transition } from "motion/react";

type TransitionOptions = {
  delay?: number;
  duration?: number;
  ease?: [number, number, number, number];
};

export const motionTransition = (
  options: TransitionOptions = {},
): Transition => {
  return {
    ease: [0.25, 0.1, 0.25, 1],
    duration: 0.5,
    ...options,
  };
};

function DownloadModal() {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const state = searchParams.get("download");
  const videoState = searchParams.get("video");
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    if (state && state == "true") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [state]);

  useEffect(() => {
    if (videoState && videoState == "true") {
      setPlayVideo(true);
    } else {
      setPlayVideo(false);
    }
  }, [videoState]);

  return (
    <AnimatePresence>
      {open && (
        <div
          key={"overlay"}
          className="flex items-center justify-center fixed h-screen w-screen bg-black/10 z-2 top-0 left-0"
        ></div>
      )}

      {open && !playVideo && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          key={"modal"}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={motionTransition()}
          className="flex flex-col z-3 bg-[#F2F2F2] rounded-(--radius) w-90 max-sm:w-[calc(100vw-3rem)] fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border border-black/10"
        >
          <div className="px-4 py-2 flex items-center">
            <span className="font-p2 opacity-50">One last thing</span>
            <button
              onClick={() => deleteUrlParam("download")}
              className="h-6 w-6 cursor-pointer flex ml-auto items-center justify-center opacity-50 "
            >
              <IconX color="var(--black)" className="h-4 w-4" />
            </button>
          </div>
          <div className="w-full bg-white p-2 rounded-(--radius) border border-black/10">
            <div className="p-6 flex flex-col gap-1 items-center">
              <h4 className="text-center opacity-90 font-medium">
                Temporarily disable Play Protect{" "}
              </h4>

              <p className="opacity-75 text-center leading-[180%] font-p2 w-[32ch]">
                Since K i n needs access to SMS’ Play protect will block it for
                security reasons. Disable it temporarily then install K i n.
              </p>

              <button
                onClick={() => setUrlParam("video", "true")}
                className="cursor-pointer flex items-center gap-1 font-p2 font-bold my-6"
              >
                <IconPlayCircle className="opacity-75" />
                Watch how to disable it
              </button>
            </div>
            <a
              href="https://drive.google.com/file/d/1Te102U_h3nK7bGb2hlePe9s2Y33eFFTa/view?usp=sharing"
              className="cta w-full flex"
              target="_blank"
            >
              Download Kin
            </a>
          </div>
        </motion.div>
      )}

      {playVideo && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          key={"video"}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={motionTransition()}
          className="w-auto max-sm:w-[calc(100vw-3rem)] bg-white p-1 rounded-(--radius) border border-black/10 fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex z-3 flex-col"
        >
          <div className="p-1">
            <button
              onClick={() => deleteUrlParam("video")}
              className="h-6 w-6 border border-black/10 rounded-full cursor-pointer flex items-center justify-center"
            >
              <IconChevronLeft className="opacity-75" />
            </button>
          </div>
          <video
            controls
            autoPlay
            preload="metadata"
            src="/kin/tutorial.mp4"
            className="w-full h-[85vh] aspect-1080/2400 rounded-(--radius) overflow-hidden object-cover"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DownloadModal;
