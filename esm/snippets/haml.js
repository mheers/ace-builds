var haml$1 = {exports: {}};

(function (module, exports) {
ace.define("ace/snippets/haml",["require","exports","module"],function(e,t,n){t.snippetText="snippet t\n	%table\n		%tr\n			%th\n				${1:headers}\n		%tr\n			%td\n				${2:headers}\nsnippet ul\n	%ul\n		%li\n			${1:item}\n		%li\nsnippet =rp\n	= render :partial => '${1:partial}'\nsnippet =rpl\n	= render :partial => '${1:partial}', :locals => {}\nsnippet =rpc\n	= render :partial => '${1:partial}', :collection => @$1\n\n",t.scope="haml";});                (function() {
                    ace.require(["ace/snippets/haml"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(haml$1));

var haml = haml$1.exports;

export { haml as default };
