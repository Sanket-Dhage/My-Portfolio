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
      className="main-container flex flex-col md:flex-row items-center"
    >
      {/* first dabba */}
      <div className="w-full md:w-1/2 flex items-center justify-center text-white px-4 md:px-10">
        {/* text */}
        <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
          <h3 className="text-lg md:text-2xl font-semibold">Hi, I am</h3>
          <h1 className="text-3xl md:text-5xl font-bold">Dhage Sanket Sanjay</h1>
          <h2 className="text-lg md:text-2xl">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="text-sm md:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, nemo. Omnis quis reprehenderit aspernatur culpa
            inventore rem, illum iure optio et blanditiis quia alias
            consequuntur totam dicta vel molestiae. Odio laboriosam quisquam,
            exercitationem omnis numquam vero nesciunt explicabo incidunt vel
            eaque a repellat nisi, debitis repudiandae excepturi quasi
            praesentium id!
          </p>

          <div className="icons-container flex justify-center md:justify-start space-x-5 md:item-center mt-4">
            <a href="https://www.facebook.com/sanket.dhage.543" className=" hover:bg-orange-600 border cursor-pointer px-3 py-2 md:px-4 md:py-4 w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i class="fab fa-facebook text-xl md:text-3xl"></i>
            </a>

            <a href="https://www.instagram.com/san_kya_3_9/"className=" hover:bg-orange-600 border cursor-pointer px-3 py-2 md:px-4 md:py-4 w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i class="fab fa-instagram text-xl md:text-3xl"></i>
            </a>

            <a href="https://www.youtube.com/channel/UCdge8fXnzFHO1OMu0hOYmSw"className=" hover:bg-orange-600 border cursor-pointer px-3 py-2 md:px-4 md:py-4 w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i class="fab fa-youtube text-xl md:text-3xl"></i>
            </a>

            <a href="https://www.linkedin.com/in/sanket-dhage-028a78274/"className=" hover:bg-orange-600 border cursor-pointer px-3 py-2 md:px-4 md:py-4 w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i class="fab fa-linkedin text-xl md:text-3xl"></i>
            </a>
          </div>
          <br />
          <a
            className="text-lg md:text-xl px-3 py-2 bg-orange-500 rounded-full shadow-lg mt-4"
            href=" https://whatsapp.com/dl/"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* second  dabba */}

      <div className=" w-full md:w-1/2 flex justify-center">
        {/* image */}
        <img className="rounded-full my-2 shadow-lg w-48 md:w-fit" src={bannerImage} />
      </div>
    </div>
  );
};

export default Banner;
