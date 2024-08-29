import Image from "next/image";
import SectionHeader from "./section-header";

const Skills = () => {
  const skillImages = [
    {
      src: "/javascript.png",
      alt: "JavaScript",
      width: 111,
      height: 500,
    },
    {
      src: "/tsts.png",
      alt: "TypeScript",
      width: 111,
      height: 500,
    },
    {
      src: "/gitgit.png",
      alt: "Git",
      width: 111,
      height: 500,
    },
    {
      src: "/html.png",
      alt: "HTML",
      width: 111,
      height: 500,
    },
  ];
  return (
    <section id="skills" className="py-12">
      <SectionHeader
        subtitle="Minhas habilidades"
        title="Habilidades e Tecnologias"
      />

      <div className="flex md:flex-row items-center justify-center py-5 pb-40 gap-6 md:gap-12">
        {skillImages.map((skill) => (
          <Image
            key={skill.alt}
            src={skill.src}
            width={skill.width}
            height={skill.height}
            alt={skill.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;

