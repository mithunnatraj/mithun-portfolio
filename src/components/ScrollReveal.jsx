import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = "", style = "fade-up", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -5% 0px"
    });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const baseStyles = "transition-all duration-1000 ease-out w-full";
  let variants = "";
  
  // Use smaller translation distances on mobile to prevent layout breaking or harsh jumps, 
  // and larger elegant distances on md (tablet/laptop) and above.
  if (style === "fade-up") {
    variants = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 md:translate-y-24";
  } else if (style === "fade-left") {
    variants = isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12 md:-translate-x-24";
  } else if (style === "fade-right") {
    variants = isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12 md:translate-x-24";
  } else if (style === "scale") {
    variants = isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 md:scale-90";
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
