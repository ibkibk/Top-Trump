import React, { Component } from "react";
import styles from "./Skills.module.scss";
import { skillsTypes } from "../propTypes";

class Skills extends Component {
  capitaliseString = skillName => {
    const newSkillName = skillName.charAt(0).toUpperCase() + skillName.slice(1);
    return skillName === "mvp" ? "MVP" : newSkillName;
  };

  render() {
    return (
      <table className={styles.skills}>
        <tbody>
          {/* Object.entries() produces an array of key 
              value pairs from a data object. The 'key' is 
              then used in the <th> and the value in the <td> */}

          {Object.entries(this.props.skills).map((entry, index) => {
            return (
              <tr key={index}>
                <th>{this.capitaliseString(entry[0])}</th>
                <td>{entry[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

// defining data types for props passed to skills component

Skills.propTypes = skillsTypes.isRequired;

export default Skills;
