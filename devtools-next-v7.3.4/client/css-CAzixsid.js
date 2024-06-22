const e = Object.freeze({ displayName: "CSS", name: "css", patterns: [{ include: "#comment-block" }, { include: "#escapes" }, { include: "#combinators" }, { include: "#selector" }, { include: "#at-rules" }, { include: "#rule-list" }], repository: { "at-rules": { patterns: [{ begin: "\\A(?:\\xEF\\xBB\\xBF)?(?i:(?=\\s*@charset\\b))", end: ";|(?=$)", endCaptures: { 0: { name: "punctuation.terminator.rule.css" } }, name: "meta.at-rule.charset.css", patterns: [{ captures: { 1: { name: "invalid.illegal.not-lowercase.charset.css" }, 2: { name: "invalid.illegal.leading-whitespace.charset.css" }, 3: { name: "invalid.illegal.no-whitespace.charset.css" }, 4: { name: "invalid.illegal.whitespace.charset.css" }, 5: { name: "invalid.illegal.not-double-quoted.charset.css" }, 6: { name: "invalid.illegal.unclosed-string.charset.css" }, 7: { name: "invalid.illegal.unexpected-characters.charset.css" } }, match: `(?x)
\\G
((?!@charset)@\\w+)
|
\\G(\\s+)
|
(@charset\\S[^;]*)
|
(?<=@charset)
(\\x20{2,}|\\t+)
|
(?<=@charset\\x20)
([^";]+)
|
("[^"]+$)
|
(?<=")
([^;]+)` }, { captures: { 1: { name: "keyword.control.at-rule.charset.css" }, 2: { name: "punctuation.definition.keyword.css" } }, match: "((@)charset)(?=\\s)" }, { begin: '"', beginCaptures: { 0: { name: "punctuation.definition.string.begin.css" } }, end: '"|$', endCaptures: { 0: { name: "punctuation.definition.string.end.css" } }, name: "string.quoted.double.css", patterns: [{ begin: '(?:\\G|^)(?=(?:[^"])+$)', end: "$", name: "invalid.illegal.unclosed.string.css" }] }] }, { begin: `(?i)((@)import)(?:\\s+|$|(?=['"]|/\\*))`, beginCaptures: { 1: { name: "keyword.control.at-rule.import.css" }, 2: { name: "punctuation.definition.keyword.css" } }, end: ";", endCaptures: { 0: { name: "punctuation.terminator.rule.css" } }, name: "meta.at-rule.import.css", patterns: [{ begin: "\\G\\s*(?=/\\*)", end: "(?<=\\*/)\\s*", patterns: [{ include: "#comment-block" }] }, { include: "#string" }, { include: "#url" }, { include: "#media-query-list" }] }, { begin: "(?i)((@)font-face)(?=\\s*|{|/\\*|$)", beginCaptures: { 1: { name: "keyword.control.at-rule.font-face.css" }, 2: { name: "punctuation.definition.keyword.css" } }, end: "(?!\\G)", name: "meta.at-rule.font-face.css", patterns: [{ include: "#comment-block" }, { include: "#escapes" }, { include: "#rule-list" }] }, { begin: "(?i)(@)page(?=[\\s:{]|/\\*|$)", captures: { 0: { name: "keyword.control.at-rule.page.css" }, 1: { name: "punctuation.definition.keyword.css" } }, end: "(?=\\s*($|[:{;]))", name: "meta.at-rule.page.css", patterns: [{ include: "#rule-list" }] }, { begin: "(?i)(?=@media(\\s|\\(|/\\*|$))", end: "(?<=})(?!\\G)", patterns: [{ begin: "(?i)\\G(@)media", beginCaptures: { 0: { name: "keyword.control.at-rule.media.css" }, 1: { name: "punctuation.definition.keyword.css" } }, end: "(?=\\s*[{;])", name: "meta.at-rule.media.header.css", patterns: [{ include: "#media-query-list" }] }, { begin: "{", beginCaptures: { 0: { name: "punctuation.section.media.begin.bracket.curly.css" } }, end: "}", endCaptures: { 0: { name: "punctuation.section.media.end.bracket.curly.css" } }, name: "meta.at-rule.media.body.css", patterns: [{ include: "$self" }] }] }, { begin: `(?i)(?=@counter-style([\\s'"{;]|/\\*|$))`, end: "(?<=})(?!\\G)", patterns: [{ begin: "(?i)\\G(@)counter-style", beginCaptures: { 0: { name: "keyword.control.at-rule.counter-style.css" }, 1: { name: "punctuation.definition.keyword.css" } }, end: "(?=\\s*{)", name: "meta.at-rule.counter-style.header.css", patterns: [{ include: "#comment-block" }, { include: "#escapes" }, { captures: { 0: { patterns: [{ include: "#escapes" }] } }, match: `(?x)
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`, name: "variable.parameter.style-name.css" }] }, { begin: "{", beginCaptures: { 0: { name: "punctuation.section.property-list.begin.bracket.curly.css" } }, end: "}", endCaptures: { 0: { name: "punctuation.section.property-list.end.bracket.curly.css" } }, name: "meta.at-rule.counter-style.body.css", patterns: [{ include: "#comment-block" }, { include: "#escapes" }, { include: "#rule-list-innards" }] }] }, { begin: `(?i)(?=@document([\\s'"{;]|/\\*|$))`, end: "(?<=})(?!\\G)", patterns: [{ begin: "(?i)\\G(@)document", beginCaptures: { 0: { name: "keyword.control.at-rule.document.css" }, 1: { name: "punctuation.definition.keyword.css" } }, end: "(?=\\s*[{;])", name: "meta.at-rule.document.header.css", patterns: [{ begin: "(?i)(?<![\\w-])(url-prefix|domain|regexp)(\\()", beginCaptures: { 1: { name: "support.function.document-rule.css" }, 2: { name: "punctuation.section.function.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.section.function.end.bracket.round.css" } }, name: "meta.function.document-rule.css", patterns: [{ include: "#string" }, { include: "#comment-block" }, { include: "#escapes" }, { match: `[^'")\\s]+`, name: "variable.parameter.document-rule.css" }] }, { include: "#url" }, { include: "#commas" }, { include: "#comment-block" }, { include: "#escapes" }] }, { begin: "{", beginCaptures: { 0: { name: "punctuation.section.document.begin.bracket.curly.css" } }, end: "}", endCaptures: { 0: { name: "punctuation.section.document.end.bracket.curly.css" } }, name: "meta.at-rule.document.body.css", patterns: [{ include: "$self" }] }] }, { begin: `(?i)(?=@(?:-(?:webkit|moz|o|ms)-)?keyframes([\\s'"{;]|/\\*|$))`, end: "(?<=})(?!\\G)", patterns: [{ begin: "(?i)\\G(@)(?:-(?:webkit|moz|o|ms)-)?keyframes", beginCaptures: { 0: { name: "keyword.control.at-rule.keyframes.css" }, 1: { name: "punctuation.definition.keyword.css" } }, end: "(?=\\s*{)", name: "meta.at-rule.keyframes.header.css", patterns: [{ include: "#comment-block" }, { include: "#escapes" }, { captures: { 0: { patterns: [{ include: "#escapes" }] } }, match: `(?x)
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`, name: "variable.parameter.keyframe-list.css" }] }, { begin: "{", beginCaptures: { 0: { name: "punctuation.section.keyframes.begin.bracket.curly.css" } }, end: "}", endCaptures: { 0: { name: "punctuation.section.keyframes.end.bracket.curly.css" } }, name: "meta.at-rule.keyframes.body.css", patterns: [{ include: "#comment-block" }, { include: "#escapes" }, { captures: { 1: { name: "entity.other.keyframe-offset.css" }, 2: { name: "entity.other.keyframe-offset.percentage.css" } }, match: `(?xi)
(?<![\\w-]) (from|to) (?![\\w-])
|
([-+]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)%)` }, { include: "#rule-list" }] }] }, { begin: "(?i)(?=@supports(\\s|\\(|/\\*|$))", end: "(?<=})(?!\\G)|(?=;)", patterns: [{ begin: "(?i)\\G(@)supports", beginCaptures: { 0: { name: "keyword.control.at-rule.supports.css" }, 1: { name: "punctuation.definition.keyword.css" } }, end: "(?=\\s*[{;])", name: "meta.at-rule.supports.header.css", patterns: [{ include: "#feature-query-operators" }, { include: "#feature-query" }, { include: "#comment-block" }, { include: "#escapes" }] }, { begin: "{", beginCaptures: { 0: { name: "punctuation.section.supports.begin.bracket.curly.css" } }, end: "}", endCaptures: { 0: { name: "punctuation.section.supports.end.bracket.curly.css" } }, name: "meta.at-rule.supports.body.css", patterns: [{ include: "$self" }] }] }, { begin: `(?i)((@)(-(ms|o)-)?viewport)(?=[\\s'"{;]|/\\*|$)`, beginCaptures: { 1: { name: "keyword.control.at-rule.viewport.css" }, 2: { name: "punctuation.definition.keyword.css" } }, end: "(?=\\s*[@{;])", name: "meta.at-rule.viewport.css", patterns: [{ include: "#comment-block" }, { include: "#escapes" }] }, { begin: `(?i)((@)font-feature-values)(?=[\\s'"{;]|/\\*|$)\\s*`, beginCaptures: { 1: { name: "keyword.control.at-rule.font-feature-values.css" }, 2: { name: "punctuation.definition.keyword.css" } }, contentName: "variable.parameter.font-name.css", end: "(?=\\s*[@{;])", name: "meta.at-rule.font-features.css", patterns: [{ include: "#comment-block" }, { include: "#escapes" }] }, { include: "#font-features" }, { begin: `(?i)((@)namespace)(?=[\\s'";]|/\\*|$)`, beginCaptures: { 1: { name: "keyword.control.at-rule.namespace.css" }, 2: { name: "punctuation.definition.keyword.css" } }, end: ";|(?=[@{])", endCaptures: { 0: { name: "punctuation.terminator.rule.css" } }, name: "meta.at-rule.namespace.css", patterns: [{ include: "#url" }, { captures: { 1: { patterns: [{ include: "#comment-block" }] }, 2: { name: "entity.name.function.namespace-prefix.css", patterns: [{ include: "#escapes" }] } }, match: `(?xi)
(?:\\G|^|(?<=\\s))
(?=
(?<=\\s|^)
(?:[-a-zA-Z_]|[^\\x00-\\x7F])
|
\\s*
/\\*(?:[^*]|\\*[^/])*\\*/
)
(.*?)
(
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*
)` }, { include: "#comment-block" }, { include: "#escapes" }, { include: "#string" }] }, { begin: "(?i)(?=@[\\w-]+[^;]+;s*$)", end: "(?<=;)(?!\\G)", patterns: [{ begin: "(?i)\\G(@)[\\w-]+", beginCaptures: { 0: { name: "keyword.control.at-rule.css" }, 1: { name: "punctuation.definition.keyword.css" } }, end: ";", endCaptures: { 0: { name: "punctuation.terminator.rule.css" } }, name: "meta.at-rule.header.css" }] }, { begin: "(?i)(?=@[\\w-]+(\\s|\\(|{|/\\*|$))", end: "(?<=})(?!\\G)", patterns: [{ begin: "(?i)\\G(@)[\\w-]+", beginCaptures: { 0: { name: "keyword.control.at-rule.css" }, 1: { name: "punctuation.definition.keyword.css" } }, end: "(?=\\s*[{;])", name: "meta.at-rule.header.css" }, { begin: "{", beginCaptures: { 0: { name: "punctuation.section.begin.bracket.curly.css" } }, end: "}", endCaptures: { 0: { name: "punctuation.section.end.bracket.curly.css" } }, name: "meta.at-rule.body.css", patterns: [{ include: "$self" }] }] }] }, "color-keywords": { patterns: [{ match: "(?i)(?<![\\w-])(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)(?![\\w-])", name: "support.constant.color.w3c-standard-color-name.css" }, { match: `(?xi) (?<![\\w-])
(aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood
|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan
|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange
|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise
|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen
|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki
|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow
|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray
|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|mediumaquamarine|mediumblue
|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise
|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered
|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum
|powderblue|rebeccapurple|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell
|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato
|transparent|turquoise|violet|wheat|whitesmoke|yellowgreen)
(?![\\w-])`, name: "support.constant.color.w3c-extended-color-name.css" }, { match: "(?i)(?<![\\w-])currentColor(?![\\w-])", name: "support.constant.color.current.css" }, { match: `(?xi) (?<![\\w-])
(ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow
|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption
|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow
|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText)
(?![\\w-])`, name: "invalid.deprecated.color.system.css" }] }, combinators: { patterns: [{ match: "/deep/|>>>", name: "invalid.deprecated.combinator.css" }, { match: ">>|>|\\+|~", name: "keyword.operator.combinator.css" }] }, commas: { match: ",", name: "punctuation.separator.list.comma.css" }, "comment-block": { begin: "/\\*", beginCaptures: { 0: { name: "punctuation.definition.comment.begin.css" } }, end: "\\*/", endCaptures: { 0: { name: "punctuation.definition.comment.end.css" } }, name: "comment.block.css" }, escapes: { patterns: [{ match: "\\\\[0-9a-fA-F]{1,6}", name: "constant.character.escape.codepoint.css" }, { begin: "\\\\$\\s*", end: "^(?<!\\G)", name: "constant.character.escape.newline.css" }, { match: "\\\\.", name: "constant.character.escape.css" }] }, "feature-query": { begin: "\\(", beginCaptures: { 0: { name: "punctuation.definition.condition.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.definition.condition.end.bracket.round.css" } }, name: "meta.feature-query.css", patterns: [{ include: "#feature-query-operators" }, { include: "#feature-query" }] }, "feature-query-operators": { patterns: [{ match: "(?i)(?<=[\\s()]|^|\\*/)(and|not|or)(?=[\\s()]|/\\*|$)", name: "keyword.operator.logical.feature.$1.css" }, { include: "#rule-list-innards" }] }, "font-features": { begin: `(?xi)
((@)(annotation|character-variant|ornaments|styleset|stylistic|swash))
(?=[\\s@'"{;]|/\\*|$)`, beginCaptures: { 1: { name: "keyword.control.at-rule.${3:/downcase}.css" }, 2: { name: "punctuation.definition.keyword.css" } }, end: "(?<=})", name: "meta.at-rule.${3:/downcase}.css", patterns: [{ begin: "{", beginCaptures: { 0: { name: "punctuation.section.property-list.begin.bracket.curly.css" } }, end: "}", endCaptures: { 0: { name: "punctuation.section.property-list.end.bracket.curly.css" } }, name: "meta.property-list.font-feature.css", patterns: [{ captures: { 0: { patterns: [{ include: "#escapes" }] } }, match: `(?x)
(?: [-a-zA-Z_]    | [^\\x00-\\x7F] )
(?: [-a-zA-Z0-9_] | [^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
)*`, name: "variable.font-feature.css" }, { include: "#rule-list-innards" }] }] }, "functional-pseudo-classes": { patterns: [{ begin: "(?i)((:)dir)(\\()", beginCaptures: { 1: { name: "entity.other.attribute-name.pseudo-class.css" }, 2: { name: "punctuation.definition.entity.css" }, 3: { name: "punctuation.section.function.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.section.function.end.bracket.round.css" } }, patterns: [{ include: "#comment-block" }, { include: "#escapes" }, { match: "(?i)(?<![\\w-])(ltr|rtl)(?![\\w-])", name: "support.constant.text-direction.css" }, { include: "#property-values" }] }, { begin: "(?i)((:)lang)(\\()", beginCaptures: { 1: { name: "entity.other.attribute-name.pseudo-class.css" }, 2: { name: "punctuation.definition.entity.css" }, 3: { name: "punctuation.section.function.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.section.function.end.bracket.round.css" } }, patterns: [{ match: "(?<=[(,\\s])[a-zA-Z]+(-[a-zA-Z0-9]*|\\\\(?:[0-9a-fA-F]{1,6}|.))*(?=[),\\s])", name: "support.constant.language-range.css" }, { begin: '"', beginCaptures: { 0: { name: "punctuation.definition.string.begin.css" } }, end: '"', endCaptures: { 0: { name: "punctuation.definition.string.end.css" } }, name: "string.quoted.double.css", patterns: [{ include: "#escapes" }, { match: '(?<=["\\s])[a-zA-Z*]+(-[a-zA-Z0-9*]*)*(?=["\\s])', name: "support.constant.language-range.css" }] }, { begin: "'", beginCaptures: { 0: { name: "punctuation.definition.string.begin.css" } }, end: "'", endCaptures: { 0: { name: "punctuation.definition.string.end.css" } }, name: "string.quoted.single.css", patterns: [{ include: "#escapes" }, { match: "(?<=['\\s])[a-zA-Z*]+(-[a-zA-Z0-9*]*)*(?=['\\s])", name: "support.constant.language-range.css" }] }, { include: "#commas" }] }, { begin: "(?i)((:)(?:not|has|matches|where|is))(\\()", beginCaptures: { 1: { name: "entity.other.attribute-name.pseudo-class.css" }, 2: { name: "punctuation.definition.entity.css" }, 3: { name: "punctuation.section.function.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.section.function.end.bracket.round.css" } }, patterns: [{ include: "#selector-innards" }] }, { begin: "(?i)((:)nth-(?:last-)?(?:child|of-type))(\\()", beginCaptures: { 1: { name: "entity.other.attribute-name.pseudo-class.css" }, 2: { name: "punctuation.definition.entity.css" }, 3: { name: "punctuation.section.function.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.section.function.end.bracket.round.css" } }, patterns: [{ match: "(?i)[+-]?(\\d+n?|n)(\\s*[+-]\\s*\\d+)?", name: "constant.numeric.css" }, { match: "(?i)even|odd", name: "support.constant.parity.css" }] }] }, functions: { patterns: [{ begin: "(?i)(?<![\\w-])(calc)(\\()", beginCaptures: { 1: { name: "support.function.calc.css" }, 2: { name: "punctuation.section.function.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.section.function.end.bracket.round.css" } }, name: "meta.function.calc.css", patterns: [{ match: "[*/]|(?<=\\s|^)[-+](?=\\s|$)", name: "keyword.operator.arithmetic.css" }, { include: "#property-values" }] }, { begin: "(?i)(?<![\\w-])(rgba?|rgb|hsla?|hsl|hwb|lab|oklab|lch|oklch|color)(\\()", beginCaptures: { 1: { name: "support.function.misc.css" }, 2: { name: "punctuation.section.function.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.section.function.end.bracket.round.css" } }, name: "meta.function.color.css", patterns: [{ include: "#property-values" }] }, { begin: `(?xi) (?<![\\w-])
(
(?:-webkit-|-moz-|-o-)?
(?:repeating-)?
(?:linear|radial|conic)
-gradient
)
(\\()`, beginCaptures: { 1: { name: "support.function.gradient.css" }, 2: { name: "punctuation.section.function.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.section.function.end.bracket.round.css" } }, name: "meta.function.gradient.css", patterns: [{ match: "(?i)(?<![\\w-])(from|to|at|in|hue)(?![\\w-])", name: "keyword.operator.gradient.css" }, { include: "#property-values" }] }, { begin: "(?i)(?<![\\w-])(-webkit-gradient)(\\()", beginCaptures: { 1: { name: "invalid.deprecated.gradient.function.css" }, 2: { name: "punctuation.section.function.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.section.function.end.bracket.round.css" } }, name: "meta.function.gradient.invalid.deprecated.gradient.css", patterns: [{ begin: "(?i)(?<![\\w-])(from|to|color-stop)(\\()", beginCaptures: { 1: { name: "invalid.deprecated.function.css" }, 2: { name: "punctuation.section.function.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.section.function.end.bracket.round.css" } }, patterns: [{ include: "#property-values" }] }, { include: "#property-values" }] }, { begin: `(?xi) (?<![\\w-])
(annotation|attr|blur|brightness|character-variant|clamp|contrast|counters?
|cross-fade|drop-shadow|element|fit-content|format|grayscale|hue-rotate|color-mix
|image-set|invert|local|max|min|minmax|opacity|ornaments|repeat|saturate|sepia
|styleset|stylistic|swash|symbols
|cos|sin|tan|acos|asin|atan|atan2|hypot|sqrt|pow|log|exp|abs|sign)
(\\()`, beginCaptures: { 1: { name: "support.function.misc.css" }, 2: { name: "punctuation.section.function.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.section.function.end.bracket.round.css" } }, name: "meta.function.misc.css", patterns: [{ match: `(?i)(?<=[,\\s"]|\\*/|^)\\d+x(?=[\\s,"')]|/\\*|$)`, name: "constant.numeric.other.density.css" }, { include: "#property-values" }, { match: `[^'"),\\s]+`, name: "variable.parameter.misc.css" }] }, { begin: "(?i)(?<![\\w-])(circle|ellipse|inset|polygon|rect)(\\()", beginCaptures: { 1: { name: "support.function.shape.css" }, 2: { name: "punctuation.section.function.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.section.function.end.bracket.round.css" } }, name: "meta.function.shape.css", patterns: [{ match: "(?i)(?<=\\s|^|\\*/)(at|round)(?=\\s|/\\*|$)", name: "keyword.operator.shape.css" }, { include: "#property-values" }] }, { begin: "(?i)(?<![\\w-])(cubic-bezier|steps)(\\()", beginCaptures: { 1: { name: "support.function.timing-function.css" }, 2: { name: "punctuation.section.function.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.section.function.end.bracket.round.css" } }, name: "meta.function.timing-function.css", patterns: [{ match: "(?i)(?<![\\w-])(start|end)(?=\\s*\\)|$)", name: "support.constant.step-direction.css" }, { include: "#property-values" }] }, { begin: `(?xi) (?<![\\w-])
( (?:translate|scale|rotate)(?:[XYZ]|3D)?
| matrix(?:3D)?
| skew[XY]?
| perspective
)
(\\()`, beginCaptures: { 1: { name: "support.function.transform.css" }, 2: { name: "punctuation.section.function.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.section.function.end.bracket.round.css" } }, patterns: [{ include: "#property-values" }] }, { include: "#url" }, { begin: "(?i)(?<![\\w-])(var)(\\()", beginCaptures: { 1: { name: "support.function.misc.css" }, 2: { name: "punctuation.section.function.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.section.function.end.bracket.round.css" } }, name: "meta.function.variable.css", patterns: [{ match: `(?x)
--
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`, name: "variable.argument.css" }, { include: "#property-values" }] }] }, "media-feature-keywords": { match: `(?xi)
(?<=^|\\s|:|\\*/)
(?: portrait
| landscape
| progressive
| interlace
| fullscreen
| standalone
| minimal-ui
| browser
| hover
)
(?=\\s|\\)|$)`, name: "support.constant.property-value.css" }, "media-features": { captures: { 1: { name: "support.type.property-name.media.css" }, 2: { name: "support.type.property-name.media.css" }, 3: { name: "support.type.vendored.property-name.media.css" } }, match: `(?xi)
(?<=^|\\s|\\(|\\*/)
(?:

(
(?:min-|max-)?
(?: height
| width
| aspect-ratio
| color
| color-index
| monochrome
| resolution
)
| grid
| scan
| orientation
| display-mode
| hover
)
|

(
(?:min-|max-)?
device-
(?: height
| width
| aspect-ratio
)
)
|

(
(?:

[-_]
(?: webkit
| apple|khtml
| epub
| moz
| ms
| o
| xv|ah|rim|atsc|
hp|tc|wap|ro
)
|

(?: mso
| prince
)
)
-
[\\w-]+
(?=
\\s*
(?:
/\\*
(?:[^*]|\\*[^/])*
\\*/
)?
\\s*
[:)]
)
)
)
(?=\\s|$|[><:=]|\\)|/\\*)` }, "media-query": { begin: "\\G", end: "(?=\\s*[{;])", patterns: [{ include: "#comment-block" }, { include: "#escapes" }, { include: "#media-types" }, { match: "(?i)(?<=\\s|^|,|\\*/)(only|not)(?=\\s|{|/\\*|$)", name: "keyword.operator.logical.$1.media.css" }, { match: "(?i)(?<=\\s|^|\\*/|\\))and(?=\\s|/\\*|$)", name: "keyword.operator.logical.and.media.css" }, { match: ",(?:(?:\\s*,)+|(?=\\s*[;){]))", name: "invalid.illegal.comma.css" }, { include: "#commas" }, { begin: "\\(", beginCaptures: { 0: { name: "punctuation.definition.parameters.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.definition.parameters.end.bracket.round.css" } }, patterns: [{ include: "#media-features" }, { include: "#media-feature-keywords" }, { match: ":", name: "punctuation.separator.key-value.css" }, { match: ">=|<=|=|<|>", name: "keyword.operator.comparison.css" }, { captures: { 1: { name: "constant.numeric.css" }, 2: { name: "keyword.operator.arithmetic.css" }, 3: { name: "constant.numeric.css" } }, match: "(\\d+)\\s*(/)\\s*(\\d+)", name: "meta.ratio.css" }, { include: "#numeric-values" }, { include: "#comment-block" }] }] }, "media-query-list": { begin: "(?=\\s*[^{;])", end: "(?=\\s*[{;])", patterns: [{ include: "#media-query" }] }, "media-types": { captures: { 1: { name: "support.constant.media.css" }, 2: { name: "invalid.deprecated.constant.media.css" } }, match: `(?xi)
(?<=^|\\s|,|\\*/)
(?:

(all|print|screen|speech)
|

(aural|braille|embossed|handheld|projection|tty|tv)
)
(?=$|[{,\\s;]|/\\*)` }, "numeric-values": { patterns: [{ captures: { 1: { name: "punctuation.definition.constant.css" } }, match: "(#)(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b", name: "constant.other.color.rgb-value.hex.css" }, { captures: { 1: { name: "keyword.other.unit.percentage.css" }, 2: { name: "keyword.other.unit.${2:/downcase}.css" } }, match: `(?xi) (?<![\\w-])
[-+]?

(?:
[0-9]+ (?:\\.[0-9]+)?
| \\.[0-9]+
)

(?:
(?<=[0-9])
E
[-+]?
[0-9]+
)?

(?:
(%)
| ( deg|grad|rad|turn
| Hz|kHz
| ch|cm|em|ex|fr|in|mm|mozmm|
pc|pt|px|q|rem|rch|rex|rlh|
ic|ric|rcap|vh|vw|vb|vi|svh|
svw|svb|svi|dvh|dvw|dvb|dvi|
lvh|lvw|lvb|lvi|vmax|vmin|
cqw|cqi|cqh|cqb|cqmin|cqmax
| dpi|dpcm|dppx
| s|ms
)
\\b
)?`, name: "constant.numeric.css" }] }, "property-keywords": { patterns: [{ match: `(?xi) (?<![\\w-])
(above|absolute|active|add|additive|after-edge|alias|all|all-petite-caps|all-scroll|all-small-caps|alpha|alphabetic|alternate|alternate-reverse
|always|antialiased|auto|auto-fill|auto-fit|auto-pos|available|avoid|avoid-column|avoid-page|avoid-region|backwards|balance|baseline|before-edge|below|bevel
|bidi-override|blink|block|block-axis|block-start|block-end|bold|bolder|border|border-box|both|bottom|bottom-outside|break-all|break-word|bullets
|butt|capitalize|caption|cell|center|central|char|circle|clip|clone|close-quote|closest-corner|closest-side|col-resize|collapse|color|color-burn
|color-dodge|column|column-reverse|common-ligatures|compact|condensed|contain|content|content-box|contents|context-menu|contextual|copy|cover
|crisp-edges|crispEdges|crosshair|cyclic|dark|darken|dashed|decimal|default|dense|diagonal-fractions|difference|digits|disabled|disc|discretionary-ligatures
|distribute|distribute-all-lines|distribute-letter|distribute-space|dot|dotted|double|double-circle|downleft|downright|e-resize|each-line|ease|ease-in
|ease-in-out|ease-out|economy|ellipse|ellipsis|embed|end|evenodd|ew-resize|exact|exclude|exclusion|expanded|extends|extra-condensed|extra-expanded
|fallback|farthest-corner|farthest-side|fill|fill-available|fill-box|filled|fit-content|fixed|flat|flex|flex-end|flex-start|flip|flow-root|forwards|freeze
|from-image|full-width|geometricPrecision|georgian|grab|grabbing|grayscale|grid|groove|hand|hanging|hard-light|help|hidden|hide
|historical-forms|historical-ligatures|horizontal|horizontal-tb|hue|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space
|ideographic|inactive|infinite|inherit|initial|inline|inline-axis|inline-block|inline-end|inline-flex|inline-grid|inline-list-item|inline-start
|inline-table|inset|inside|inter-character|inter-ideograph|inter-word|intersect|invert|isolate|isolate-override|italic|jis04|jis78|jis83
|jis90|justify|justify-all|kannada|keep-all|landscape|large|larger|left|light|lighten|lighter|line|line-edge|line-through|linear|linearRGB
|lining-nums|list-item|local|loose|lowercase|lr|lr-tb|ltr|luminance|luminosity|main-size|mandatory|manipulation|manual|margin-box|match-parent
|match-source|mathematical|max-content|medium|menu|message-box|middle|min-content|miter|mixed|move|multiply|n-resize|narrower|ne-resize
|nearest-neighbor|nesw-resize|newspaper|no-change|no-clip|no-close-quote|no-common-ligatures|no-contextual|no-discretionary-ligatures
|no-drop|no-historical-ligatures|no-open-quote|no-repeat|none|nonzero|normal|not-allowed|nowrap|ns-resize|numbers|numeric|nw-resize|nwse-resize
|oblique|oldstyle-nums|open|open-quote|optimizeLegibility|optimizeQuality|optimizeSpeed|optional|ordinal|outset|outside|over|overlay|overline|padding
|padding-box|page|painted|pan-down|pan-left|pan-right|pan-up|pan-x|pan-y|paused|petite-caps|pixelated|plaintext|pointer|portrait|pre|pre-line
|pre-wrap|preserve-3d|progress|progressive|proportional-nums|proportional-width|proximity|radial|recto|region|relative|remove|repeat|repeat-[xy]
|reset-size|reverse|revert|ridge|right|rl|rl-tb|round|row|row-resize|row-reverse|row-severse|rtl|ruby|ruby-base|ruby-base-container|ruby-text
|ruby-text-container|run-in|running|s-resize|saturation|scale-down|screen|scroll|scroll-position|se-resize|semi-condensed|semi-expanded|separate
|sesame|show|sideways|sideways-left|sideways-lr|sideways-right|sideways-rl|simplified|slashed-zero|slice|small|small-caps|small-caption|smaller
|smooth|soft-light|solid|space|space-around|space-between|space-evenly|spell-out|square|sRGB|stacked-fractions|start|static|status-bar|swap
|step-end|step-start|sticky|stretch|strict|stroke|stroke-box|style|sub|subgrid|subpixel-antialiased|subtract|super|sw-resize|symbolic|table
|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row|table-row-group|tabular-nums|tb|tb-rl
|text|text-after-edge|text-before-edge|text-bottom|text-top|thick|thin|titling-caps|top|top-outside|touch|traditional|transparent|triangle
|ultra-condensed|ultra-expanded|under|underline|unicase|unset|upleft|uppercase|upright|use-glyph-orientation|use-script|verso|vertical
|vertical-ideographic|vertical-lr|vertical-rl|vertical-text|view-box|visible|visibleFill|visiblePainted|visibleStroke|w-resize|wait|wavy
|weight|whitespace|wider|words|wrap|wrap-reverse|x|x-large|x-small|xx-large|xx-small|y|zero|zoom-in|zoom-out)
(?![\\w-])`, name: "support.constant.property-value.css" }, { match: `(?xi) (?<![\\w-])
(arabic-indic|armenian|bengali|cambodian|circle|cjk-decimal|cjk-earthly-branch|cjk-heavenly-stem|cjk-ideographic
|decimal|decimal-leading-zero|devanagari|disc|disclosure-closed|disclosure-open|ethiopic-halehame-am
|ethiopic-halehame-ti-e[rt]|ethiopic-numeric|georgian|gujarati|gurmukhi|hangul|hangul-consonant|hebrew
|hiragana|hiragana-iroha|japanese-formal|japanese-informal|kannada|katakana|katakana-iroha|khmer
|korean-hangul-formal|korean-hanja-formal|korean-hanja-informal|lao|lower-alpha|lower-armenian|lower-greek
|lower-latin|lower-roman|malayalam|mongolian|myanmar|oriya|persian|simp-chinese-formal|simp-chinese-informal
|square|tamil|telugu|thai|tibetan|trad-chinese-formal|trad-chinese-informal|upper-alpha|upper-armenian
|upper-latin|upper-roman|urdu)
(?![\\w-])`, name: "support.constant.property-value.list-style-type.css" }, { match: "(?<![\\w-])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[a-zA-Z-]+", name: "support.constant.vendored.property-value.css" }, { match: "(?<![\\w-])(?i:arial|century|comic|courier|garamond|georgia|helvetica|impact|lucida|symbol|system-ui|system|tahoma|times|trebuchet|ui-monospace|ui-rounded|ui-sans-serif|ui-serif|utopia|verdana|webdings|sans-serif|serif|monospace)(?![\\w-])", name: "support.constant.font-name.css" }] }, "property-names": { patterns: [{ match: `(?xi) (?<![\\w-])
(?:

accent-color|additive-symbols|align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration
| animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backdrop-filter
| backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image
| background-origin|background-position|background-position-[xy]|background-repeat|background-size|bleed|block-size|border
| border-block-end|border-block-end-color|border-block-end-style|border-block-end-width|border-block-start|border-block-start-color
| border-block-start-style|border-block-start-width|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius
| border-bottom-style|border-bottom-width|border-collapse|border-color|border-end-end-radius|border-end-start-radius|border-image
| border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-inline-end
| border-inline-end-color|border-inline-end-style|border-inline-end-width|border-inline-start|border-inline-start-color
| border-inline-start-style|border-inline-start-width|border-left|border-left-color|border-left-style|border-left-width
| border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-start-end-radius
| border-start-start-radius|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style
| border-top-width|border-width|bottom|box-decoration-break|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side
| caret-color|clear|clip|clip-path|clip-rule|color|color-adjust|color-interpolation-filters|color-scheme|column-count|column-fill|column-gap
| column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|contain|container|container-name|container-type|content|counter-increment
| counter-reset|cursor|direction|display|empty-cells|enable-background|fallback|fill|fill-opacity|fill-rule|filter|flex|flex-basis
| flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|flood-color|flood-opacity|font|font-display|font-family
| font-feature-settings|font-kerning|font-language-override|font-optical-sizing|font-size|font-size-adjust|font-stretch
| font-style|font-synthesis|font-variant|font-variant-alternates|font-variant-caps|font-variant-east-asian|font-variant-ligatures
| font-variant-numeric|font-variant-position|font-variation-settings|font-weight|gap|glyph-orientation-horizontal|glyph-orientation-vertical
| grid|grid-area|grid-auto-columns|grid-auto-flow|grid-auto-rows|grid-column|grid-column-end|grid-column-gap|grid-column-start
| grid-gap|grid-row|grid-row-end|grid-row-gap|grid-row-start|grid-template|grid-template-areas|grid-template-columns|grid-template-rows
| hanging-punctuation|height|hyphens|image-orientation|image-rendering|image-resolution|ime-mode|initial-letter|initial-letter-align
| inline-size|inset|inset-block|inset-block-end|inset-block-start|inset-inline|inset-inline-end|inset-inline-start|isolation
| justify-content|justify-items|justify-self|kerning|left|letter-spacing|lighting-color|line-break|line-clamp|line-height|list-style
| list-style-image|list-style-position|list-style-type|margin|margin-block|margin-block-end|margin-block-start|margin-bottom|margin-inline|margin-inline-end|margin-inline-start
| margin-left|margin-right|margin-top|marker-end|marker-mid|marker-start|marks|mask|mask-border|mask-border-mode|mask-border-outset
| mask-border-repeat|mask-border-slice|mask-border-source|mask-border-width|mask-clip|mask-composite|mask-image|mask-mode
| mask-origin|mask-position|mask-repeat|mask-size|mask-type|max-block-size|max-height|max-inline-size|max-lines|max-width
| max-zoom|min-block-size|min-height|min-inline-size|min-width|min-zoom|mix-blend-mode|negative|object-fit|object-position
| offset|offset-anchor|offset-distance|offset-path|offset-position|offset-rotation|opacity|order|orientation|orphans
| outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-anchor|overflow-block|overflow-inline
| overflow-wrap|overflow-[xy]|overscroll-behavior|overscroll-behavior-block|overscroll-behavior-inline|overscroll-behavior-[xy]
| pad|padding|padding-block|padding-block-end|padding-block-start|padding-bottom|padding-inline|padding-inline-end|padding-inline-start|padding-left
| padding-right|padding-top|page-break-after|page-break-before|page-break-inside|paint-order|perspective|perspective-origin
| place-content|place-items|place-self|pointer-events|position|prefix|quotes|range|resize|right|rotate|row-gap|ruby-align
| ruby-merge|ruby-position|scale|scroll-behavior|scroll-margin|scroll-margin-block|scroll-margin-block-end|scroll-margin-block-start
| scroll-margin-bottom|scroll-margin-inline|scroll-margin-inline-end|scroll-margin-inline-start|scroll-margin-left|scroll-margin-right
| scroll-margin-top|scroll-padding|scroll-padding-block|scroll-padding-block-end|scroll-padding-block-start|scroll-padding-bottom
| scroll-padding-inline|scroll-padding-inline-end|scroll-padding-inline-start|scroll-padding-left|scroll-padding-right
| scroll-padding-top|scroll-snap-align|scroll-snap-coordinate|scroll-snap-destination|scroll-snap-stop|scroll-snap-type
| scrollbar-color|scrollbar-gutter|scrollbar-width|shape-image-threshold|shape-margin|shape-outside|shape-rendering|size
| speak-as|src|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap|stroke-linejoin|stroke-miterlimit
| stroke-opacity|stroke-width|suffix|symbols|system|tab-size|table-layout|text-align|text-align-last|text-anchor|text-combine-upright
| text-decoration|text-decoration-color|text-decoration-line|text-decoration-skip|text-decoration-skip-ink|text-decoration-style|text-decoration-thickness
| text-emphasis|text-emphasis-color|text-emphasis-position|text-emphasis-style|text-indent|text-justify|text-orientation
| text-overflow|text-rendering|text-shadow|text-size-adjust|text-transform|text-underline-offset|text-underline-position|top|touch-action|transform
| transform-box|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function
| translate|unicode-bidi|unicode-range|user-select|user-zoom|vertical-align|visibility|white-space|widows|width|will-change
| word-break|word-spacing|word-wrap|writing-mode|z-index|zoom


| alignment-baseline|baseline-shift|clip-rule|color-interpolation|color-interpolation-filters|color-profile
| color-rendering|cx|cy|dominant-baseline|enable-background|fill|fill-opacity|fill-rule|flood-color|flood-opacity
| glyph-orientation-horizontal|glyph-orientation-vertical|height|kerning|lighting-color|marker-end|marker-mid
| marker-start|r|rx|ry|shape-rendering|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap
| stroke-linejoin|stroke-miterlimit|stroke-opacity|stroke-width|text-anchor|width|x|y


| adjust|after|align|align-last|alignment|alignment-adjust|appearance|attachment|azimuth|background-break
| balance|baseline|before|bidi|binding|bookmark|bookmark-label|bookmark-level|bookmark-target|border-length
| bottom-color|bottom-left-radius|bottom-right-radius|bottom-style|bottom-width|box|box-align|box-direction
| box-flex|box-flex-group|box-lines|box-ordinal-group|box-orient|box-pack|break|character|collapse|column
| column-break-after|column-break-before|count|counter|crop|cue|cue-after|cue-before|decoration|decoration-break
| delay|display-model|display-role|down|drop|drop-initial-after-adjust|drop-initial-after-align|drop-initial-before-adjust
| drop-initial-before-align|drop-initial-size|drop-initial-value|duration|elevation|emphasis|family|fit|fit-position
| flex-group|float-offset|gap|grid-columns|grid-rows|hanging-punctuation|header|hyphenate|hyphenate-after|hyphenate-before
| hyphenate-character|hyphenate-lines|hyphenate-resource|icon|image|increment|indent|index|initial-after-adjust
| initial-after-align|initial-before-adjust|initial-before-align|initial-size|initial-value|inline-box-align|iteration-count
| justify|label|left-color|left-style|left-width|length|level|line|line-stacking|line-stacking-ruby|line-stacking-shift
| line-stacking-strategy|lines|list|mark|mark-after|mark-before|marks|marquee|marquee-direction|marquee-play-count|marquee-speed
| marquee-style|max|min|model|move-to|name|nav|nav-down|nav-index|nav-left|nav-right|nav-up|new|numeral|offset|ordinal-group
| orient|origin|overflow-style|overhang|pack|page|page-policy|pause|pause-after|pause-before|phonemes|pitch|pitch-range
| play-count|play-during|play-state|point|presentation|presentation-level|profile|property|punctuation|punctuation-trim
| radius|rate|rendering-intent|repeat|replace|reset|resolution|resource|respond-to|rest|rest-after|rest-before|richness
| right-color|right-style|right-width|role|rotation|rotation-point|rows|ruby|ruby-overhang|ruby-span|rule|rule-color
| rule-style|rule-width|shadow|size|size-adjust|sizing|space|space-collapse|spacing|span|speak|speak-header|speak-numeral
| speak-punctuation|speech|speech-rate|speed|stacking|stacking-ruby|stacking-shift|stacking-strategy|stress|stretch
| string-set|style|style-image|style-position|style-type|target|target-name|target-new|target-position|text|text-height
| text-justify|text-outline|text-replace|text-wrap|timing-function|top-color|top-left-radius|top-right-radius|top-style
| top-width|trim|unicode|up|user-select|variant|voice|voice-balance|voice-duration|voice-family|voice-pitch|voice-pitch-range
| voice-rate|voice-stress|voice-volume|volume|weight|white|white-space-collapse|word|wrap
)
(?![\\w-])`, name: "support.type.property-name.css" }, { match: "(?<![\\w-])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[a-zA-Z-]+", name: "support.type.vendored.property-name.css" }] }, "property-values": { patterns: [{ include: "#commas" }, { include: "#comment-block" }, { include: "#escapes" }, { include: "#functions" }, { include: "#property-keywords" }, { include: "#unicode-range" }, { include: "#numeric-values" }, { include: "#color-keywords" }, { include: "#string" }, { match: "!\\s*important(?![\\w-])", name: "keyword.other.important.css" }] }, "pseudo-classes": { captures: { 1: { name: "punctuation.definition.entity.css" }, 2: { name: "invalid.illegal.colon.css" } }, match: `(?xi)
(:)(:*)
(?: active|any-link|checked|default|disabled|empty|enabled|first
| (?:first|last|only)-(?:child|of-type)|focus|focus-visible|focus-within|fullscreen|host|hover
| in-range|indeterminate|invalid|left|link|optional|out-of-range
| read-only|read-write|required|right|root|scope|target|unresolved
| valid|visited
)(?![\\w-]|\\s*[;}])`, name: "entity.other.attribute-name.pseudo-class.css" }, "pseudo-elements": { captures: { 1: { name: "punctuation.definition.entity.css" }, 2: { name: "punctuation.definition.entity.css" } }, match: `(?xi)
(?:
(::?)
(?: after
| before
| first-letter
| first-line
| (?:-(?:ah|apple|atsc|epub|hp|khtml|moz
|ms|o|rim|ro|tc|wap|webkit|xv)
| (?:mso|prince))
-[a-z-]+
)
|
(::)
(?: backdrop
| content
| grammar-error
| marker
| placeholder
| selection
| shadow
| spelling-error
)
)
(?![\\w-]|\\s*[;}])`, name: "entity.other.attribute-name.pseudo-element.css" }, "rule-list": { begin: "{", beginCaptures: { 0: { name: "punctuation.section.property-list.begin.bracket.curly.css" } }, end: "}", endCaptures: { 0: { name: "punctuation.section.property-list.end.bracket.curly.css" } }, name: "meta.property-list.css", patterns: [{ include: "#rule-list-innards" }] }, "rule-list-innards": { patterns: [{ include: "#comment-block" }, { include: "#escapes" }, { include: "#font-features" }, { match: `(?x) (?<![\\w-])
--
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`, name: "variable.css" }, { begin: "(?<![-a-zA-Z])(?=[-a-zA-Z])", end: "$|(?![-a-zA-Z])", name: "meta.property-name.css", patterns: [{ include: "#property-names" }] }, { begin: "(:)\\s*", beginCaptures: { 1: { name: "punctuation.separator.key-value.css" } }, contentName: "meta.property-value.css", end: "\\s*(;)|\\s*(?=}|\\))", endCaptures: { 1: { name: "punctuation.terminator.rule.css" } }, patterns: [{ include: "#comment-block" }, { include: "#property-values" }] }, { match: ";", name: "punctuation.terminator.rule.css" }] }, selector: { begin: `(?x)
(?=
(?:\\|)?
(?:
[-\\[:.*\\#a-zA-Z_]
|
[^\\x00-\\x7F]
|
\\\\
(?:[0-9a-fA-F]{1,6}|.)
)
)`, end: "(?=\\s*[/@{)])", name: "meta.selector.css", patterns: [{ include: "#selector-innards" }] }, "selector-innards": { patterns: [{ include: "#comment-block" }, { include: "#commas" }, { include: "#escapes" }, { include: "#combinators" }, { captures: { 1: { name: "entity.other.namespace-prefix.css" }, 2: { name: "punctuation.separator.css" } }, match: `(?x)
(?:^|(?<=[\\s,(};]))
(?!
[-\\w*]+
\\|
(?!
[-\\[:.*\\#a-zA-Z_]
| [^\\x00-\\x7F]
)
)
(
(?: [-a-zA-Z_]    | [^\\x00-\\x7F] )
(?: [-a-zA-Z0-9_] | [^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
)*
|
\\*
)?
(\\|)` }, { include: "#tag-names" }, { match: "\\*", name: "entity.name.tag.wildcard.css" }, { captures: { 1: { name: "punctuation.definition.entity.css" }, 2: { patterns: [{ include: "#escapes" }] } }, match: `(?x) (?<![@\\w-])
([.\\#])
# Invalid identifier
(
(?:

-?[0-9]
|

-
(?= $
| [\\s,.\\#)\\[:{>+~|]
| /\\*
)
|

(?:
[-a-zA-Z_0-9]|[^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
)*
(?:
[!"'%&(*;<?@^\`|\\]}]
|
/ (?!\\*)
)+
)

(?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
)*
)`, name: "invalid.illegal.bad-identifier.css" }, { captures: { 1: { name: "punctuation.definition.entity.css" }, 2: { patterns: [{ include: "#escapes" }] } }, match: `(?x)
(\\.)
(
(?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
)+
)
(?= $
| [\\s,.\\#)\\[:{>+~|]
| /\\*
)`, name: "entity.other.attribute-name.class.css" }, { captures: { 1: { name: "punctuation.definition.entity.css" }, 2: { patterns: [{ include: "#escapes" }] } }, match: `(?x)
(\\#)
(
-?
(?![0-9])
(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+
)
(?=$|[\\s,.\\#)\\[:{>+~|]|/\\*)`, name: "entity.other.attribute-name.id.css" }, { begin: "\\[", beginCaptures: { 0: { name: "punctuation.definition.entity.begin.bracket.square.css" } }, end: "\\]", endCaptures: { 0: { name: "punctuation.definition.entity.end.bracket.square.css" } }, name: "meta.attribute-selector.css", patterns: [{ include: "#comment-block" }, { include: "#string" }, { captures: { 1: { name: "storage.modifier.ignore-case.css" } }, match: `(?<=["'\\s]|^|\\*/)\\s*([iI])\\s*(?=[\\s\\]]|/\\*|$)` }, { captures: { 1: { name: "string.unquoted.attribute-value.css", patterns: [{ include: "#escapes" }] } }, match: `(?x)(?<==)\\s*((?!/\\*)(?:[^\\\\"'\\s\\]]|\\\\.)+)` }, { include: "#escapes" }, { match: "[~|^$*]?=", name: "keyword.operator.pattern.css" }, { match: "\\|", name: "punctuation.separator.css" }, { captures: { 1: { name: "entity.other.namespace-prefix.css", patterns: [{ include: "#escapes" }] } }, match: `(?x)
# Qualified namespace prefix
( -?(?!\\d)(?:[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+
| \\*
)
# Lookahead to ensure there's a valid identifier ahead
(?=
\\| (?!\\s|=|$|\\])
(?: -?(?!\\d)
|   [\\\\\\w-]
|   [^\\x00-\\x7F]
)
)` }, { captures: { 1: { name: "entity.other.attribute-name.css", patterns: [{ include: "#escapes" }] } }, match: `(?x)
(-?(?!\\d)(?>[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+)
\\s*
(?=[~|^\\]$*=]|/\\*)` }] }, { include: "#pseudo-classes" }, { include: "#pseudo-elements" }, { include: "#functional-pseudo-classes" }, { match: `(?x) (?<![@\\w-])
(?=
[a-z]
\\w* -
)
(?:
(?![A-Z])
[\\w-]
)+
(?![(\\w-])`, name: "entity.name.tag.custom.css" }] }, string: { patterns: [{ begin: '"', beginCaptures: { 0: { name: "punctuation.definition.string.begin.css" } }, end: '"|(?<!\\\\)(?=$|\\n)', endCaptures: { 0: { name: "punctuation.definition.string.end.css" } }, name: "string.quoted.double.css", patterns: [{ begin: '(?:\\G|^)(?=(?:[^\\\\"]|\\\\.)+$)', end: "$", name: "invalid.illegal.unclosed.string.css", patterns: [{ include: "#escapes" }] }, { include: "#escapes" }] }, { begin: "'", beginCaptures: { 0: { name: "punctuation.definition.string.begin.css" } }, end: "'|(?<!\\\\)(?=$|\\n)", endCaptures: { 0: { name: "punctuation.definition.string.end.css" } }, name: "string.quoted.single.css", patterns: [{ begin: "(?:\\G|^)(?=(?:[^\\\\']|\\\\.)+$)", end: "$", name: "invalid.illegal.unclosed.string.css", patterns: [{ include: "#escapes" }] }, { include: "#escapes" }] }] }, "tag-names": { match: `(?xi) (?<![\\w:-])
(?:

a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|bgsound
| big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command
| content|data|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|element|em|embed|fieldset
| figcaption|figure|font|footer|form|frame|frameset|h[1-6]|head|header|hgroup|hr|html|i
| iframe|image|img|input|ins|isindex|kbd|keygen|label|legend|li|link|listing|main|map|mark
| marquee|math|menu|menuitem|meta|meter|multicol|nav|nextid|nobr|noembed|noframes|noscript
| object|ol|optgroup|option|output|p|param|picture|plaintext|pre|progress|q|rb|rp|rt|rtc
| ruby|s|samp|script|section|select|shadow|slot|small|source|spacer|span|strike|strong
| style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr
| track|tt|u|ul|var|video|wbr|xmp


| altGlyph|altGlyphDef|altGlyphItem|animate|animateColor|animateMotion|animateTransform
| circle|clipPath|color-profile|cursor|defs|desc|discard|ellipse|feBlend|feColorMatrix
| feComponentTransfer|feComposite|feConvolveMatrix|feDiffuseLighting|feDisplacementMap
| feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur
| feImage|feMerge|feMergeNode|feMorphology|feOffset|fePointLight|feSpecularLighting
| feSpotLight|feTile|feTurbulence|filter|font-face|font-face-format|font-face-name
| font-face-src|font-face-uri|foreignObject|g|glyph|glyphRef|hatch|hatchpath|hkern
| line|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|metadata
| missing-glyph|mpath|path|pattern|polygon|polyline|radialGradient|rect|set|solidcolor
| stop|svg|switch|symbol|text|textPath|tref|tspan|use|view|vkern


| annotation|annotation-xml|maction|maligngroup|malignmark|math|menclose|merror|mfenced
| mfrac|mglyph|mi|mlabeledtr|mlongdiv|mmultiscripts|mn|mo|mover|mpadded|mphantom|mroot
| mrow|ms|mscarries|mscarry|msgroup|msline|mspace|msqrt|msrow|mstack|mstyle|msub|msubsup
| msup|mtable|mtd|mtext|mtr|munder|munderover|semantics
)
(?=[+~>\\s,.\\#|){:\\[]|/\\*|$)`, name: "entity.name.tag.css" }, "unicode-range": { captures: { 0: { name: "constant.other.unicode-range.css" }, 1: { name: "punctuation.separator.dash.unicode-range.css" } }, match: "(?<![\\w-])[Uu]\\+[0-9A-Fa-f?]{1,6}(?:(-)[0-9A-Fa-f]{1,6})?(?![\\w-])" }, url: { begin: "(?i)(?<![\\w@-])(url)(\\()", beginCaptures: { 1: { name: "support.function.url.css" }, 2: { name: "punctuation.section.function.begin.bracket.round.css" } }, end: "\\)", endCaptures: { 0: { name: "punctuation.section.function.end.bracket.round.css" } }, name: "meta.function.url.css", patterns: [{ match: `[^'")\\s]+`, name: "variable.parameter.url.css" }, { include: "#string" }, { include: "#comment-block" }, { include: "#escapes" }] } }, scopeName: "source.css" });
var n = [
  e
];
export {
  n as default
};
