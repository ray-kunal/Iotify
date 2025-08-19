import React, { useEffect, useRef, useState } from "react";
import { User, AlignJustify } from "lucide-react";
import Sidebar from "./Sidebar";
import {Link} from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    setCanHover(window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    const onEsc = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const openNow = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };

  const closeLater = () => {
    if (!canHover) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 160);
  };

  return (
    <div className="relative z-30">
      <div className="flex items-center w-full h-16 bg-green-700 border-r-4 border-r-black">
        <Link to="/login" className="h-full arrow-div flex items-center justify-center px-4 z-10">
          <User size={32} className="cursor-pointer text-white" />
        </Link>
        <div className="flex-1 text-center text-2xl font-bold text-white">IoTify</div>
        <div
          className="relative m-2"
          onMouseEnter={canHover ? openNow : undefined}
          onMouseLeave={canHover ? closeLater : undefined}
        >
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded hover:bg-black/20 transition active:scale-95"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <AlignJustify size={28} className="text-white" />
          </button>
        </div>
      </div>

      <Sidebar
        open={open}
        onEnter={canHover ? openNow : undefined}
        onLeave={canHover ? closeLater : undefined}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
