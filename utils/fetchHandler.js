export async function fetch(url, params) {
    let response = UrlFetchApp.fetch(url , params);
    return response.getContentText()
}

