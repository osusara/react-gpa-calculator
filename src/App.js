import React, { Component } from "react";
import "./App.css";
import subjects from "./data/subjects";

import SubjectsTable from "./components/SubjectsTable";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subjects: subjects,
      grades: []
    };
  }

  componentDidMount() {
    
  }

  onSubmit(e) {
    e.preventDefault();
    document.querySelectorAll('input[(name = "grade")]');
  }

  render() {

    const { subjects } = this.state

    return (
      <div className="App">
        <div className="container-fluid">

          <form onSubmit={ this.onSubmit } >
            <div style={card} className="card">
              <div className="card-body">
                <h2 style={cardHeader} className="card-title text-center">
                  YEAR {subjects.applied.cis.year1.year}
                </h2>

                <div className="row">
                  <div className="col-md-6 mx-auto">
                    <SubjectsTable
                      data={subjects.applied.cis.year1.semester1}
                    />
                  </div>
                  
                  <div className="col-md-6 mx-auto">
                    <SubjectsTable
                      data={subjects.applied.cis.year1.semester2}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className= "py-3">
              <button className= "btn btn-primary" type="submit">Submit</button>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

const card = {
  padding: "0 1% 1% 1%"
}

const cardHeader = {
  marginBottom: "1%"
}

export default App;
