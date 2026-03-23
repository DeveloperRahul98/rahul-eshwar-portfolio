"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGit,
  SiVite,
  SiRedux,
  SiExpo,
  SiStorybook,
  SiFigma,
  SiPostman,
} from "react-icons/si";

const techItems = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss, name: "CSS3" },
  { icon: SiGit, name: "Git" },
  { icon: SiVite, name: "Vite" },
  { icon: SiRedux, name: "Redux" },
  { icon: SiExpo, name: "Expo" },
  { icon: SiStorybook, name: "Storybook" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiPostman, name: "Postman" },
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex shrink-0 gap-6 py-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...techItems, ...techItems].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-${i}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-card-border bg-card/60 backdrop-blur-sm hover:border-cyan/30 hover:bg-card transition-all duration-300 group cursor-default whitespace-nowrap"
            >
              <Icon className="w-5 h-5 text-muted group-hover:text-cyan transition-colors duration-300" />
              <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors duration-300">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function MarqueeForward() {
  return (
    <section className="relative z-2 py-6 overflow-hidden bg-background">
      <MarqueeRow />
    </section>
  );
}

export function MarqueeReverse() {
  return (
    <section className="relative z-2 py-6 overflow-hidden bg-background">
      <MarqueeRow reverse />
    </section>
  );
}
