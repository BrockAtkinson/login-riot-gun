function session(data) {
  if(!window.sessionStorage) { return }
  sessionStorage.alias = data.alias;
  sessionStorage.tmp = data.pass;
}

module.exports = session;