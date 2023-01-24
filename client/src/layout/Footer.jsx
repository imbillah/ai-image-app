import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col border-t border-t-gray-300 mt-5 p-4">
      <div>
        <div className="flex justify-center items-center">
          <h3 className="font-medium text-black ">Powered By :</h3>
          <a href="https://openai.com/" target="_blank">
            <img
              src="https://venturebeat.com/wp-content/uploads/2019/03/openai-1.png?fit=750%2C313&strip=all"
              alt="openAi logo"
              className="w-28 object-contain"
            />
          </a>
        </div>
      </div>
      {/* <p>&copy;2023 Copyright reserverd</p> */}
      <div className="text-center">
        <h3 className="font-medium text-black">
          Developed By :{" "}
          <a
            href="https://github.com/imbillah"
            className="cursor-pointer underline text-[#432B92]"
            target="_blank"
          >
            billahTheDev
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
