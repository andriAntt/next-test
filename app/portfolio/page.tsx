import Image from "next/image";
import one from "@/assets/image/myprogects/1.webp";
import two from "@/assets/image/myprogects/2.webp";
import tree from "@/assets/image/myprogects/3.webp";
import Link from "next/link";

const data = [
  {
    src: one,
    title: "Piedwork",
    link: "https://piedwork.com",
    description: `SaaS system for a local company. 
    Implemented API gateway connecting microservices.
    Used REST API and GraphQL for front-end communication.
    Front-end developed with React, Redux, Material UI.
    Admin panel created with chart.js and Rechart.js for various charts. `,
  },
  {
    src: two,
    title: "SwissActivities",
    link: "https://www.swissactivities.com/",
    description: `App for browsing, discovering, and booking activities in Switzerland.
    Tech stack: React.js, Next.js, Node.js, Tailwind CSS, Algolia.
    Tasks include creating components, improving search, Next.js routing, implementing booking widgets, optimization, new features, and bug fixing.`,
  },
  {
    src: tree,
    title: "Engaged-MD",
    link: "https://engaged-md.com/",
    description: `Architected a complex multi-page app with Redux, Next.js.
    Tech: React, Next.js, Redux, Material-UI (MUI), Node.js.
    Tasks involved component creation, using Material Design, state management with Redux, data management, pagination, session integration, Next.js routing, and testing.`,
  },
];

export default function PortfolioPage() {
  return (
    <main className="px-5 mb-16">
      <h2 className="text-2xl mt-4 text-center mb-6">Interesting projects</h2>
      <ul className="flex flex-col gap-10">
        {data.map((project) => {
          const { src, title, link, description } = project;
          return (
            <li key={title} className="flex gap-7 justify-center md:justify-start flex-col lg:flex-row border p-2">
              <div className="lg:min-h-[210px]">
                <Image src={src} className="lg:min-h-[210px] " alt={title} />
              </div>
              <div className="flex flex-col items-center lg:items-start justify-center md:justify-start">
                <h3 className="md:text-2xl font-bold mb-4">{title}</h3>
                <p className="md:text-xl mb-4">{description}</p>
                <Link
                  href={link}
                  className="px-4 py-1 bg-[#fafafa] lg:w-[150px] w-[80%] h-[50px] lg:h-[40%] flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                  target="_blank"
                >
                  Show project
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
