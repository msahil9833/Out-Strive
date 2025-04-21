import React, { useEffect, useState } from 'react';
import { IMG } from '../assets/img';
import { GoArrowUpRight } from 'react-icons/go';
import { FAQ } from './Home';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import toast from 'react-hot-toast';
import { contactUs } from '../redux/features/contact/contactSlice';

const Contact = () => {
  return (
    <div>
      <ContactBanner />
      <ContactForm />
      <GetInTouch />
      <FAQ isButtonRequired={false} />
    </div>
  );
};

export default Contact;

const ContactBanner = () => (
  <section style={{ backgroundImage: `url(${IMG.ContactBanner})` }}>
    <div className="boot-container contact-banner">
      <h2>Talk to Us</h2>
    </div>
  </section>
);

const ContactForm = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    companyName: '',
    teamSize: '',
    message: '',
  });

  const dispatch = useDispatch();

  const { loading, success, error } = useSelector((state) => state.contact);

  useEffect(() => {
    if (success) {
      toast.success('Form Submitted Succesfully.');
      setData({
        name: '',
        email: '',
        companyName: '',
        teamSize: '',
        message: '',
      });
    }
    if (error) toast.error(error);
  }, [success, error]);

  if (loading) return <Loader />;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(contactUs(data));
  };

  return (
    <section className="boot-container contact-form">
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={data.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="companyName">Company *</label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter your company name"
              value={data.companyName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="teamSize">Team Size*</label>
            <input
              type="text"
              name="teamSize"
              placeholder="Enter your no. of employees"
              value={data.teamSize}
              onChange={handleChange}
            />
          </div>
        </div>
        <section>
          <label htmlFor="message">How Can We Help?*</label>
          <textarea
            name="message"
            id="message"
            placeholder="What brings you to Outstrive today?"
            rows={5}
            value={data.message}
            onChange={handleChange}
          ></textarea>
        </section>
        <article>
          <button type="submit">Send Message</button>
        </article>
      </form>
    </section>
  );
};

const GetInTouch = () => {
  return (
    <section className="boot-container get-in-touch">
      <div>
        <h2>Get in touch today!</h2>
        <article>
          <div>
            <article>
              <img src={IMG.ContactMailIcon} alt="" />
            </article>
            <a href="mailto:info@outstrive.co">info@outstrive.co</a>
          </div>
          {/* <div>
            <article>
              <img src={IMG.ContactPhoneIcon} alt="" />
            </article>
            <a href="tel:+001 6547 6589"></a>
            +001 6547 6589
          </div> */}
        </article>
      </div>
    </section>
  );
};
