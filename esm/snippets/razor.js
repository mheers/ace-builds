var razor$1 = {exports: {}};

(function (module, exports) {
ace.define("ace/snippets/razor",["require","exports","module"],function(e,t,n){t.snippetText="snippet if\n(${1} == ${2}) {\n	${3}\n}",t.scope="razor";});                (function() {
                    ace.require(["ace/snippets/razor"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(razor$1));

var razor = razor$1.exports;

export { razor as default };
