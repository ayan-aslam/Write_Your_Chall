import React from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";

export const SolutionPage = () => {
  const { solutions } = useAuth();
  let { service } = useParams();

  // Filter solutions based on service value
  const filteredSolutions = solutions.filter(
    (curElem) => curElem.ctf === service
  );

  // Group solutions by category
  const groupedSolutions = {};
  filteredSolutions.forEach((curElem) => {
    if (!groupedSolutions[curElem.category]) {
      groupedSolutions[curElem.category] = [];
    }
    groupedSolutions[curElem.category].push(curElem);
  });

  return (
    <>
      <h1 className="challHead" variant="h2" color="white" fontFamily="arial">
        The Challenge Solutions of {service}!!!
      </h1>

      {Object.keys(groupedSolutions).map((category, index) => (
        // <div key={index}>
        //   <h2
        //     className="challCategory"
        //     variant="h4"
        //     color="white"
        //     fontFamily="arial"
        //   >
        //     {category}
        //   </h2>
        //   {groupedSolutions[category].map((curElem, idx) => (
        //     <div className="challBox" key={idx}>
        //       <p className="challName">{curElem.chall}</p>
        //     </div>
        //   ))}
        // </div>
        <div key={index}>
          <section className="section-services">
            <div className="container">
              <h2
                className="challCategory"
                variant="h4"
                color="white"
                fontFamily="arial"
              >
                {category}
              </h2>
            </div>
            {groupedSolutions[category].map((curElem, idx) => (
              <div className="container grid grid-two-cols" key={idx}>
                <div className="card-details ">
                    <div className="check">
                  <div>
                    <p className="challName">Chall: {curElem.chall}</p>
                  </div>
                  <hr />
                  <div>
                    <p className="challName">Solution:</p>
                    <p className="challName">{curElem.solution}</p>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      ))}
    </>
  );
};
