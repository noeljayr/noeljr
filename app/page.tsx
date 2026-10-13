"use client";
import "@/css/index.css"
import { useState } from "react";
import JsonLd from "@/components/JsonLd";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";
import Toast from "@/components/Toast";
import ClientWrapper from "@/components/ClientWrapper";

export default function Home() {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [caseIndex, setCaseIndex] = useState<number | null>(null);

  const handleToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 100);
  };

  const handleOpenCase = (index: number) => {
    setCaseIndex(index);
  };

  const handleCloseCase = () => {
    setCaseIndex(null);
  };

  const handleProjectHover = (img: string | null) => {
    setPreviewImage(img);
  };

  return (
    <ClientWrapper
      onToast={handleToast}
      onOpenCase={handleOpenCase}
      onProjectHover={handleProjectHover}
    >
      <JsonLd />
      <Nav />
      <Hero />
      <Work onProjectHover={handleProjectHover} onOpenCase={handleOpenCase} />
      <Capabilities />
      <About />
      <Process />
      <Contact onToast={handleToast} />
      <Footer />
      <Overlays
        previewImage={previewImage}
        caseIndex={caseIndex}
        onCloseCase={handleCloseCase}
      />
      <Toast message={toastMessage} show={showToast} />
    </ClientWrapper>
  );
}
