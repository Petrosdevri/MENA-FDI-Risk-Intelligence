export const countries = [
  { name: "United Arab Emirates", nameAr: "الإمارات العربية المتحدة", iso: "ae", group: "oil",            groupLabel: "Oil-Producing",             groupLabelAr: "منتج للنفط",               ms: 85, nra: 75, inst: 78, policy: 82, risk: 85, fdiScore: 81.0 },
  { name: "Qatar",                nameAr: "قطر",                      iso: "qa", group: "oil",            groupLabel: "Oil-Producing",             groupLabelAr: "منتج للنفط",               ms: 80, nra: 88, inst: 72, policy: 80, risk: 82, fdiScore: 80.4 },
  { name: "Kuwait",               nameAr: "الكويت",                   iso: "kw", group: "oil",            groupLabel: "Oil-Producing",             groupLabelAr: "منتج للنفط",               ms: 72, nra: 95, inst: 58, policy: 75, risk: 72, fdiScore: 74.4 },
  { name: "Saudi Arabia",         nameAr: "المملكة العربية السعودية", iso: "sa", group: "oil",            groupLabel: "Oil-Producing",             groupLabelAr: "منتج للنفط",               ms: 70, nra: 90, inst: 55, policy: 72, risk: 60, fdiScore: 69.4 },
  { name: "Oman",                 nameAr: "عُمان",                    iso: "om", group: "oil",            groupLabel: "Oil-Producing",             groupLabelAr: "منتج للنفط",               ms: 62, nra: 72, inst: 62, policy: 65, risk: 70, fdiScore: 66.2 },
  { name: "Bahrain",              nameAr: "البحرين",                  iso: "bh", group: "oil",            groupLabel: "Oil-Producing",             groupLabelAr: "منتج للنفط",               ms: 68, nra: 55, inst: 65, policy: 68, risk: 62, fdiScore: 63.6 },
  { name: "Morocco",              nameAr: "المغرب",                   iso: "ma", group: "diversified",    groupLabel: "Diversified Economy",       groupLabelAr: "اقتصاد متنوع",             ms: 58, nra: 20, inst: 55, policy: 62, risk: 65, fdiScore: 52.0 },
  { name: "Jordan",               nameAr: "الأردن",                   iso: "jo", group: "diversified",    groupLabel: "Diversified Economy",       groupLabelAr: "اقتصاد متنوع",             ms: 52, nra: 15, inst: 52, policy: 55, risk: 55, fdiScore: 45.8 },
  { name: "Algeria",              nameAr: "الجزائر",                  iso: "dz", group: "macro-challenged", groupLabel: "Macro Challenges",        groupLabelAr: "تحديات اقتصادية",          ms: 45, nra: 65, inst: 35, policy: 42, risk: 40, fdiScore: 45.4 },
  { name: "Tunisia",              nameAr: "تونس",                     iso: "tn", group: "macro-challenged", groupLabel: "Macro Challenges",        groupLabelAr: "تحديات اقتصادية",          ms: 48, nra: 25, inst: 48, policy: 48, risk: 50, fdiScore: 43.8 },
  { name: "Egypt",                nameAr: "مصر",                      iso: "eg", group: "macro-challenged",    groupLabel: "Macro Challenges",       groupLabelAr: "تحديات اقتصادية",        ms: 50, nra: 40, inst: 40, policy: 38, risk: 42, fdiScore: 42.0 },
  { name: "Iraq",                 nameAr: "العراق",                   iso: "iq", group: "fragile",        groupLabel: "Fragile / Conflict-Affected", groupLabelAr: "هش / متأثر بالنزاعات",   ms: 40, nra: 80, inst: 22, policy: 35, risk: 22, fdiScore: 39.8 },
  { name: "Libya",                nameAr: "ليبيا",                    iso: "ly", group: "fragile",        groupLabel: "Fragile / Conflict-Affected", groupLabelAr: "هش / متأثر بالنزاعات",   ms: 30, nra: 70, inst: 18, policy: 25, risk: 18, fdiScore: 32.2 },
  { name: "Palestine",            nameAr: "فلسطين",                   iso: "ps", group: "fragile",        groupLabel: "Fragile / Conflict-Affected", groupLabelAr: "هش / متأثر بالنزاعات",   ms: 28, nra: 5,  inst: 30, policy: 30, risk: 15, fdiScore: 21.6 },
  { name: "Lebanon",              nameAr: "لبنان",                    iso: "lb", group: "fragile",        groupLabel: "Fragile / Conflict-Affected", groupLabelAr: "هش / متأثر بالنزاعات",   ms: 35, nra: 10, inst: 25, policy: 10, risk: 20, fdiScore: 20.0 },
  { name: "Yemen",                nameAr: "اليمن",                    iso: "ye", group: "fragile",        groupLabel: "Fragile / Conflict-Affected", groupLabelAr: "هش / متأثر بالنزاعات",   ms: 20, nra: 35, inst: 12, policy: 18, risk: 8,  fdiScore: 18.6 },
  { name: "Syria",                nameAr: "سوريا",                    iso: "sy", group: "fragile",        groupLabel: "Fragile / Conflict-Affected", groupLabelAr: "هش / متأثر بالنزاعات",   ms: 15, nra: 30, inst: 10, policy: 12, risk: 5,  fdiScore: 14.4 },
];

export const groupColors = {
  oil: "#f59e0b",
  diversified: "#10b981",
  fragile: "#ef4444",
  "macro-challenged": "#8b5cf6",
};

export const componentLabels = {
  ms: "Market Size",
  nra: "Natural Resources",
  inst: "Institutions",
  policy: "Policy",
  risk: "Political Risk",
};
