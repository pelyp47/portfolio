"use client";
import gsap from "gsap";

import "./InitialPreloader.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const InitialPreloader = ({ children }: { children: React.ReactNode }) => {
  const eagleRef = useRef<SVGPathElement>(null);

  const welcomeRef = useRef<SVGPathElement>(null);

  const [loaded, setLoaded] = useState(false);
  const eagleTl = gsap.timeline({});
  const welcomeTl = gsap.timeline({});
  useLayoutEffect(() => {
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (eagleRef.current) {
      const eagleAnimation = eagleTl.fromTo(
        ".initial-preloader__eagle path",
        {
          strokeDashoffset: 2 * eagleRef.current.getTotalLength(),
          strokeDasharray: eagleRef.current.getTotalLength()
        },
        {
          strokeDashoffset: 0,
          strokeDasharray: eagleRef.current.getTotalLength(),
          duration: 3.5,
          ease: "none",
          repeat: -1,
          onRepeat: () => {
            console.log("repeat");
            if (loaded) {
              console.log("loaded");
              if (!welcomeRef.current) return;
              eagleAnimation.pause();
              welcomeTl
                .fromTo(
                  ".initial-preloader__welcome",
                  {
                    width: 0
                  },
                  {
                    width: "20vw",
                    duration: 0.3
                  }
                )
                .fromTo(
                  ".initial-preloader__welcome  path",
                  {
                    strokeDashoffset: welcomeRef.current.getTotalLength(),
                    strokeDasharray: welcomeRef.current.getTotalLength()
                  },
                  {
                    strokeDashoffset: 0,
                    strokeDasharray: welcomeRef.current.getTotalLength(),
                    width: "20vw",
                    duration: 2
                  }
                )
                .to(
                  ".initial-preloader__images-wrapper",
                  {
                    opacity: 0,
                    duration: 0.5
                  },
                  "70%"
                )
                .to(".initial-preloader__quater", {
                  opacity: 0,
                  stagger: 0.1
                });
            }
          }
        }
      );
    }
    return () => {
      eagleTl.kill();
      welcomeTl.kill();
    };
  }, [eagleRef.current, welcomeRef.current, eagleTl, welcomeTl, loaded]);
  return (
    <>
      <div className="initial-preloader">
        <div className="initial-preloader__quater _1"></div>
        <div className="initial-preloader__quater _2"></div>
        <div className="initial-preloader__quater _3"></div>
        <div className="initial-preloader__quater _4"></div>
        <div className="initial-preloader__images-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="initial-preloader__eagle"
            viewBox="0 0 36 24"
            fill="none"
          >
            <path
              ref={eagleRef}
              strokeLinecap="round"
              d="M9.26693 19.8366C18.0192 19.4267 15.3279 22.0932 13.3411 23.0235L16.2324 22.7739C17.1809 23.2079 22.5579 18.801 20.5287 21.8664C18.4102 25.0667 33.3531 23.3151 34.5754 9.41801L30.782 7.28585L32.5897 5.17709L29.0115 3.50461L30.0867 1.02535C25.5756 0.942223 16.477 4.88574 14.4375 6.49932C11.8763 8.52559 15.6323 9.09549 16.8561 8.12734C18.0798 7.15919 18.4077 4.33692 17.4907 4.76629C16.1939 5.3735 10.2767 7.66664 10.1185 9.71653M10.1185 9.71653C9.96029 11.7664 11.1449 19.0718 12.5677 19.7228C13.9906 20.3737 1.59662 18.9756 1.18549 20.4853C0.774357 21.995 6.35582 8.84392 10.1185 9.71653Z"
              stroke="#1B1F3B"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="initial-preloader__welcome"
            viewBox="0 0 79 20"
            fill="none"
          >
            <path
              ref={welcomeRef}
              d="M1 11.0667C4.66667 9.40006 11 5.5 11 3.06672C11 -0.0955532 9 0.566725 8.5 3.06672C8 5.56672 9.5 18.0667 12 18.0667C14.5 18.0667 19 1.06673 17 1.06673C15 1.06673 16.5 18.0667 19 18.0667C21.5 18.0667 26.5 1.06673 24 1.06673C21.5 1.06673 22.5 4.56672 23.5 7.56672C24.5 10.5667 24.9505 12.5998 27.5 12.5998C30 12.5998 32 12.0998 32.5 10.5998C33 9.09984 31 7.09984 29 9.09984C27 11.0998 26.5 19.5998 31.5 17.5998C36.5 15.5998 43.5 2.06673 40.5 1.06673C37.5 0.066729 36.5 18.0667 39 18.0667C41.5 18.0667 43.9617 15.6561 45.5 12.0667C47 8.56672 49.8333 6.56672 51 10.0667C50.5 8.56672 49.4487 7.7505 48.5 8.06672C47 8.56672 45.8591 11.7365 45.3591 12.2365C44.6454 13.9616 45.5 18.0667 47.5 18.0667C48.5 18.0667 52.39 13.1034 54 12.5667C55.5 12.0667 57.8879 13.0281 58.9044 11.0667M59 12.5667C59 10.3307 58.5 8.06672 56 8.56672C53.5 9.06672 52.5 18.5667 55 18.5667C57.5 18.5667 58.8465 12.4301 58.9044 11.0667M59 12.5667C59 13.5667 58.9044 10.5667 58.9044 11.0667M59 12.5667C59.8333 12.6799 62.7 9.90252 63.5 8.56672C64.5 6.89698 62.5 17.5667 62.5 18.5667C62.5 19.5667 65 8.06672 66 8.06672C67 8.06672 65.5 18.0667 65.5 18.5667C65.5 19.0667 68 7.56672 69 8.06672C70 8.56672 67.5 19.5667 69 18.5667C70.5 17.5667 75 13.5 76 12.5C78 10.5 77.9558 7.4148 76 8.06672C73 9.06672 72 18.0667 74.5 18.0667C76.5 18.0667 78.5 16.5667 78.5 16.0667"
              stroke="#1B1F3B"
            />
          </svg>
        </div>
      </div>
      {children}
    </>
  );
};
