var lua$1 = {exports: {}};

(function (module, exports) {
ace.define("ace/snippets/lua",["require","exports","module"],function(e,t,n){t.snippetText="snippet #!\n	#!/usr/bin/env lua\n	$1\nsnippet local\n	local ${1:x} = ${2:1}\nsnippet fun\n	function ${1:fname}(${2:...})\n		${3:-- body}\n	end\nsnippet for\n	for ${1:i}=${2:1},${3:10} do\n		${4:print(i)}\n	end\nsnippet forp\n	for ${1:i},${2:v} in pairs(${3:table_name}) do\n	   ${4:-- body}\n	end\nsnippet fori\n	for ${1:i},${2:v} in ipairs(${3:table_name}) do\n	   ${4:-- body}\n	end\n",t.scope="lua";});                (function() {
                    ace.require(["ace/snippets/lua"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(lua$1));

var lua = lua$1.exports;

export { lua as default };
