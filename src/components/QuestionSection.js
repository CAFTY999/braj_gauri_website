import React, { useState } from 'react';
import './QuestionSections.css'; 

const QuestionSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questions = [
    {
      title: 'How can I get involved?',
      answer:
        'There are numerous ways to contribute, from volunteering your time to donating resources. Every effort counts in our mission to serve those in need.',
    },
    {
      title: 'Who can volunteer?',
      answer:
        'Anyone with a passion for helping others is welcome. We believe in the power of community and the impact of collective action.',
    },
    {
      title: 'What areas do you focus on?',
      answer:
        'We concentrate on education support, healthcare access, and skills development, working directly in communities to foster growth and opportunity.',
    },
    {
      title: 'How do donations help?',
      answer:
        'Your contributions fund essential programs and initiatives, ensuring we can continue to support and uplift those who need it most.',
    },
    {
      title: 'Where do you operate?',
      answer:
        'Our efforts are focused in Mumbai, Maharashtra, and Cuttack, Odisha, where we work closely with local communities to drive positive change.',
    },
    {
      title: 'Why choose us?',
      answer:
        'As a volunteer-driven organization, we are committed to transparency and impact, ensuring every action leads to meaningful outcomes.',
    },
  ];

  return (
    <section className="question-section">
      <div className="question-container">
        <div className="question-text">
          <p>Empowering communities through compassion</p>
          <h2>Join us in making a difference</h2>
          <p>
            Discover how we uplift the underprivileged with education, healthcare, and skills development.
            Together, we can create lasting change.
          </p>
        </div>
        <div className="question-grid">
          {questions.map((question, index) => (
            <div
              className={`question ${activeQuestion === index ? 'active' : ''}`}
              key={index}
              onClick={() => toggleQuestion(index)}
            >
              <h4>
                {question.title} <span className="arrow"></span>
              </h4>
              {activeQuestion === index && <p>{question.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
