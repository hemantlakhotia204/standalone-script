function onOpen(e) {
  // SpreadsheetApp.
}

function addSidebar() {
  const htmlService = HtmlService.createTemplateFromFile("view");
  const html = htmlService.evaluate();

  const ui = SpreadsheetApp.getUi();
  ui.showSidebar(html);
}
