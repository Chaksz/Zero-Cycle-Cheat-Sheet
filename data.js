const topSetup = [
  {
    name: "Small Boy", h: 76, category: "small",
    front: {
      88: [{ xz: "28, -26" }],
      90: [{ xz: "28, -26" }],
      95: [{ xz: "28, -26" }],
      99: [{ xz: "28, -26" }]
    },
    back: {
      87: [{ xz: "-29, 25" }, { xz: "-30, 25" }],
      90: [{ xz: "-29, 25" }, { xz: "-30, 25" }],
      95: [{ xz: "-29, 25" }, { xz: "-30, 25" }]
    }
  },
  {
    name: "Small Cage", h: 79, category: "small",
    front: {
      87: [{ xz: "28, -26" }],
      90: [{ xz: "28, -26" }],
      95: [{ xz: "28, -26" }],
      99: [{ xz: "28, -26" }]
    },
    back: {
      87: [{ xz: "-29, 25" }, { xz: "-30, 25" }],
      90: [{ xz: "-29, 25" }, { xz: "-30, 25" }],
      95: [{ xz: "-29, 25" }, { xz: "-30, 25" }]
    }
  },
  {
    name: "Tall Cage", h: 82, category: "small",
    front: {
      90: [{ xz: "28, -26" }],
      95: [{ xz: "28, -26" }],
      99: [{ xz: "28, -26" }]
    },
    back: {
      90: [{ xz: "-29, 25" }, { xz: "-30, 25" }],
      95: [{ xz: "-29, 25" }, { xz: "-30, 25" }],
      99: [{ xz: "-29, 25" }, { xz: "-30, 25" }]
    }
  },
  {
    name: "M-85", h: 85, category: "small",
    front: {
      90: [{ xz: "28, -26" }],
      95: [{ xz: "28, -26" }],
      99: [{ xz: "28, -26" }]
    },
    back: {
      90: [{ xz: "-29, 25" }, { xz: "-30, 25" }],
      95: [{ xz: "-29, 25" }, { xz: "-30, 25" }],
      99: [{ xz: "-29, 25" }, { xz: "-30, 25" }]
    }
  },
  {
    name: "M-88", h: 88, category: "small",
    front: {
      95: [{ xz: "28, -26" }],
      99: [{ xz: "28, -26" }]
    },
    back: {
      95: [{ xz: "-29, 25" }, { xz: "-30, 25" }],
      99: [{ xz: "-29, 25" }, { xz: "-30, 25" }]
    }
  },
  {
    name: "M-91", h: 91, category: "tall",
    front: {
      95: [{ xz: "28, -27 (Anchor Break Crystal)" }],
      99: [{ xz: "28, -26" }]
    },
    back: {
      95: [{ xz: "-29, 26 (Anchor Break Crystal)" }],
      99: [{ xz: "-29, 25" }, { xz: "-30, 25" }]
    }
  },
  {
    name: "T-94", h: 94, category: "tall",
    front: {
      99: [{ xz: "28, -26" }],
      103: [{ xz: "28, -26" }],
      104: [{ xz: "28, -26" }]
    },
    back: {
      99: [{ xz: "-29, 25" }, { xz: "-30, 25" }]
    }
  },
  {
    name: "T-97", h: 97, category: "tall",
    front: {
      100: [{ xz: "26, -26 (Anchor Break Crystal)" }, { xz: "27, -27 (Anchor Break Crystal)" }],
      103: [{ xz: "28, -26" }],
      104: [{ xz: "27, -26" }]
    },
    frontLow: {
      99: [{ xz: "29, -30" }]
    },
    back: {
      100: [{ xz: "-28, 26"}]
    }
  },
  {
    name: "T-100", h: 100, category: "tall",
    front: {
      104: [{ xz: "30, -30" }]
    },
    back: {
      104: [{ xz: "-28, 25" }]
    }
  },
  {
    name: "T-103", h: 103, category: "tall", altName: "Tall Boy",
    front: {
      104: [{ xz: "28, -30" }, { xz: "29, -31" }]
    },
    back: {
      99: [{ xz: "-26, 27", t: "db"}]
    }
  },
  {
    name: "1/8", h: null, category: "special",
    front: {
      88: [{ xz: "23, 0" }],
      92: [{ xz: "23, 0" }],
      93: [{ xz: "23, 0" }],
      97: [{ xz: "23, 0" }]
    },
    back: {
      88: [{ xz: "-24, 0" }],
      92: [{ xz: "-24, 0" }],
      93: [{ xz: "-24, 0" }],
      97: [{ xz: "-24, 0" }]
    }
  }
];

const sideSetup = [
  {
    name: "M-85", h: 85, category: "small",
    front: {
      86: [{ xz: "28, -30 (MultiBlock)" }, { xz: "28, -31" }],
    },
    back: {
      86: [{ xz: "-30, 29 (MultiBlock)" }, { xz: "-30, 30" }],
    }
  },
  {
    name: "M-88", h: 88, category: "small",
    front: {
      86: [{ xz: "28, -30 (MultiBlock)" }, { xz: "28, -31" }],
      90: [{ xz: "29, -29 (MultiBlock)" }, { xz: "29, -30" }],
    },
    back: {
      86: [{ xz: "-30, 30 (MultiBlock)" }, { xz: "-30, 31" }],
      90: [{ xz: "-30, 28 (MultiBlock)" }, { xz: "-30, 29" }]
    }
  },
  {
    name: "M-91", h: 91, category: "tall",
    front: {
      86: [{ xz: "29, -31 (MultiBlock)" }, { xz: "29, -32" }],
      90: [{ xz: "28, -30 (MultiBlock)" }, { xz: "28, -31" }],
      95: [{ xz: "29, -29 (MultiBlock)" }, { xz: "29, -30" }]
    },
    back: {
      86: [{ xz: "-30, 30 (MultiBlock)" }],
      90: [{ xz: "-29, 29 (MultiBlock)" }, { xz: "-29, 30" }],
      95: [{ xz: "-30, 28 (MultiBlock)" }, { xz: "-29, 29" }]
    }
  },
  {
    name: "T-94", h: 94, category: "tall",
    front: {
      86: [{ xz: "29, -31 (MultiBlock)" }, { xz: "29, -32" }],
      90: [{ xz: "28, -30 (MultiBlock)" }, { xz: "28, -31" }],
      95: [{ xz: "29, -30 (MultiBlock)" }, { xz: "29, -31" }],
    },
    back: {
      86: [{ xz: "-30, 30 (MultiBlock)" }],
      90: [{ xz: "-29, 29 (MultiBlock)" }, { xz: "-29, 30" }],
      95: [{ xz: "-29, 28 (MultiBlock)" }, { xz: "-29, 29" }]
    }
  },
  {
    name: "T-97", h: 97, category: "tall",
    front: {
      86: [{ xz: "29, -31 (MultiBlock)" }],
      90: [{ xz: "28, -30 (MultiBlock)" }, { xz: "28, -31" }],
      95: [{ xz: "28, -30 (MultiBlock)" }, { xz: "28, -31" }],
      99: [{ xz: "29, -30 (MultiBlock)" }, { xz: "29, -31" }]
    },
    back: {
      86: [{ xz: "29, -31 (MultiBlock)" }],
      90: [{ xz: "-29, 29 (MultiBlock)" }],
      95: [{ xz: "-29, 29 (MultiBlock)" }],
      99: [{ xz: "-30, 29 (On CCW place bed extender)" }]
    }
  },
  {
    name: "T-100", h: 100, category: "tall",
    front: {
      89: [{ xz: "30, -28 (MultiBlock)" }],
      95: [{ xz: "28, -30 (MultiBlock)" }],
      99: [{ xz: "28, -30 (On CCW place bed extender)" }]
    },
    back: {
      89: [{ xz: "-31, 27 (MultiBlock)" }],
      95: [{ xz: "-29, 29 (MultiBlock)" }],
      99: [{ xz: "-29, 29 (MultiBlock)" }]
    }
  },
  {
    name: "T-103", h: 103, category: "tall", altName: "Tall Boy",
    front: {
      89: [{ xz: "30, -28 (MultiBlock)" }],
      94: [{ xz: "29, -29 (MultiBlock)" }]
    },
    back: {
      89: [{ xz: "-31, 27 (MultiBlock)" }],
      94: [{ xz: "-30, 28 (MultiBlock)" }]
    }
  }
];

