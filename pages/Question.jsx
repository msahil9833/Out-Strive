import React, { useState } from "react";
import { IMG } from "../assets/img";

const Question = () => {
  const faqData = {
    General: [
      {
        question: "Neque porro quisquam est qui dolorem ipsum quia dolor?",
        answer:
          "There are many variations of passages of lorem ipsum available. The majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply free text available in the local markets in reprehenderit.",
      },
      {
        question: "Neque porro quisquam est qui dolorem ipsum quia dolor?",
        answer:
          "There are many variations of passages of lorem ipsum available. The majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply free text available in the local markets in reprehenderit.",
      },
      {
        question: "Why is Lorem Ipsum used?",
        answer:
          "Lorem Ipsum is used as a filler text for designing and typesetting to focus on layout and typography instead of readable content. It has been the industry standard since the 1500s.",
      },
      {
        question: "Where does Lorem Ipsum come from?",
        answer:
          "Lorem Ipsum originates from classical Latin literature, specifically sections of 'de Finibus Bonorum et Malorum' written by Cicero in 45 BC. The text has been modified over time to create modern variations.",
      },
      {
        question: "Why is Lorem Ipsum used?",
        answer:
          "Lorem Ipsum is used as a filler text for designing and typesetting to focus on layout and typography instead of readable content. It has been the industry standard since the 1500s.",
      },
      {
        question: "Where does Lorem Ipsum come from?",
        answer:
          "Lorem Ipsum originates from classical Latin literature, specifically sections of 'de Finibus Bonorum et Malorum' written by Cicero in 45 BC. The text has been modified over time to create modern variations.",
      },
    ],

    Products: [
      {
        question: "2 Neque porro quisquam est qui dolorem ipsum quia dolor?",
        answer:
          "There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply free text available in the local markets in reprehenderit.",
      },
      {
        question: "2 Neque porro quisquam est qui dolorem ipsum quia dolor?",
        answer:
          "There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply free text available in the local markets in reprehenderit.",
      },
      {
        question: "2 Why is Lorem Ipsum used?",
        answer:
          "Lorem Ipsum is used as a filler text for designing and typesetting to focus on layout and typography instead of readable content. It has been the industry standard since the 1500s.",
      },
      {
        question: "2 Where does Lorem Ipsum come from?",
        answer:
          "Lorem Ipsum originates from classical Latin literature, specifically sections of 'de Finibus Bonorum et Malorum' written by Cicero in 45 BC. The text has been modified over time to create modern variations.",
      },
      {
        question: "2 Why is Lorem Ipsum used?",
        answer:
          "Lorem Ipsum is used as a filler text for designing and typesetting to focus on layout and typography instead of readable content. It has been the industry standard since the 1500s.",
      },
      {
        question: "2 Where does Lorem Ipsum come from?",
        answer:
          "Lorem Ipsum originates from classical Latin literature, specifically sections of 'de Finibus Bonorum et Malorum' written by Cicero in 45 BC. The text has been modified over time to create modern variations.",
      },
    ],
    Subscriptions: [
      {
        question: "3 Neque porro quisquam est qui dolorem ipsum quia dolor?",
        answer:
          "There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply free text available in the local markets in reprehenderit.",
      },
      {
        question: "3 Neque porro quisquam est qui dolorem ipsum quia dolor?",
        answer:
          "There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply free text available in the local markets in reprehenderit.",
      },
      {
        question: "3 Why is Lorem Ipsum used?",
        answer:
          "Lorem Ipsum is used as a filler text for designing and typesetting to focus on layout and typography instead of readable content. It has been the industry standard since the 1500s.",
      },
      {
        question: "3 Where does Lorem Ipsum come from?",
        answer:
          "Lorem Ipsum originates from classical Latin literature, specifically sections of 'de Finibus Bonorum et Malorum' written by Cicero in 45 BC. The text has been modified over time to create modern variations.",
      },
      {
        question: "3 Why is Lorem Ipsum used?",
        answer:
          "Lorem Ipsum is used as a filler text for designing and typesetting to focus on layout and typography instead of readable content. It has been the industry standard since the 1500s.",
      },
      {
        question: "3 Where does Lorem Ipsum come from?",
        answer:
          "Lorem Ipsum originates from classical Latin literature, specifically sections of 'de Finibus Bonorum et Malorum' written by Cicero in 45 BC. The text has been modified over time to create modern variations.",
      },
    ],
    Payments: [
      {
        question: "4 Neque porro quisquam est qui dolorem ipsum quia dolor?",
        answer:
          "There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply free text available in the local markets in reprehenderit.",
      },
      {
        question: "4 Neque porro quisquam est qui dolorem ipsum quia dolor?",
        answer:
          "There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply free text available in the local markets in reprehenderit.",
      },
      {
        question: "4 Why is Lorem Ipsum used?",
        answer:
          "Lorem Ipsum is used as a filler text for designing and typesetting to focus on layout and typography instead of readable content. It has been the industry standard since the 1500s.",
      },
      {
        question: "4 Where does Lorem Ipsum come from?",
        answer:
          "Lorem Ipsum originates from classical Latin literature, specifically sections of 'de Finibus Bonorum et Malorum' written by Cicero in 45 BC. The text has been modified over time to create modern variations.",
      },
      {
        question: "4 Why is Lorem Ipsum used?",
        answer:
          "Lorem Ipsum is used as a filler text for designing and typesetting to focus on layout and typography instead of readable content. It has been the industry standard since the 1500s.",
      },
      {
        question: "4 Where does Lorem Ipsum come from?",
        answer:
          "Lorem Ipsum originates from classical Latin literature, specifically sections of 'de Finibus Bonorum et Malorum' written by Cicero in 45 BC. The text has been modified over time to create modern variations.",
      },
    ],
    Refunds: [
      {
        question: "5 Neque porro quisquam est qui dolorem ipsum quia dolor?",
        answer:
          "There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply free text available in the local markets in reprehenderit.",
      },
      {
        question: "5 Neque porro quisquam est qui dolorem ipsum quia dolor?",
        answer:
          "There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply free text available in the local markets in reprehenderit.",
      },
      {
        question: "5 Why is Lorem Ipsum used?",
        answer:
          "Lorem Ipsum is used as a filler text for designing and typesetting to focus on layout and typography instead of readable content. It has been the industry standard since the 1500s.",
      },
      {
        question: "5 Where does Lorem Ipsum come from?",
        answer:
          "Lorem Ipsum originates from classical Latin literature, specifically sections of 'de Finibus Bonorum et Malorum' written by Cicero in 45 BC. The text has been modified over time to create modern variations.",
      },
      {
        question: "5 Why is Lorem Ipsum used?",
        answer:
          "Lorem Ipsum is used as a filler text for designing and typesetting to focus on layout and typography instead of readable content. It has been the industry standard since the 1500s.",
      },
      {
        question: "5 Where does Lorem Ipsum come from?",
        answer:
          "Lorem Ipsum originates from classical Latin literature, specifically sections of 'de Finibus Bonorum et Malorum' written by Cicero in 45 BC. The text has been modified over time to create modern variations.",
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("General");

  return (
    <div className="">
      <QuestionBanner />
      <div className="mt-6 boot-container">
        <div className="flex flex-col lg:flex-row text-slate-700 text-xl items-center gap-8 mt-10 justify-center">
          {Object.keys(faqData).map((category) => (
            <h2
              key={category}
              className={`cursor-pointer ${
                activeCategory === category ? "underline text-navgreen" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </h2>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-10">
          {faqData[activeCategory].slice(0, 6).map((item, index) => (
            <div key={index} className="p-4 ">
              <h3 className="text-titlegray font-semibold">{item.question}</h3>
              <p className="opacity-70 text-titlegray mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
const QuestionBanner = () => (
  <section style={{ backgroundImage: `url(${IMG.ContactBanner})` }}>
    <div className="boot-container contact-banner">
      <h2 data-aos="zoom-in-up">Have any questions?</h2>
      <p data-aos="fade-down">Frequently Asked Questions</p>
    </div>
  </section>
);
