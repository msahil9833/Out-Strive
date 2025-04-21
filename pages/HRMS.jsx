import { useState } from "react";
import Button from "../components/Button";
import { IMG } from "../assets/img";

const proposal = [
  {
    title: "Employee Self-Service ",
    text: "A single hub for leave requests, pay slips, and personal details.",
    image: IMG.HRMSTable,
  },
  {
    title: "Smarter Performance Management ",
    text: "Set goals, track progress, and make informed decisions effortlessly.",
    image: IMG.HRMSTabletwo,
  },
  {
    title: "Automated Payroll & Compliance ",
    text: "No more manual errors get accurate, timely payroll processing. ",
    image: IMG.HRMSTablethree,
  },
];

const HRMS = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${IMG.GridBg})`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <HrmsBanner />
      <Proposal />
      <MoreFeatures />
      <HrmsSlider />
    </div>
  );
};
export default HRMS;

const HrmsBanner = () => {
  return (
    <section
      className="hrms-banner"
      style={{ backgroundImage: `url(${IMG.ContactBanner})` }}
    >
      <div className="boot-container">
        <img src={IMG.titlehrm} alt="" className="titla-img" />
        <h1>Streamline HR Operations </h1>
        <h1>from Hire to Retire</h1>
        <div>
          <p>
            No more juggling spreadsheets or chasing paperwork. Outstrive’s HRM
            Genie automates every step of the employee journey from onboarding
            to performance reviews so your HR team can focus on what really
            matters-people.
          </p>
          <article>
            <Button text={"Get Started"} href={"/contact-us"} />
          </article>
        </div>

        <section>
          <div>
            <img src={IMG.wheelicon} alt="HrmsBannerIcon" />
            <p>Employee Management</p>

            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <img src={IMG.developmenticon} alt="HrmsBannerIcon" />
            <p>Performance Management</p>

            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <img src={IMG.checkicon} alt="HrmsBannerIcon" />
            <p>Leave & Absence Management</p>

            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>

        <img src={IMG.HRMSHomepage} alt="HRMSHomepage" />
      </div>
    </section>
  );
};

const Proposal = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="boot-container proposal">
      <article>
        <h1>HR Made Simple so that You Can Focus on Growth</h1>
        <p>
          HRM Genie brings all your HR tasks into one clean, intelligent
          workspace freeing your team from busy work and helping them do what
          they do best.
        </p>
        <div>
          {proposal.map((item, index) => (
            <article key={index} onClick={() => setActiveTab(index)}>
              <div>
                <img src={IMG.HrmsProposalIcon} alt="HrmsProposalIcon" />
                <h2>{item.title}</h2>
              </div>
              {activeTab === index && <p>{item.text}</p>}
            </article>
          ))}
        </div>
      </article>
      <div>
        <img
          src={proposal[activeTab].image}
          alt={`HrmsProposal${activeTab + 1}`}
        />
      </div>
      <Button
        className="-ml-[78%]"
        variant="secondary"
        text={"Contact Us"}
        href={"/contact-us"}
      />
    </section>
  );
};

const MoreFeatures = () => {
  return (
    <section className="boot-container more-features">
      <article>
        <h1>Even more features ...</h1>
      </article>
      <section>
        <div>
          <img src={IMG.hrmstwo} alt="HRMSTable" />
        </div>
        <div>
          <img src={IMG.hrmsthree} alt="HRMSTable" />
        </div>
      </section>

      <div style={{ backgroundImage: `url(${IMG.ContactBanner})` }}>
        <article>
          <h2>Security and observability</h2>
          <p>
            Protect your workforce and optimize performance with built-in
            security and real-time observability. Our HRM Genie ensures
            compliance, detects anomalies, and provides deep insights into
            employee trends, so you can act fast and stay ahead.
          </p>
          <br />
          <ul>
            <li>
              ● Advanced Data Encryption – Keep sensitive HR data safe and
              compliant. 
            </li>
            <li>
              ● Real-Time Monitoring – Detect potential risks before they become
              problems. 
            </li>
            <li>
              ● Seamless Auditing & Compliance – Stay ahead of regulations
              effortlessly.
            </li>
          </ul>
          <p>
            Security isn’t just an add-on; it’s built into everything we do. 
          </p>
          <Button
            variant="secondary"
            text={"Contact Us"}
            href={"/contact-us"}
          />
        </article>
        <div>
          {/* <img src={IMG.hrmsfour} alt="hrmsfour" /> */}
        </div>
      </div>
    </section>
  );
};

const HrmsSlider = () => {
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
