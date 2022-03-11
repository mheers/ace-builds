var rst$1 = {exports: {}};

(function (module, exports) {
ace.define("ace/snippets/rst",["require","exports","module"],function(e,t,n){t.snippetText="# rst\n\nsnippet :\n	:${1:field name}: ${2:field body}\nsnippet *\n	*${1:Emphasis}*\nsnippet **\n	**${1:Strong emphasis}**\nsnippet _\n	\\`${1:hyperlink-name}\\`_\n	.. _\\`$1\\`: ${2:link-block}\nsnippet =\n	${1:Title}\n	=====${2:=}\n	${3}\nsnippet -\n	${1:Title}\n	-----${2:-}\n	${3}\nsnippet cont:\n	.. contents::\n	\n",t.scope="rst";});                (function() {
                    ace.require(["ace/snippets/rst"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(rst$1));

var rst = rst$1.exports;

export { rst as default };
