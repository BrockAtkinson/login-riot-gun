function link(url) {
  const route = require('riot-route');
  route(url);
}

module.exports.to = link;