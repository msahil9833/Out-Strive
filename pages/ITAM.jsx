import { IMG } from "../assets/img";
import { FaDatabase } from "react-icons/fa";
import "../style/itam.css";

import scanicon from "../assets/images/scanicon.png";
import loctionicon from "../assets/images/loctionicon.png";
import docicon from "../assets/images/docicon.png";
import personicon from "../assets/images/personicon.png";

import centralizedicon from "../assets/images/centralizedicon.png";
import workflowicon from "../assets/images/workflowicon.png";
import reporticon from "../assets/images/reporticon.png";
import Button from "../components/Button";

const features = [
  {
    title: "Scan and go with QR-based tracking",
    desc: "Add new assets in seconds with QR codes. No more spreadsheets, no more ghost assets.",
    image: scanicon,
  },
  {
    title: "See the full asset journey",
    desc: "From the moment an asset is requested to the day it’s retired, you’re in control. Track purchases, usage, repairs, and replacements—without the hassle.",
    image: loctionicon,
  },
  {
    title: "Stay ahead of warranties and compliance",
    desc: "Get smart alerts before warranties expire or compliance issues pop up. Avoid penalties, plan better, and keep costs in check.",
    image: docicon,
  },
  {
    title: "Know who’s using what",
    desc: "Assign assets to employees, track ownership, and streamline approvals, so you never have to ask, “Who had this last?”",
    image: personicon,
  },
];

const tabContent = [
  {
    title: "Centralized Requirement Management ",
    content: "Track IT needs, priorities, and approvals in one place.",
    image: centralizedicon,
  },
  {
    title: "Automated Workflows ",
    content: "Streamline request handling and eliminate bottlenecks",
    image: workflowicon,
  },
  {
    title: "Real Time Progress Tracking ",
    content: "Get instant updates on IT service requests and fulfillment.",
    image: reporticon,
  },
];

const Itam = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${IMG.GridBg})`,
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <ItamBanner />
        <ProductOverview />
        <Overstriveistm />
        <WhyItMatters />
        <Why />
        <Faqupper />
        <AboutSlider />
      </div>
    </>
  );
};

export default Itam;

const ItamBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${IMG.ContactBanner})` }}
    >
      <div className="boot-container text-center">
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          <img src={IMG.titleasset} alt="" className="itam-titla-img" />
          Know where your <br className="hidden md:block" />
          IT assets{" "}
          
          are—always.
        </h2>

        <p className="text-sm text-gray-600 mt-4">
          Track, manage, and optimize your assets from one smart dashboard.
          <br />
          No guesswork, no loose ends.
        </p>
      </div>
    </section>
  );
};

const ProductOverview = () => {
  return (
    <section
      className=" bg-white grid grid-cols-1 md:grid-cols-2 items-center gap-10 
                 lg:max-w-[1420px] lg:h-[600px] lg:ml-[100px]  lg:mr-[100px] lg:border lg:border-gray-200 lg:rounded-[25px]"
    >
      {/* Left Side */}
      <div className="max-w-xl mx-auto md:mx-0 pl-5">
        <button className="border border-gray-400 text-sm px-4 py-2 rounded-full mb-4">
          Product Overview
        </button>

        <h2 className="text-3xl md:text-4xl leading-snug text-gray-900 mb-6">
          Let’s be honest,
          <span className="decoration-blue-500">
            managing
            <br className="hidden md:block" />
            IT assets is messy.
          </span>
        </h2>

        <p className="text-gray-600 mb-4">
          Devices go missing. Ownership gets fuzzy. Warranties expire without
          notice. And suddenly, your IT team is spending more time hunting down
          information than actually managing systems.
        </p>
        <p className="text-gray-600 mb-6">
          That’s where Outstrive’s Asset Genie steps in.
        </p>
        <p className="text-gray-600 mb-8">
          We give you one place to track, manage, and make sense of every device
          and asset in your ecosystem, so nothing slips through the cracks.
        </p>
<div className="flex gap-10">
        <Button text={"Get Started"} href={"/contact-us"} />
            <Button
              variant="secondary"
              text={"Contact Us"}
              href={"/contact-us"}
            />
          </div>
        </div>
      

      {/* Right Side */}
      <div className="flex justify-center">
        <img
          src={IMG.itam}
          alt="Dashboard"
          className="max-w-full"
        />
      </div>
    </section>
  );
};

const Overstriveistm = () => (
  <section>
    <div className="max-w-5xl mx-auto px-4 py-16 ">
      <div className="text-center mb-12 ">
        <h2 className="text-3xl  text-gray-900">
          What you can do with Outstrive Asset Genie
        </h2>
        <p className="text-gray-500 mt-2 text-xs">
          Because every untracked laptop, forgotten license, or expired warranty
          is money and time lost. With Outstrive Asset Genie, you stay
          organized, reduce waste, and get more from every asset you own.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6   ">
        {features.map((feature, index) => (
          <div key={index} className="corner-box ">
            <span></span> {/* used to support bottom corners */}
            <div className="flex items-start">
              <div className="w-16 bg-blue-50  p-2 mr-4 ">
                <img src={feature.image} alt="HrmsBannerIcon" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2">{feature.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyItMatters = () => {
  return (
    <div
      style={{ backgroundImage: `url(${IMG.ContactBanner})` }}
      className="max-w-7xl mx-auto px-4 py-16 text-center"
    >
      <h2 className="text-7xl font-bold text-gray-900">
        Why it{" "}
        <span className="bg-blue-500 text-white px-3 py-1 rounded-md inline-block rotate-3">
          matters
        </span>{" "}
      </h2>
      <p className="text-gray-500 mt-4 text-sm">
        Because every untracked laptop, forgotten license, or expired warranty
        is money and time lost.
        <br /> With Outstrive Asset Genie, you stay organized, reduce waste, and
        get more from every asset you own.
      </p>
    </div>
  );
};

const Why = () => (
  <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 relative overflow-visible">
    {/* Left Side - Features */}
    <div className="w-full lg:w-1/2 flex justify-center z-10">
      <div className="grid w-full max-w-md ">
        {tabContent.map((tab, index) => (
          <div
            key={index}
            className="flex items-start p-6 border-none bg-white corner-box"
          >
            <span></span>
            <div className="w-10 bg-blue-50  p-2 mr-4 ">
              <img src={tab.image} alt="HrmsBannerIcon" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {tab.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right Side - Image with Dot */}
    <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative z-10">
      <div className="relative">
        {/* Main Image */}
        <img
          src={IMG.itamtwo}
          alt="HomeSmartEppMain"
          className="max-w-full h-auto rounded-2xl relative z-10"
        />

        {/* Decorative Dot */}
      </div>
    </div>
  </section>
);

const Faqupper = () => {
  return (
    <>
      <div className="relative w-full max-w-4xl mx-auto text-center py-10">
        {/* Main Text */}
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">
          Want to simplify asset management without the mess?
        </h2>

        {/* Subheading with underline and logo link */}
        <p className="text-xl md:text-2xl font-medium text-gray-800">
          Let’s make it happen with{" "}
          <a
            href="#"
            className="relative inline-block text-blue-600 font-bold "
          >
            Outstrive.
          </a>
        </p>
      </div>
    </>
  );
};

const AboutSlider = () => {
  return (
    <div className="home-partner">
      <h3>
        From visionary startups to industry leaders,
        <br /> we support businesses of all sizes with cutting-edge issuing
        solutions.
      </h3>

      <div className="partners-logo-container">
        <div className="partners-logo">
          <img src={IMG.brilyant} alt="img" />
          <img src={IMG.ibm} alt="img" />
          <img src={IMG.paloalto} alt="img" />
        </div>
      </div>
    </div>
  );
};
