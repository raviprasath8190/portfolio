import Work from "@/components/about-work";
import CategoryTab, { PCategory } from "@/components/category-tab";
import ColoredBtn from "@/components/colored-btn";
import MouseTracker from "@/components/mouse-tracker";
import RandomLetters from "@/components/random-letters";
import SubHeading from "@/components/sub-heading";
import EduDetails, { EducationDetailsProps } from "@/components/edu-details";
import Image from "next/image";
import SkillSet, { SkillSetProps } from "@/components/skill-set";

export const CONNECTION: PCategory[] = [
  { label: "GITHUB", url: "https://github.com/raviprasath8190" },
  {
    label: "LINKEDIN",
    url: "https://www.linkedin.com/in/raviprasathdevaraju/",
  },
  { label: "EMAIL", url: "mailto:raviprasath8190@gmail.com", isEmail: true },
];

const Skill_details: SkillSetProps[] = [
  {
    heading: "EXPERTISE IN ",
    skills: [
      {
        Sname: "HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        Sname: "CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        Sname: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        Sname: "React",
        url: "https://react.dev/",
      },
      {
        Sname: "Next.Js",
        url: "https://nextjs.org/",
      },
      {
        Sname: "Tailwind.css",
        url: "https://tailwindcss.com/",
      },
    ],
  },
];

const Education_Details: EducationDetailsProps[] = [
  {
    start: 2020,
    end: 2023,
    course: "B.sc.Computer Science",
    percentage: "73%",
    college: "SRM trichy arts and science college",
    url: "https://asc.srmtrichy.edu.in/",
    location: "Trichy",
  },
  {
    start: 2019,
    end: 2020,
    course: "HSC",
    percentage: "51%",
    college: "Chellammal metric higher secondary school",
    url: "https://sowdambikaa.edu.in/",
    location: "Thiruverumbur,Trichy",
  },
  {
    start: 2017,
    end: 2018,
    course: "SSLC",
    percentage: "60%",
    college: "Chellammal metric higher secondary school",
    url: "https://sowdambikaa.edu.in/",
    location: "Thiruverumbur,Trichy",
  },
];

export default function Home() {
  return (
    <>
      <main
        style={{ transform: "perspective(1200px)" }}
        className="relative flex justify-start py-12 flex-col"
      >
        <div className="pb-2 flex justify-start items-center ">
          <div className="bg-white rounded-full h-12 w-12 overflow-hidden">
            <Image
              src={"/DRP.jpg"}
              alt="DRP"
              height={48}
              width={60}
              className="h-full"
            />
          </div>
          <div className="ml-2">
            <RandomLetters
              text="RAVIPRASATH DEVARAJU"
              className="text-xl text-green-400"
            />
            <RandomLetters
              text="Fornt-End-Developer"
              className=" flex justify-center"
            />
          </div>
        </div>
        <Work />
        <h1 className="text-green-400 text-4xl font-bold">
          I BUILT DYNAMIC AND RESPONSIVE WEB APLICATION
        </h1>
        <div className="text-xl mt-6">
          <p>
            I&apos;m a passionate Front-End Developer with strong expertise in
            building responsive and dynamic web applications using React.js,
            Next.js, JavaScript, HTML, and CSS. I specialize in developing
            reusable components, managing application state using React Hooks
            and Redux, and integrating RESTful APIs.{" "}
          </p>
          <p className="mt-4">
            This portfolio itself is a reflection of my skills built with
            Next.js, styled using Tailwind CSS, and powered by TypeScript for
            type-safe, maintainable code. I&apos;m deeply committed to writing
            clean, modular code and following best practices to ensure
            performance, accessibility, and maintainability. <br /> I enjoy
            turning complex problems into elegant, user-friendly web experiences
            and continuously learning new tools and frameworks to stay
            up-to-date in the ever-evolving frontend ecosystem.
          </p>
        </div>
        <div className="h-8" />
        <SubHeading label="CONNECT" />
        <div className="flex flex-wrap my-8">
          {CONNECTION.map((e) => {
            return <CategoryTab {...e} key={e.url} />;
          })}
        </div>
        <div className="h-10" />
        <SubHeading label="EDUCATION" />
        {Education_Details.map((e) => (
          <EduDetails {...e} key={e.college} />
        ))}

        <div className="h-12" />
        <SubHeading label="SKILLS" />
        {Skill_details.map((e) => (
          <SkillSet {...e} key={e.heading} />
        ))}

        <div className="flex mt-12">
          <ColoredBtn
            variant="normal"
            href="/RAVIPRASATH D. FrontEndDeveloper CV..pdf"
            download
            label="Download resume"
          />
          <div className="w-8" />
          <ColoredBtn
            href="/get-in-touch"
            variant="colored"
            label="Get in Touch"
          />
        </div>
      </main>
    </>
  );
}
