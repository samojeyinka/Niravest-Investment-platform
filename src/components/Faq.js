import React, { useState } from 'react';
import '../stylesheets/Faq.css';
import { FaAngleDown } from 'react-icons/fa';


const Faq = () => {

    const [activeQ, setActiveQ] = useState('q1');

    const openQ = (id) => {
        setActiveQ(activeQ === id ? "" : id);
    }

    const getClassQuestion = (id) => {
        return activeQ === id ? 'active-question' : "";

    }

    const getClassAnswer = (id) => {
        return activeQ === id ? 'active-answer' : "";

    };



    return (
        <div className='faq-section'>
            <div className='faq-container'>
                <div className='faq-intro'>

                    <h1>Frequently Asked Questions</h1>
                    <p>Frequently Asked Questions About Investment: Answers to Common Concerns and Inquiries Regarding Our
                        Investment Services and Processes.</p>

                </div>


                <div className='faq-boxes'>
                    <div className='faq-box drop-shadow-xl'>
                        <div className={`faq_question ${getClassQuestion('q1')}`} onClick={() => openQ('q1')} id='q1'>
                            <p>What sets our investment opportunities apart?</p>
                            <FaAngleDown size={25} />

                        </div>

                        <div className={`faq_answer ${getClassAnswer('q1')}`} onClick={() => openQ('q1')} id='q1'>
                            <p>Comparing investment options is crucial to finding the best fit for your financial goals and risk tolerance, ensuring optimal returns. By comparing various investments, you can discover opportunities with lower fees, diverse portfolios, or superior performance. Research online
                                to explore different investment avenues and compare offerings from various financial institutions.</p>
                        </div>

                    </div>

                    <div className='faq-box drop-shadow-xl'>
                        <div className={`faq_question ${getClassQuestion('q2')}`} onClick={() => openQ('q2')} id='q2'>
                            <p>How can I discover investment opportunities?</p>
                            <FaAngleDown size={25} />

                        </div>

                        <div className={`faq_answer ${getClassAnswer('q2')}`} onClick={() => openQ('q2')} id='q2'>
                            <p>You can explore investment opportunities by researching online and comparing offerings
                                from different financial institutions. Websites like Morningstar, Yahoo Finance, and Bloomberg
                                provide tools to compare investments and track their performance. Additionally, consider consulting with
                                a financial advisor or planner to discuss your investment goals and receive personalized recommendations.
                            </p>
                        </div>

                    </div>


                    <div className='faq-box drop-shadow-xl'>
                        <div className={`faq_question ${getClassQuestion('q3')}`} onClick={() => openQ('q3')} id='q3'>
                            <p>How can I discover investment opportunities?</p>
                            <FaAngleDown size={25} />

                        </div>

                        <div className={`faq_answer ${getClassAnswer('q3')}`} onClick={() => openQ('q3')} id='q3'>
                            <p>You can explore investment opportunities by researching online and comparing offerings
                                from different financial institutions. Websites like Morningstar, Yahoo Finance, and Bloomberg
                                provide tools to compare investments and track their performance. Additionally, consider consulting
                                with a financial advisor
                                or planner to discuss your investment goals and receive personalized recommendations.</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Faq