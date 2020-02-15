define("ace/mode/dweeve_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function (require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var DweeveHighlightRules = function () {

    var keywordMapper = this.createKeywordMapper({
        "variable": "this",
        "keyword": 'and|as|case|if|default|matches|match|var|fun|else|do|%dw|and|or',
        "constant": "true|false|null"
    }, "identifier");

    var floatNumber = "(?:(?:(?:(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.))|(?:\\d+))(?:[eE][+-]?\\d+))|(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.)))";

    this.$rules = {
        "start": [
            {
              token: "variable.classes",
              regex: '\\[\\<[.]*\\>\\]'
            },
            {
                token: "comment",
                regex: '//.*$'
            },
            {
                token: "comment.start",
                regex: /\(\*(?!\))/,
                push: "blockComment"
            },
            {
                token: "string",
                regex: "'.'"
            },
            
            {
                token: "string",
                regex: '"',
                next  : [{
                    token : "constant.language.escape",
                    regex : /\\./,
                    next  : "qqstring"
                }, {
                    token : "string",
                    regex : '"',
                    next  : "start"
                }, {
                    defaultToken: "string"
                }]
            },
            {
                token: "string",
                regex: '\'',
                next  : [{
                    token : "constant.language.escape",
                    regex : /\\./,
                    next  : "qqstring"
                }, {
                    token : "string",
                    regex : '\'',
                    next  : "start"
                }, {
                    defaultToken: "string"
                }]
            },
            {
                token: "constant.float",
                regex: "(?:" + floatNumber + "|\\d+)[jJ]\\b"
            },
            {
                token: "constant.float",
                regex: floatNumber
            },
            {
                token: "constant.integer",
                regex: "(?:(?:(?:[1-9]\\d*)|(?:0))|(?:0[oO]?[0-7]+)|(?:0[xX][\\dA-Fa-f]+)|(?:0[bB][01]+))\\b"
            },
            {
                token: ["keyword.type", "variable"],
                regex: "(type\\s)([a-zA-Z0-9_$\-]*\\b)"
            },
            {
                token: keywordMapper,
                regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            },
            {
                token: "keyword.operator",
                regex: "\\+\\+|\\-\\-|\\.|\\.\\.|\\.\\*|\\.\\.\\*|\\+|\\-|\\*|\\/|%|<<|>>|&|<|>|<=|=>|==|!=|<>|<-|=|\\(\\*\\)"
            },
            {
                token: "paren.lparen",
                regex: "[[({]"
            },
            {
                token: "paren.rparen",
                regex: "[\\])}]"
            }
        ],
        blockComment: [{
            regex: /\(\*\)/,
            token: "comment"
        }, {
            regex: /\(\*(?!\))/,
            token: "comment.start",
            push: "blockComment"
        }, {
            regex: /\*\)/,
            token: "comment.end",
            next: "pop"
        }, {
            defaultToken: "comment"
        }]
    };
    this.normalizeRules();
};


oop.inherits(DweeveHighlightRules, TextHighlightRules);

exports.DweeveHighlightRules = DweeveHighlightRules;
});

define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var Range = require("../../range").Range;
var BaseFoldMode = require("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    
    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
    
        if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }
    
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
    
        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart
    
        return fw;
    };

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        
        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
        
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);
                
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            
            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }
            
            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };
    
    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            
            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }
        
        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        
        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m) continue;
            if (m[1]) depth--;
            else depth++;

            if (!depth) break;
        }

        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };

}).call(FoldMode.prototype);

});

define("ace/mode/dweeve",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/dweeve_highlight_rules","ace/mode/folding/cstyle"], function (require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextMode = require("./text").Mode;
    var DweeveHighlightRules = require("./dweeve_highlight_rules").DweeveHighlightRules;
    var CStyleFoldMode = require("./folding/cstyle").FoldMode;

    var Mode = function () {
        TextMode.call(this);
        this.HighlightRules = DweeveHighlightRules;
        this.foldingRules = new CStyleFoldMode();
    };

    oop.inherits(Mode, TextMode);


    (function () {
        this.lineCommentStart = "//";
        this.blockComment = {start: "(*", end: "*)", nestable: true};


        this.$id = "ace/mode/dweeve";
    }).call(Mode.prototype);

    exports.Mode = Mode;
});                (function() {
                    window.require(["ace/mode/dweeve"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            