ace.define("ace/snippets/demo",["require","exports","module"],function(e,t,n){"use strict";t.snippetText="# demo\nsnippet #demo\n	#demo ( ${1:macroName} ${2:\\$var1, [\\$var2, ...]} )\n		${3:## demo code}\n	#end\n",t.scope="demo"});                (function() {
                    ace.require(["ace/snippets/demo"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            