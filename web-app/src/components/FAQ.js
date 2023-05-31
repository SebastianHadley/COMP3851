import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: "How do I get a campus ID card?",
            content: "To get a campus ID card, you'll need to visit the campus ID office, which is typically located in the student center or administration building. You'll need to bring a government-issued ID (such as a driver's license or passport) and proof of enrollment (such as a class schedule or tuition receipt). Once you have your ID card, be sure to carry it with you at all times while on campus.",
        },
        {
            title: "How can I find out about campus events and activities?",
            content:"There are usually several ways to find out about campus events and activities. Check your university's website, student portal, or social media accounts for event listings. You can also look for posters or flyers around campus, or check with your student union or student activities office. Additionally, many events will be announced in class or through email by your professors.",
        },
        {
            title: "Where can I go for academic advising or career counseling?",
            content: "Most universities have an academic advising center or office that you can visit for help with course selection, degree requirements, and academic planning. For career counseling and job search assistance, you can usually visit the career services center or office. These offices are often located in the student center or administration building, and you can typically schedule an appointment or drop in during specified hours.",
        },
        {
            title: "How can I get involved in clubs and organizations on campus?",
            content: "There are typically many clubs and organizations on campus that cater to a wide variety of interests and hobbies. You can usually find a list of available clubs and organizations on your university's website or student portal. You can also attend club fairs or events during orientation week to learn more about the options available to you. To join a club or organization, simply contact the group's leadership or attend a meeting to learn more.",
        },
    ],
};
const styles = {
    bgColor: 'black',
    titleTextColor: "blue",
    rowTitleColor: "white",
    rowContentColor: 'white',
    arrowColor: "white",
};

const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};


export const FAQ = () => {

    return (
        <div className="faq-block">
            <h1 className="faq-heading">Frequent Ask Question</h1>
            <div>
                <Faq 
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
      </div>
    );
}