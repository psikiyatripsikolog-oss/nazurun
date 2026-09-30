import { useEffect } from "react";

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export default function Seo({ title, description, image }) {
  useEffect(() => {
    const full = title ? `${title} | CABELO₃ Dermokozmetik` : "CABELO₃ Dermokozmetik | Sebum Dengeleyici Saç Derisi Bakımı";
    document.title = full;
    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
    }
    setMeta("property", "og:title", full);
    if (image) setMeta("property", "og:image", image);
  }, [title, description, image]);
  return null;
}
