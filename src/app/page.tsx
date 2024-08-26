import Image from "next/image";
import PlantImage from "../assets/plant.png";
import NimImage from "../assets/nim.png";
import Climate from "../assets/13.png";
import GB from "../assets/gb.jpg";

export default function Home() {
  return (
    <main>
      <div className="text-2xl grid place-content-center bg-green-900 font-bold h-[400px] md:h-[600px] lg:h-[800px]">
        <h1 className="font-sarif text-4xl md:text-5xl lg:text-6xl font-black text-white">
          Project Oxygen
        </h1>
      </div>

      <div className="grid place-content-center h-40">
        <h2 className="text-3xl md:text-4xl font-sarif font-bold text-emerald-950 text-center">
          About Project Oxygen
        </h2>
      </div>

      <div className="flex flex-col-reverse items-center h-[512px] lg:flex-row lg:justify-between mx-16 lg:mx-24 xl:mx-32">
        <div className="w-full font-sans text-xl md:text-3xl md:pr-12 text-justify h-full md:px-4">
          <strong>Shokto Kori Bangladesh</strong> - With this resolute motto,
          <strong>Project Oxygen 4.0</strong>, driven by the passion of the
          youths of this country to restore and rejuvenate the green landscapes
          of Bangladesh’s coast, is targeting to plant <strong>200,000 </strong>
          trees in climate-vulnerable regions of Dumuria, Khulna.
        </div>
        <div className="w-full h-full">
          <div className="bg-emerald-900 h-full"></div>
        </div>
      </div>

      <div className="grid place-content-center h-40">
        <h2 className="text-3xl md:text-4xl font-sarif font-bold text-emerald-950 text-center">
          4 Pillars of Project Oxygen
        </h2>
      </div>

      <div className="flex flex-col-reverse items-center min-h-[512px] lg:flex-row lg:justify-between mx-16 lg:mx-24 xl:mx-32">
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

      <div className="grid place-content-center h-40">
        <h2 className="text-3xl md:text-4xl font-sarif font-bold text-emerald-950 text-center">
          Large Scale Afforestation
        </h2>
      </div>

      <div className="min-h-[512px] w-full bg-emerald-700 p-24">
        <div className="bg-white rounded-lg px-4">
          <section className="text-gray-700 font-sans">
            <div className="container px-5 py-24 mx-auto flex flex-col">
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

      <div className="grid place-content-center h-40">
        <h2 className="text-3xl md:text-4xl font-sarif font-bold text-emerald-950 text-center">
          Aftercare Monitoring Framework
        </h2>
      </div>

      <div>
        <section className="leaf-pattern flex w-full flex-col lg:flex-row min-h-[512px] items-center justify-center">
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

      {/* <div className="grid place-content-center h-24">
        <h2 className="text-3xl md:text-4xl font-sarif font-bold text-emerald-950 text-center">
          Partnership Dynamics
        </h2>
      </div> */}

      <div className="grid place-content-center h-24">
        <h2 className="text-3xl md:text-4xl font-sarif font-bold text-emerald-950 text-center">
          Pledge to Sustainability
        </h2>
      </div>
      <div>
        <section className="bg-gradient-to-r to-emerald-500 from-lime-600 flex w-full flex-col lg:flex-row min-h-[512px] items-center justify-center">
          <div className="w-full">
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
          </div>

          <div className="w-full flex flex-col items-center">
            <h3 className="text-center text-2xl font-bold font-sarif">...</h3>
            <Image
              src={Climate}
              height={200}
              width={240}
              alt="Climate Change"
            />
          </div>
        </section>
      </div>

      <div className="grid place-content-center h-24">
        <h2 className="text-3xl md:text-4xl font-sarif font-bold text-emerald-950 text-center">
          Sponsorship Options
        </h2>
      </div>

      <div className="grid place-content-center font-sans lg:mx-64 font-medium">
        <div className="mt-12 container space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <p className="mt-4 flex items-baseline ">
                <span className="text-5xl font-extrabold tracking-tight">
                  15 BDT
                </span>
                <span className="ml-1 text-xl font-semibold">/each tree</span>
              </p>
              <p className="mt-6">Benifits</p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
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
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">
                    Brand Visibility in Communication Material
                  </span>
                </li>
                <li className="flex">
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
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">
                    Exclusive stand banners and backdrops featuring your company
                    logo
                  </span>
                </li>
                <li className="flex">
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
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">
                    housands of youth volunteers wearing branded T-shirts and
                    caps.
                  </span>
                </li>
              </ul>
            </div>
            <a
              className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
              href="/donate"
            >
              Donate
            </a>
          </div>
          <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <p className="mt-4 flex items-baseline ">
                <span className="text-5xl font-extrabold tracking-tight">
                  30,000
                </span>
                <span className="ml-1 text-xl font-semibold">BDT One time</span>
              </p>
              <p className="mt-6">Benifits</p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
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
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">Exclusive PR in national media</span>
                </li>
                <li className="flex">
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
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">
                    Extensive coverage of your sponsorship in 10 major
                    newspapers
                  </span>
                </li>
                <li className="flex">
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
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">
                    Boosting your brand's presence and reputation across
                    widespread media platforms.
                  </span>
                </li>
              </ul>
            </div>
            <a
              className="bg-emerald-500 text-white  hover:bg-emerald-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
              href="/donate"
            >
              Donate
            </a>
          </div>
        </div>
      </div>

      <div className="grid place-content-center h-24">
        <h2 className="text-3xl md:text-4xl font-sarif font-bold text-emerald-950 text-center">
          About Give Bangladesh
        </h2>
      </div>

      <div>
        <section className="text-gray-800 bg-gradient-to-r from-amber-200 to-yellow-400 font-sans font-medium">
          <div className="container px-5 py-12 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
              <div className="w-full sm:p-4 px-4 mb-6">
                <div className="leading-relaxed">
                  Give Bangladesh Foundation was established in 2018 to provide
                  a unique pathway for the people of Bangladesh, to get involved
                  in the development of the country through philanthropy and
                  volunteering. GBF designs projects that identify and solve
                  selected development challenges' root problems. By bringing
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
            <div className="lg:w-1/2 sm:w-1/3 w-full grid place-content-center rounded-lg overflow-hidden mt-6 sm:mt-0">
              <Image src={GB} alt="Give Bangladesh" height={400} width={512} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
