let selected = towers[0];
let frontY = null;
let backY = null;

function getAltsForY(y, normalY) {
  // Get alternatives that match this Y height
  return selected.alts?.filter(alt => {
    if (alt.y) {
      // Has explicit Y - check if it matches
      return alt.y === String(y) || alt.y === "-1" || alt.y === "+2";
    } else {
      // No explicit Y - uses normalY
      return normalY && y === normalY;
    }
  }) || [];
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
    ${c.y ? `<span class="coord-y">${c.y}</span>` : ""}
    <span class="coord-xz">${c.xz}</span>
    ${d ? `<span class="coord-double">(Double)</span>` : ""}
    ${a ? `<span>💥</span>` : ""}
  </span>`;
}

function renderButtons() {
  const cats = { small: "small-towers", tall: "tall-towers", special: "special-towers" };
  const colors = { small: "btn-small", tall: "btn-tall", special: "btn-special" };
  
  Object.keys(cats).forEach(cat => {
    document.getElementById(cats[cat]).innerHTML = towers
      .filter(t => t.category === cat)
      .map(t => {
        const isSelected = selected.name === t.name;
        return `<button onclick="selectTower('${t.name}')" class="btn ${isSelected ? colors[cat] : 'btn-default'}">
          ${t.name}${t.h ? ` <span>(${t.h})</span>` : ""}
        </button>`;
      }).join("");
  });
}

function renderYTabs(heights, selectedY, side) {
  return `<div class="y-tabs">
    ${heights.map(y => `
      <button onclick="selectY('${side}', ${y})" class="y-tab ${selectedY === y ? 'y-tab-active' : ''}">
        Y${y}
      </button>
    `).join("")}
  </div>`;
}

function renderAltsForY(y, normalY) {
  const alts = getAltsForY(y, normalY);
  if (alts.length === 0) return "";
  
  return `<div class="y-alts">
    <div class="y-alts-label">Alt coords:</div>
    <div class="y-alts-list">${alts.map(c => renderCoord(c)).join("")}</div>
  </div>`;
}

function renderDetails() {
  // Header
  document.getElementById("tower-header").innerHTML = `
    <span class="tower-name">${selected.name}</span>
    ${selected.altName ? `<span class="tower-alt">(${selected.altName})</span>` : ""}
    ${selected.h ? `<span class="tower-height">Height: ${selected.h}</span>` : ""}
  `;
  
  document.getElementById("tower-normaly").innerHTML = selected.normalY 
    ? `<span class="normal-y">Normal Y: <span>${selected.normalY}</span></span>` 
    : "";

  // Set default Y selections if not set
  if (frontY === null || !selected.front.y.includes(frontY)) {
    frontY = selected.front.y[0];
  }
  if (selected.back && (backY === null || !selected.back.y.includes(backY))) {
    backY = selected.back.y[0];
  }

  // Front section
  let frontHtml = `
    <div class="box">
      <div class="box-label front">Front</div>
      ${renderYTabs(selected.front.y, frontY, 'front')}
      <div class="selected-coords">
        <span class="row-label">Coords:</span>
        <span class="row-value cyan">${selected.front.xz}</span>
      </div>
      ${renderAltsForY(frontY, selected.normalY)}
    </div>
  `;

  // Front Low (for T-97)
  if (selected.frontLow) {
    frontHtml = `
      <div class="box">
        <div class="box-label front">Front</div>
        ${renderYTabs(selected.front.y, frontY, 'front')}
        <div class="selected-coords">
          <span class="row-label">Coords:</span>
          <span class="row-value cyan">${selected.front.xz}</span>
        </div>
        ${renderAltsForY(frontY, selected.normalY)}
        <div class="divider">
          <div class="divider-label">Low Offset:</div>
          <div class="row">
            <span class="row-label">Y:</span>
            <span class="row-value yellow">${selected.frontLow.y.join(", ")}</span>
          </div>
          <div class="row">
            <span class="row-label">Coords:</span>
            <span class="row-value cyan">${selected.frontLow.xz}</span>
          </div>
        </div>
      </div>
    `;
  }

  // Back section
  let backHtml;
  if (selected.back) {
    backHtml = `
      <div class="box">
        <div class="box-label back">Back</div>
        ${renderYTabs(selected.back.y, backY, 'back')}
        <div class="selected-coords">
          <span class="row-label">Coords:</span>
          <span class="row-value cyan">${selected.back.xz}</span>
          ${selected.back.note ? `<span class="row-note">(${selected.back.note})</span>` : ""}
        </div>
      </div>
    `;
  } else {
    backHtml = `
      <div class="box">
        <div class="box-label back">Back</div>
        <div class="no-back">No back setup</div>
      </div>
    `;
  }

  document.getElementById("tower-details").innerHTML = `
    <div class="grid">
      ${frontHtml}
      ${backHtml}
    </div>
  `;
}

function selectTower(name) {
  selected = towers.find(t => t.name === name);
  frontY = null;
  backY = null;
  renderButtons();
  renderDetails();
}

function selectY(side, y) {
  if (side === 'front') {
    frontY = y;
  } else {
    backY = y;
  }
  renderDetails();
}

// Initialize
renderButtons();
renderDetails();
