import React from "react";


//3. In a new Javascript file, create a Class Component named Example2 that displays the Skills data.
import data from "../data";


export default class Example2 extends React.Component {
  render() {
    const { Skills } = data;
    return (
      <div>

{Skills.map((skillArea, areaIndex) => (


  <div key={areaIndex}>
    <h3>{skillArea.Area}</h3>
    <ul>
      {skillArea.SkillSet.map((skill, skillIndex) => (
        <li {...`${areaIndex}-${skillIndex}`}> {skill.Name} {skill.Hot ? "(Hot)" : ""}</li>
      ))}
    </ul>
  </div>

))}

        </div>
       
    );
  }
}
