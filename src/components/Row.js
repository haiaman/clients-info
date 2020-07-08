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
        <tr onClick={clickCallback} key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      </tbody>,
    ];

    if (this.state.expandedRows.includes(item.id)) {
      itemRows.push(
        <tbody>
          <tr key={"row-expanded-" + item.id}>
            <div className="expand">
              {<div>Company: {item.additionalInfo.company}</div>}

              {<div>Email: {item.additionalInfo.email}</div>}
              {<div>Phone: {item.additionalInfo.phone}</div>}
              {<div>Address: {item.additionalInfo.address}</div>}
            </div>
          </tr>
        </tbody>
      );
    }

    return itemRows;
  }

  render = () => this.renderItem(this.props.item);
}

export default Row;
