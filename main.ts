// Warning Label for Humans: one safety label every human should carry, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The warning line, composed fresh for this bounty.
const entry = "WARNING: May suddenly start a sentence with 'no offense' and then say the most offensive thing you have ever heard.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
