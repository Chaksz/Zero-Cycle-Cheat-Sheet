let currentMode = 'top';
let setup = topSetup;  // Default dataset
let selected = setup[0];
let frontY = null;
let frontLowY = null;
let backY = null;

function setMode(mode) {
  currentMode = mode;
  
  // Update dataset
  if (mode === 'top') {
    setup = topSetup;
  } else {
    setup = sideSetup;
  }

  document.getElementById('btn-mode-top').className = 
    `btn btn-setup ${mode === 'top' ? 'btn-setup-active' : ''}`;
  document.getElementById('btn-mode-side').className = 
    `btn btn-setup ${mode === 'side' ? 'btn-setup-active' : ''}`;

  const currentName = selected.name;
  const found = setup.find(t => t.name === currentName);
  
  if (found) {
    selected = found;
  } else {
    selected = setup[0];
  }

  frontY = null;
  frontLowY = null;
  backY = null;

  renderButtons();
  renderDetails();
}

function renderCoord(c) {
  const d = c.t?.includes("d");
  const a = c.t?.includes("a");
  const b = c.t?.includes("b");
  const e = c.t?.includes("e") && !b;
  const p = c.t?.includes("p") && !b;
  
  let cls = "coord coord-default";
  if (b) cls = "coord coord-best";
  else if (e) cls = "coord coord-easy";
  else if (p) cls = "coord coord-popular";
  
  return `<span class="${cls}">
    <span class="coord-xz">${c.xz}</span>
    ${d ? `<span class="coord-double">(Double)</span>` : ""}
    ${a ? `<span>💥</span>` : ""}
  </span>`;
}

function renderButtons() {
  const cats = { small: "small-towers", tall: "tall-towers", special: "special-towers" };
  const colors = { small: "btn-small", tall: "btn-tall", special: "btn-special" };
  
  Object.keys(cats).forEach(cat => {
    document.getElementById(cats[cat]).innerHTML = setup
      .filter(t => t.category === cat)
      .map(t => {
        const isSelected = selected.name === t.name;
        return `<button onclick="selectTower('${t.name}')" class="btn ${isSelected ? colors[cat] : 'btn-default'}">
          ${t.name}${t.h ? ` <span>(${t.h})</span>` : ""}
        </button>`;
      }).join("");
  });
}

function renderSection(data, selectedY, side, label, labelClass) {
  if (!data) {
    return `
      <div class="box">
        <div class="box-label ${labelClass}">${label}</div>
        <div class="no-back">No ${label.toLowerCase()} setup</div>
      </div>
    `;
  }

  const heights = Object.keys(data);
  if (selectedY === null || !heights.includes(String(selectedY))) {
    selectedY = heights[0];
    if (side === 'front') frontY = selectedY;
    else if (side === 'frontLow') frontLowY = selectedY;
    else backY = selectedY;
  }

  const coords = data[selectedY] || [];

  return `
    <div class="box">
      <div class="box-label ${labelClass}">${label}</div>
      <div class="y-tabs">
        ${heights.map(y => `
          <button onclick="selectY('${side}', '${y}')" class="y-tab ${String(selectedY) === String(y) ? 'y-tab-active' : ''}">
            Y${y}
          </button>
        `).join("")}
      </div>
      <div class="coords-list">
        ${coords.map(c => renderCoord(c)).join("")}
      </div>
    </div>
  `;
}

function renderDetails() {
  document.getElementById("tower-header").innerHTML = `
    <div class="header-left">
      <span class="tower-name">${selected.name}</span>
      ${selected.altName ? `<span class="tower-alt">(${selected.altName})</span>` : ""}
      ${selected.h ? `<span class="tower-height">Height: ${selected.h}</span>` : ""}
    </div>
    <div style="font-size: 10px; color: #6b7280; text-transform: uppercase; font-weight: bold;">
      ${currentMode.toUpperCase()} SETUP
    </div>
  `;
  //build section
  let html = '<div class="sections">';
  //front
  html += renderSection(selected.front, frontY, 'front', 'Front', 'front');
  //front low
  if (selected.frontLow) {
    html += renderSection(selected.frontLow, frontLowY, 'frontLow', 'Front Low Offset', 'front');
  }
  //Back
  html += renderSection(selected.back, backY, 'back', 'Back', 'back');
  html += '</div>';

  document.getElementById("tower-details").innerHTML = html;
}

function selectTower(name) {
  selected = setup.find(t => t.name === name);
  frontY = null;
  frontLowY = null;
  backY = null;
  renderButtons();
  renderDetails();
}

function selectY(side, y) {
  if (side === 'front') frontY = y;
  else if (side === 'frontLow') frontLowY = y;
  else backY = y;
  renderDetails();
}

renderButtons();
renderDetails();