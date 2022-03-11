var csound_document$1 = {exports: {}};

(function (module, exports) {
ace.define("ace/snippets/csound_document",["require","exports","module"],function(e,t,n){t.snippetText="# <CsoundSynthesizer>\nsnippet synth\n	<CsoundSynthesizer>\n	<CsInstruments>\n	${1}\n	</CsInstruments>\n	<CsScore>\n	e\n	</CsScore>\n	</CsoundSynthesizer>\n",t.scope="csound_document";});                (function() {
                    ace.require(["ace/snippets/csound_document"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(csound_document$1));

var csound_document = csound_document$1.exports;

export { csound_document as default };
