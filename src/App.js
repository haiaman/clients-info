import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchClientsInfo } from "./services/clientsInfoAction";
import Table from "./components/Table";
import "./App.css";

const mapStateToProps = (state) => {
  return {
    clients: state.actionMap.clientsInfo
  
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClientsInfo: bindActionCreators(fetchClientsInfo, dispatch),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.fetchClientsInfo();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Table data={this.props.clients} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
