import React, { Component } from "react";

class SubjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subjectPoints: '',
    };
  }

  pointsCal(grade){
    switch (grade) {
      case "A+":
        return 4.0;
        break;
      case "A":
        return 4.0;
        break;
      case "A-":
        return 3.7;
        break;
      case "B+":
        return 3.3;
        break;
      case "B":
        return 3.0;
        break;
      case "B-":
        return 2.7;
        break;
      case "C+":
        return 2.3;
        break;
      case "C":
        return 2.0;
        break;
      case "C-":
        return 1.7;
        break;
      case "D+":
        return 1.3;
        break;
      case "D":
        return 1.0;
        break;
      case "E":
        return 0.0;
        break;
      default:
        return 0.0;
        break;
    }
  }

  onChange(credits, e) {
    let points = this.pointsCal(e.target.value);
    
    this.setState({subjectPoints: (points*credits)})
    
  }

  render() {
    const { id, title, credits, compulsory } = this.props.subject;

    return (
      <tr>
        <td>{id}</td>
        <td className="text-left">{title}</td>
        <td>{credits}</td>
        <td>{compulsory ? "Compulsory" : "Elective"}</td>
        <td>
          {
            <input
              type="text"
              name="grade"
              onChange={e => this.onChange(credits, e)}
              style={{ width: "100%", textAlign: "center" }}
            />
          }
        </td>
      </tr>
    );
  }
}

export default SubjectItem;
