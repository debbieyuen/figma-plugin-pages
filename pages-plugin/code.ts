let pages = [
  "Cover",
  "----",
  "Design",
  "----",
  "Components",
  "Fav Icon",
  "----",
  "Assets",
  "Discovery",
  "References",
  "Graveyard",
]

for (let page of pages) {
  let newPage = figma.createPage();
  newPage.name = page
}

figma.closePlugin();