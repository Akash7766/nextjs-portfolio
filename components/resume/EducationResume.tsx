import React from "react";

const EducationResume = () => {
  return (
    <>
      <h2 className="text-xl text-center uppercase border-b-2 inline-block mb-5">
        education
      </h2>
      <div>
        <ul className="steps steps-vertical">
          <li className="step step-primary">
            <p className="text-left flex flex-col my-10">
              <span className="text-2xl font-bold">S.S.C</span>
              <span className="text-gray-500">
                Mamun Smrity Public High School
              </span>
              <span>Passing Year: 2017</span>
              <span>Result: GPA-5</span>
            </p>
          </li>
          <li className="step step-primary">
            <p className="text-left flex flex-col my-10">
              <span className="text-2xl font-bold">
                Diplolma in computer Technology
              </span>
              <span className="text-gray-500">Dhaka Polytechnic Institute</span>
              <span>Session: 2017-2018</span>
              <span>Status: Running</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default EducationResume;
