# 🎧 Earpiece

**Live cue cards for job interviews.** Earpiece listens to your video call in Chrome and pops up talking points as soon as the interviewer says a keyword. Say "tell me about yourself", "salary", "Intune", or the name of a past employer, and your answer is on screen.

- Works with Zoom, Google Meet, Teams, or anything else that plays audio
- Your cards are built from **your resume** and **the job you're interviewing for**
- Runs 100% locally: no account, no API key, and your resume never leaves your computer
- One HTML file plus a tiny Python server, with no build step and no dependencies

## Quick start

1. Install [Python 3](https://www.python.org/downloads/) and Google Chrome.
2. Download or clone this repo.
3. Start it:
   - **macOS:** double-click `Start Earpiece.command`
   - **Windows:** double-click `Start Earpiece.bat`
   - **Anything else:** `python3 serve.py`, then open http://localhost:8765
4. Click **⚙ Set up my cards** and build your deck (see below).
5. In the interview, click **🔊 Listen to meeting audio**:
   - Zoom/Teams desktop app: share **Entire screen** and tick **Share system audio**
   - Meet in a Chrome tab: share that **tab** and tick **Share tab audio**

Not sure it's working? Open http://localhost:8765/index.html#demo to replay a fake interview, or click **🎙 Listen to my mic** and read a question out loud.

> Earpiece has to run from `localhost`, not by double-clicking `index.html`. Chrome only allows audio capture there, and it remembers the permission.

## Building your cards

The setup page (`setup.html`) builds a deck from:

| Step | What you give it | What you get |
|---|---|---|
| **Job type** | Behavioral, IT support, cybersecurity, software, sales, customer service, healthcare (pick several) | Starter cards with tuned keywords + tips |
| **Your jobs** | Company, title, years, talking points | A card that pops when that company is mentioned |
| **Your answers** | Your own lines for "about yourself", strengths, weakness, salary… | Your words replace the generic tips |
| **The company** | Facts, why you want it, main duties | "About X", "Why X" and "The job" cards |
| **AI (optional)** | Resume + job posting | A prompt to paste into ChatGPT/Claude. Paste its JSON back and it adds 20–40 tailored cards |

**Save & open Earpiece** stores the deck in your browser. **Download my-cards.json** saves it next to `index.html`, where Earpiece picks it up automatically. `my-cards.json` is git-ignored, so your resume details never end up in a commit.

Earpiece looks for a deck in this order: the one saved in your browser, then `my-cards.json`, then `decks/example.json`.

## Card format

```json
{
  "name": "Alex @ Acme",
  "lang": "en-US",
  "cards": [
    {
      "t": "Contoso · Help Desk · 2021–24",
      "k": ["contoso", "ticket queue"],
      "g": ["can toso"],
      "a": ["40 tickets/day, 95% CSAT", "Trained 5 new hires"],
      "top": true
    }
  ]
}
```

| Field | Meaning |
|---|---|
| `t` | Card title |
| `k` | Specific phrases (regex, whole words). Plain words also match `-s/-ed/-ing` endings, and "your/you" also match "my/I", so the card fires on your own words too |
| `g` | Broad words and speech-to-text mishearings. Used only when no `k` phrase matches |
| `a` | Lines shown on the card. Keep them short enough to read at a glance |
| `top` | Wins ties (employers, technical terms) |
| `low` | Only shows if nothing else matched |
| `lang` | Speech language, e.g. `en-GB`, `es-ES` |
| `demo` | Optional list of sentences for the `#demo` replay |

The two best-scoring cards pop for each sentence, and the newest card sits on top with a yellow outline. **Spacebar** pauses and resumes the cards while Earpiece keeps listening.

## Adding a job-type pack

Packs live in `packs.js`. Add an entry with a `name` and a `cards` list in the format above, and it shows up as a checkbox on the setup page. Pull requests with new packs (nursing, teaching, finance, trades…) are welcome.

## Privacy & fairness

Speech recognition is Chrome's built-in Web Speech API, which may send audio to Google to transcribe it. Nothing else leaves your machine. Check your interviewer's rules before using any aid in a live interview. Earpiece is meant for prep, mock interviews, and glanceable notes of **your own** experience.

## License

MIT
