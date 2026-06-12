// ---------- DATA ----------
// Compiled from: cal (1).ics (Sefa), vsae.nl/nl/studenten/agenda, fsa.nl/events/,
// and ma-amsterdam.nl/events/. Sefa URLs come directly from the iCal export, so
// each card links to the original sefa.nl event page. MAA events are placeholders
// for the committees' recurring events because no dated events were published at
// fetch time — their cards link to the MAA events listing.
const ASSOC = {
  sefa: { name: "Sefa", color: "#F39200", shadow: "rgba(243,146,0,.32)" },
  vsae: { name: "VSAE", color: "#4DB7E8", shadow: "rgba(77,183,232,.32)" },
  fsa:  { name: "FSA",  color: "#0E2A57", shadow: "rgba(14,42,87,.32)" },
  maa:  { name: "MAA",  color: "#D7263D", shadow: "rgba(215,38,61,.32)" },
};

const EVENTS = [
  // ---------- SEFA ----------
  {
    assoc: "sefa",
    title: "June Open Borrel",
    start: "2026-06-10T19:30",
    end:   "2026-06-10T23:59",
    location: "Amsterdam city centre",
    type: "social",
    access: "open",
    description: "Sefa's monthly open borrel. Catch up with fellow FEB students over drinks in the city. Open to everyone — no registration required, just turn up.",
    url: "https://sefa.nl/product/events/june-monthly-drink-2026/",
  },
  {
    assoc: "sefa",
    title: "Walibi Theme Park",
    start: "2026-06-10T09:30",
    end:   "2026-06-10T17:00",
    location: "Walibi Holland",
    type: "social",
    access: "application",
    description: "Day trip to Walibi Holland. Coaches leave from Amsterdam in the morning and return in the evening. Limited spots — tickets bought in advance.",
    url: "https://sefa.nl/product/events/walibi-theme-park/",
  },
  {
    assoc: "sefa",
    title: "Golf Driving Range",
    start: "2026-06-11T16:00",
    end:   "2026-06-11T18:00",
    location: "Amsterdam Driving Range",
    type: "social",
    access: "application",
    description: "Casual driving-range session — beginners welcome. Equipment provided. Sign up beforehand to reserve a bay.",
    url: "https://sefa.nl/product/events/driving-range/",
  },
  {
    assoc: "sefa",
    title: "Old Board Dinner 2026",
    start: "2026-06-12T19:00",
    end:   "2026-06-12T23:59",
    location: "Amsterdam",
    type: "social",
    access: "application",
    description: "Annual dinner for former Sefa board members and the current board. Invite-only — closed to general members.",
    url: "https://sefa.nl/product/events/old-board-dinner-2026/",
  },
  {
    assoc: "sefa",
    title: "SefaxSTËLZ Boat",
    start: "2026-06-16T18:00",
    end:   "2026-06-16T22:00",
    location: "Amsterdam canals",
    type: "social",
    access: "application",
    description: "A summer boat cruise through Amsterdam's canals together with STËLZ. Drinks on board. Ticketed event with limited capacity.",
    url: "https://sefa.nl/product/events/sefaxstelz-boat/",
  },
  {
    assoc: "sefa",
    title: "(Pre-)Masters Open Borrel",
    start: "2026-06-17T17:00",
    end:   "2026-06-17T22:00",
    location: "Amsterdam",
    type: "social",
    access: "open",
    description: "End-of-month drinks for (Pre-)Masters students. Open to all — meet other masters across the FEB before exam season wraps.",
    url: "https://sefa.nl/product/events/masters-june-drinks-2026/",
  },
  {
    assoc: "sefa",
    title: "End of the Year Dinner",
    start: "2026-06-26T18:30",
    end:   "2026-06-26T23:00",
    location: "Buiksloterweg 3-5, Amsterdam",
    type: "social",
    access: "application",
    description: "Sefa's traditional end-of-year dinner. A relaxed evening to close out the academic year together. Pre-registration required.",
    url: "https://sefa.nl/product/events/end-of-the-year-dinner-2026/",
  },
  {
    assoc: "sefa",
    title: "Sefa Introduction Camp 2026",
    start: "2026-08-18T00:00",
    end:   "2026-08-20T23:59",
    location: "Netherlands (TBA)",
    type: "social",
    access: "application",
    description: "Three days of games, parties, and meeting your future classmates before the academic year kicks off. The big intro event for new FEB students. Presale tickets — book early, they sell out fast.",
    url: "https://sefa.nl/product/events/presale-sefa-introduction-camp-2026/",
  },

  // ---------- VSAE ----------
  {
    assoc: "vsae",
    title: "BoCo Beerpong Tournament",
    start: "2026-06-10T20:00",
    end:   "2026-06-10T21:00",
    location: "Amsterdam",
    type: "social",
    access: "open",
    description: "The BoCo's annual beerpong tournament. Form a team of two and battle it out. Open to all VSAE members.",
    url: "https://vsae.nl/nl/studenten/agenda/event/838/boco-beerpong-tournament",
  },
  {
    assoc: "vsae",
    title: "June Borrel",
    start: "2026-06-10T21:00",
    end:   "2026-06-10T23:59",
    location: "Amsterdam",
    type: "social",
    access: "open",
    description: "VSAE's monthly drinks night. Catch up with fellow econometricians at the regular borrel spot.",
    url: "https://vsae.nl/nl/studenten/agenda/event/802/june-borrel",
  },
  {
    assoc: "vsae",
    title: "Speaker event x AQS x AIC",
    start: "2026-06-11T18:00",
    end:   "2026-06-11T20:00",
    location: "REC, Amsterdam",
    type: "professional",
    access: "open",
    description: "Career-focused speaker event organised jointly with the AQS and AIC committees. Insights from professionals in quantitative analytics. Free for VSAE members.",
    url: "https://vsae.nl/nl/studenten/agenda/event/842/speaker-event-x-aqs-x-aic",
  },
  {
    assoc: "vsae",
    title: "Year Closing Trip",
    start: "2026-06-12T00:00",
    end:   "2026-06-14T23:59",
    location: "Europe (TBA)",
    type: "trip",
    access: "application",
    description: "Three-day trip somewhere abroad to close the academic year. Travel, accommodation, and activities included. Limited spots — apply in advance.",
    url: "https://vsae.nl/nl/studenten/agenda/event/836/year-closing-trip",
  },
  {
    assoc: "vsae",
    title: "Game Night",
    start: "2026-06-15T19:00",
    end:   "2026-06-15T21:00",
    location: "VSAE clubroom",
    type: "social",
    access: "open",
    description: "A chill game night at the VSAE clubroom. Board games, card games, video games — bring your favourite or play one of ours. Snacks provided.",
    url: "https://vsae.nl/nl/studenten/agenda/event/837/game-night",
  },
  {
    assoc: "vsae",
    title: "Analytics Academy — Kick-Out Spring",
    start: "2026-06-16T18:00",
    end:   "2026-06-16T20:00",
    location: "Amsterdam",
    type: "professional",
    access: "application",
    description: "Final session of the Analytics Academy — a selective programme connecting econometrics students with data and analytics employers. For participants of the spring cohort.",
    url: "https://vsae.nl/nl/studenten/agenda/event/845/analytics-academy-kick-out-spring",
  },
  {
    assoc: "vsae",
    title: "Alumni Borrel 2026",
    start: "2026-06-19T17:30",
    end:   "2026-06-19T20:00",
    location: "Amsterdam",
    type: "social",
    access: "open",
    description: "An evening to connect with VSAE alumni now working across analytics, finance, and consulting. Great for networking and informal career chats.",
    url: "https://vsae.nl/nl/studenten/agenda/event/825/alumni-borrel-2026",
  },
  {
    assoc: "vsae",
    title: "Study Session",
    start: "2026-06-22T09:00",
    end:   "2026-06-22T17:00",
    location: "REC, Amsterdam",
    type: "professional",
    access: "open",
    description: "A full-day group study session ahead of the exam period. Quiet rooms, coffee, and fellow econometricians grinding alongside you.",
    url: "https://vsae.nl/nl/studenten/agenda/event/841/study-session",
  },
  {
    assoc: "vsae",
    title: "June Borrel (Closing)",
    start: "2026-06-30T21:00",
    end:   "2026-06-30T23:59",
    location: "Amsterdam",
    type: "social",
    access: "open",
    description: "Last borrel of the academic year — VSAE's traditional send-off into summer. Open to all members.",
    url: "https://vsae.nl/nl/studenten/agenda/event/843/june-borrel",
  },
  {
    assoc: "vsae",
    title: "Introduction Camp 2026",
    start: "2026-08-19T00:00",
    end:   "2026-08-21T23:59",
    location: "Netherlands (TBA)",
    type: "trip",
    access: "application",
    description: "Three-day camp to welcome incoming first-year econometrics students. Activities, group games, evening parties. Registration required.",
    url: "https://vsae.nl/nl/studenten/agenda/event/789/introduction-camp-2026",
  },

  // ---------- FSA ----------
  {
    assoc: "fsa",
    title: "Da Vinci — Battle Royale",
    start: "2026-06-16T17:00",
    end:   "2026-06-16T22:00",
    location: "Amsterdam",
    type: "professional",
    access: "application",
    description: "A coding and quantitative challenge hosted with Da Vinci Group. Tournament-style battle for finance and tech students. Application deadline: 11 June 2026.",
    url: "https://fsa.nl/events/davinci-battleroyale/",
  },
  {
    assoc: "fsa",
    title: "London Banking Tour 2025-2026",
    start: "2026-09-04T00:00",
    end:   "2026-09-19T23:59",
    location: "London, UK",
    type: "trip",
    access: "application",
    description: "FSA's flagship international study trip — two weeks visiting investment banks, hedge funds, and asset managers in London. Application-only programme.",
    url: "https://fsa.nl/events/london-banking-tour-2025-2026/",
  },
  {
    assoc: "fsa",
    title: "International Banking Cycle 2025-2026",
    start: "2026-09-05T00:00",
    end:   "2026-10-02T23:59",
    location: "Amsterdam + Europe",
    type: "professional",
    access: "application",
    description: "A month-long programme of company visits, workshops, and networking with leading international banks. Selective entry — apply via the FSA portal.",
    url: "https://fsa.nl/events/ibc-2025-2026/",
  },
  {
    assoc: "fsa",
    title: "FSA Committee Applications 2026-2027",
    start: "2026-09-06T00:00",
    end:   "2027-01-01T23:59",
    location: "Online",
    type: "professional",
    access: "application",
    description: "Applications open for committee roles on next year's FSA. Organise events, work with sponsors, and shape FSA's calendar. Multiple positions available.",
    url: "https://fsa.nl/events/application-fsa-committee-2026-2027/",
  },

  // ---------- MAA (placeholders for recurring committee events) ----------
  {
    assoc: "maa",
    title: "Amsterdam Commercial Night",
    start: "2026-10-15T18:00",
    end:   "2026-10-15T22:00",
    location: "Amsterdam",
    type: "professional",
    access: "open",
    description: "MAA's annual Amsterdam Commercial Night — a celebration of advertising and commercial creativity featuring panels, awards, and a networking reception. Open to all FEB students. Date placeholder — confirm on ma-amsterdam.nl.",
    url: "https://ma-amsterdam.nl/events/",
  },
  {
    assoc: "maa",
    title: "Speeddate Recruitment Event",
    start: "2026-10-22T16:00",
    end:   "2026-10-22T20:00",
    location: "REC, Amsterdam",
    type: "professional",
    access: "application",
    description: "Short, rapid-fire interviews with top marketing and consulting employers. Bring your CV; spots are limited and assigned after application. Date placeholder — confirm on ma-amsterdam.nl.",
    url: "https://ma-amsterdam.nl/events/",
  },
  {
    assoc: "maa",
    title: "Career Development Days",
    start: "2026-11-12T09:30",
    end:   "2026-11-12T17:00",
    location: "Amsterdam",
    type: "professional",
    access: "application",
    description: "A two-day intensive career programme — workshops, panels, and company visits to leading marketing employers. Selection required. Date placeholder — confirm on ma-amsterdam.nl.",
    url: "https://ma-amsterdam.nl/events/",
  },
];

// ---------- STATE ----------
const filters = {
  association: "all",
  type: "all",
  access: "all",
};

// ---------- HELPERS ----------
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const WEEKDAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function parseLocal(s) {
  // "2026-06-10T19:30" → Date in local tz
  return new Date(s);
}

function fmtDay(d) { return String(d.getDate()).padStart(2, "0"); }
function fmtMon(d) { return MONTHS[d.getMonth()]; }

function fmtTime(d) {
  const h = d.getHours(); const m = d.getMinutes();
  if (h === 0 && m === 0) return "All day";
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

// Date row: "Wed 10 Jun" for single-day, "12 Jun – 14 Jun" for ranges
// (years appended when the range crosses a year boundary).
function fmtDateLine(start, end) {
  const sameDay = start.toDateString() === end.toDateString();
  if (sameDay) {
    return `${WEEKDAYS[start.getDay()]} ${start.getDate()} ${fmtMon(start)}`;
  }
  if (start.getFullYear() !== end.getFullYear()) {
    return `${start.getDate()} ${fmtMon(start)} ${start.getFullYear()} – ${end.getDate()} ${fmtMon(end)} ${end.getFullYear()}`;
  }
  return `${start.getDate()} ${fmtMon(start)} – ${end.getDate()} ${fmtMon(end)}`;
}

// Time row: "19:30 – 23:59", "All day", or just the start time
function fmtTimeLine(start, end) {
  const st = fmtTime(start);
  if (st === "All day") return st;
  const sameDay = start.toDateString() === end.toDateString();
  const et = fmtTime(end);
  if (sameDay && et !== "All day") return `${st} – ${et}`;
  return st;
}

const ICONS = {
  cal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
};

const TYPE_LABEL = {
  social: "Social",
  professional: "Professional",
  trip: "Intl. Trip",
};
const ACCESS_LABEL = {
  open: "Open to all",
  application: "Application",
};

// ---------- RENDER ----------
const grid = document.getElementById("event-grid");
const emptyState = document.getElementById("empty-state");
const resultsCount = document.getElementById("results-count");

function renderEvents() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const visible = EVENTS
    .map(e => ({ ...e, _start: parseLocal(e.start), _end: parseLocal(e.end) }))
    .filter(e => e._end >= now) // upcoming or in-progress
    .filter(e => filters.association === "all" || e.assoc === filters.association)
    .filter(e => filters.type === "all" || e.type === filters.type)
    .filter(e => filters.access === "all" || e.access === filters.access)
    .sort((a, b) => a._start - b._start);

  resultsCount.textContent = visible.length;
  grid.innerHTML = "";

  if (visible.length === 0) {
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;

  for (const e of visible) {
    grid.appendChild(buildCard(e));
  }
}

function buildCard(e) {
  const assoc = ASSOC[e.assoc];
  const a = document.createElement("a");
  a.className = "event-card";
  a.href = e.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", `${e.title} — ${assoc.name} event, opens on ${assoc.name}'s website`);
  a.style.setProperty("--card-color", assoc.color);
  a.style.setProperty("--card-shadow", assoc.shadow);

  a.innerHTML = `
    <div class="event-body">
      <div class="event-head">
        <span class="head-assoc">${assoc.name}</span>
        <div class="head-date">
          <span class="d-day">${fmtDay(e._start)}</span>
          <span class="d-mon">${fmtMon(e._start)}</span>
        </div>
      </div>
      <h3 class="event-title">${e.title}</h3>
      <div class="event-meta">
        <div class="row">${ICONS.cal}<span>${fmtDateLine(e._start, e._end)}</span></div>
        <div class="row">${ICONS.clock}<span>${fmtTimeLine(e._start, e._end)}</span></div>
        <div class="row">${ICONS.pin}<span>${e.location}</span></div>
      </div>
      <p class="event-desc">${e.description}</p>
      <div class="event-badges">
        <span class="badge badge-type-${e.type}">${TYPE_LABEL[e.type]}</span>
        <span class="badge badge-access-${e.access}">${ACCESS_LABEL[e.access]}</span>
      </div>
    </div>
  `;
  return a;
}

// ---------- FILTER WIRING ----------
document.querySelectorAll(".chips").forEach(group => {
  const groupKey = group.dataset.filterGroup;
  group.addEventListener("click", (ev) => {
    const chip = ev.target.closest(".chip");
    if (!chip) return;
    group.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    filters[groupKey] = chip.dataset.filter;
    renderEvents();
  });
});

// ---------- INIT ----------
renderEvents();
