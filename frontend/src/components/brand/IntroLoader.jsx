import React, { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";

// Sayfa açılışında (oturum başına bir kez) logo çizim animasyonu
export default function IntroLoader() {
  const [show] = useState(() => {
    try {
      return !sessionStorage.getItem("cabelo3_intro_seen");
    } catch {
      return false;
    }
  });
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (!show) return;
    sessionStorage.setItem("cabelo3_intro_seen", "1");
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 2500);
    const t2 = setTimeout(() => setGone(true), 3300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show || gone) return null;
  return (
    <div className={`intro-loader ${done ? "is-done" : ""}`} data-testid="intro-loader" onClick={() => setDone(true)} aria-hidden="true">
      <div className="intro-inner h-[320px] max-md:h-[190px]">
        <BrandLogo variant="stacked" tone="light" intro shine className="h-full" />
      </div>
    </div>
  );
}
