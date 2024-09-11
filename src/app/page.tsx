"use client";

import Image from "next/image";
import PlantImage from "../assets/plant.png";
import NimImage from "../assets/nim.png";
import Climate from "../assets/13.png";
import GB from "../assets/gb.jpg";
import HandsImg from "../assets/hands.jpg";
import Trees from "@/components/Trees";
import HeroImage1 from "../assets/hero1.jpg";
import Po2 from "../assets/po2.png";
import Hero from "../assets/hero.jpg";
import { useState } from "react";
import { Heading } from "@/components/Heading";
import { motion } from "framer-motion";
import { trees } from "@/components/Trees";
import Link from "next/link";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [selectedTree, setSelectedTree] = useState<number[] | null>(null);

  const handleAddTree = (id: number) => {
    setSelectedTree((prev) => {
      if (prev === null) {
        return [id];
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <main>
      <header className="sticky top-0 z-50 font-sans font-medium bg-white text-black shadow-lg h-20 py-4 flex justify-between">
        <div className="flex space-x-2 px-12">
          <button
            onClick={() => setToggle(!toggle)}
            className="md:hidden border border-gray-300 hover:bg-gray-400 rounded-lg px-3 grid place-content-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
          >
            <Image src={Po2} height={100} width={100} alt="Logo" />
          </a>
        </div>

        <nav className="hidden md:flex md:items-center">
          <a
            href="#about"
            className="block hover:underline hover:decoration-2 hover:decoration-emerald-600 px-4 "
          >
            About
          </a>
          <a
            href="#sponsorship"
            className="block hover:underline hover:decoration-2 hover:decoration-emerald-600 px-4 "
          >
            Sponsorship Options
          </a>
          <a
            href="#custom"
            className="block hover:underline hover:decoration-2 hover:decoration-emerald-600 px-4 "
          >
            Customized Donation
          </a>
          <a
            href="#aboutgb"
            className="block hover:underline hover:decoration-2 hover:decoration-emerald-600 px-4 "
          >
            About Give Bangladesh
          </a>
        </nav>

        <div className="flex justify-center items-center pr-10">
          <a
            target="_blank"
            href="https://invoice.sslcommerz.com/invoice-form?&refer=6527983D4CE6E"
            className="text-white bg-gradient-to-br from-emerald-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-emerald-200 dark:focus:ring-emerald-800 font-bold rounded-md text-md px-8 py-3 text-center me-2 mb-2"
          >
            Donate
          </a>
        </div>
        {toggle && (
          <div className="bg-white min-h-48 mt-12 absolute w-full px-12 py-4">
            <nav>
              <a
                href="#about"
                className="block py-2 hover:bg-emerald-500 hover:text-white px-4 rounded-md"
              >
                About
              </a>
              <a
                href="#sponsorship"
                className="block py-2 hover:bg-emerald-500 hover:text-white px-4 rounded-md"
              >
                Sponsorship Options
              </a>
              <a
                href="#custom"
                className="block py-2 hover:bg-emerald-500 hover:text-white px-4 rounded-md"
              >
                Customized Donation
              </a>
              <a
                href="aboutgb"
                className="block py-2 hover:bg-emerald-500 hover:text-white px-4 rounded-md"
              >
                About Give Bangladesh
              </a>
            </nav>
          </div>
        )}
      </header>

      <Image
        src={Hero}
        className="inset-0 w-full h-[400px] md:h-[600px] lg:h-[800px] object-cover"
        alt="Hero Image"
        width={1920}
        height={100}
      />

      <Heading id="about" title="About Project Oxygen" />

      <div className="flex flex-col-reverse items-center min-h-[512px] lg:flex-row lg:justify-between mx-8 lg:mx-24 xl:mx-32">
        <div className="w-full font-sans text-xl md:text-3xl md:pr-12 text-justify h-full md:px-4">
          <strong>Shokto Kori Bangladesh</strong> - With this resolute motto,
          <strong>Project Oxygen 4.0</strong>, driven by the passion of the
          youths of this country to restore and rejuvenate the green landscapes
          of Bangladesh’s coast, is targeting to plant <strong>200,000 </strong>
          trees in climate-vulnerable regions of Dumuria, Khulna.
        </div>
        <div className="w-full h-full grid place-content-center m-4">
          <Image
            src={HeroImage1}
            className="max-h-[512px] rounded-lg shadow-xl drop-shadow-xl"
            alt="Hero Image"
            width={620}
            height={512}
          />
        </div>
      </div>

      <Heading id="pillars" title="Pillars of Project Oxygen" />

      <div className="flex flex-col-reverse items-center min-h-[512px] lg:flex-row lg:justify-between mx-8 lg:mx-24 xl:mx-32">
        <div className="grid grid-cols-1 lg:grid-cols-2  h-full w-full">
          {/* 1 */}
          <div className="h-full w-full lg:border-r-4 border-b-4 border-emerald-700 lg:pr-8 py-8">
            <div className="font-sarif">
              <span className="text-7xl font-bold text-emerald-950">1</span>
              <span className="align-super text-emerald-900 text-2xl">st</span>
            </div>
            <span className="text-3xl font-sans font-medium text-justify text-gray-700">
              Afforesting by Planting{" "}
              <strong className="text-emerald-800 underline decoration-emerald-600">
                200,000
              </strong>{" "}
              Trees Following Standard Procedure
            </span>
          </div>
          {/* 2 */}
          <div className="h-full w-full border-b-4 border-emerald-700 lg:pl-8 py-8">
            <div className="font-sarif">
              <span className="text-7xl font-bold text-emerald-950">2</span>
              <span className="align-super text-emerald-900 text-2xl">nd</span>
            </div>
            <span className="text-3xl font-sans font-medium text-justify text-gray-700">
              Introducing{" "}
              <strong className="text-emerald-800 underline decoration-emerald-600">
                ‘Climate Graduation Program’
              </strong>{" "}
              to Connect Local Youths
            </span>
          </div>
          {/* 3 */}
          <div className="h-full w-full lg:border-r-4 border-b-4 lg:border-b-0 border-emerald-700 pr-8 pt-8 py-8">
            <div className="font-sarif">
              <span className="text-7xl font-bold text-emerald-950">3</span>
              <span className="align-super text-emerald-900 text-2xl">rd</span>
            </div>
            <span className="text-3xl font-sans font-medium text-justify text-gray-700">
              Engaging Local Communities through Faith Leaders and Full-Time
              Recruitment
            </span>
          </div>
          {/* 4 */}
          <div className="h-full w-full border-emerald-700 border-b-4 lg:border-b-0 lg:pl-8 lg:pt-8 py-8">
            <div className="font-sarif">
              <span className="text-7xl font-bold text-emerald-950">4</span>
              <span className="align-super text-emerald-900 text-2xl">th</span>
            </div>
            <span className="text-3xl font-sans font-medium text-justify text-gray-700">
              Analyzing Impacts and the Feasibility of Scale Plan in Partnership
              With Academia
            </span>
          </div>
        </div>
      </div>

      <Heading id="afforestation" title="Large Scale Afforestation" />

      <div className="py-24 w-full bg-emerald-700 p-4 md:px-16 lg:px-32">
        <div className="bg-white rounded-lg px-4 w-full">
          <section className="text-gray-700 font-sans">
            <div className="container px-5 py-12 mx-auto flex flex-col">
              <div className="flex flex-wrap w-full">
                <div className="lg:w-2/5">
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-hand-heart"
                      >
                        <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
                        <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                        <path d="m2 15 6 6" />
                        <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                        STEP 1
                      </h2>
                      <p className="leading-relaxed">
                        Collect seeds from the Sundarban
                      </p>
                    </div>
                  </div>

                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-sprout"
                      >
                        <path d="M7 20h10" />
                        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                        STEP 2
                      </h2>
                      <p className="leading-relaxed">
                        Grow saplings in Dumuria
                      </p>
                    </div>
                  </div>

                  <div className="flex relative">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-shrub"
                      >
                        <path d="M12 22v-7l-2-2" />
                        <path d="M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z" />
                        <path d="m14 14-2 2" />
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                        STEP 3
                      </h2>
                      <p className="leading-relaxed">
                        Plant saplings in designated areas
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg w-full md:mt-0 mt-12 flex flex-col lg:flex-row lg:justify-around items-center justify-center">
                  <div className="w-full h-full grid place-content-center">
                    <Image
                      src={PlantImage}
                      alt="Plant Distribution"
                      width={256}
                      height={256}
                    />
                  </div>
                  <div className="w-full h-full grid place-content-center">
                    <Image
                      src={NimImage}
                      alt="Plant Distribution"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Heading id="aftercare" title="Aftercare Monitoring Framework" />

      <div>
        <section className="leaf-pattern flex w-full flex-col lg:flex-row min-h-[512px] items-center justify-center md:px-16 lg:px-32">
          <div className="w-full">
            <h3 className="text-center text-2xl font-bold font-sarif">
              Climate Graduation Program
            </h3>
            <div className="container px-8 py-8 mx-auto w-full">
              <div className="flex flex-col sm:mx-auto">
                <div className="p-2 w-full">
                  <div className="bg-emerald-50 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="text-emerald-600 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="font-sans font-medium text-emerald-900">
                      60 teams 600 students
                    </span>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="bg-emerald-50 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="text-emerald-600 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="font-sans font-medium text-emerald-900">
                      3300 trees per team Once each Fortnight
                    </span>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="bg-emerald-50 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="text-emerald-600 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="font-sans font-medium text-emerald-900">
                      Institutional Framework
                    </span>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="bg-emerald-50 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="text-emerald-600 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="font-sans font-medium text-emerald-900">
                      Certification and Recognition Scopes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-center text-2xl font-bold font-sarif">
              Community Connect
            </h3>
            <div className="container px-8 py-8 mx-auto">
              <div className="flex flex-col w-full sm:mx-auto">
                <div className="p-2 w-full">
                  <div className="bg-emerald-50 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="text-emerald-600 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="font-sans font-medium text-emerald-900">
                      Cordoning the plantation area
                    </span>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="bg-emerald-50 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="text-emerald-600 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="font-sans font-medium text-emerald-900">
                      Over-the-top communication by miking and leaflets
                    </span>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="bg-emerald-50 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="text-emerald-600 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="font-sans font-medium text-emerald-900">
                      Full-time staffs to ensure zero defaults
                    </span>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="bg-emerald-50 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="text-emerald-600 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="font-sans font-medium text-emerald-900">
                      Faith leaders to motivate locals
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Heading id="sustainability" title="Pledge to Sustainability" />

      <div>
        <section className="bg-gradient-to-r from-emerald-500 to-emerald-900 pb-12 flex w-full flex-col lg:flex-row min-h-[512px] items-center justify-center md:px-16 lg:px-32">
          {/* <div className="w-full">
            <h3 className="text-center text-2xl font-bold font-sarif">....</h3>
            <div className="container px-8 py-8 mx-auto w-full">
              <div className="flex flex-col sm:mx-auto">
                <div className="p-2 w-full">
                  <div className="bg-emerald-50 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="text-emerald-600 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="font-sans font-medium text-emerald-900">
                      National Adaptation Plan
                    </span>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="bg-emerald-50 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="text-emerald-600 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="font-sans font-medium text-emerald-900">
                      Bangladesh Delta Plan
                    </span>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="bg-emerald-50 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="text-emerald-600 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="font-sans font-medium text-emerald-900">
                      8th five-year plan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="w-full flex flex-col items-center">
            <h3 className="text-center text-2xl font-bold font-sarif text-white my-12">
              UN Sustainable Development Goal
            </h3>
            <Image
              src={Climate}
              height={200}
              width={240}
              alt="Climate Change"
            />
          </div>
        </section>
      </div>

      <Heading id="sponsorship" title="Sponsorship Options" />

      <div className="font-sans font-medium min-h-[512px] grid grid-cols-1 gap-4 lg:grid-cols-2 h-full px-12 md:px-16 lg:px-32">
        <div className="bg-emerald-900 text-gray-50 px-8 py-4 rounded-lg">
          <h2 className="text-2xl lg:text-3xl font-bold my-2 font-sarif">
            Donation Benifits
          </h2>
          <div className="text-lg lg:text-xl space-y-2 text-left">
            <p>
              <strong className="text-emerald-200">Environmental:</strong> An
              estimated increase in oxygen production of approximately{" "}
              <span className="underline underline-offset-4 decoration-emerald-600 decoration-4">
                112.65 tonnes per annum.
              </span>{" "}
              An estimated{" "}
              <span className="underline underline-offset-4 decoration-emerald-600 decoration-4">
                43.89 tons
              </span>{" "}
              of carbon dioxide sequestration upon maturity. Creation of
              wildlife habitat.
            </p>
            <p>
              <strong className="text-emerald-200">Disaster Prevention:</strong>{" "}
              Addition of{" "}
              <span className="underline underline-offset-4 decoration-emerald-600 decoration-4">
                14.63 hectares
              </span>{" "}
              of new mangrove forest. Prevention of cyclones, floods and
              landslides. Strengthened coastal protection.
            </p>
            <p>
              <strong className="text-emerald-200">Economic: </strong>
              Breakthrough development in agricultural production. Local
              employment opportunities in various sectors including bee
              production.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <div className="h-1/2 px-12 py-4 rounded-md hover:shadow-lg min-h-44 flex justify-between flex-col">
            <div className="flex flex-col justify-center w-full items-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="bg-emerald-100 rounded-full p-4 text-emerald-600"
              >
                <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
                <path d="M7 16v6" />
                <path d="M13 19v3" />
                <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
              </svg>
              <h3 className="text-5xl font-black font-sarif text-center">
                15 Taka
              </h3>
              <h4 className="text-xl font-medium text-gray-700 text-center">
                Per Tree
              </h4>
            </div>
            <div>
              <a
                className="bg-emerald-500 text-white  hover:bg-emerald-600 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium h-12"
                target="_blank"
                href="https://invoice.sslcommerz.com/invoice-form?&refer=6527983D4CE6E"
              >
                Donate
              </a>
            </div>
          </div>
          <div className="h-1/2 px-12 py-4 rounded-md hover:shadow-lg min-h-44 flex justify-between flex-col">
            <div className="flex flex-col justify-center w-full items-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="82"
                height="82"
                viewBox="0 0 25 25"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="bg-emerald-100 rounded-full p-4 text-emerald-600"
              >
                <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
                <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                <path d="m2 15 6 6" />
                <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
              </svg>
              <h3 className="text-5xl font-black font-sarif text-center">
                30,000 Taka
              </h3>
              <h4 className="text-xl font-medium text-gray-700 text-center">
                One Time
              </h4>
            </div>
            <div>
              <a
                className="bg-emerald-500 text-white  hover:bg-emerald-600 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium h-12"
                target="_blank"
                href="https://invoice.sslcommerz.com/invoice-form?&refer=6527983D4CE6E"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid place-content-center h-24 my-8 space-y-4">
        <motion.h2
          id="custom"
          style={{ scrollMarginTop: "12rem" }}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-sarif font-bold text-emerald-950 text-center"
        >
          Customize Your Donation!
        </motion.h2>
        <p className="text-lg text-center font-sans font-medium text-gray-500">
          Select the trees you want to plant and the amount you want to donate
        </p>
      </div>

      <div>
        <Trees handleAddTree={handleAddTree} />
      </div>

      <Heading id="faq" title="FAQ" />
      <div className="p-8 bg-[url('https://oxygen.givebangladesh.com/plant.jpg')] bg-cover h-auto max-h-[800px] w-full">
        <div className="font-sans relative w-full bg-white px-6 py-6 sm:mx-auto sm:max-w-2xl rounded-md sm:px-10">
          <div className="mx-auto px-5">
            <div className="mx-auto grid max-w-xl divide-y divide-emerald-200 text-emerald-900">
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>What is Project Oxygen 4.0?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-zinc-600">
                    Project Oxygen 4.0 is an afforestation initiative aimed at
                    planting 200,000 trees in climate-vulnerable regions of
                    Dumuria, Khulna. It is driven by youth and focuses on
                    restoring Bangladesh’s coastal green landscapes as part of
                    the “Shokto Kori Bangladesh” mission.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>What are the main components of the project?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-zinc-600">
                    The project has four key pillars: planting 200,000 trees,
                    launching a Climate Graduation Program for youth engagement,
                    involving local communities through faith leaders and
                    full-time staff and conducting impact assessments in
                    partnership with academia.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>
                      What is the significance of the aftercare monitoring
                      framework?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-zinc-600">
                    The aftercare monitoring framework ensures that trees are
                    properly maintained after planting. Local students and staff
                    monitor the trees, ensuring zero default rates through
                    regular supervision and community involvement.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>
                      What has Project Oxygen achieved so far and what are its
                      future goals?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-zinc-600">
                    Since 2020, Project Oxygen has planted 53,600 trees in
                    Koyra, Dumuria, and Shyamnagar. The long-term goal is to
                    plant 1 million trees in 10 years, contributing
                    significantly to Bangladesh’s reforestation and climate
                    action efforts.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>
                      Why are we planting mangrove trees instead of normal
                      trees?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-zinc-600">
                    Mangrove trees are specifically suited for coastal regions
                    like Dumuria, thriving in saline, waterlogged environments.
                    They also excel in carbon sequestration, storing up to 3-5
                    times more carbon than regular trees, both in their biomass
                    and soil. This makes them vital for combating climate change
                    while providing protection against storms and enhancing
                    biodiversity in vulnerable areas.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>
                      How will the project measure its environmental impact?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-zinc-600">
                    The project will analyze its impact through running a
                    post-intervention study engaging experts of relevant
                    disciplines. Early estimates through secondary studies and
                    literature reviews suggest an increase of 112.65 tonnes of
                    oxygen production and 43.89 tonnes of carbon dioxide
                    absorption annually.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Heading id="aboutgb" title="About Give Bangladesh" />

      <div>
        <section className="text-gray-800 bg-gradient-to-bl from-yellow-300 to-sky-400 font-sans font-medium">
          <div className="container px-5 py-12 mx-auto flex flex-col lg:flex-row">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 content-start sm:pr-10">
              <div className="w-full sm:p-4 px-4 mb-6">
                <div className="leading-relaxed">
                  Give Bangladesh Foundation was established in 2018 to provide
                  a unique pathway for the people of Bangladesh, to get involved
                  in the development of the country through philanthropy and
                  volunteering. GBF designs projects that identify and solve
                  selected development challenges root problems. By bringing
                  modern practices from the development industry to the more
                  simplistic philanthropic sector, the foundation strives to
                  ensure that charity contributions from individuals and
                  volunteers are creating positive short-term and long-term
                  impacts on beneficiaries.
                </div>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  311k+
                </h2>
                <p className="leading-relaxed">Beneficiaries</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  800+
                </h2>
                <p className="leading-relaxed">Volunteers</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  135+
                </h2>
                <p className="leading-relaxed">Partners</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  20+
                </h2>
                <p className="leading-relaxed">Communities</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full grid place-content-center rounded-lg overflow-hidden mt-6 sm:mt-0">
              <Image src={GB} alt="Give Bangladesh" height={400} width={512} />
            </div>
          </div>
        </section>
      </div>

      {selectedTree && (
        <>
          <div className="font-sans space-x-4 flex justify-center items-center footer fixed bottom-0 left-0 right-0 bg-emerald-800 text-white p-4 shadow-lg md:text-xl">
            <p>You have selected {selectedTree.length} trees!</p>
            <Link
              // href="/checkout"
              href="https://invoice.sslcommerz.com/invoice-form?&refer=6527983D4CE6E"
              className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 block w-auto py-2 px-6 border border-transparent rounded-md text-center font-medium"
            >
              Proceed to Payment
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
