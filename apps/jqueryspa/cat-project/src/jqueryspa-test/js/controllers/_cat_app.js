_cat.core.declare('jqueryspa-test.js.controllers.app.menuTest$$cat', {
  scrap: {
    "name": ["menuTest"],
    "description": ["Top Menu Validation"],
    "assert": ["ok($(\"#menu\"), \"menu section is no valid or not exists\");"],
    "file": "/home/arik/dev/projects/lastboy/jqueryspa/cat-project/target/jqueryspa-test/js/controllers/app.js",
    "scrapinfo": {
      "start": {
        "line": 31,
        "col": 25
      },
      "end": {
        "line": 35,
        "col": 27
      }
    },
    "commentinfo": {
      "start": {
        "line": 30,
        "col": 24
      },
      "end": {
        "line": 42,
        "col": 27
      }
    },
    "single": {
      "name": true,
      "description": true,
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
      "description": 1,
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
    "id": "scrap_b97d9303-4eb4-4dfa-3ac2-039000b9843f",
    "$type": "js",
    "numCommands": 1,
    "pkgName": "jqueryspa-test.js.controllers.app.menuTest"
  }
}, 'scrap');
_cat.core.define("jqueryspa-test.js.controllers.app.menuTest$$cat", function(thi$) {

  var pkgName = "jqueryspa-test.js.controllers.app.menuTest$$cat",
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
    'code': ["assert", "ok($(\"#menu\"),\"menu section is no valid or not exists\")\n"].join("."),
    'fail': true,
    scrap: _ipkg.scrap,
    args: _args
  });
});
_cat.core.declare('jqueryspa-test.js.controllers.app.menuItemsAction$$cat', {
  scrap: {
    "name": ["menuItemsAction"],
    "description": ["Top Menu Actions"],
    "jqm": ["click(\"#menu a[scroll-to=\" + @d.next(.menu).name + \"]\")"],
    "file": "/home/arik/dev/projects/lastboy/jqueryspa/cat-project/target/jqueryspa-test/js/controllers/app.js",
    "scrapinfo": {
      "start": {
        "line": 37,
        "col": 25
      },
      "end": {
        "line": 41,
        "col": 27
      }
    },
    "commentinfo": {
      "start": {
        "line": 30,
        "col": 24
      },
      "end": {
        "line": 42,
        "col": 27
      }
    },
    "single": {
      "name": true,
      "description": true,
      "jqm": false,
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
      "description": 1,
      "jqm": -1,
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
    "id": "scrap_033c6204-3c21-8dea-601e-81420cac6fac",
    "$type": "js",
    "numCommands": 2,
    "pkgName": "jqueryspa-test.js.controllers.app.menuItemsAction"
  }
}, 'scrap');
_cat.core.define("jqueryspa-test.js.controllers.app.menuItemsAction$$cat", function(thi$) {

  var pkgName = "jqueryspa-test.js.controllers.app.menuItemsAction$$cat",
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
  _cat.core.clientmanager.delayManager(["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'menuItemsAction', desc: 'click(\"#menu a[scroll-to=\" + @d.next(.menu).name + \"]\")',tips: ''});"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.core.plugin(\"jqm\").actions.click(\"#menu a[scroll-to=\" + _cat.utils.TestsDB.next(\".menu\").name + \"]\");"], {
    scrap: _ipkg.scrap,
    args: _args
  });
});