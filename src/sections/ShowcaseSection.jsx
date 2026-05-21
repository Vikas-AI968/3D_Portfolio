import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/Zelda.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
               Zelda Inspired Adventure Game - A Nostalgic Journey into Pygame Development
              </h2>
              <p className="text-white-50 md:text-xl">
                A compact, retro‑styled Pokémon‑inspired adventure built with Pygame — fast to run, friendly to tweak, and crafted for pure nostalgic fun.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/JJK.png"
                  alt="Jujutsu Kaisen simulation screenshot"
                />
              </div>
              <h2>Jujutsu Kaisen (Domain Expansion Simulation)</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#CBD5C0]">
                <img src="/images/Poke'mon.png" alt="Pokémon project screenshot" />
              </div>
              <h2>Poke'mon Legends: A Pygame Adventure</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
