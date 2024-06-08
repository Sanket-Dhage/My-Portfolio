const Footer = () => {
  return (
    <>
      <div className="py-5 border bg-gray-100 flex flex-col sm:flex-row justify-between px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48">
        <div  className="mb-3 sm:mb-0 text-center">
          <p>
            @2023 Dhage Sanket Sanjay 
          </p>
          <p className="px-10 py-2">
              All Rights Reserved

          </p>
        </div>
        <div className=" justify-center space-y-2 sm:space-y-0 sm:space-x-4 px-0 mt-4  ">
          <a href="/about" className="hover:underline ">
            About{" "}
          </a>
          <a href="/about" className="hover:underline ">
            Privacy-Policy{" "}
          </a>
          <a href="/about" className="hover:underline">
            Licensing{" "}
          </a>
          <a href="/about" className="hover:underline ">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
