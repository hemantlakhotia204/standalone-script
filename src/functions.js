import { fetch } from "../utils/fetchHandler";
import localStorage from "../utils/storageHandler";

/**
 * @param {string} name
 * @returns {string}
 * @customfunction
 */
function test(name) {
  return name;
}


/** Realm of the user's FW instance */
/**
 * @customfunction
 * @helpUrl https://fundwave.com/guide/reporting/Fundwave+Functions+for+Excel
 * @returns {string} Realm of the instance
 */
async function realm() {

  // let Utils = await import('../utils.js'); Utils = Utils.Utils;
  // Utils.trackEvent(`Using fw.realm()`);

  let url = `https://app.getfundwave.com/services/api/instance/ssoconfig`;

  let baseUrl = localStorage.getItem('baseUrl');
  if(baseUrl)
    url = `${baseUrl}/services/api/instance/ssoconfig`;

  let ssoconfig = await fetch(url, {
    headers: {
      "Accept": "application/json",
    }
  }).then(resp => resp.json())

  let realm = ssoconfig.realm;
  Logger.log(realm)

  return realm;
}

function onOpen(e) {
  const htmlService = HtmlService.createTemplateFromFile("view");
  const html = htmlService.evaluate().setTitle("Custom functions");

  SpreadsheetApp.getUi().showSidebar(html)
}



