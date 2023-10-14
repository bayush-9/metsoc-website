import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import roboGallery from "../assets/roboGallery.png";
import { Link } from "react-router-dom";
import eventImage from "../assets/eventImage.png";
import aboutLecturesImage from "../assets/aboutLecturesImage.png";
import aboutUsImage from "../assets/aboutUsImage.png";
import G1 from "../assets/G1.png";
import G2 from "../assets/G2.png";
import G3 from "../assets/G3.png";
import G4 from "../assets/G4.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// Image Collection
const images = [
  G1,
  G2,
  G3,
  G4,
  G1,
  G2,
  G3,
  G4,
  G1,
  G2,
  G3,
  G4,
  G1,
  G2,
  G3,
  G4,
  G1,
  G2,
  G3,
  G4,
  G1,
  G2,
  G3,
  G4,
  G1,
  G2,
  G3,
  G4,
  G1,
  G2,
  G3,
  G4,
  G1,
  G2,
  G3,
  G4,
  G1,
  G2,
  G3,
  G4,
  G1,
  G2,
  G3,
  G4,
  G1,
  G2,
  G3,
  G4,
];

const Gallery = () => {
  // Hooks and functions for the image viewer
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };
  const imgAction = (action) => {
    let i = data.i;
    let n = images.length;
    if (action === "next-img") {
      setData({ img: images[(i + 1) % n], i: (i + 1) % n });
    }
    if (action === "prev-img") {
      setData({ img: images[(i - 1 + n) % n], i: (i - 1 + n) % n });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <>
      {/* Image Viewer properties */}
      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "grey",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            zIndex: "100",
          }}
        >
          <button
            className="px-3 rounded-[50px]"
            onClick={() => imgAction()}
            style={{
              position: "absolute",
              top: "5%",
              right: "10%",
              backgroundColor: "white",
            }}
          >
            X
          </button>

          <button
            style={{
              position: "absolute",
              top: "50%",
              left: "10%",
              backgroundColor: "white",
            }}
            onClick={() => imgAction("prev-img")}
          >
            Prev
          </button>
          <img
            src={data.img}
            style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
          />
          <button
            style={{
              position: "absolute",
              top: "50%",
              right: "10%",
              backgroundColor: "white",
            }}
            onClick={() => imgAction("next-img")}
          >
            Next
          </button>
        </div>
      )}

      <Navbar />

      {/* Upper Section : Title of the page */}
      <section className="py-0 md:py-0 btn w-[92vw] h-full m-auto rounded-[48px] rounded-br-[300px] rounded-tr-[0px] text-white mt-12">
        <div className="container p-6 mx-auto space-y-8">
          <div className="w-[90%] h-full m-auto grid grid-cols-1  gap-x-10 gap-y-8 md:grid-cols-2 ">
            <article className="flex flex-col rounded-xl">
              <div className="flex flex-col flex-1 pt-5 text-left leading-tight">
                {/* Title */}
                <p className="m-0 mt-20 text-[50px] sm:text-[60px] font-bold">
                  Visions <br /> Captured
                </p>
              </div>
            </article>
            <article className="flex flex-col rounded-xl">
              <div className="flex flex-col flex-1 p-0 text-center">
                <p className="m-auto text-[50px] sm:text-[75px] font-bold">
                  {/* Robo Image */}
                  <img src={roboGallery} className="m-auto" alt="robot" />
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Mid Section : Links to Events, Lectures, About Us */}
      <section className="py-0 md:py-0 btn w-[92vw] h-full m-auto rounded-[48px] text-white mt-12">
        {/* Outer div : contains all the three inner divs : Events, Lectures, About Us */}
        <div className="flex flex-row items-center justify-center p-4 m-4">
          {/* Events Div */}
          <div className="flex flex-col items-center relative">
            {/* Events Background Image */}
            <img
              src={eventImage}
              alt="Events"
              className="w-934 h-566 object-cover"
            />
            {/* Link to Events */}
            <Link
              to="/events"
              className="absolute inset-0 hover:text-darkwhite3 active:text-darkwhite3 flex items-center justify-center text-white text-4xl font-semibold"
            >
              <p className="text-[1.2rem] sm:text-[3rem] font-semibold">
                Events
              </p>
            </Link>
          </div>

          {/* Lectures and About us Div */}
          <div className="flex flex-col items-center  p-4 m-4">
            {/* Lectures Div */}
            <div className="flex flex-col items-center mt-4">
              {/* Lectures Background Image Div */}
              <div className="relative">
                {/* Lectures Background Image */}
                <img
                  src={aboutLecturesImage}
                  alt="Lectures"
                  className="w-449 h-263 object-cover"
                />
                {/* Lectures Link */}
                <Link
                  to="#"
                  className="absolute inset-0  hover:text-darkwhite3 active:text-darkwhite3 flex items-center justify-center text-white text-2xl  font-semibold"
                >
                  <p className="text-[0.8rem] sm:text-[2rem] font-semibold">
                    Lectures
                  </p>
                </Link>
              </div>
            </div>

            {/* About Us Div */}
            <div className="flex flex-col items-center mt-4">
              {/* About Us Background Image Div */}
              <div className="relative">
                {/* About Us Background Image */}
                <img
                  src={aboutUsImage}
                  alt="About Us"
                  className="w-449 h-263 object-cover"
                />
                {/* About Us Link */}
                <Link
                  to="/teams"
                  className="absolute inset-0 flex hover:text-darkwhite3 active:text-darkwhite3 items-center justify-center text-white"
                >
                  <p className="text-[0.8rem] sm:text-[2rem] font-semibold">
                    About Us
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lower Section : Contains Picture Gallery of Recent Events */}
      <section className="px-5 py-5 md:py-5 btn w-[92vw] h-full m-auto rounded-[48px] text-white mt-12">
        {/* Header Text Div*/}
        <div className="flex flex-col flex-1 pt-5 text-left leading-tight font-semibold">
          {/* Header Text */}
          <h3 className="m-0 ml-10 mb-10 mt-0 text-[1rem] sm:text-[1.5rem]">
            Recent Events
          </h3>
        </div>

        {/* Gallery */}
        <div style={{ padding: "10px" }}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="20px">
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  style={{ width: "100%", display: "block", cursor: "pointer" }}
                  alt=""
                  onClick={() => viewImage(image, i)}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
