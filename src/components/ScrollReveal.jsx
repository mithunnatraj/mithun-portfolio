/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = "", style = "fade-up", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
      });
    }, {
      threshold: 0.02, // Trigger earlier (2% visibility)
      rootMargin: "0px 0px 0px 0px" // Trigger as soon as it touches the viewport
    });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const baseStyles = "transition-all duration-1000 ease-out w-full";
  let variants = "";
  
  if (style === "fade-up") {
    variants = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 md:translate-y-24";
  } else if (style === "fade-left") {
    variants = isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 md:-translate-x-24";
  } else if (style === "fade-right") {
    variants = isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 md:translate-x-24";
  } else if (style === "scale") {
    variants = isVisible ? "opacity-100 scale-100" : "opacity-0 scale-98 md:scale-90";
  }

  return (
    <div
      ref={domRef}
      className={`${baseStyles} ${variants} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
