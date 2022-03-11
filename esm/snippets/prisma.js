var prisma$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/prisma"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(prisma$1));

var prisma = prisma$1.exports;

export { prisma as default };
