import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: "Q1",
            content: `c1`,
        },
        {
            title: "q2",
            content:
                "c2",
        },
        {
            title: "q3",
            content: `c3 `,
        },
        {
            title: "q4",
            content: <p>c4</p>,
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
        <div>
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