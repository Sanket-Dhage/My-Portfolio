import bannerImage from "../assets/bi1.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Android Developer", "Frontend Developer", "Backend Developer"], 
      
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      {/* first dabba */}
      <div className="w-full flex items-center justify-center text-white ">
        {/* text */}
        <div className="w-2/3 space-y-2  ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Dhage Sanket Sanjay</h1>
          <h2 className="text-3xl ">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, nemo. Omnis quis reprehenderit aspernatur culpa
            inventore rem, illum iure optio et blanditiis quia alias
            consequuntur totam dicta vel molestiae. Odio laboriosam quisquam,
            exercitationem omnis numquam vero nesciunt explicabo incidunt vel
            eaque a repellat nisi, debitis repudiandae excepturi quasi
            praesentium id!
          </p>

          <div className="icons-container flex space-x-5">
            <a href="https://www.facebook.com/sanket.dhage.543" className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-facebook "></i>
            </a>

            <a href="https://www.instagram.com/san_kya_3_9/"className=" hover:bg-orange-600   border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-instagram"></i>
            </a>

            <a href="https://www.youtube.com/channel/UCdge8fXnzFHO1OMu0hOYmSw"className="  hover:bg-orange-600 border  cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-youtube"></i>
            </a>

            <a href="https://www.linkedin.com/in/sanket-dhage-028a78274/"className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-linkedin-in"></i>
            </a>
          </div>
          <br />
          <a
            className=" text-2xl     px-3  py-2 bg-orange-500  rounded-full shadow-lg"
            href=" https://whatsapp.com/dl/"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* second  dabba */}

      <div className=" w-full flex justify-center">
        {/* image */}
        <img className="rounded-full my-2 shadow-lg w-fit" src={bannerImage} />
      </div>
    </div>
  );
};

export default Banner;
