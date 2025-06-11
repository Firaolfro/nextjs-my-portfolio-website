"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabsButton from "./TabsButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React.js</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>Git & GitHub</li>
        <li>Team Management</li>
        <li>Communication</li>
        <li>Teamwork</li>
      </ul>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Arba Minch University (BSc in Software Engineering)</li>
        <li>ALX Africa (Professional Foundation)</li>
        <li>Udemy (JavaScript, React.js, Next.js, and Tailwind CSS)</li>
      </ul>
    ),
  },

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>ALX Professional Foundation</li>
        <li>Software and Hardware Maintenance</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    // <section className="text-white">

    <section id="about" className="text-white scroll-mt-28">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          // src="/images/about-image.png"
          src="/images/about3.JPG"
          width={500}
          height={500}
          alt="Illustration representing about me"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m Firaol Admasu, a dedicated front-end web developer from
            Ethiopia with a passion for solving real-world problems through
            technology. I specialize in building modern, responsive user
            interfaces using React, Next.js, and Tailwind CSS. I&apos;m focused
            on creating user-centric web applications that are both visually
            appealing and performant.
            <br />
            <br />I recently completed an internship at EagleLion Systems
            Technology PLC, where I collaborated with a team to develop a
            web-based job portal aimed at connecting job seekers with
            opportunities across Ethiopia. Using technologies like Next.js, and
            Tailwind CSS, I contributed to building responsive user interfaces,
            enhancing user experience, and implementing key features that
            address real user needs.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabsButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabsButton>
            <TabsButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabsButton>
            <TabsButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabsButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
