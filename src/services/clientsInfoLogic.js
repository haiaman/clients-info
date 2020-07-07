import { createLogicMiddleware, createLogic } from "redux-logic";
import {
  FETCH_CLIENTSINFO,
  FETCH_CLIENTSINFO_SUCCESS,
  FETCH_CLIENTSINFO_ERROR,
} from "./clientsInfoAction";
import mockData from "./mockData";
const clientsInfoLogic = createLogic({
  name: "fetchClientsInfo",
  type: FETCH_CLIENTSINFO,
  latest: true,

  processOptions: {
    dispatchReturn: true,

    successType: FETCH_CLIENTSINFO_SUCCESS,
    failType: FETCH_CLIENTSINFO_ERROR,
  },
  process({ action }) {
    console.log(action);
    return Promise.resolve(mockData).then(resp => resp.clients);
  },
});

export default [clientsInfoLogic];
