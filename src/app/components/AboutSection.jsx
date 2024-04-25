"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>Java</li>
        <li>React</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>K.T.H.M.College of Science, Nashik</li>
        <li>Walchand College Of Engineering, Sangli</li>
      </ul>
    ),
  },
  {
    title: "Key Courses",
    id: "key courses",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Structures and Algorithms</li>
        <li>Object Oriented Programming</li>
        <li>Operating Systems</li>
        <li>Database Management Systems</li>
        <li>Machine Learning</li>
        <li>Artificial Intelligence</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Cloud Computing Professionals by Google</li>
        <li>AWS AI/ML Scholar</li>
        <li>Introduction to Generative AI by Google</li>
        <li>Developer and Tehnology Simulation by Accenture UK</li>
        <li>Software Engineering Simulation by Goldman Sachs</li>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veritatis rem odio, ullam accusamus dolor corrupti perferendis fugit harum nesciunt tempore, maxime eos molestias temporibus commodi ducimus placeat nobis non debitis voluptate quasi quae numquam!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("key courses")}
              active={tab === "key courses"}
            >
              {" "}
            Key Courses{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
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
