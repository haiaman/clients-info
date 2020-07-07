import React, { Component } from "react";

class Row extends Component {
  constructor() {
    super();

    this.state = {
      expandedRows: [],
    };
  }

  handleRowClick(rowId) {
    const currentExpandedRows = this.state.expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

    const newExpandedRows = isRowCurrentlyExpanded
      ? currentExpandedRows.filter((id) => id !== rowId)
      : currentExpandedRows.concat(rowId);

    this.setState({ expandedRows: newExpandedRows });
  }

  renderItem(item) {
    const clickCallback = () => this.handleRowClick(item.id);
    const itemRows = [
      <tbody>
        <tr onClick={clickCallback} key={"row-data-" + item.id}>
          <td key={"col-" + item.id}>{item.id}</td>
          <td key={"col-" + item.name}>{item.name}</td>
          <td key={"col-" + item.age}>{item.age}</td>
        </tr>
      </tbody>,
    ];

    if (this.state.expandedRows.includes(item.id)) {
      itemRows.push(
        <tbody>
          <tr key={"row-expanded-" + item.id}>
            <th key={"col-detail"}>
              {
                <div className="expand">
                  Company {item.additionalInfo.company}
                </div>
              }

              {<div className="expand">Email {item.additionalInfo.email}</div>}
              {<div className="expand">Phone {item.additionalInfo.phone}</div>}
            </th>
          </tr>
        </tbody>
      );
    }

    return itemRows;
  }

  render = () => this.renderItem(this.props.item);
}

export default Row;
