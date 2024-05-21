import React, { useState } from 'react';
import './faq.css';

const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: 'האם אתם תנועה פוליטית?',
            answer: 'לא.'
        },
        {
            question: 'מאיפה המימון שלכם?',
            answer: 'מאנשים פרטיים.'
        },
        {
            question: 'האם אתם קשורים לשמאל הפוליטי בצורה כלשהי?',
            answer: 'לא. היחס לערכים ליברליים אינו קשור לימין או שמאל במישור הפוליטי.'
        },
        {
            question: 'האם יש לזהות השלישית בסיס תורני?',
            answer: 'בהחלט כן.'
        }
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h1>שאלות ותשובות</h1>
            <div className="faq-list">
                {questions.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => handleToggle(index)}>
                            <span>{item.question}</span>
                            <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQPage;
