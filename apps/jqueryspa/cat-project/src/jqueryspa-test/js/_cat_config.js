_cat.core.declare('jqueryspa-test.js.config.bootstrapInitTest$$cat', {
  scrap: {
    "name": ["bootstrapInitTest"],
    "assert": ["ok(true, \"Bootstrap Initialization failed\");"],
    "file": "/home/arik/dev/projects/lastboy/jqueryspa/cat-project/target/jqueryspa-test/js/config.js",
    "scrapinfo": {
      "start": {
        "line": 41,
        "col": 9
      },
      "end": {
        "line": 44,
        "col": 11
      }
    },
    "commentinfo": {
      "start": {
        "line": 40,
        "col": 8
      },
      "end": {
        "line": 45,
        "col": 11
      }
    },
    "single": {
      "name": true,
      "assert": false,
      "file": true,
      "scrapinfo": true,
      "commentinfo": true,
      "single": true,
      "singleton": true,
      "arguments": true,
      "context": false,
      "auto": true,
      "injectcode": true,
      "id": true,
      "$type": true,
      "numCommands": true
    },
    "singleton": {
      "name": -1,
      "assert": -1,
      "file": -1,
      "scrapinfo": -1,
      "commentinfo": -1,
      "single": -1,
      "singleton": -1,
      "arguments": -1,
      "context": 1,
      "auto": -1,
      "injectcode": -1,
      "id": -1,
      "$type": -1,
      "numCommands": -1
    },
    "arguments": ["thi$"],
    "context": ["thi$"],
    "auto": true,
    "injectcode": false,
    "id": "scrap_6f9d8994-2b9b-d2f5-c2ef-5f2f047c3185",
    "$type": "js",
    "numCommands": 1,
    "pkgName": "jqueryspa-test.js.config.bootstrapInitTest"
  }
}, 'scrap');
_cat.core.define("jqueryspa-test.js.config.bootstrapInitTest$$cat", function(thi$) {

  var pkgName = "jqueryspa-test.js.config.bootstrapInitTest$$cat",
    _argsrefs = arguments,
    _argsnames = "thi$",
    _args = {},
    _ipkg = _cat.core.getVar(pkgName),
    _counter = 0;

  if (_args) {
    _argsnames = _argsnames.split(",");
    _argsnames.forEach(function(arg) {
      _args[arg] = _argsrefs[_counter];
      _counter++;
    });
  }

  /* test content in here */
  _cat.core.clientmanager.delayManager(["_cat.utils.chai.assert(context);"], {
    'code': ["assert", "ok(true,\"Bootstrap Initialization failed\")\n"].join("."),
    'fail': true,
    scrap: _ipkg.scrap,
    args: _args
  });
});