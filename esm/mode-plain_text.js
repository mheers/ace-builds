var modePlain_text$1 = {exports: {}};

(function (module, exports) {
ace.define("ace/mode/plain_text",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/text_highlight_rules","ace/mode/behaviour"],function(e,t,n){var r=e("../lib/oop"),i=e("./text").Mode,s=e("./text_highlight_rules").TextHighlightRules,o=e("./behaviour").Behaviour,u=function(){this.HighlightRules=s,this.$behaviour=new o;};r.inherits(u,i),function(){this.type="text",this.getNextLineIndent=function(e,t,n){return ""},this.$id="ace/mode/plain_text";}.call(u.prototype),t.Mode=u;});                (function() {
                    ace.require(["ace/mode/plain_text"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(modePlain_text$1));

var modePlain_text = modePlain_text$1.exports;

export { modePlain_text as default };
