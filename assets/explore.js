// Research explorer on the home page.
// Each entry is keyed by its selected foci, sorted and joined with "+".
// To edit the text for a combination, change it here; nothing else needs touching.

const WORKS = {
  explanationism: { title: "Foundational Explanationism", venue: "Ergo, forthcoming", url: "https://philarchive.org/rec/RYOFEW" },
  temporal: { title: "Temporal Ontology and Non-Markovian Quantum Dynamics", venue: "Philosophies, 2026", url: "https://doi.org/10.3390/philosophies11020045" },
  kriterion: { title: "What are the Contexts of Complementarities?", venue: "Kriterion, forthcoming", url: "https://doi.org/10.1515/krt-2025-0028" },
  stance: { title: "Towards an Account of Complementarities and Context-Dependence", venue: "Stance, 2025", url: "https://doi.org/10.33043/YMCGR3hB" },
  eos: { title: "Performance of the Eos detector with water", venue: "Physical Review D, 2026 (Eos Collaboration)", url: "https://doi.org/10.1103/7qkt-mnqz" },
  eosDetector: { title: "The Eos detector: a demonstrator of hybrid optical detection technology", venue: "arXiv preprint, 2026 (Eos Collaboration)", url: "https://doi.org/10.48550/arXiv.2607.20285" },
  pmt: { title: "Characterization of the Hamamatsu 8-inch R14688-100 PMT", venue: "Journal of Instrumentation, 2024", url: "https://doi.org/10.1088/1748-0221/19/02/P02032" },
  grace: { title: "GRACE: an Agentic AI for Particle Physics Experiment Design and Simulation", venue: "arXiv preprint, 2026 (with J. Hill)", url: "https://doi.org/10.48550/arXiv.2602.15039" },
  uncertainty: { title: "Concerning Multiple Context-Dependence, Uncertainty, and Understanding", venue: "PhilSci-Archive, 2024", url: "https://philsci-archive.pitt.edu/id/eprint/23535" },
  idealizations: { title: "The Role of Idealizations in Context-Dependent Mapping", venue: "PhilSci-Archive, 2024", url: "https://philsci-archive.pitt.edu/23570/" },
  functionalism: { title: "On Functionalism's Context-Dependent Explanations of Mental States", venue: "PsyArXiv, 2024", url: "https://doi.org/10.31234/osf.io/p7a4w" },
  regress: { title: "AI-Regress", venue: "PhilSci-Archive", url: "https://philsci-archive.pitt.edu/30629/" },
  thesis: { title: "Quantum experimentation, field theory computation, and the hard and soft modes of the black hole final state", venue: "Physics honors thesis, 2023", url: "https://doi.org/10.13140/RG.2.2.28112.52483" },
};

const AREAS = {
  mathphys: ["Formal theory", "/research/mathphys"],
  theory: ["QCD theory", "/research/theory"],
  experiment: ["Dark matter & neutrino experiment", "/research/experiment"],
  philosophy: ["Explanation & understanding", "/research/philosophy"],
  foundations: ["Philosophy of quantum mechanics", "/research/foundations"],
  cogsci: ["Philosophy of mind & cognition", "/research/cogsci"],
  ai: ["Artificial intelligence", "/research/ai"],
};

const ENTRIES = {
  "phys": {
    title: "Physics",
    body: [
      "I'm interested in building models of what is most fundamental. That work spans theory and experiment, from the foundations of quantum theory to detector hardware. On the formal side: algebraic quantum theory, emergent spacetime, and quantum gravity. In nuclear theory: quantum chromodynamics in the nonperturbative regime, currently a gauge-invariant renormalization scheme for the gravitational form factors of the pion. In experiment: PMT characterization, construction, and analysis for the Eos detector, with related work on Theia and ANNIE.",
    ],
    areas: ["mathphys", "theory", "experiment"],
    works: ["eos", "eosDetector", "pmt", "thesis"],
  },
  "phil": {
    title: "Philosophy",
    body: [
      "I have proposed Foundational Explanationism: explanatory success licenses ontological commitment only when the explanation targets pre-emergent, metaphysically fundamental structures. More broadly I work in philosophy of science on explanation and understanding, including the context-dependent mapping framework—an extension of Strevens' kairetic account—and current work on incomplete laws and the role of constraints in explanation.",
    ],
    areas: ["philosophy", "foundations"],
    works: ["explanationism", "kriterion", "stance", "uncertainty", "idealizations"],
  },
  "mind": {
    title: "Mind & Machines",
    body: [
      "Cognitive science and artificial intelligence: semantics, epistemic regress problems, and what it would take for an AI system to make a scientific discovery. This includes building GRACE, an agentic AI for particle physics experiment design, and critiquing common conceptions of self-healing in agentic systems.",
    ],
    areas: ["cogsci", "ai"],
    works: ["grace", "regress", "functionalism"],
  },
  "phil+phys": {
    title: "Foundations of Physics",
    body: [
      "Foundational Explanationism carries over directly. If explanatory success licenses ontological commitment only at the fundamental level, then knowing what we are entitled to say exists means building models of that level: emergent spacetime, algebraic quantum theory, quantum gravity. The physics is motivated by the philosophical view.",
      "The philosophy is equally motivated by the physics. Quantum gravity, effective field theory, and gauge symmetry are the cases where the view is tested, and quantum theory's implications for time, emergence, and ontology raise the questions it has to answer.",
    ],
    areas: ["foundations", "mathphys", "philosophy"],
    works: ["explanationism", "temporal", "kriterion", "thesis"],
  },
  "mind+phys": {
    title: "Autonomous Experimental Science",
    body: [
      "Can an AI system take part in physics itself, not just automate its workflows? GRACE treats detector design as a constrained search under physical law, using first-principles Monte Carlo simulation as an epistemic oracle rather than predefined optimization heuristics. Earlier, at ANNIE, I used machine learning to classify low-energy muon production.",
    ],
    areas: ["ai", "experiment"],
    works: ["grace", "eos"],
  },
  "mind+phil": {
    title: "Explanation in Minds and Machines",
    body: [
      "The same questions about explanation, asked of minds and of AI systems: how functionalism explains mental states in a context-dependent way, how regress problems arise for machine reasoning, and what standards a result must meet before it counts as established, whether a person or a machine produced it.",
    ],
    areas: ["cogsci", "philosophy"],
    works: ["functionalism", "regress", "explanationism"],
  },
  "mind+phil+phys": {
    title: "Toward a Complete Understanding of Nature",
    body: [
      "The most important problems for a complete understanding of nature come from harnessing three aspects at once: physics, philosophy, and AI. Experiment is a large part of it, and artificial intelligence, especially in experimental physics, is increasingly central to reaching these goals. Philosophy offers guiding principles for the issues this raises, such as epistemic regress and creativity.",
      "The goal is the best scientific explanation at the foundational level, the level to which we can assign ontology. The responsibility falls on the philosopher to guide the process of inquiry and science, and to offer theories of ontology and the metaphysics thereof.",
    ],
    areas: ["ai", "philosophy", "mathphys"],
    works: ["explanationism", "grace", "regress", "temporal"],
  },
};

// Base centers of the three circles in the SVG's coordinate space.
const CENTERS = { phys: [110, 110], phil: [240, 110], mind: [175, 223] };
// How far each selected circle moves toward the others (0 = stays put, 1 = fully merged).
// Kept modest so the centered labels don't collide when circles combine.
const PULL = 0.2;

const selected = new Set();
const reading = document.getElementById("reading");
const venn = document.querySelector(".venn");
const foci = [...document.querySelectorAll(".venn .focus")];
const clearBtn = document.getElementById("venn-clear");

// Overlay for the "click" cues and the arrows from selected circles to the rest.
const hints = document.createElementNS("http://www.w3.org/2000/svg", "g");
hints.setAttribute("class", "hints");
hints.setAttribute("aria-hidden", "true");
venn.appendChild(hints);

const r1 = n => Math.round(n * 10) / 10;
const cue = (x, y, text) => `<text class="cue" x="${r1(x)}" y="${r1(y)}">${text}</text>`;

// A gently curved arrow from point a toward point b, with an open arrowhead at b.
function arrow(a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy);
  const c = [(a[0] + b[0]) / 2 + (dy / len) * 14, (a[1] + b[1]) / 2 - (dx / len) * 14];
  const tx = b[0] - c[0], ty = b[1] - c[1], tl = Math.hypot(tx, ty);
  const ux = tx / tl, uy = ty / tl, cos = Math.cos(0.5), sin = Math.sin(0.5), h = 9;
  const h1 = [b[0] - h * (ux * cos - uy * sin), b[1] - h * (uy * cos + ux * sin)];
  const h2 = [b[0] - h * (ux * cos + uy * sin), b[1] - h * (uy * cos - ux * sin)];
  const p = q => `${r1(q[0])} ${r1(q[1])}`;
  return `<path class="cue-arrow" d="M${p(a)} Q${p(c)} ${p(b)} M${p(h1)} L${p(b)} L${p(h2)}"/>`;
}

// Approximate half-widths of each circle's label, in SVG units, for keeping arrows off the text.
const LABEL_HALF_WIDTH = { phys: 28, phil: 40, mind: 60 };

// Distance from a label's center along (nx, ny) to the edge of its text box.
function exitDist(nx, ny, halfWidth, up, down) {
  const tx = nx ? halfWidth / Math.abs(nx) : Infinity;
  const ty = ny > 0 ? down / ny : ny < 0 ? up / -ny : Infinity;
  return Math.min(tx, ty);
}

function renderHints(keys, pos) {
  let s = "";
  if (!keys.length) {
    for (const k in pos) s += cue(pos[k][0], pos[k][1] + 20, "click");
  } else if (keys.length === 1) {
    // Arrows from the selected circle to each of the others.
    const [sx, sy] = pos[keys[0]];
    for (const u in pos) {
      if (u === keys[0]) continue;
      const [ux, uy] = pos[u];
      const len = Math.hypot(ux - sx, uy - sy), nx = (ux - sx) / len, ny = (uy - sy) / len;
      // Start just outside the selected label; stop short of the target's label and its cue line.
      const start = exitDist(nx, ny, LABEL_HALF_WIDTH[keys[0]], 10, 10) + 8;
      const end = exitDist(-nx, -ny, Math.max(LABEL_HALF_WIDTH[u], 42), 10, 28) + 8;
      s += arrow([sx + nx * start, sy + ny * start], [ux - nx * end, uy - ny * end]);
      s += cue(ux, uy + 20, "click to combine");
    }
  } else if (keys.length === 2) {
    // The overlap is too tight for an arrow; the remaining circle pulses instead (see render).
    for (const u in pos) if (!selected.has(u)) s += cue(pos[u][0], pos[u][1] + 20, "click to combine");
  }
  hints.innerHTML = s;
}

function render() {
  const keys = [...selected].sort();

  // Pull selected circles toward their shared centroid so they visibly combine.
  const cx = keys.reduce((s, k) => s + CENTERS[k][0], 0) / (keys.length || 1);
  const cy = keys.reduce((s, k) => s + CENTERS[k][1], 0) / (keys.length || 1);
  const pos = {};
  for (const g of foci) {
    const k = g.dataset.focus;
    const on = selected.has(k);
    g.setAttribute("aria-pressed", on);
    g.classList.toggle("beckon", keys.length === 2 && !on);
    let dx = 0, dy = 0;
    if (on && keys.length > 1) {
      dx = (cx - CENTERS[k][0]) * PULL;
      dy = (cy - CENTERS[k][1]) * PULL;
    }
    g.style.transform = dx || dy ? `translate(${dx}px, ${dy}px)` : "";
    pos[k] = [CENTERS[k][0] + dx, CENTERS[k][1] + dy];
  }
  renderHints(keys, pos);
  clearBtn.hidden = keys.length === 0;

  if (!keys.length) {
    // The curved arrow points left to the circles on wide screens; the short one points up when stacked.
    reading.innerHTML = `
      <div class="hint">
        <svg class="arrow arrow-up" viewBox="0 0 24 44" aria-hidden="true"><path d="M12 42 V4 M4 12 L12 4 L20 12"/></svg>
        <p class="placeholder">Click a circle to read about that area. Then click a second, or all three, to see where they meet.</p>
        <svg class="arrow arrow-curve" viewBox="0 0 340 150" aria-hidden="true"><path d="M338 4 C 330 110, 160 140, 16 110 M26.4 119.3 L16 110 L29.3 105.6"/></svg>
      </div>`;
    return;
  }

  const e = ENTRIES[keys.join("+")];
  const dots = keys.map(k => `<i class="${k}"></i>`).join("");
  const body = e.body.map(p => `<p>${p}</p>`).join("");
  const areas = e.areas.map(a => `<a href="${AREAS[a][1]}">${AREAS[a][0]}</a>`).join("");
  const works = e.works.map(w => {
    const x = WORKS[w];
    return `<li><a href="${x.url}">${x.title}</a> <span class="venue">— ${x.venue}</span></li>`;
  }).join("");

  reading.innerHTML = `
    <article>
      <h2><span class="dots" aria-hidden="true">${dots}</span>${e.title}</h2>
      ${body}
      <p class="eyebrow" style="margin-top:22px">Selected work</p>
      <ul class="works">${works}</ul>
      <div class="areas">${areas}</div>
    </article>`;
}

function toggle(g) {
  // Stop the idle pulse once the visitor has found the circles.
  venn.classList.remove("idle");
  const k = g.dataset.focus;
  selected.has(k) ? selected.delete(k) : selected.add(k);
  render();
}

for (const g of foci) {
  g.addEventListener("click", () => toggle(g));
  g.addEventListener("keydown", ev => {
    if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); toggle(g); }
  });
}
clearBtn.addEventListener("click", () => { selected.clear(); render(); });

// A link like /research/#phil+phys opens with those circles already selected.
for (const k of decodeURIComponent(location.hash.slice(1)).split("+")) {
  if (k in CENTERS) selected.add(k);
}
if (selected.size) venn.classList.remove("idle");

render();
