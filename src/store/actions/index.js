export function setCollections(payload) {
  return {
    type: "SET_COLLECTIONS",
    payload,
  };
}

export function setDatabases(payload) {
  return {
    type: "SET_DATABASES",
    payload,
  };
}
