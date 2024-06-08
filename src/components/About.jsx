import { useState } from "react";
import bannerImage from "../assets/bi2.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer & Android Developer",
    desc1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
    illo fugit explicabo blanditiis enim quaerat dolorum fugiat
    ducimus minus ipsum.`,
    desc2: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. A
    dignissimos esse itaque impedit quas omnis odit, velit ullam
    suscipit? Vel obcaecati pariatur voluptatem sapiente.
    Necessitatibus vero laborum nam quaerat ullam?
`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* image container */}
          <div className="rounded-full my-2 shadow-lg w-40 h-40 lg:w-64 lg:h-64 mx-auto lg:mx-0">
            <img
              className="rounded-full w-full h-full object-cover"
              src={data.image}
              alt="Dhage Sanket Sanjay"
            />
          </div>
          
          {/* text container  */}
          <div className="w-full flex justify-center lg:justify-start mt-8 lg:mt-0 lg:ml-8">
            <div className="space-y-5 w-full px-4 lg:px-0 lg:w-2/3">
              <h1 className="text-3xl lg:text-5xl font-semibold">{data.title}</h1>
              <p className="text-lg lg:text-xl">{data.desc1}</p>
              <p className="text-lg lg:text-xl">{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
