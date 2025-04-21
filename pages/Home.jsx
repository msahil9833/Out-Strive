import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import Button from '../components/Button';
import { IMG } from '../assets/img';
import Footer from '../components/Footer';
import TitleDes from '../components/TitleDes';
import { LuCircleArrowOutUpRight } from 'react-icons/lu';
import HeadWithDisc from '../components/HeadWithDisc';
import { FaPlay } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';

export const faq = [
  {
    id: 1,
    question: 'How is Outstrive different?',
    answer:
      'Outstrive is built around the full employee journey — from hire to retire. We simplify every stage with one connected platform, so you can manage people, not just processes. ',
  },
  {
    id: 2,
    question: 'Is it right for growing teams?',
    answer:
      'Yes. Outstrive is designed to grow with you, offering flexible tools that scale effortlessly as your team or business expands.',
  },
  {
    id: 3,
    question: "Are Outstrive's products customizable?",
    answer:
      'All Outstrive products come with no code business friendly admin portals that can be customized easily. ',
  },
  {
    id: 4,
    question: 'What can I manage through EPP Genie?',
    answer:
      'From leasing devices to managing approvals and renewals, EPP Genie gives you complete visibility and control over enterprise hardware programs. ',
  },
  {
    id: 5,
    question: 'How does Outstrive support TAT Genie?',
    answer:
      'Outstrive streamlines IT service management with intuitive ticketing, asset tracking, and role-based access making operations faster and smarter. ',
  },
  {
    id: 6,
    question: 'What HR functions are included? ',
    answer:
      'From hiring to performance reviews and leave tracking, our HRM module handles every step of the employee lifecycle, all from one place.',
  },
  {
    id: 7,
    question: 'How does Outstrive help with IT asset management?',
    answer:
      'We make Asset Genie simple. From device allocation to tracking and retirement, Outstrive gives you full visibility and control over every asset—without the manual effort. ',
  },
];

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${IMG.GridBg})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="home"
        style={{ backgroundImage: `url(${IMG.HomeBannerBg})` }}
      >
        <HomeHeader />
        <HomeBanner />
      </div>
      <Partners />
      <SmartEpp />
      <HowWeWork />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;

export const HomeHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="boot-container home-header">
      <Link to={'/'}>
        <img src={IMG.Logo} alt="logo" />
      </Link>
      <button className="bar" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoCloseSharp /> : <RxHamburgerMenu />}
      </button>
      <nav className={menuOpen ? 'nav-open' : ''}>
        <Link
          to={'/'}
          className={isActive('/') ? 'active' : ''}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to={'/about-us'}
          className={isActive('/about-us') ? 'active' : ''}
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>

        {/* Product Dropdown */}
        <div
          className="product-menu"
          onMouseEnter={() => setProductOpen(true)}
          onMouseLeave={() => setProductOpen(false)}
        >
          <span className="dropdown-label">Products</span>
          <div className={`dropdown-content ${productOpen ? 'show' : ''}`}>
            <Link
              to={'/hrms'}
              className={isActive('/hrms') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              HRM Genie
            </Link>
            <Link
              to={'/itms'}
              className={isActive('/itms') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              TAT Genie
            </Link>
            <Link
              to={'/itam'}
              className={isActive('/itam') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Asset Genie
            </Link>
            <Link
              to={'/smart-epp'}
              className={isActive('/smart-epp') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              EPP Genie
            </Link>
          </div>
        </div>

        <Link
          to={'/contact-us'}
          className={isActive('/contact-us') ? 'active' : ''}
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </Link>
      </nav>
      <Button
        text={'Contact Us'}
        href={'/contact-us'}
        className={'nav-contact'}
      />
    </div>
  );
};

const HomeBanner = () => {
  return (
    <div className="boot-container home-banner">
      <h1>We simplify IT so you can grow your business rapidly</h1>
      <p>
        Outstrive helps you ditch the complexity of scattered tools and clunky
        systems. With built-in automation, security, and scalability, we bring
        it all together so your team spends less time fixing IT and more time
        building what matters.
      </p>
      <div>
        <Button text="Get Started" href="/contact-us" />
      </div>
      <img src={IMG.HomeBannerDot} alt="home-banner-dot" />
      <img src={IMG.HomeBannerDot} alt="home-banner-dot" />
    </div>
  );
};

const Partners = () => {
  return (
    <div className="home-partner">
      <h3>Enterprises that trust us</h3>

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

const SmartEpp = () => {
  return (
    <div className="boot-container smart-epp">
      <TitleDes
        text={'Built to make work feel lighter'}
        // blueText={"Products"}
        description={
          'Outstrive helps you cut through everyday chaos with tools built to simplify IT, improve workflows, and keep your business moving forward.'
        }
      />

      <section>
        <article>
          <div>
            <img src={IMG.HRMGenie} alt="HRMGenie" />
          </div>
          <img
            className="dot"
            src={IMG.HomeSmartEppDot}
            alt="HomeSmartEppDot"
          />
        </article>
        <div>
          <HeadWithDisc text={'HRM Genie'} />
          <h1>HR That Works as Hard as You Do</h1>
          <p>
            From onboarding to Performance Management, Payroll to Offboarding,
            streamline HR operations, enhance employee experiences, and free up
            time for what matters most your people.
          </p>
          <Button
            variant="secondary"
            text={'Learn More'}
            href="/hrms"
            icon={LuCircleArrowOutUpRight}
          />
        </div>
      </section>

      <section>
        <div>
          <HeadWithDisc text={'TAT Genie'} />

          <h1>Next Gen IT Service Management</h1>
          <p>
            Predict, prevent, and resolve IT issues with automated workflows, AI
            driven insights, and seamless ticketing systems to keep your
            business running smoothly
          </p>
          <Button
            variant="secondary"
            text={'Learn More'}
            href="/itms"
            icon={LuCircleArrowOutUpRight}
          />
        </div>
        <article>
          <div>
            <img src={IMG.TATGenie} alt="TATGenie" />
          </div>
          <img
            className="dot"
            src={IMG.HomeSmartEppDot}
            alt="HomeSmartEppDot"
          />
        </article>
      </section>

      <section>
        <article>
          <div>
            <img src={IMG.AssetGenie} alt="Asset Genie" />
          </div>
          <img
            className="dot"
            src={IMG.HomeSmartEppDot}
            alt="HomeSmartEppDot"
          />
        </article>
        <div>
          <HeadWithDisc text={'Asset Genie'} />
          <h1>Know where your IT assets are—always.</h1>
          <p>
            Track, manage, and optimize your assets from one smart dashboard. No
            guesswork, no loose ends.
          </p>
          <Button
            variant="secondary"
            text={'Learn More'}
            href="/itam"
            icon={LuCircleArrowOutUpRight}
          />
        </div>
      </section>

      <section>
        <div>
          <HeadWithDisc text={'EPP Genie'} />
          <h1>Smarter Leasing, Simplified for Enterprises</h1>
          <p>
            A simplified device leasing solution that lets businesses lease
            electronic devices through a centralized portal, manage approvals,
            track assets, and customize plans that fit their scale and speed.
          </p>
          <Button
            variant="secondary"
            text={'Learn More'}
            href="/smart-epp"
            icon={LuCircleArrowOutUpRight}
          />
        </div>
        <article>
          <div>
            <img src={IMG.EPPGenie} alt="EPPGenie" />
          </div>
          <img
            className="dot"
            src={IMG.HomeSmartEppDot}
            alt="HomeSmartEppDot"
          />
        </article>
      </section>
    </div>
  );
};

const HowWeWork = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const data = [
    {
      title: 'Smart EPP',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      thumbnail: IMG.VideoThumbnail,
    },
    {
      title: 'HRM Genie ',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      thumbnail: IMG.VideoThumbnail,
    },
    {
      title: 'TAT Genie ',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      thumbnail: IMG.VideoThumbnail,
    },
  ];

  // return (
  //   <section className="boot-container how-we-work">
  //     <TitleDes
  //       text={"See Outstrive in Action"}
  //       // blueText={"work?"}
  //       description={
  //         "Sub text Watch how our solutions power security, IT automation, and workforce management seamlessly and efficiently."
  //       }
  //     />

  //     <article className="demo-section">
  //       {data.map((demo, index) => (
  //         <div key={index} className="demo-card">
  //           <HeadWithDisc text={demo.title} />
  //           <p className="demo-text">Lease and manage devices smartly</p>
  //           <div
  //             className="video-thumbnail"
  //             style={{
  //               backgroundImage: `url(${demo.thumbnail})`,
  //             }}
  //             onClick={() => {
  //               setVideoUrl(demo.video);
  //               setIsOpen(true);
  //             }}
  //           >
  //             <span>
  //               <FaPlay size={16} className="play-icon" />
  //             </span>
  //             <p className="watch-demo">Watch Demo</p>
  //           </div>
  //         </div>
  //       ))}

  //       {isOpen && (
  //         <div className="modal-overlay">
  //           <div className="modal-content">
  //             <button className="close-btn" onClick={() => setIsOpen(false)}>
  //               <IoCloseSharp size={20} />
  //             </button>
  //             <video controls className="video-player" autoPlay muted>
  //               <source src={videoUrl} type="video/mp4" />
  //               Your browser does not support the video tag.
  //             </video>
  //           </div>
  //         </div>
  //       )}
  //     </article>
  //   </section>
  // );
};

export const FAQ = ({ isButtonRequired=true }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleOpenFaq = (id) => {
    setOpenFaq((prevId) => (prevId === id ? null : id));
  };
  return (
    <div className="boot-container faq">
      <section>
        <div>
          <HeadWithDisc text={'Frequently Asked Questions'} />

          <h1>Have Questions? Look Here</h1>
          <p>
            Unleash the power of our Products & Services with a multitude of
            powerful features, empowering you to achieve your goals.
          </p>
          {isButtonRequired && (
            <Button
              variant="secondary"
              text={'Contact Us'}
              href={'/contact-us'}
              icon={LuCircleArrowOutUpRight}
            />
          )}
        </div>
        <article>
          {faq.map((item) => (
            <div key={item.id} className="faq-item">
              <div
                className="faq-question"
                onClick={() => handleOpenFaq(item.id)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontWeight: openFaq === item.id ? 'bold' : 'normal',
                }}
              >
                {item.question}
                <IoIosArrowDown
                  size={20}
                  style={{
                    transition: 'transform 0.3s ease',
                    transform:
                      openFaq === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </div>
              <div
                className="faq-answer"
                style={{
                  height: openFaq === item.id ? 'auto' : '0',
                  overflow: 'hidden',
                  transition: 'height 0.3s ease',
                }}
              >
                {openFaq === item.id && (
                  <p style={{ margin: '10px 0' }}>{item.answer}</p>
                )}
              </div>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};
