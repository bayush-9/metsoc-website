import React from "react";
import robo from "../assets/robo.png";

const Home = () => {
  return (
    <>
      <section className="py-0 md:py-0 btn w-[90vw] h-full m-auto rounded-xl text-white">
        <div className="container p-6 mx-auto space-y-8 h-[85vh]">
          <div className="w-[90%] h-full m-auto grid grid-cols-1  gap-x-10 gap-y-8 md:grid-cols-2 ">
            {/* First card */}
            <article className="flex flex-col rounded-xl">
              <div className="flex flex-col flex-1 p-0 text-center ">
                <p className="m-auto text-[50px] sm:text-[75px] font-bold">
                  We aspire <br /> to bring <br />
                  changes
                </p>
              </div>
            </article>
            <article className="flex flex-col rounded-xl">
              <div className="flex flex-col flex-1 p-0 text-center ">
                <p className="m-auto text-[50px] sm:text-[75px] font-bold">
                  <img src={robo} className="m-auto" alt="robot" />
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* what we offer */}
      <section className="py-0 md:py-0 btn w-[90vw] h-[85vh] m-auto text-white mt-12 rounded-xl">
        <div className="container p-6 mx-auto space-y-8">
          <div className="w-[90%] h-[85vh] m-auto grid grid-cols-1  gap-x-10 gap-y-8 md:grid-cols-2 ">
            {/* First card */}
            <article className="flex flex-col rounded-xl h-[85vh]">
              <div className="flex flex-col flex-1 p-0 text-center h-[85vh]">
                <p className="m-auto text-[40px] sm:text-[60px] font-bold">
                  Know <br /> What we
                  <br />
                  work for
                </p>
              </div>
            </article>
            <article className="h-[80vh] flex flex-col  bg-darkwhite2">
              <div className="flex flex-col flex-1 p-0 text-center ">
                <p className="m-auto text-[50px] sm:text-[75px] font-bold">
                  hey
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
