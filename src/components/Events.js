import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import robo1 from "../assets/robo1.png";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import event4 from "../assets/event4.png";

const Events = () => {
  return (
    <>
      <Navbar />
      <section className="py-0 md:py-0 btn w-[90vw] h-full m-auto rounded-xl text-white">
        <div className="container p-6 mx-auto space-y-8">
          <div className="w-[90%] h-full m-auto grid grid-cols-1  gap-x-10 gap-y-8 md:grid-cols-2 ">
            {/* First card */}
            <article className="flex flex-col rounded-xl">
              <div className="flex flex-col flex-1 p-0 text-center ">
                <p className="m-auto text-[50px] sm:text-[75px] font-bold">
                  Consistently <br />
                  Delivering
                  <br />
                  Exceptional Events
                </p>
              </div>
            </article>
            <article className="flex flex-col rounded-xl">
              <div className="flex flex-col flex-1 p-0 text-center ">
                <p className="m-auto text-[50px] sm:text-[75px] font-bold">
                  <img src={robo1} className="m-auto" alt="robot" />
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Events Section*/}
      <section className="py-10 px-10 mx-4 font-Inter">
        <div className="space-y-8">
          {/* Heading 1 */}
          <p className="text-[40px] lg:text-[65px] pb-8 lg:text-left text-center font-[500]">
            UPCOMING EVENTS
          </p>

          {/* First Row */}
          <div className="flex flex-col lg:flex-row font-[400]">
            <div className="lg:w-1/2 mx-auto">
              <img src={event1} alt="anveshan" className="w-full h-auto" />
            </div>
            <div className="py-6 lg:py-0 md:mx-24 lg:w-1/2 text-[20px] md:text-[30px] lg:text-[35px] text-center space-y-4 lg:my-auto mx-auto">
              <p>Anveshan'21 : Technical Event for undergraduate students</p>
              <p>Date - 21 Oct 2021</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col lg:flex-row font-[400]">
            <div className="order-2 lg:order-1 py-6 lg:py-0 md:mx-24 lg:w-1/2 text-[20px] md:text-[30px] lg:text-[32px] text-center space-y-4 lg:my-auto mx-auto">
              <p>Maitri Shield Tournament</p>
              <p>Date - 15 Sep 2021</p>
            </div>
            <div className="order-1 lg:order-2 lg:w-1/2 mx-auto">
              <img src={event2} alt="maitri-shield" className="w-full h-auto" />
            </div>
          </div>

          {/* Heading 2 */}
          <p className="text-[40px] lg:text-[65px] pb-8 lg:text-left text-center font-[500]">
            PAST EVENTS
          </p>

          {/* Third row */}
          <div className="flex flex-col lg:flex-row font-[400]">
            <div className="lg:w-1/2 mx-auto">
              <img src={event3} alt="teachers-day" className="w-full h-auto" />
            </div>
            <div className="py-6 lg:py-0 md:mx-24 lg:w-1/2 text-[20px] md:text-[30px] lg:text-[35px] text-center space-y-4 lg:my-auto mx-auto">
              <p>Teacher's Day 2019</p>
              <p>Date - 5 Sep 2019</p>
            </div>
          </div>

          {/* Fourth Day */}
          <div className="flex flex-col lg:flex-row font-[400]">
            <div className="order-2 lg:order-1 py-6 lg:py-0 md:mx-24 lg:w-1/2 text-[20px] md:text-[30px] lg:text-[32px] text-center space-y-4 lg:my-auto mx-auto">
              <p>Nabarun'2019 - Inter-year sports torunament</p>
              <p>Date - 14 Aug 2019</p>
            </div>
            <div className="order-1 lg:order-2 lg:w-1/2 mx-auto">
              <img src={event4} alt="nabarun" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      {/* Events Section End */}
      <Footer />
    </>
  );
};

export default Events;
