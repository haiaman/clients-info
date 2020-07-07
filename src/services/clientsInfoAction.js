export const FETCH_CLIENTSINFO = "FETCH_CLIENTSINFO";
export const FETCH_CLIENTSINFO_SUCCESS = "FETCH_CLIENTSINFO_SUCCESS";
export const FETCH_CLIENTSINFO_ERROR = "FETCH_CLIENTSINFO_ERROR";

export const fetchClientsInfo = (p) => ({
  type: FETCH_CLIENTSINFO,
  payload: p,
});

/*export const fetchClientsInfoSuccess = (p) => ({
  type: FETCH_CLIENTSINFO_SUCCESS,
  payload: p,
});

export const fetchClientsInfoError = (p) => ({
  type: FETCH_CLIENTSINFO_ERROR,
  payload: p,
});*/
