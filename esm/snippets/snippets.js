var snippets$1 = {exports: {}};

(function (module, exports) {
ace.define("ace/snippets/snippets",["require","exports","module"],function(e,t,n){t.snippetText="# snippets for making snippets :)\nsnippet snip\n	snippet ${1:trigger}\n		${2}\nsnippet msnip\n	snippet ${1:trigger} ${2:description}\n		${3}\nsnippet v\n	{VISUAL}\n",t.scope="snippets";});                (function() {
                    ace.require(["ace/snippets/snippets"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(snippets$1));

var snippets = snippets$1.exports;

export { snippets as default };
