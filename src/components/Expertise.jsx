import bannerBackground from "../assets/banner_wallpaper.svg";
const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-16 text-5xl font-bold underline  text-center lg:text-6xl">
          My Expertise
        </h1>
        {/* box section */}

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container flex flex-col lg:flex-row items-center py-16"
        >
          <div className="flex justify-center lg:w-1/2 lg:pr-12">
            {/* text container */}
            <div className="w-4/5 lg:w-2/3 text-white text-center lg:text-left space-y-6">
              <h1 className="text-3xl lg:text-4xl font-bold">I love these technologies</h1>
              <p  className="text-lg lg:text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                autem facere molestias libero eaque praesentium, dignissimos
                dolores, cum nisi rerum, modi corporis eligendi harum. Ut
                provident saepe in et ipsum.
              </p>
              <button className=" px-6 py-3 bg-orange-500 text-xl lg:text-2xl rounded-full shadow-lg">
                Hire Me
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-10 lg:mt-0 lg:w-1/2 lg:pl-12">
            {/* skills container */}

            <div className="w-4/5 lg:w-2/3 flex flex-wrap justify-center space-x-3">
              <p className="bg-gray-300 px-4 py-2 mt-2 lg:mt-0 lg:mr-2 lg:last:mr-0 rounded-full text-lg lg:text-xl hover:bg-orange-500 cursor-pointer">
                Python 
              </p>

              <p className="bg-gray-300 px-4 py-2 mt-2 lg:mt-0 lg:mr-2 lg:last:mr-0 rounded-full text-lg lg:text-xl hover:bg-orange-500 cursor-pointerr">
                J2EE
              </p>

              <p className="bg-gray-300 px-4 py-2 mt-2 lg:mt-0 lg:mr-2 lg:last:mr-0 rounded-full text-lg lg:text-xl hover:bg-orange-500 cursor-pointer">
                Hibernate(ORM Tool)
              </p>

              <p className="bg-gray-300 px-4 py-2 mt-2 lg:mt-0 lg:mr-2 lg:last:mr-0 rounded-full text-lg lg:text-xl hover:bg-orange-500 cursor-pointer">
                Spring Framework
              </p>
              <p className="bg-gray-300 px-4 py-2 mt-2 lg:mt-0 lg:mr-2 lg:last:mr-0 rounded-full text-lg lg:text-xl hover:bg-orange-500 cursor-pointer">
                Spring Boot Framework
              </p>
              <p className="bg-gray-300 px-4 py-2 mt-2 lg:mt-0 lg:mr-2 lg:last:mr-0 rounded-full text-lg lg:text-xl hover:bg-orange-500 cursor-pointer">
                Spring Security
              </p>
              <p className="bg-gray-300 px-4 py-2 mt-2 lg:mt-0 lg:mr-2 lg:last:mr-0 rounded-full text-lg lg:text-xl hover:bg-orange-500 cursor-pointer">
                Javascript
              </p>
              <p className="bg-gray-300 px-4 py-2 mt-2 lg:mt-0 lg:mr-2 lg:last:mr-0 rounded-full text-lg lg:text-xl hover:bg-orange-500 cursor-pointer">
                ReactJS
              </p>
              <p className="bg-gray-300 px-4 py-2 mt-2 lg:mt-0 lg:mr-2 lg:last:mr-0 rounded-full text-lg lg:text-xl hover:bg-orange-500 cursor-pointer">
                Tailwind CSS
              </p>
              <p className="bg-gray-300 px-4 py-2 mt-2 lg:mt-0 lg:mr-2 lg:last:mr-0 rounded-full text-lg lg:text-xl hover:bg-orange-500 cursor-pointer">
                Angular
              </p>
              <p className="bg-gray-300 px-4 py-2 mt-2 lg:mt-0 lg:mr-2 lg:last:mr-0 rounded-full text-lg lg:text-xl hover:bg-orange-500 cursor-pointer">
                NextJS
              </p>
              <p className="bg-gray-300 px-4 py-2 mt-2 lg:mt-0 lg:mr-2 lg:last:mr-0 rounded-full text-lg lg:text-xl hover:bg-orange-500 cursor-pointer">
                State Management
              </p>
              <p className="bg-gray-300 px-4 py-2 mt-2 lg:mt-0 lg:mr-2 lg:last:mr-0 rounded-full text-lg lg:text-xl hover:bg-orange-500 cursor-pointer">
                AWS Cloud
              </p>
              <p className="bg-gray-300 px-4 py-2 mt-2 lg:mt-0 lg:mr-2 lg:last:mr-0 rounded-full text-lg lg:text-xl hover:bg-orange-500 cursor-pointer">
                EC2
              </p>
              <p className="bg-gray-300 px-4 py-2 mt-2 lg:mt-0 lg:mr-2 lg:last:mr-0 rounded-full text-lg lg:text-xl hover:bg-orange-500 cursor-pointerr">
                Deploying on Clound
              </p>
              <p className="bg-gray-300 px-4 py-2 mt-2 lg:mt-0 lg:mr-2 lg:last:mr-0 rounded-full text-lg lg:text-xl hover:bg-orange-500 cursor-pointer">
                Flask
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
