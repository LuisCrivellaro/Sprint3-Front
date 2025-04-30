import { useEffect } from "react";

export default function useNavbarScroll() {
  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px"; // ocultar
      } else {
        navbar.style.top = "0"; // mostrar
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
