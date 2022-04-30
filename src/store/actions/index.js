export function setCollections(payload) {
  return {
    type: "SET_COLLECTIONS",
    payload,
  };
}

export function setSelectedCollections(payload) {
  return {
    type: "SET_SELECTED_COLLECTIONS",
    payload,
  };
}

export function setDatabases(payload) {
  return {
    type: "SET_DATABASES",
    payload,
  };
}

export function setSelectedDatabases(payload) {
  return {
    type: "SET_SELECTED_DATABASES",
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: "SET_LOADING",
    payload,
  };
}
