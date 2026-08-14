import { Action, ActionPanel, Color, Grid } from "@raycast/api";

type Whitespace = {
  name: string;
  character: string;
  codePoint: string;
  keywords: string[];
};

const WHITESPACES: Whitespace[] = [
  { name: "Zero Width Space", character: "\u200B", codePoint: "U+200B", keywords: ["zwsp", "invisible", "zero"] },
  { name: "Zero Width Non-Joiner", character: "\u200C", codePoint: "U+200C", keywords: ["zwnj", "invisible", "zero"] },
  { name: "Zero Width Joiner", character: "\u200D", codePoint: "U+200D", keywords: ["zwj", "invisible", "zero"] },
  { name: "Word Joiner", character: "\u2060", codePoint: "U+2060", keywords: ["wj", "invisible", "zero"] },
  { name: "Zero Width No-Break Space", character: "\uFEFF", codePoint: "U+FEFF", keywords: ["bom", "zwnbsp", "invisible"] },
  { name: "Mongolian Vowel Separator", character: "\u180E", codePoint: "U+180E", keywords: ["mvs"] },
  { name: "Hair Space", character: "\u200A", codePoint: "U+200A", keywords: ["hair"] },
  { name: "Six-Per-Em Space", character: "\u2006", codePoint: "U+2006", keywords: ["six"] },
  { name: "Thin Space", character: "\u2009", codePoint: "U+2009", keywords: ["thin"] },
  { name: "Narrow No-Break Space", character: "\u202F", codePoint: "U+202F", keywords: ["nnbsp", "narrow", "nbsp"] },
  { name: "Medium Mathematical Space", character: "\u205F", codePoint: "U+205F", keywords: ["mmsp", "math"] },
  { name: "Four-Per-Em Space", character: "\u2005", codePoint: "U+2005", keywords: ["mid"] },
  { name: "Punctuation Space", character: "\u2008", codePoint: "U+2008", keywords: ["punctuation"] },
  { name: "Space", character: "\u0020", codePoint: "U+0020", keywords: ["normal", "regular", "ascii"] },
  { name: "No-Break Space", character: "\u00A0", codePoint: "U+00A0", keywords: ["nbsp", "non-breaking"] },
  { name: "Tab", character: "\u0009", codePoint: "U+0009", keywords: ["tab", "character tabulation"] },
  { name: "Three-Per-Em Space", character: "\u2004", codePoint: "U+2004", keywords: ["thick"] },
  { name: "Figure Space", character: "\u2007", codePoint: "U+2007", keywords: ["tabular", "digit"] },
  { name: "En Space", character: "\u2002", codePoint: "U+2002", keywords: ["en", "nut"] },
  { name: "En Quad", character: "\u2000", codePoint: "U+2000", keywords: ["en"] },
  { name: "Braille Pattern Blank", character: "\u2800", codePoint: "U+2800", keywords: ["braille", "blank"] },
  { name: "Em Space", character: "\u2003", codePoint: "U+2003", keywords: ["em", "mutton"] },
  { name: "Em Quad", character: "\u2001", codePoint: "U+2001", keywords: ["em"] },
  { name: "Ideographic Space", character: "\u3000", codePoint: "U+3000", keywords: ["cjk", "fullwidth", "ideographic"] },
  { name: "Hangul Filler", character: "\u3164", codePoint: "U+3164", keywords: ["hangul", "filler", "invisible"] },
  { name: "Ogham Space Mark", character: "\u1680", codePoint: "U+1680", keywords: ["ogham"] },
];

function previewIcon(character: string) {
  return {
    source: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 135"><text x="50%" y="85%" text-anchor="middle" xml:space="preserve" font-size="96">[${character}]</text></svg>`,
    tintColor: Color.PrimaryText,
  };
}

export default function Command() {
  return (
    <Grid columns={6} inset={Grid.Inset.Small} aspectRatio="16/9" searchBarPlaceholder="Search whitespace characters…">
      {WHITESPACES.map((item) => (
        <Grid.Item
          key={item.codePoint}
          content={previewIcon(item.character)}
          title={item.name}
          subtitle={item.codePoint}
          keywords={[item.codePoint, item.codePoint.replace("U+", ""), ...item.keywords]}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard title={`Copy ${item.name}`} content={item.character} />
              <Action.Paste title={`Paste ${item.name}`} content={item.character} />
              <Action.CopyToClipboard title="Copy Code Point" content={item.codePoint} />
            </ActionPanel>
          }
        />
      ))}
    </Grid>
  );
}
