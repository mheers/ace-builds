var abc$1 = {exports: {}};

(function (module, exports) {
ace.define("ace/snippets/abc",["require","exports","module"],function(e,t,n){t.snippetText='\nsnippet zupfnoter.print\n	%%%%hn.print {"startpos": ${1:pos_y}, "t":"${2:title}", "v":[${3:voices}], "s":[[${4:syncvoices}1,2]], "f":[${5:flowlines}],  "sf":[${6:subflowlines}], "j":[${7:jumplines}]}\n\nsnippet zupfnoter.note\n	%%%%hn.note {"pos": [${1:pos_x},${2:pos_y}], "text": "${3:text}", "style": "${4:style}"}\n\nsnippet zupfnoter.annotation\n	%%%%hn.annotation {"id": "${1:id}", "pos": [${2:pos}], "text": "${3:text}"}\n\nsnippet zupfnoter.lyrics\n	%%%%hn.lyrics {"pos": [${1:x_pos},${2:y_pos}]}\n\nsnippet zupfnoter.legend\n	%%%%hn.legend {"pos": [${1:x_pos},${2:y_pos}]}\n\n\n\nsnippet zupfnoter.target\n	"^:${1:target}"\n\nsnippet zupfnoter.goto\n	"^@${1:target}@${2:distance}"\n\nsnippet zupfnoter.annotationref\n	"^#${1:target}"\n\nsnippet zupfnoter.annotation\n	"^!${1:text}@${2:x_offset},${3:y_offset}"\n\n\n',t.scope="abc";});                (function() {
                    ace.require(["ace/snippets/abc"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(abc$1));

var abc = abc$1.exports;

export { abc as default };
