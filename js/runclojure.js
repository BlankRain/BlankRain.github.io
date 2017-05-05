(function() {
  var clojure ;
  clojure = {};
  window.clj=clojure;
  clojure.run = (function(code, options) {
        return com.demo.Greeter.clj(code);
  });
  if ((typeof window === 'undefined')) return;
  clojure.load = (function(url, callback, options, hold) {
    var xhr;
    if ((typeof options === 'undefined')) options = {};
    if ((typeof hold === 'undefined')) hold = false;
    options.sourceFiles = [url];
    xhr = (window.ActiveXObject ? new window.ActiveXObject("Microsoft.XMLHTTP") : new window.XMLHttpRequest());
    xhr.open("GET", url, true);
    if (("overrideMimeType" in xhr)) xhr.overrideMimeType("text/plain");
    xhr.onreadystatechange = (function() {
      var param;
      if ((xhr.readyState === 4)) {
        if ((xhr.status === 0 || xhr.status === 200)) {
          param = [xhr.responseText, options];
          if (!hold) clojure.run.apply(clojure, [].concat(param));
        } else {
          throw new Error(("Could not load " + url));
        }
      }
      return (callback ? callback(param) : undefined);
    });
    return xhr.send(null);
  });

  function runScripts() {
    console.log("runScript...");
    var scripts, clojures, index, s, i, script, _i, _ref, _ref0;
    scripts = window.document.getElementsByTagName("script");
    clojures = [];
    index = 0;
    _ref = scripts;
    for (_i = 0; _i < _ref.length; ++_i) {
      s = _ref[_i];
      if ((s.type === "text/clojure")) clojures.push(s);
    }

    function execute() {
      var param, _ref0;
      param = clojures[index];
      if ((param instanceof Array)) {
        clojure.run.apply(clojure, [].concat(param));
        ++index;
        _ref0 = execute();
      } else {
        _ref0 = undefined;
      }
      return _ref0;
    }
    execute;
    _ref0 = clojures;
    for (i = 0; i < _ref0.length; ++i) {
      script = _ref0[i];
      (function(script, i) {
        var options, _ref1;
        options = {};
        if (script.src) {
          _ref1 = clojure.load(script.src, (function(param) {
            clojures[i] = param;
            return execute();
          }), options, true);
        } else {
          options.sourceFiles = ["embedded"];
          _ref1 = (clojures[i] = [script.innerHTML, options]);
        }
        return _ref1;
      })(script, i);
    }
    return execute();
  }
  clojure.runScripts=runScripts;
  return window.addEventListener ? window.addEventListener("DOMContentLoaded", runScripts, false) : window.attachEvent("onload", runScripts);
})['call'](this);