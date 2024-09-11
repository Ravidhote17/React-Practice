import React, { useEffect } from "react";

const Card = () => {
  // Function to handle scroll and apply transformation
  const handleScroll = () => {
    const stickySections = document.querySelectorAll(".sticky");
    stickySections.forEach((section) => transform(section));
  };

  // Function to apply the transformation
  const transform = (section) => {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector(".scroll_section");
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 200 ? 200 : percentage;
    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div className="main">
        {/* First Section */}
        <Section />
        {/* Sticky Section */}
        <StickySection />
        {/* Second Section */}
        <Section />
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = () => (
  <section>
    {/* Add content for non-sticky sections if needed */}
  </section>
);

// Sticky Section Component
const StickySection = () => (
  <div className="sticky_parent h-[500vh]">
    <div className="sticky overflow-hidden sticky top-0 h-screen border-2 border-red-500">
      <div className="scroll_section absolute top-0 h-full w-[300vw] flex justify-between items-center will-change-transform">
        {/* Different content for each section */}
        <SectionContent
          title="About"
          bgColor="bg-salmon"
          content="Hi! I'm a Full-Stack Developer with a passion for learning and solving problems. I love taking on new challenges and am always eager to work with new technologies. Apart from coding, I enjoy playing cricket and keeping fit."
        />
        <SectionContent
          title="Education"
          bgColor="bg-blue-700"
          content="Bachelor's of Computer Application from Shri Vaishnav Vidyapeeth Vishwavidyalaya with an 8.2 CGPA. Completed Higher Secondary School and High School with excellent grades at Ramakrishna Mission Vidyapeeth."
        />
        <SectionContent
          title="Experience"
          bgColor="bg-green-500"
          content="Currently seeking new opportunities. Previously worked as a Web Developer Intern at Oasis Infobytes from January 2024 to February 2024."
        />
      </div>
    </div>
  </div>
);

// Reusable Content Component for Sticky Sections
const SectionContent = ({ title, bgColor, content }) => (
  <div className={`${bgColor} h-full w-full flex items-center justify-center`}>
    <div className="text-center">
      <h1 className="text-4xl mb-4">{title}</h1>
      <p className="w-1/2">{content}</p>
    </div>
  </div>
);

export default Card;


