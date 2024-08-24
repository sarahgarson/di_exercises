import React from "react";


//In a new Javascript file, create a Class Component named Example3 that displays the Experiences array data. Add a key attribute to every new <div>.
import data from "../data";



export default function Example3() {
  const { Experiences } = data;
  return (
    <div >
      {Experiences.map((experience) => (

        <div key={experience.companyName}>
          {/* was getting an error because my img tag wasnt self-closing and yes with a </img> at the end  */}
           <img src={experience.logo} alt={`${experience.companyName} logo`} />
          <h3>{experience.companyName}</h3>
          <p>{experience.roles[0].title}</p>
          <p>{experience.roles[0].startDate}</p>
          <p>{experience.roles[0].location}</p>
          <p>{experience.roles[0].description}</p>
          
        </div>
      ))}
    </div>
  );
};



