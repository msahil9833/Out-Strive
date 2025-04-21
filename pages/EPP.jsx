import React from "react";
import { IMG } from "../assets/img";
import Button from "../components/Button";
import { FaCheck } from "react-icons/fa6";

const EPP = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${IMG.GridBg})`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <AboutBanner />
      <Tools />
      <Services />
      <ManageSinglePlace />
      <AboutSlider />
    </div>
  );
};

const AboutBanner = () => {
  return (
    <section className="boot-container about">
      <div>
        <img src={IMG.titleepp} alt="" className="titla-img" />
        <h1>
          Lease smarter and scale faster
          <br /> with EPP Genie
        </h1>
        <p>
          With EPP Genie , you don’t just lease devices. You streamline your
          entire hardware lifecycle. From selection to deployment, it’s a
          seamless experience designed for growing businesses that need
          flexibility and control.
        </p>
        <img src={IMG.eppguine} alt="Epp Gunie" />
      </div>
      {/* <section>
        <article>
          <div>
            <h5>HRMS</h5>
            <h5>Human Resource Management</h5>
            <h5>Inventory Management</h5>
            <h5>Billing Management</h5>
            <h5>Timesheets</h5>
            <h5>Ticketing</h5>
            <h5>Customer Management</h5>
          </div>
          <div>
            <h5>HRMS</h5>
            <h5>Human Resource Management</h5>
            <h5>Inventory Management</h5>
            <h5>Billing Management</h5>
            <h5>Timesheets</h5>
            <h5>Ticketing</h5>
            <h5>Customer Management</h5>
          </div>
          <div>
            <h5>HRMS</h5>
            <h5>Human Resource Management</h5>
            <h5>Inventory Management</h5>
            <h5>Billing Management</h5>
            <h5>Timesheets</h5>
            <h5>Ticketing</h5>
            <h5>Customer Management</h5>
          </div>
        </article>

        <article>
          <div>
            <h5>Approval Process</h5>
            <h5>Customer Directory</h5>
            <h5>Shipment Processing</h5>
            <h5>Account Management</h5>
            <h5>Salary Management</h5>
            <h5>Customer Onboarding</h5>
          </div>
          <div>
            <h5>Approval Process</h5>
            <h5>Customer Directory</h5>
            <h5>Shipment Processing</h5>
            <h5>Account Management</h5>
            <h5>Salary Management</h5>
            <h5>Customer Onboarding</h5>
          </div>
          <div>
            <h5>Approval Process</h5>
            <h5>Customer Directory</h5>
            <h5>Shipment Processing</h5>
            <h5>Account Management</h5>
            <h5>Salary Management</h5>
            <h5>Customer Onboarding</h5>
          </div>
        </article>

        <article>
          <div>
            <h5>Resource Management</h5>
            <h5>Inventory Management</h5>
            <h5>Billing Management</h5>
            <h5>Account Management</h5>
            <h5>Timesheets</h5>
            <h5>Ticketing</h5>
            <h5>Customer Management</h5>
          </div>
          <div>
            <h5>Resource Management</h5>
            <h5>Inventory Management</h5>
            <h5>Billing Management</h5>
            <h5>Account Management</h5>
            <h5>Timesheets</h5>
            <h5>Ticketing</h5>
            <h5>Customer Management</h5>
          </div>
          <div>
            <h5>Resource Management</h5>
            <h5>Inventory Management</h5>
            <h5>Billing Management</h5>
            <h5>Account Management</h5>
            <h5>Timesheets</h5>
            <h5>Ticketing</h5>
            <h5>Customer Management</h5>
          </div>
        </article>
      </section> */}
      <img src={IMG.HomeBannerDot} alt="dot" />
      <img src={IMG.HomeBannerDot} alt="dot" />
    </section>
  );
};

const Tools = () => {
  return (
    <section className="tools boot-container">
      <article>
        <h1>
          Your leasing process should
          <br /> feel effortless
        </h1>
        <p>
          Outstrive's EPP Genie simplifies how teams' access and manage their
          devices. No chasing vendors, no messy approvals. Just one platform
          that handles everything in a few clicks. 
        </p>
        <p>
          <ul>
            <li>● Browse and lease devices on demand</li>
            <li>● Track contract status and renewal timelines</li>
            <li>● Consolidate vendor interactions in one place</li>
          </ul>
        </p>
      </article>

      <div>
        <section>
          <article>
            <span>1</span>
            <h4>Everyone stays on the same page, always</h4>
          </article>
          <p>
            Keep operations aligned across departments. With real time updates
            and centralized data, your team has exactly what they need when they
            need it.
          </p>
          <p>
            <ul>
              <li>● Real-time status tracking of leased devices</li>
              <li>● Built-in alerts for contract milestones</li>
              <li>● Transparent access across HR, Finance and IT teams</li>
            </ul>
          </p>
          <Button
            variant="secondary"
            text={"Contact Us"}
            href={"/contact-us"}
          />
        </section>
        <div>
          <img src={IMG.epptwo} alt="alt" />
          {/* <img
            src={IMG.HomeSmartEppBottomLeft}
            alt="alt"
            
          /> */}
        </div>
      </div>

      <div>
        <section>
          <article>
            <span>2</span>
            <h4>You don’t need to dig for the data that matters</h4>
          </article>
          <p>
            Stop switching between emails and spreadsheets. Outstrive gives you
            a clear, real-time view of your device fleet, usage, and upcoming
            actions.
          </p>
          <p>
            <ul>
              <li>● All lease data in one unified dashboard</li>
              <li>● Visual reports for better decision making</li>
              <li>● Easy export for finance and compliance teams</li>
            </ul>
          </p>
          <Button
            variant="secondary"
            text={"Contact Us"}
            href={"/contact-us"}
          />
        </section>
        <div>
          <img src={IMG.eppthree} alt="alt" />
          {/* <img
            src={IMG.HomeSmartEppBottomLeft}
            alt="alt"
            
          /> */}
        </div>
      </div>

      <div>
        <section>
          <article>
            <span>3</span>
            <h4>You can focus on growth, not approvals</h4>
          </article>
          <p>
            Let automation take care of the repetitive work. EPP Genie reduces
            bottlenecks and shortens turnaround time, so your teams stay
            productive.
          </p>
          <p>
            <ul>
              <li>● Role-based access and pre-defined workflows</li>
              <li>● Automated invoice management</li>
              <li>● Renewal notifications to stay ahead</li>
            </ul>
          </p>
          <Button
            variant="secondary"
            text={"Contact Us"}
            href={"/contact-us"}
          />
        </section>
        <div>
          <img src={IMG.eppfour} alt="alt" />
          {/* <img
            src={IMG.HomeSmartEppBottomLeft}
            alt="alt"
            
          /> */}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="boot-container services">
      <div>
        <img src={IMG.edgeicon} alt="about db logo" />
        <p>Streamline device leasing and remove friction from procurement</p>
      </div>
      <div>
        <img src={IMG.upicon} alt="about db logo" />
        <p>Scale with confidence as your team grows</p>
      </div>
      <div>
        <img src={IMG.timeicon} alt="about db logo" />
        <p>Stay informed with real-time insights</p>
      </div>
      <div>
        <img src={IMG.boyicon} alt="about db logo" />
        <p>Work your way with integrations that fit your workflow</p>
      </div>
    </section>
  );
};

const ManageSinglePlace = () => {
  return (
    <section className="boot-container manage-single-place">
      <article>
        <h4> EPP puts you in control from one place</h4>
        <p>
          Whether you’re handling 10 devices or 10,000, EPP Genie gives you
          visibility and control through one intuitive portal.
        </p>
        <div>
          <article>
            <FaCheck /> <p>Set user roles and access</p>
          </article>
          <article>
            <FaCheck /> <p>Automate lease approvals</p>
          </article>
        </div>
        <div>
          <article>
            <FaCheck /> <p>Monitor device usage and spend</p>
          </article>
          <article>
            <FaCheck /> <p>Centralize vendor management</p>
          </article>
        </div>
        <div>
          <article>
            <FaCheck /> <p>Scale as needed without losing control</p>
          </article>
        </div>
      </article>
      <div>
        <img src={IMG.eppguine} alt="" />
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

export default EPP;
