import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Plan from "./Plan";

class App extends Component {
  state = {
    items: [],
    text: "",
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleAdd = (e) => {
    e.preventDefault();
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  };

  handleDelete = (id) => {
    const oldItems = [...this.state.items];
    const items = oldItems.filter((element, i) => {
      return i !== id;
    });
    this.setState({ items: items });
  };
  render() {
    return (
      <div>
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
              <h1 className="text-center">Today's Plan</h1>
              <form onSubmit={this.handleAdd}>
                <div className="row">
                  <div className="col-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write Plans Here"
                      value={this.state.text}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-2">
                    <button
                      type="submit"
                      className="btn btn-warning px-5 fw-bold "
                      onClick={this.handleAdd}
                    >
                      Add
                    </button>
                  </div>
                  <div className="container-fluid">
                    <ul className="list-unstyled row m-5">
                      {this.state.items.map((value, i) => {
                        return (
                          <Plan
                            value={value}
                            key={i}
                            id={i}
                            sendData={this.handleDelete}
                          />
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
