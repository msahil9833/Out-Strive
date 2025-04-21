import { useState } from "react";
import Button from "../components/Button";
import { IMG } from "../assets/img";

const tabContent = [
  {
    title: "Centralized Requirement Management ",
    content: "Track IT needs, priorities, and approvals in one place.",
  },
  {
    title: "Automated Workflows ",
    content: "Streamline request handling and eliminate bottlenecks",
  },
  {
    title: "Real Time Progress Tracking ",
    content: "Get instant updates on IT service requests and fulfillment.",
  },
  {
    title: "Compliance & Security Assurance ",
    content: "Ensure all IT operations meet security and regulatory standards.",
  },
];

const ITMS = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${IMG.GridBg})`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <ItmsBanner />
      <Services />
      <WithItms />
      <AboutSlider />
    </div>
  );
};

export default ITMS;

const ItmsBanner = () => {
  return (
    <section className="itms-banner">
      <article className="boot-container ">
        <img src={IMG.titletat} alt="" className="titla-img" />
        <h1>
          Seamless IT Management for
          <br /> Modern Teams
        </h1>
        <p>
          Optimize workflows, enhance collaboration, and resolve issues
          effortlessly, so your IT runs as
          <br /> smoothly as your business.
        </p>
      </article>

      <div>
        <section>
          <section>
            <div>
              <img src={IMG.automationicon} alt="HrmsBannerIcon" />
              <p>Automated Service Management</p>

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <img src={IMG.efficiencyicon} alt="HrmsBannerIcon" />
              <p>Real-time Incident Resolution</p>

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <img src={IMG.integrationicon} alt="HrmsBannerIcon" />
              <p>Seamless Workflow Integration</p>

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <img src={IMG.proactiveicon} alt="HrmsBannerIcon" />
              <p>Proactive Monitoring & Alerts</p>

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>
          <div>
            <Button text={"Get Started"} href={"/contact-us"} />
            <Button
              variant="secondary"
              text={"Contact Us"}
              href={"/contact-us"}
            />
          </div>
        </section>
        <img src={IMG.ITSMHomepage} alt="ItmsBanner" />
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="boot-container itms-services">
      <article>
        <h1>
          TAT Genie offers many features designed to make your work easier.
        </h1>
        <p>
          A comprehensive suite of tools designed to optimize IT operations,
          streamline workflows, and enhance service delivery.
        </p>
      </article>

      <div>
        <article>
          <div>
            <img src={IMG.ticketicon} alt="HrmsBannerIcon" />
          </div>
          <h4>Automated Ticketing System</h4>
          <p>Reduce response times with AI-driven automation.</p>
        </article>
        <article>
          <div>
            <img src={IMG.changeicon} alt="HrmsBannerIcon" />
          </div>
          <h4>Change & Incident Management</h4>
          <p>Ensure smooth IT changes with minimal disruptions.</p>
        </article>
        <article>
          <div>
            <img src={IMG.selficon} alt="HrmsBannerIcon" />
          </div>
          <h4>Self Service Portal</h4>
          <p>Empower users with instant access to IT support.</p>
        </article>
        <article>
          <div>
            <img src={IMG.managmenticon} alt="HrmsBannerIcon" />
          </div>
          <h4>Asset & Configuration Management</h4>
          <p>Track and manage IT assets in real time.</p>
        </article>
        <article>
          <div>
            <img src={IMG.webicon} alt="HrmsBannerIcon" />
          </div>
          <h4>Performance Analytics & Reporting</h4>
          <p>Gain insights to optimize IT operations.</p>
        </article>
        <article>
          <div>
            <img src={IMG.partyicon} alt="HrmsBannerIcon" />
          </div>
          <h4>Seamless Third Party Integrations</h4>
          <p>Connect with your existing enterprise tools.</p>
        </article>
        <article>
          <div>
            <img src={IMG.iticon} alt="HrmsBannerIcon" />
          </div>
          <h4>Proactive IT Monitoring</h4>
          <p>Identify and resolve issues before they impact business.</p>
        </article>
        <article>
          <div>
            <img src={IMG.workicon} alt="HrmsBannerIcon" />
          </div>
          <h4>Custom Workflows & Approvals</h4>
          <p>Automate TAT Genie processes to fit your needs.</p>
        </article>
      </div>
    </section>
  );
};

const WithItms = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section
      className="with-itms"
      style={{ backgroundImage: `url(${IMG.ContactBanner})` }}
    >
      <div className="boot-container">
        <article>
          <h1>With TAT Genie</h1>{" "}
        </article>

        <section>
          <article>
            {tabContent.map((tab, index) => (
              <h4
                key={index}
                className={index === activeTab ? "active" : ""}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </h4>
            ))}
          </article>
          <div>
            <p>{tabContent[activeTab].content}</p>
            <Button text={"Contact Us"} href={"/contact-us"} />
          </div>
        </section>
        <img src={IMG.ITSMtwo} alt="WithItmsMainImg" />
      </div>
    </section>
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
