import React, { Component } from "react";
import SubjectItem from "./SubjectItem";

class SubjectsTable extends Component {
  render() {
    const { subjects, semester } = this.props.data;

    return (
      <div style={card} className="card">
        <div className="card-body">
          <h4 className="">SEMESTER {semester}</h4>
          <table style={table} className="table">
            <tbody>
              <tr>
                <th style={{ width: "15%" }}>Code</th>
                <th style={{ width: "50%" }}>Title</th>
                <th style={{ width: "10%" }}>Credits</th>
                <th style={{ width: "15%" }}>Option</th>
                <th style={{ width: "10%" }}>Grade</th>
              </tr>

              {subjects.map(subject => (
                <SubjectItem key={subject.id} subject={subject} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const card = {
    height: "100%"
}

const table = {
    fontSize: "0.9rem",
}

export default SubjectsTable;