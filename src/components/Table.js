import React, { Component } from "react";
import Row from "./Row";

class Table extends Component {
  render() {
    let allItemRows = [];
    this.props.data.forEach((item) => {
      const perItemRows = <Row item={item} />
      allItemRows = allItemRows.concat(perItemRows);
    });
        console.log(allItemRows)
    return (
      <div style={{ overflowX: "auto" }}>
        <table className="content">
          <thead>
            <tr className="active" key={"header"}>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          {allItemRows}
        </table>
      </div>
    );
  }
}
export default Table;
