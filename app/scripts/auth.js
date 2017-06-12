var tag;

Gun.on('auth', function(context) {
  // console.log('auth:', context);
  if(context.ack) {
    tag.status = 'loggedin';
    tag.name = context.put.alias;
    tag.update();
  }
});

Gun.on('secure', function(at) {
  // console.log('secure:', at);
  if(!at.put || !at.put.users) { return }

  var no;
  Gun.node.is(at.put.users, function(val, key) {
    // console.log('val', val, 'key', key);
    if('alias/' + key === Gun.val.rel.is(val)) {
      return;
    }
    return no = true;
  });

  if(no) { return }
  this.to.next(at);
});

function run(obj) {
  tag = obj;
}

function account(ack, func) {
  if(ack.err) { return }
  if(ack.pub) {
    func();
  }
  return;
}

module.exports.run = run;
module.exports.account = account;