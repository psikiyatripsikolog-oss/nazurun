import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ShoppingBag, Instagram, Menu, X, ChevronRight } from "lucide-react";
import { NAV, IMG, BRAND } from "../../data/mock";
import { useCart } from "../../context/CartContext";

export function Logo({ light = true, className = "h-[46px]" }) {
  return (
    <img
      src={light ? IMG.logoLight : IMG.logoDark}
      alt="CABELO₃ Dermokozmetik logosu"
      className={`${className} w-auto select-none`}
      draggable="false"
    />
  );
}

export default function Header() {
  const { pathname } = useLocation();
  const { count, setDrawerOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const solid = scrolled || !isHome;

  const isActive = (item) =>
    item.to === "/" ? pathname === "/" : pathname.startsWith(item.to) || (item.children || []).some((c) => pathname.startsWith(c.to));

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,padding] duration-500 ${
          solid ? "bg-rg-dark shadow-[0_1px_0_rgba(255,255,255,0.06)]" : "bg-transparent"
        }`}
      >
        <div className={`rg-container flex items-center justify-between transition-[height] duration-500 ${scrolled ? "h-[64px]" : "h-[84px] max-md:h-[72px]"}`}>
          <Link to="/" aria-label="CABELO₃ ana sayfa" data-testid="header-logo" className="shrink-0">
            <Logo className={`${scrolled ? "h-[52px]" : "h-[60px] max-md:h-[50px]"} transition-[height] duration-500`} />
          </Link>

          <nav className="hidden xl:flex items-center gap-[34px]" aria-label="Ana menü">
            {NAV.map((item) => (
              <div key={item.label} className="rg-menu-item relative py-6">
                <NavLink
                  to={item.to}
                  data-testid={`nav-${item.label}`}
                  className={`flex items-center gap-1.5 font-heading text-[16px] font-medium transition-colors duration-300 ${
                    isActive(item) ? "text-rg-link" : "text-[#FFFEFE] hover:text-rg-link"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={15} strokeWidth={2.4} />}
                </NavLink>
                {item.children && (
                  <div className="rg-submenu absolute left-1/2 -translate-x-1/2 top-full pt-1">
                    <ul className="min-w-[290px] bg-rg-bg rounded-[20px] py-5 px-2 shadow-[0_20px_60px_-20px_rgba(34,27,23,0.35)]">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link
                            to={c.to}
                            className="group flex items-center justify-between px-6 py-2.5 font-heading text-[15px] text-rg-title hover:text-rg-link transition-colors duration-300"
                          >
                            <span className="transition-transform duration-300 group-hover:translate-x-1">{c.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-5 max-md:gap-3">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2.5 font-heading text-[16px] text-[#FFFEFE] hover:text-rg-link transition-colors duration-300"
              data-testid="header-instagram"
            >
              <Instagram size={20} strokeWidth={1.6} />@{BRAND.instagram}
            </a>
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Sepeti aç"
              data-testid="header-cart-button"
              className="relative w-11 h-11 rounded-full flex items-center justify-center text-[#FFFEFE] hover:text-rg-link transition-colors duration-300"
            >
              <ShoppingBag size={22} strokeWidth={1.6} />
              <span
                data-testid="header-cart-count"
                className={`absolute top-0.5 right-0 min-w-[19px] h-[19px] px-1 rounded-full bg-rg-link text-white text-[11px] font-semibold leading-[19px] text-center transition-transform duration-300 ${count ? "scale-100" : "scale-0"}`}
              >
                {count}
              </span>
            </button>
            <Link to="/urun/3lu-set" className="rg-btn sm hidden md:inline-flex" data-testid="header-cta">
              3'lü Seti İncele
            </Link>
            <button
              className="xl:hidden w-11 h-11 flex items-center justify-center text-[#FFFEFE]"
              onClick={() => setMobileOpen(true)}
              aria-label="Menüyü aç"
              data-testid="mobile-menu-open"
            >
              <Menu size={28} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-rg-dark transition-[opacity,visibility] duration-500 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        data-testid="mobile-menu"
        aria-hidden={!mobileOpen}
      >
        <div className="rg-container h-[72px] flex items-center justify-between">
          <Logo className="h-[44px]" />
          <button onClick={() => setMobileOpen(false)} aria-label="Menüyü kapat" className="w-11 h-11 flex items-center justify-center text-[#FFFEFE] hover:text-rg-link transition-colors" data-testid="mobile-menu-close">
            <X size={30} strokeWidth={1.4} />
          </button>
        </div>
        <nav className="rg-container mt-6 overflow-y-auto max-h-[calc(100vh-200px)]">
          <ul>
            {NAV.map((item, idx) => (
              <li
                key={item.label}
                className={`border-b border-rg-altbd transition-[opacity,transform] duration-700 ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: mobileOpen ? `${150 + idx * 70}ms` : "0ms" }}
              >
                <div className="flex items-center justify-between">
                  <Link to={item.to} className="block py-4 font-heading text-[28px] text-[#FFFEFE] hover:text-rg-link transition-colors">
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                      aria-label={`${item.label} alt menüsü`}
                      className="w-10 h-10 flex items-center justify-center text-[#FFFEFE]"
                    >
                      <ChevronDown className={`transition-transform duration-300 ${openSub === item.label ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.children && (
                  <div className={`grid transition-[grid-template-rows] duration-500 ${openSub === item.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <ul className="overflow-hidden">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link to={c.to} className="flex items-center gap-2 py-2 pl-2 text-[16px] text-rg-alttext hover:text-rg-link transition-colors">
                            <ChevronRight size={14} /> {c.label}
                          </Link>
                        </li>
                      ))}
                      <li className="h-4" />
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 text-[#FFFEFE] hover:text-rg-link transition-colors">
            <Instagram size={20} /> @{BRAND.instagram}
          </a>
        </nav>
      </div>
    </>
  );
}
