import React from "react";

//2. In a new Javascript file, create a Class Component named Example1 that displays the SocialMedias array data.
import data from "../data.json";

export default class Example1 extends React.Component {
  render() {
    const { SocialMedias } = data;
    return (
      <div>
        <ul>
          {SocialMedias.map((socialMedia,index) => (
            <li>{socialMedia}</li>
          ))}
        </ul>
      </div>
    );
  }
};

