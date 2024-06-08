import { useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("Mr.Sanket");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Portfolio",
      link: "/portfolio",
      id: 4,
    },
    {
      title: "Contact",
      link: "/Contact",
      id: 4,
    },
    { title: "About",
      link:"/",
      
      id: 4,
     
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "DownloadCV",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7191974938197581824/",
  });

 
  return (
    <>
      <div className="h-20 border main flex flex-col sm:flex-row justify-between items-center px-6 sm:px-16 bg-gray-100">
        <div className="flex items-center">
          {/* brand logo */}
          <h1 className="text-2xl font-bold min-w-0 text-center sm:text-left">{brandName}</h1>
        </div>

        <div className=" flex justify-center sm:justify-start mt-4 sm:mt-0">
          {/* menu links */}
          <div className="flex flex-wrap space-x-4 sm:space-x-6">

          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
          </div>

          {/* 
          <a href="/about" className="hover:text-orange-600lx">
            About
          </a>

          <a href="/skills" className="hover:text-orange-600">
            Skills
          </a>

          <a href="/Portfolio" className="hover:text-orange-600">
            Portfolio
          </a>

          <a href="/contact" className="hover:text-orange-600">
            Contact
          </a> */}
        </div>

        <div className="flex justify-items-end	 mt-4 sm:mt-0">
          {/* buttons */}
          <a
            href={actionButton.link}
            className="px-4 py-2 md:px-6 md:py-3 bg-orange-500 shadow rounded-full text-xs sm:text-sm md:text-base lg:text-lg min-w-full sm:min-w-0"
          >
            {actionButton.title}
          </a>
        </div>
       
      </div>
    </>
  );
};

export default Header;
