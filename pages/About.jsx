import React from "react";
import { IMG } from "../assets/img";
import Button from "../components/Button";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  { name: "Zohar Einy", title: "CEO", image: IMG.TeamMember1 },
  { name: "Zohar Einy", title: "CEO", image: IMG.TeamMember1 },
  { name: "Zohar Einy", title: "CEO", image: IMG.TeamMember1 },
  { name: "Zohar Einy", title: "CEO", image: IMG.TeamMember1 },
  { name: "Zohar Einy", title: "CEO", image: IMG.TeamMember1 },
  { name: "Zohar Einy", title: "CEO", image: IMG.TeamMember1 },
];

const partners = [
  { name: "Zohar Einy", title: "CEO", image: IMG.Partner1 },
  { name: "Zohar Einy", title: "CEO", image: IMG.Partner1 },
  { name: "Zohar Einy", title: "CEO", image: IMG.Partner1 },
  { name: "Zohar Einy", title: "CEO", image: IMG.Partner1 },
  { name: "Zohar Einy", title: "CEO", image: IMG.Partner1 },
  { name: "Zohar Einy", title: "CEO", image: IMG.Partner1 },
];

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutOutstrive />
      {/* <Teams /> */}
      <Partners />
      {/* <GetInTouch /> */}
    </div>
  );
};

export default About;

const AboutBanner = () => (
  <section style={{ backgroundImage: `url(${IMG.ContactBanner})` }}>
    <div className="boot-container about-banner">
      <h2 >
      Building Intelligent Softwares for<br/> Next-Generation Enterprises
      </h2>
    </div>
  </section>
);

const AboutOutstrive = () => {
  return (
    <section className="boot-container about-outstrive">
      <article>
        <h1>About Outstrive</h1>
        <Button text={"Contact Us"} href={"/contact-us"} />
      </article>
      <div>
        <p>
        At Outstrive, we believe taking care of your people means taking care of everything they touch along the way. From the moment they’re hired to the day they retire, every step of the employee journey matters. 
        Whether it’s streamlining hiring and onboarding through HRM Genie, ensuring payroll runs like clockwork, assigning devices efficiently with TAT Genie or providing continuous support via TAT Genie - we’re here for every step - All in one place, Centralized, Simplified. And built to empower your people and your business.
        </p>
        
      </div>
    </section>
  );
};

// const Teams = () => {
//   return (
//     <section className="boot-container teams">
//       <article>
//         <h1>Outstrive Team</h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//           vestibulum aliquet est, quis tincidunt magna dictum quis. Integer
//           feugiat imperdiet libero, malesuada facilisis nunc faucibus vitae.
//         </p>
//         <p>
//           Phasellus nec pulvinar sem. Phasellus eu diam interdum, commodo tellus
//           a, imperdiet ex. Quisque tempus varius urna, sed efficitur turpis.
//           Suspendisse scelerisque in turpis ut scelerisque. Vestibulum augue
//           nisl, facilisis a semper vitae, tincidunt ac est.
//         </p>
//         <Button text={"Join Our Team"} href={"/contact-us"} />
//       </article>
//       <section>
//         {teamMembers.map((member, index) => (
//           <div key={index}>
//             <img src={member.image} alt={member.name} />
//             <h4>{member.name}</h4>
//             <p>{member.title}</p>
//             <a href="#">
//               <FaLinkedin size={20} />
//             </a>
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         ))}
//       </section>
//     </section>
//   );
// };

const Partners = () => {
  return (
    <section style={{ backgroundImage: `url(${IMG.ContactBanner})` }}>
    <div className="home-partner">
      <h3>From visionary startups to industry leaders,<br/> we support businesses of all sizes with cutting-edge issuing solutions.</h3>
      
      <div className="partners-logo-container">
        <div className="partners-logo">
        <img src={IMG.brilyant} alt="img" />
          <img src={IMG.ibm} alt="img" />
          <img src={IMG.paloalto} alt="img" />
        </div>
        
      </div>
    </div>
    </section>
  );
};


