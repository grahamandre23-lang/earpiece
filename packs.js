// Starter card packs. setup.html combines these with your own resume cards.
// Card: t = title, k = specific phrases (regex), g = broad words/mishearings, a = what to say, top = boost, low = only if nothing else matches.
window.EARPIECE_PACKS = {
 "behavioral": {
  "name": "Behavioral (every interview)",
  "cards": [
   {
    "t": "Tell me about yourself",
    "k": [
     "about yourself",
     "introduce yourself",
     "introduction",
     "tell me about you",
     "tell us about you",
     "a little about you",
     "bit about you",
     "more about you",
     "your background",
     "background",
     "walk me through your (resume|résumé|career|experience|history)",
     "your (resume|résumé)",
     "your story",
     "who are you",
     "describe yourself",
     "yourself",
     "your journey",
     "how did you get (into|started)",
     "your career so far",
     "get to know you",
     "elevator pitch",
     "summari[sz]e your"
    ],
    "g": [
     "about you",
     "who you are",
     "about me",
     "about myself",
     "myself",
     "who i am",
     "a bit about",
     "a little about",
     "little bit about",
     "quick intro",
     "start with you",
     "start off",
     "tell us about",
     "know you",
     "get to know",
     "bio",
     "overview of you"
    ],
    "a": [
     "Present: what you do now + 1 win",
     "Past: 1–2 jobs that led here",
     "Future: why THIS role is the next step",
     "Keep it under 60 seconds"
    ]
   },
   {
    "t": "Your experience",
    "k": [
     "experience",
     "experiences",
     "experienced",
     "work history",
     "employment history",
     "work experience",
     "previous (jobs?|roles?|employers?|positions?)",
     "past (jobs?|roles?|employers?|positions?|experience)",
     "jobs",
     "roles",
     "positions",
     "career",
     "worked",
     "where have you worked",
     "resume",
     "résumé",
     "work background",
     "professional background"
    ],
    "a": [
     "Lead with your most relevant job",
     "One number per job (tickets, sales, users, %)",
     "Say a company name to pop its card"
    ]
   },
   {
    "t": "Your strengths",
    "k": [
     "strengths?",
     "strongest",
     "good at",
     "best at",
     "great at",
     "bring to",
     "bring to the table",
     "what (can|do|would) you (bring|offer)",
     "value",
     "add value",
     "stand out",
     "sets? you apart",
     "different",
     "unique",
     "skills?",
     "skill set",
     "assets?",
     "why should we hire",
     "why hire you",
     "hire you",
     "superpower"
    ],
    "a": [
     "Pick 2–3 that match the job posting",
     "Back each with a quick example",
     "End with how it helps THEM"
    ]
   },
   {
    "t": "Weakness",
    "k": [
     "weakness\\w*",
     "weak (area|spot|point)s?",
     "weak",
     "areas? (to|of|for) (improve|improvement|growth)",
     "improve on",
     "improvement",
     "work on",
     "working on",
     "growth area",
     "struggle\\w*",
     "not familiar",
     "unfamiliar",
     "haven't used",
     "never used",
     "don't know",
     "lack of",
     "shortcoming\\w*",
     "challenge for you"
    ],
    "a": [
     "A real gap that isn't core to the job",
     "What you're doing about it right now",
     "Keep it short, end on the action"
    ]
   },
   {
    "t": "Teamwork",
    "k": [
     "team",
     "teams",
     "teamwork",
     "team player",
     "coworkers?",
     "co-workers?",
     "colleagues?",
     "peers?",
     "collaborat\\w*",
     "work with others",
     "working with others",
     "work together",
     "get along",
     "disagree\\w* with (a |your )?(coworker|manager|boss|teammate)",
     "conflict with",
     "supervisor",
     "your manager",
     "feedback",
     "criticism"
    ],
    "a": [
     "STAR: Situation → Task → Action → Result",
     "Show you share credit + hand off cleanly",
     "Conflict: talk 1-on-1, focus on the problem"
    ]
   },
   {
    "t": "Mistake / lesson",
    "k": [
     "mistakes?",
     "failures?",
     "failed",
     "fail",
     "messed up",
     "went wrong",
     "wrong",
     "error you made",
     "learned from",
     "lesson\\w*",
     "regret",
     "do differently",
     "proud of\\s?not",
     "setback\\w*",
     "bad decision"
    ],
    "a": [
     "Use a real, small one",
     "What happened → owned it → fixed it → what you changed",
     "Never blame others"
    ]
   },
   {
    "t": "Pressure / stress",
    "k": [
     "pressure",
     "stress\\w*",
     "fast.paced",
     "deadlines?",
     "busy",
     "high.volume",
     "overload\\w*",
     "under fire",
     "tight (deadline|timeline)",
     "chaos",
     "chaotic",
     "rush\\w*",
     "handle stress",
     "calm under"
    ],
    "a": [
     "A busy moment with a clear result",
     "Prioritize → communicate → one thing at a time",
     "Stay calm, keep people updated"
    ]
   },
   {
    "t": "Career goals",
    "k": [
     "goals?",
     "five years",
     "5 years",
     "ten years",
     "future",
     "long.term",
     "short.term",
     "grow",
     "growth",
     "career path",
     "next step in your career",
     "aspirations?",
     "ambitions?",
     "plans?",
     "see yourself"
    ],
    "a": [
     "Short term: master this role",
     "Long term: grow into the next level here",
     "Tie it back to the company"
    ]
   },
   {
    "t": "Proudest achievement",
    "k": [
     "proud\\w*",
     "proudest",
     "accomplish\\w*",
     "achievements?",
     "biggest (win|success)",
     "success\\w*",
     "highlight",
     "most rewarding",
     "favorite (project|moment)"
    ],
    "a": [
     "One story with a number in it",
     "Your part, not the team's",
     "What it shows about you"
    ]
   },
   {
    "t": "Learning new tech",
    "k": [
     "learn\\w*",
     "new (technology|tech|tool|tools|software|system|systems)",
     "keep up",
     "stay (current|up to date|updated)",
     "pick up",
     "self.taught",
     "teach yourself",
     "taught yourself",
     "quick learner",
     "fast learner",
     "curious",
     "research"
    ],
    "a": [
     "Docs → hands-on → write it up",
     "Name something you taught yourself recently",
     "\"Show me your tools, I'll be hands-on fast.\""
    ]
   },
   {
    "t": "Work style",
    "k": [
     "work style",
     "working style",
     "independent\\w*",
     "on your own",
     "by yourself",
     "alone",
     "self.motivated",
     "self.starter",
     "supervision",
     "micromanag\\w*",
     "organized",
     "organization skills",
     "time management",
     "multitask\\w*",
     "detail.oriented",
     "attention to detail"
    ],
    "a": [
     "Organized + self-managed",
     "Keep notes, follow through",
     "Independent, but ask early when blocked"
    ]
   },
   {
    "t": "Leading / training",
    "k": [
     "lead",
     "leads",
     "leading",
     "leader\\w*",
     "leadership",
     "team lead",
     "led a",
     "train\\w*",
     "mentor\\w*",
     "coach\\w*",
     "supervis\\w*",
     "delegat\\w*",
     "manage people",
     "managing people",
     "manage a team",
     "managed a team",
     "direct reports",
     "onboard new (staff|employees|people|techs)",
     "new (hires|staff|techs)",
     "junior\\w*",
     "teach\\w*",
     "show someone",
     "guide (a|the) team",
     "in charge",
     "take charge",
     "took initiative",
     "initiative",
     "ownership",
     "step up",
     "stepped up"
    ],
    "g": [
     "led",
     "manager",
     "management",
     "manage",
     "mentoring",
     "guidance",
     "responsibility",
     "accountab\\w*",
     "oversee",
     "oversaw",
     "run (a|the) team",
     "in charge of",
     "boss",
     "senior"
    ],
    "a": [
     "A time you trained or helped someone",
     "What you did → how they improved",
     "No title needed: \"people come to me for…\""
    ]
   },
   {
    "t": "Upset customer / coworker",
    "k": [
     "upset",
     "frustrat\\w*",
     "angry",
     "mad",
     "irate",
     "impatient",
     "annoyed",
     "agitated",
     "hostile",
     "rude",
     "yelling",
     "yell\\w*",
     "screaming",
     "furious",
     "heated",
     "emotional",
     "stressed",
     "demanding",
     "pushy",
     "aggressive",
     "disrespectful",
     "unhappy",
     "dissatisfied",
     "displeased",
     "not happy",
     "complain\\w*",
     "difficult (user|customer|person|people|caller|client|staff|employee|doctor|nurse|situation)",
     "challenging (user|customer|person|people|situation)",
     "tough (user|customer|situation)",
     "taking too long",
     "too slow",
     "waiting (too long|forever|for days)",
     "been waiting",
     "hasn't been fixed",
     "not fixed yet",
     "conflict",
     "de.?escalat\\w*",
     "calm (them|someone|a user)",
     "customer service",
     "bad experience",
     "disagree\\w*",
     "pushback",
     "push back"
    ],
    "g": [
     "difficult",
     "customers?",
     "callers?",
     "complaints?",
     "attitude",
     "patience",
     "calm",
     "escalated (customer|user|caller)",
     "bad day",
     "emotions?",
     "tension",
     "temper"
    ],
    "a": [
     "Acknowledge them first",
     "Clear update + next step",
     "Set a follow-up time — and keep it"
    ]
   },
   {
    "t": "Explaining to non-experts",
    "k": [
     "non-?technical",
     "not technical",
     "not (very )?tech.?savvy",
     "(isn't|is not|aren't|not) (very )?(tech|computer).?(savvy|literate)",
     "not good with (computers|technology|tech)",
     "technophob\\w*",
     "older (users|staff|people)",
     "explain\\w*",
     "layman\\w*",
     "plain (language|english|terms)",
     "simple terms",
     "jargon",
     "dumb (it )?down",
     "break (it )?down",
     "communicat\\w*",
     "end.?users?",
     "someone who doesn't understand",
     "doesn't know (much )?about (computers|technology)",
     "educat\\w*"
    ],
    "g": [
     "teach",
     "teaching",
     "simplify",
     "simple",
     "understand",
     "communication",
     "communicator",
     "communication skills",
     "user training",
     "train users"
    ],
    "a": [
     "Plain words, one step at a time",
     "Check they got it",
     "Give them something written to keep"
    ]
   },
   {
    "t": "Why this job",
    "k": [
     "why i want",
     "why i'm (interested|applying)",
     "want (this|the) (job|role|position)",
     "why (this|the) (job|role|position)",
     "why here",
     "why us",
     "why our (company|organization)",
     "why this (role|job|position|company|opportunity)",
     "why do you want",
     "why are you (interested|applying|leaving|looking)",
     "what (interests|attracted|drew|brings) you",
     "what made you apply",
     "why did you apply",
     "interested in (this|the|our)",
     "why should we hire",
     "what makes you (a good fit|the right|qualified)",
     "good fit",
     "right fit",
     "mission"
    ],
    "g": [
     "why here",
     "culture",
     "values",
     "company",
     "organization",
     "fit",
     "purpose",
     "make a difference",
     "meaningful"
    ],
    "a": [
     "What in the posting excites you",
     "How your background fits it",
     "Why this company specifically"
    ]
   },
   {
    "t": "Salary",
    "k": [
     "salary",
     "salaries",
     "number",
     "what are you looking for",
     "looking for (financially|money.?wise|pay.?wise|compensation.?wise)",
     "current(ly)? (making|earning)",
     "make now",
     "previous (salary|pay)",
     "compensation",
     "comp",
     "pay range",
     "pay rate",
     "rate of pay",
     "pay",
     "paid",
     "expectations",
     "expected (salary|pay|range)",
     "how much",
     "what range",
     "range",
     "money",
     "number in mind",
     "ballpark",
     "wage\\w*",
     "hourly",
     "per hour",
     "annual(ly)?",
     "benefits",
     "package",
     "offer",
     "negotiat\\w*",
     "budget"
    ],
    "g": [
     "paying",
     "earn",
     "earning",
     "dollars",
     "thousand",
     "grand",
     "per year",
     "a year",
     "raise",
     "benefit\\w*",
     "pto",
     "401k",
     "insurance"
    ],
    "a": [
     "Know the posted range first",
     "Give a range, top of it = your target",
     "\"Depending on the full package.\""
    ]
   },
   {
    "t": "Years of experience",
    "k": [
     "five years",
     "5 years",
     "\\d+ years",
     "how many years",
     "how long have you",
     "years of experience",
     "enterprise",
     "requirement\\w*",
     "qualif\\w*",
     "meet the",
     "enough experience",
     "lack\\w*",
     "not much experience",
     "career change",
     "transition\\w*"
    ],
    "g": [
     "years",
     "how long",
     "long have you",
     "qualified",
     "qualifications",
     "enough",
     "meet the requirements",
     "entry level"
    ],
    "a": [
     "Count all related work, not just titles",
     "Name the transferable parts",
     "\"Now bringing it into a dedicated role.\""
    ]
   },
   {
    "t": "Certifications / education",
    "k": [
     "certif\\w*",
     "certs?",
     "credential\\w*",
     "education",
     "degree",
     "college",
     "school",
     "diploma",
     "training you('ve)? (done|had)",
     "self.taught",
     "bootcamp",
     "courses?"
    ],
    "g": [
     "certified",
     "certificates?",
     "study",
     "studying",
     "class",
     "classes",
     "training"
    ],
    "a": [
     "Most relevant one first",
     "What you learned, not just the name",
     "What you're studying now"
    ]
   },
   {
    "t": "Side projects",
    "k": [
     "projects?",
     "side projects?",
     "personal projects?",
     "portfolio",
     "github",
     "outside of work",
     "free time",
     "hobb(y|ies)",
     "passion\\w*"
    ],
    "g": [
     "git hub",
     "built",
     "build"
    ],
    "a": [
     "One project you built yourself",
     "What problem it solves",
     "\"I learn tools by building with them.\""
    ]
   },
   {
    "t": "Schedule / location",
    "k": [
     "on-?site",
     "in person",
     "in.person",
     "in the office",
     "in office",
     "remote work",
     "work from home",
     "hybrid",
     "commut\\w*",
     "travel\\w*",
     "drive",
     "driving",
     "car",
     "transportation",
     "license",
     "campus\\w*",
     "locations?",
     "sites?",
     "between (sites|locations|campuses)",
     "8 to 5",
     "eight to five",
     "monday (through|to) friday",
     "full.time",
     "hours",
     "schedule",
     "availab\\w*",
     "start date",
     "when can you start",
     "notice",
     "weekends?",
     "on.call",
     "after hours",
     "overtime"
    ],
    "g": [
     "location",
     "where do you live",
     "live",
     "living",
     "relocat\\w*",
     "boston",
     "distance",
     "how far",
     "far",
     "get here",
     "get to work",
     "transport"
    ],
    "a": [
     "Confirm hours, on-site vs remote",
     "Start date + notice period",
     "OK with travel?"
    ]
   },
   {
    "t": "Your questions + closing",
    "k": [
     "any questions",
     "questions for me",
     "questions for us",
     "questions for (the|our) team",
     "what questions",
     "do you have (any )?questions",
     "anything you'?d like to (ask|know)",
     "anything (else )?(you want|you'?d like) to (ask|add|share)",
     "anything else",
     "is there anything",
     "before we (wrap|end|finish|go)",
     "wrap (it )?up",
     "wrapping up",
     "that'?s all (i have|my questions)",
     "last question",
     "final question",
     "one more question",
     "next steps?",
     "we'?ll be in touch",
     "hear back",
     "thanks for your time",
     "thank you for your time"
    ],
    "g": [
     "questions",
     "question for",
     "ask me",
     "ask us",
     "ask anything",
     "curious",
     "wondering"
    ],
    "a": [
     "What does success look like in 90 days?",
     "Biggest challenge for this team right now?",
     "What are the next steps?",
     "\"Thank you — this role fits what I do best.\""
    ]
   },
   {
    "t": "The job",
    "k": [
     "the role",
     "this role",
     "the position",
     "this position",
     "the job",
     "this job",
     "responsibilit\\w*",
     "duties",
     "day to day",
     "day-to-day",
     "typical day",
     "what you('d| would) (be )?do(ing)?",
     "understand(ing)? (of )?(the|this) (role|position|job)",
     "job description",
     "posting"
    ],
    "g": [
     "role",
     "position",
     "job",
     "opening"
    ],
    "a": [
     "Restate the role in one line",
     "Top 3 duties from the posting",
     "Match each to something you've done"
    ],
    "low": true
   }
  ]
 },
 "it-support": {
  "name": "IT support / help desk",
  "cards": [
   {
    "t": "Tier 1 / 2 / 3",
    "k": [
     "tier (1|one|2|two|3|three)",
     "tiers",
     "level (1|one|2|two|3|three) support",
     "first line",
     "second line",
     "escalation path",
     "what('s| is) the difference between tier"
    ],
    "g": [
     "tier",
     "tier two",
     "tier 2",
     "level two",
     "second level",
     "escalation",
     "escalations"
    ],
    "a": [
     "Tier 1: first contact, easy fixes",
     "Tier 2: harder problems, deeper access",
     "Tier 3: engineers + vendors",
     "Good escalation = what's broken, who, what was tried"
    ],
    "top": true
   },
   {
    "t": "Ticketing / SLA",
    "k": [
     "ticketing",
     "ticket system",
     "help ?desk (software|system|tool)",
     "itsm",
     "servicenow",
     "service now",
     "jira",
     "zendesk",
     "freshservice",
     "freshdesk",
     "sla",
     "slas",
     "service level",
     "response time",
     "resolution time"
    ],
    "g": [
     "tickets",
     "ticket",
     "case management",
     "cases",
     "work orders?",
     "requests"
    ],
    "a": [
     "Ticket system logs + tracks every request",
     "SLA = Service Level Agreement (promised response time)",
     "\"If it's not in the ticket, it didn't happen.\"",
     "Ask: which system do you use?"
    ],
    "top": true
   },
   {
    "t": "Prioritizing tickets",
    "k": [
     "prioriti\\w*",
     "priority",
     "priorities",
     "escalat\\w*",
     "tier (2|two|1|one|3|three)",
     "level (2|two)",
     "ticket\\w*",
     "queue",
     "backlog",
     "workload",
     "urgent",
     "urgency",
     "most important",
     "what (comes|goes) first",
     "which (one|ticket|issue) first",
     "multiple (issues|requests|things)",
     "at the same time",
     "juggl\\w*",
     "triage",
     "sla",
     "service level",
     "critical",
     "severity",
     "overwhelm\\w*",
     "busy day",
     "time management",
     "manage your time",
     "multitask\\w*",
     "competing"
    ],
    "g": [
     "prioritise",
     "order",
     "rank",
     "important",
     "emergenc(y|ies)",
     "outages?",
     "down",
     "p1",
     "high priority",
     "fires",
     "first",
     "sequence"
    ],
    "a": [
     "Many users down > one user",
     "Business-critical before nice-to-have",
     "Communicate ETAs, document everything"
    ]
   },
   {
    "t": "Troubleshooting steps",
    "k": [
     "can't connect",
     "cannot connect",
     "can't get online",
     "no internet",
     "internet (is )?down",
     "not connecting",
     "connection",
     "connectivity",
     "network\\w*",
     "printer\\w*",
     "printing",
     "print",
     "won't print",
     "scan(ner)?",
     "log ?in",
     "logon",
     "log on",
     "sign ?in",
     "password\\w*",
     "reset",
     "forgot",
     "wi-?fi",
     "wireless",
     "vpn",
     "dns",
     "dhcp",
     "ip address",
     "ethernet",
     "cable",
     "troubleshoot\\w*",
     "walk me through",
     "step by step",
     "how would you (fix|solve|handle|approach)",
     "approach (a|the) problem",
     "diagnos\\w*",
     "computer (is )?(slow|frozen|not working)",
     "slow computer",
     "won't (turn on|boot|start)",
     "blue screen",
     "crash\\w*",
     "not working",
     "broken",
     "technical issue",
     "technical problem",
     "tough (issue|problem|ticket)",
     "hardest (issue|problem|ticket)",
     "difficult (issue|problem|ticket|technical)",
     "something you (fixed|solved)"
    ],
    "g": [
     "problem.solving",
     "problem",
     "problems",
     "issue",
     "issues",
     "fix",
     "fixed",
     "fixing",
     "solve",
     "solved",
     "solving",
     "resolve\\w*",
     "troubleshooting",
     "stuck",
     "error"
    ],
    "a": [
     "What changed? → reproduce it",
     "Check basics: cable, Wi-Fi, lockout, restart",
     "One change at a time → document the fix"
    ]
   },
   {
    "t": "MFA",
    "k": [
     "mfa",
     "multi.?factor",
     "two.?factor",
     "2fa",
     "authenticator",
     "microsoft authenticator",
     "duo",
     "one.time code",
     "conditional access",
     "sim swap"
    ],
    "g": [
     "two step",
     "2 step",
     "verification code",
     "authentication",
     "authenticate"
    ],
    "a": [
     "Multi-Factor Authentication: password + phone/app code",
     "Always verify identity before resetting it",
     "Surprise prompt approved = possible attack, escalate"
    ],
    "top": true
   },
   {
    "t": "VPN",
    "k": [
     "vpn",
     "vpns",
     "virtual private network",
     "remote connection",
     "connect (from home|remotely)",
     "always.?on",
     "globalprotect",
     "anyconnect",
     "forticlient"
    ],
    "g": [
     "v p n",
     "remote users?",
     "working from home",
     "remote workers?"
    ],
    "a": [
     "Virtual Private Network: secure tunnel into the company network",
     "Fix: internet ok? → login/MFA → client updated → one user or all?"
    ],
    "top": true
   },
   {
    "t": "DNS / DHCP / IP",
    "k": [
     "dns",
     "dhcp",
     "ip address(es)?",
     "ip",
     "subnet\\w*",
     "gateway",
     "ipconfig",
     "ping",
     "nslookup",
     "tcp",
     "osi",
     "switch(es)?",
     "ports?",
     "mac address\\w*",
     "lan",
     "wan",
     "networking basics"
    ],
    "g": [
     "d n s",
     "i p",
     "network",
     "networks",
     "router",
     "wifi",
     "wi-fi",
     "internet",
     "bandwidth",
     "latency"
    ],
    "a": [
     "DNS = names → IP addresses",
     "DHCP = hands out IPs (169.254 = didn't get one)",
     "Commands: ipconfig, ping, nslookup"
    ],
    "top": true
   },
   {
    "t": "Active Directory / M365",
    "k": [
     "microsoft",
     "microsoft 365",
     "office 365",
     "office",
     "o365",
     "m365",
     "azure",
     "azure ad",
     "entra",
     "active directory",
     "what is active directory",
     "domain controller\\w*",
     "\\bou\\b",
     "organizational unit\\w*",
     "user accounts?",
     "\\bad\\b",
     "group policy",
     "gpo",
     "domain",
     "outlook",
     "email",
     "exchange",
     "mailbox\\w*",
     "sharepoint",
     "onedrive",
     "teams",
     "cloud",
     "sentinel",
     "user account\\w*",
     "accounts?",
     "permissions?",
     "access rights",
     "security group\\w*",
     "distribution list\\w*",
     "license\\w*",
     "mfa",
     "multi.factor",
     "two.factor",
     "2fa",
     "authenticat\\w*"
    ],
    "g": [
     "ad",
     "a d",
     "directory",
     "user management",
     "password resets?",
     "unlock\\w*",
     "microsoft office",
     "office suite",
     "word",
     "excel",
     "exchange online",
     "azure active directory"
    ],
    "a": [
     "AD = users, groups + permissions",
     "Entra ID = cloud version (was Azure AD)",
     "Resets, unlocks, group access",
     "Verify identity before any reset"
    ],
    "top": true
   },
   {
    "t": "Group Policy (GPO)",
    "k": [
     "group polic\\w*",
     "gpo",
     "gpos",
     "gpupdate",
     "gpresult",
     "policy (push|pushed|setting)"
    ],
    "g": [
     "g p o",
     "policies",
     "policy"
    ],
    "a": [
     "Pushes settings to many Windows PCs at once",
     "gpupdate /force · gpresult /r"
    ],
    "top": true
   },
   {
    "t": "Windows troubleshooting",
    "k": [
     "event viewer",
     "task manager",
     "device manager",
     "safe mode",
     "sfc",
     "dism",
     "blue screen",
     "bsod",
     "(keeps|kept|keep) (crashing|freezing|restarting)",
     "crash\\w*",
     "freez\\w*",
     "slow (computer|pc|laptop)",
     "command prompt",
     "powershell",
     "registry",
     "system restore",
     "driver\\w*",
     "windows (10|11|issue|problem)"
    ],
    "g": [
     "windows",
     "pc",
     "computer",
     "slow",
     "frozen",
     "freezing",
     "not responding",
     "reboot",
     "restart",
     "error\\w*",
     "error message"
    ],
    "a": [
     "Event Viewer · Task Manager · Device Manager",
     "sfc /scannow · roll back driver · Safe Mode"
    ],
    "top": true
   },
   {
    "t": "New laptop setup",
    "k": [
     "new laptop",
     "laptop\\w*",
     "new (computer|machine|device|workstation|pc|phone|iphone)",
     "workstation\\w*",
     "desktop\\w*",
     "imag(e|es|ing)",
     "provision\\w*",
     "deploy\\w*",
     "onboard\\w*",
     "new hire\\w*",
     "new employee\\w*",
     "set ?up",
     "setting up",
     "configur\\w*",
     "encrypt\\w*",
     "bitlocker",
     "filevault",
     "harden\\w*",
     "secure (a|the|it|that)",
     "lock (it )?down",
     "antivirus",
     "anti.virus",
     "endpoint",
     "patch\\w*",
     "update\\w*",
     "ship\\w*",
     "mail (a|the) (laptop|device|phone)",
     "other (campus|campuses|sites|locations)",
     "phones?",
     "mobile phone\\w*",
     "cell phone\\w*",
     "hardware",
     "offboard\\w*",
     "terminated employee"
    ],
    "g": [
     "device",
     "devices",
     "setup",
     "set up",
     "deploying",
     "tablets?",
     "ipads?",
     "macs?",
     "macbooks?",
     "laptop setup",
     "new device"
    ],
    "a": [
     "Enroll/image → join domain",
     "Encrypt → update → antivirus",
     "Standard user account → log in inventory"
    ]
   },
   {
    "t": "MDM",
    "k": [
     "mdm",
     "m d m",
     "intune",
     "what is (an? )?mdm",
     "what does mdm (stand for|mean)",
     "mobile device management",
     "endpoint manager",
     "device management",
     "manage devices",
     "managing devices",
     "jamf",
     "kandji",
     "mosyle",
     "airwatch",
     "workspace one",
     "meraki",
     "mobile device\\w*",
     "remote wipe",
     "wipe",
     "enroll\\w*",
     "autopilot",
     "compliance polic\\w*",
     "apple business manager",
     "ipads?",
     "iphones?",
     "android"
    ],
    "g": [
     "in tune",
     "intunes",
     "in-tune",
     "jam f",
     "jamf pro",
     "m.d.m",
     "mobile management",
     "company phones?",
     "managed devices?",
     "mobile"
    ],
    "a": [
     "Mobile Device Management: manage laptops + phones remotely",
     "Push apps, enforce passcodes, wipe lost devices (e.g. Intune, Jamf)",
     "Ask: which do you use?"
    ],
    "top": true
   },
   {
    "t": "RMM",
    "k": [
     "rmm",
     "r m m",
     "remote monitoring",
     "remote management",
     "connectwise",
     "screenconnect",
     "ninja\\w*",
     "kaseya",
     "datto",
     "n-?able",
     "solarwinds",
     "atera",
     "teamviewer",
     "anydesk",
     "bomgar",
     "beyondtrust",
     "splashtop",
     "logmein",
     "remote (support|access|desktop|session|in|into|control|tool\\w*)",
     "rdp",
     "quick assist",
     "remotely",
     "support tools?",
     "servicenow",
     "service now",
     "jira",
     "zendesk",
     "freshdesk",
     "freshservice",
     "tools? (you'?ve|have you) used",
     "what tools",
     "software you('ve)? used"
    ],
    "g": [
     "r.m.m",
     "remote tools?",
     "remote software",
     "monitoring",
     "monitor",
     "remote in",
     "remoting",
     "remote"
    ],
    "a": [
     "Remote Monitoring and Management: watch, patch + remote into PCs",
     "e.g. NinjaOne, ConnectWise, Datto"
    ],
    "top": true
   },
   {
    "t": "Encryption / BitLocker",
    "k": [
     "encrypt\\w*",
     "bitlocker",
     "filevault",
     "recovery key\\w*",
     "data at rest",
     "disk encryption"
    ],
    "g": [
     "bit locker",
     "encrypted",
     "encryption",
     "locked laptop"
    ],
    "a": [
     "Lost laptop is unreadable without the login",
     "Recovery key: verify user first, then look it up"
    ],
    "top": true
   },
   {
    "t": "Patching",
    "k": [
     "patch\\w*",
     "windows updates?",
     "updates?",
     "vulnerabilit\\w*",
     "zero.?day",
     "out of date",
     "outdated",
     "wsus",
     "patch tuesday"
    ],
    "g": [
     "patches",
     "updating",
     "upgrade",
     "upgrades",
     "security updates?",
     "maintenance"
    ],
    "a": [
     "Install security fixes — most attacks use old holes",
     "Test a few → roll out in groups → reboot after hours"
    ],
    "top": true
   },
   {
    "t": "Backups",
    "k": [
     "backups?",
     "back(ed)? up",
     "restore",
     "recover\\w*",
     "disaster recovery",
     "3.2.1",
     "business continuity",
     "downtime"
    ],
    "g": [
     "back up",
     "backing up",
     "lost files?",
     "deleted files?",
     "data loss"
    ],
    "a": [
     "3-2-1: 3 copies, 2 types, 1 offsite",
     "Only counts if you've tested a restore"
    ],
    "top": true
   },
   {
    "t": "Access / onboarding / offboarding",
    "k": [
     "least privilege",
     "access control\\w*",
     "permissions?",
     "access rights",
     "admin rights",
     "local admin",
     "role.based",
     "rbac",
     "offboard\\w*",
     "terminat\\w*",
     "someone (leaves|left)",
     "employee (leaves|left)",
     "disable (the |an )?account",
     "need to know"
    ],
    "g": [
     "access",
     "onboarding",
     "new user\\w*",
     "user access",
     "who has access",
     "privileges?",
     "quit",
     "fired",
     "leaves the company"
    ],
    "a": [
     "Least privilege: only the access the job needs",
     "Leaves: disable account same day → collect + wipe device"
    ],
    "top": true
   },
   {
    "t": "Phishing",
    "k": [
     "phish\\w*",
     "suspicious (email|link|message|attachment)",
     "spam",
     "scam\\w*",
     "fake email",
     "malicious",
     "malware",
     "virus\\w*",
     "ransomware",
     "hack\\w*",
     "compromis\\w*",
     "clicked (a|on|the)",
     "click(ed)? (a|on|the) link",
     "bad link",
     "security awareness",
     "social engineering",
     "spoof\\w*",
     "impersonat\\w*",
     "credential\\w*",
     "security incident",
     "incident",
     "threat\\w*",
     "attack\\w*",
     "cyber.?attack\\w*",
     "security (issue|threat|risk)"
    ],
    "g": [
     "fishing",
     "fish",
     "fishy",
     "scammers?",
     "spam email\\w*",
     "junk email",
     "email scam\\w*",
     "suspicious"
    ],
    "a": [
     "Check sender, hover links, urgency",
     "Don't click → report → block sender",
     "Did anyone enter a password? Reset it"
    ]
   },
   {
    "t": "Inventory",
    "k": [
     "inventory",
     "inventories",
     "asset\\w*",
     "spare\\w*",
     "equipment",
     "stock",
     "supplies",
     "procure\\w*",
     "purchas\\w*",
     "order(ing)? (equipment|laptops|parts|devices)",
     "reorder",
     "vendor\\w*",
     "supplier\\w*",
     "keep track",
     "track(ing)? (equipment|devices|laptops|assets)",
     "serial number\\w*",
     "asset tag\\w*",
     "organiz\\w*",
     "spreadsheet"
    ],
    "g": [
     "tracking",
     "track",
     "logistics",
     "ordering",
     "shipping",
     "stockroom",
     "supply",
     "spare parts?",
     "loaners?"
    ],
    "a": [
     "One list: tag, user, location, status",
     "Update every hand-off · set reorder levels"
    ]
   },
   {
    "t": "Documentation",
    "k": [
     "document\\w*",
     "knowledge ?base",
     "\\bkb\\b",
     "how-?to",
     "guides?",
     "write.?ups?",
     "writ(e|ing) (up|down|instructions|procedures|articles)",
     "articles?",
     "procedures?",
     "processes",
     "process",
     "sops?",
     "standard operating",
     "runbook\\w*",
     "wiki",
     "notes",
     "record keeping",
     "keep records"
    ],
    "g": [
     "write",
     "writing",
     "written",
     "documented",
     "wrote",
     "instructions",
     "manuals?",
     "knowledge"
    ],
    "a": [
     "Repeat issue → write a how-to article",
     "Steps + screenshots, plain words"
    ]
   },
   {
    "t": "Outside help desk / MSP",
    "k": [
     "outside help ?desk",
     "external help ?desk",
     "contracted",
     "contractor\\w*",
     "outsourc\\w*",
     "msp",
     "managed service",
     "third.party",
     "vendor help ?desk",
     "offshore",
     "partner (team|help ?desk)",
     "keeps? escalating",
     "escalating (easy|simple|basic)",
     "shouldn't (be|have been) escalated",
     "another team",
     "other team",
     "work with (a|another|other) (team|department)",
     "cross.functional",
     "service desk",
     "level one team"
    ],
    "g": [
     "vendors?",
     "partners?",
     "external",
     "consultants?",
     "outside company",
     "outside team",
     "msp's",
     "managed services"
    ],
    "a": [
     "Find the pattern → write a how-to",
     "Train their team → track if it drops"
    ]
   }
  ]
 },
 "cybersecurity": {
  "name": "Cybersecurity",
  "cards": [
   {
    "t": "Security incident / ransomware",
    "k": [
     "ransomware",
     "security incident",
     "incident response",
     "breach",
     "compromised",
     "hacked",
     "infected",
     "virus",
     "malware",
     "siem",
     "sentinel",
     "splunk",
     "edr",
     "defender",
     "crowdstrike",
     "sentinelone",
     "something (looks|seems) suspicious"
    ],
    "g": [
     "cyber attack",
     "cyberattack",
     "security",
     "security breach",
     "threat",
     "threats",
     "intrusion",
     "antivirus",
     "anti-virus"
    ],
    "a": [
     "Isolate it from the network — don't power off",
     "Tell the security lead, write down what you saw",
     "Preserve evidence, follow the IR plan"
    ],
    "top": true
   },
   {
    "t": "Firewall",
    "k": [
     "firewall\\w*",
     "fortinet",
     "fortigate",
     "palo alto",
     "sonicwall",
     "meraki",
     "blocked (site|port|website)",
     "port blocked"
    ],
    "g": [
     "fire wall",
     "blocked",
     "blocking",
     "web filter\\w*",
     "content filter\\w*"
    ],
    "a": [
     "Controls what traffic gets in and out",
     "Blocked site → confirm, get approval, send to network team"
    ],
    "top": true
   },
   {
    "t": "SIEM / SOC",
    "k": [
     "siem",
     "soc",
     "security operations",
     "splunk",
     "sentinel",
     "qradar",
     "elastic",
     "alerts?",
     "triage",
     "false positives?",
     "log\\w*"
    ],
    "a": [
     "SIEM collects + correlates logs (Splunk, Sentinel)",
     "SOC triages alerts: true/false positive → escalate",
     "Tune noisy rules"
    ],
    "top": true
   },
   {
    "t": "Frameworks",
    "k": [
     "nist",
     "mitre",
     "att&?ck",
     "framework\\w*",
     "cia triad",
     "iso 27001",
     "cis controls?",
     "zero trust"
    ],
    "a": [
     "NIST CSF: Identify, Protect, Detect, Respond, Recover",
     "MITRE ATT&CK = attacker tactics + techniques",
     "CIA triad: Confidentiality, Integrity, Availability"
    ],
    "top": true
   },
   {
    "t": "Vulnerability management",
    "k": [
     "vulnerabilit\\w*",
     "cve\\w*",
     "cvss",
     "nessus",
     "qualys",
     "scan\\w*",
     "pen ?test\\w*",
     "penetration"
    ],
    "a": [
     "Scan (Nessus, Qualys) → rank by CVSS + exposure",
     "Patch or mitigate → rescan to confirm"
    ],
    "top": true
   },
   {
    "t": "Phishing",
    "k": [
     "phish\\w*",
     "suspicious (email|link|message|attachment)",
     "spam",
     "scam\\w*",
     "fake email",
     "malicious",
     "malware",
     "virus\\w*",
     "ransomware",
     "hack\\w*",
     "compromis\\w*",
     "clicked (a|on|the)",
     "click(ed)? (a|on|the) link",
     "bad link",
     "security awareness",
     "social engineering",
     "spoof\\w*",
     "impersonat\\w*",
     "credential\\w*",
     "security incident",
     "incident",
     "threat\\w*",
     "attack\\w*",
     "cyber.?attack\\w*",
     "security (issue|threat|risk)"
    ],
    "g": [
     "fishing",
     "fish",
     "fishy",
     "scammers?",
     "spam email\\w*",
     "junk email",
     "email scam\\w*",
     "suspicious"
    ],
    "a": [
     "Check sender, hover links, urgency",
     "Don't click → report → block sender",
     "Did anyone enter a password? Reset it"
    ]
   },
   {
    "t": "MFA",
    "k": [
     "mfa",
     "multi.?factor",
     "two.?factor",
     "2fa",
     "authenticator",
     "microsoft authenticator",
     "duo",
     "one.time code",
     "conditional access",
     "sim swap"
    ],
    "g": [
     "two step",
     "2 step",
     "verification code",
     "authentication",
     "authenticate"
    ],
    "a": [
     "Multi-Factor Authentication: something you know + have",
     "MFA fatigue attacks: report surprise prompts"
    ],
    "top": true
   }
  ]
 },
 "software": {
  "name": "Software engineering",
  "cards": [
   {
    "t": "System design",
    "k": [
     "system design",
     "design a",
     "architect\\w*",
     "scal(e|able|ability|ing)",
     "load balanc\\w*",
     "cach(e|ing)",
     "microservices?",
     "monolith"
    ],
    "a": [
     "Clarify requirements + scale first",
     "API → data model → storage → caching → scaling",
     "Call out trade-offs out loud"
    ],
    "top": true
   },
   {
    "t": "Coding approach",
    "k": [
     "coding (problem|question|challenge)",
     "algorithm\\w*",
     "data structures?",
     "big.?o",
     "time complexity",
     "space complexity",
     "leetcode",
     "whiteboard",
     "live coding"
    ],
    "a": [
     "Restate the problem + ask about edge cases",
     "Brute force first, then optimize",
     "Talk through Big-O as you go",
     "Test with an example at the end"
    ],
    "top": true
   },
   {
    "t": "Debugging",
    "k": [
     "debug\\w*",
     "bugs?",
     "production (issue|incident|outage)",
     "outage",
     "root cause",
     "stack trace"
    ],
    "a": [
     "Reproduce → read the error → narrow it down",
     "Logs, breakpoints, git bisect",
     "Write a test that catches it"
    ]
   },
   {
    "t": "Testing",
    "k": [
     "test\\w*",
     "unit tests?",
     "tdd",
     "ci/?cd",
     "continuous integration",
     "qa",
     "coverage"
    ],
    "a": [
     "Unit → integration → end-to-end",
     "Test behavior, not implementation",
     "CI runs it on every PR"
    ]
   },
   {
    "t": "Code review / Git",
    "k": [
     "code reviews?",
     "pull requests?",
     "prs?",
     "git",
     "github",
     "merge\\w*",
     "branch\\w*",
     "version control"
    ],
    "a": [
     "Small PRs, clear descriptions",
     "Review for correctness first, style second",
     "Kind, specific comments"
    ]
   },
   {
    "t": "Databases",
    "k": [
     "database\\w*",
     "sql",
     "nosql",
     "postgres\\w*",
     "mysql",
     "mongo\\w*",
     "index(es|ing)?",
     "queries",
     "query"
    ],
    "a": [
     "SQL for relations, NoSQL for flexible/huge scale",
     "Indexes speed reads, slow writes",
     "Transactions: ACID"
    ]
   },
   {
    "t": "Tech stack",
    "k": [
     "tech stack",
     "stack",
     "languages?",
     "frameworks?",
     "python",
     "javascript",
     "typescript",
     "java",
     "react",
     "node",
     "go(lang)?",
     "c\\+\\+",
     "c#",
     "rust"
    ],
    "a": [
     "Your main language + why",
     "Frameworks you've shipped with",
     "Ask: what's their stack?"
    ]
   },
   {
    "t": "Agile",
    "k": [
     "agile",
     "scrum",
     "sprints?",
     "kanban",
     "stand.?ups?",
     "retro\\w*",
     "story points"
    ],
    "a": [
     "Sprints, standups, retros",
     "Break work into small tickets",
     "Ship often, get feedback"
    ]
   }
  ]
 },
 "sales": {
  "name": "Sales",
  "cards": [
   {
    "t": "Sell me this pen",
    "k": [
     "sell me",
     "sell (this|the) pen",
     "pitch (me|this)",
     "role.?play"
    ],
    "a": [
     "Ask questions first: what do you use now?",
     "Find the pain → tie the product to it",
     "Ask for the close"
    ],
    "top": true
   },
   {
    "t": "Quota / numbers",
    "k": [
     "quota",
     "targets?",
     "numbers",
     "attainment",
     "revenue",
     "pipeline",
     "metrics?",
     "kpis?",
     "close rate",
     "conversion"
    ],
    "a": [
     "Your quota + % attained",
     "Rank on the team",
     "Pipeline you built yourself"
    ],
    "top": true
   },
   {
    "t": "Prospecting",
    "k": [
     "prospect\\w*",
     "cold call\\w*",
     "cold email\\w*",
     "outreach",
     "lead gen\\w*",
     "leads",
     "sdr",
     "bdr"
    ],
    "a": [
     "Research → personalized outreach",
     "Calls + email + LinkedIn cadence",
     "Track everything in the CRM"
    ]
   },
   {
    "t": "Objection handling",
    "k": [
     "objections?",
     "pushback",
     "too expensive",
     "not interested",
     "rejection",
     "they say no",
     "hear no"
    ],
    "a": [
     "Listen fully → acknowledge",
     "Ask a question to find the real concern",
     "Answer → check → move forward"
    ]
   },
   {
    "t": "Sales process",
    "k": [
     "sales process",
     "sales cycle",
     "discovery",
     "qualif\\w*",
     "bant",
     "meddic",
     "closing",
     "close (a|the) deal",
     "demo\\w*"
    ],
    "a": [
     "Discovery → demo → proposal → close",
     "Qualify: budget, authority, need, timeline",
     "Always set the next step"
    ]
   },
   {
    "t": "CRM",
    "k": [
     "crm",
     "salesforce",
     "hubspot",
     "pipedrive"
    ],
    "a": [
     "Salesforce / HubSpot",
     "Log every touch, keep stages honest"
    ]
   }
  ]
 },
 "customer-service": {
  "name": "Customer service",
  "cards": [
   {
    "t": "Difficult customer",
    "k": [
     "difficult (customer|client|caller)",
     "angry (customer|client|caller)",
     "complain\\w*",
     "escalat\\w*",
     "de.?escalat\\w*"
    ],
    "a": [
     "Listen, don't interrupt",
     "Acknowledge + apologize for the experience",
     "Fix or give a clear next step + time"
    ],
    "top": true
   },
   {
    "t": "Great service",
    "k": [
     "customer service",
     "great service",
     "good service",
     "customer experience",
     "go above and beyond",
     "above and beyond",
     "exceed\\w* expectations"
    ],
    "a": [
     "Resolve on first contact when you can",
     "Personal, not scripted",
     "Follow up before they have to ask"
    ]
   },
   {
    "t": "Metrics",
    "k": [
     "csat",
     "nps",
     "aht",
     "handle time",
     "first (call|contact) resolution",
     "fcr",
     "metrics?",
     "kpis?",
     "surveys?"
    ],
    "a": [
     "CSAT, NPS, first-call resolution, handle time",
     "Your best numbers"
    ]
   },
   {
    "t": "Multitasking",
    "k": [
     "multitask\\w*",
     "multiple (things|customers|tasks)",
     "high volume",
     "call volume",
     "chat\\w*",
     "phones"
    ],
    "a": [
     "Prioritize by urgency + impact",
     "Notes in the system as you go"
    ]
   },
   {
    "t": "Policy vs customer",
    "k": [
     "policy",
     "policies",
     "rules?",
     "say no",
     "can't help",
     "exception"
    ],
    "a": [
     "Explain the why behind the policy",
     "Offer what you CAN do",
     "Escalate if it needs an exception"
    ]
   }
  ]
 },
 "healthcare": {
  "name": "Healthcare",
  "cards": [
   {
    "t": "HIPAA",
    "k": [
     "hipaa",
     "phi",
     "pii",
     "patient (data|information|info|privacy)",
     "protected health",
     "health information",
     "privacy",
     "private",
     "complian\\w*",
     "confidential\\w*",
     "sensitive (data|information)",
     "regulat\\w*",
     "audit\\w*",
     "breach\\w*",
     "data protection",
     "protect (data|information)",
     "minimum necessary",
     "least privilege",
     "medicare"
    ],
    "g": [
     "hippa",
     "hipa",
     "hip a",
     "hippo",
     "hipaa's",
     "patient information",
     "patient privacy",
     "health privacy"
    ],
    "a": [
     "Protects patient data (PHI)",
     "Minimum necessary access · lock screens",
     "No PHI in email/texts · report fast"
    ],
    "top": true
   },
   {
    "t": "EHR",
    "k": [
     "ehr",
     "e h r",
     "emr",
     "what is (an? )?ehr",
     "electronic health records?",
     "electronic (health|medical)",
     "medical record\\w*",
     "health record\\w*",
     "patient record\\w*",
     "patient chart\\w*",
     "charting",
     "clinical (system|application|app|software)",
     "clinician\\w*",
     "clinical staff",
     "nurse\\w*",
     "nursing",
     "doctor\\w*",
     "physician\\w*",
     "psychiatrist\\w*",
     "provider\\w*",
     "therapist\\w*",
     "medical staff",
     "epic",
     "meditech",
     "cerner",
     "oracle health",
     "athena\\w*",
     "allscripts",
     "netsmart",
     "myavatar",
     "credible",
     "during (a|their) shift",
     "on the floor",
     "unit",
     "patient care",
     "locked out",
     "can't (get in|access)",
     "access the system"
    ],
    "g": [
     "chart",
     "charts",
     "records",
     "clinical",
     "health record",
     "patient system",
     "medical software",
     "e.h.r",
     "ehrs",
     "emrs",
     "electronic records",
     "staff can't (log|get) in"
    ],
    "a": [
     "Electronic Health Record = digital patient chart",
     "Epic, Cerner/Oracle Health, Meditech",
     "Ask: which EHR do you use?"
    ],
    "top": true
   },
   {
    "t": "Patient safety",
    "k": [
     "patient safety",
     "safety",
     "near.?miss\\w*",
     "incident report\\w*",
     "falls?",
     "medication errors?",
     "identifiers?"
    ],
    "a": [
     "Patient first, always",
     "Speak up + report near-misses",
     "Two identifiers before anything"
    ],
    "top": true
   },
   {
    "t": "Difficult patient / family",
    "k": [
     "difficult (patient|family)",
     "upset (patient|family)",
     "angry (patient|family)",
     "family members?",
     "aggressive",
     "non.?compliant"
    ],
    "a": [
     "Stay calm, listen, acknowledge fear",
     "Explain clearly, set expectations",
     "Involve the charge nurse / supervisor if needed"
    ]
   },
   {
    "t": "Why healthcare",
    "k": [
     "why healthcare",
     "why health ?care",
     "why (a|the) hospital",
     "why nursing",
     "why medicine",
     "patients?",
     "mission"
    ],
    "a": [
     "What draws you to patient care",
     "A moment that made it real for you",
     "Fit with their mission"
    ]
   }
  ]
 }
};
