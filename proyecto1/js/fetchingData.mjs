
async function fetchingJSONData(url){
        const options = {};
        options.method = "GET";
        options.headers = {"Content-Type":"application/json"};
        options.mode = "cors";
        options.credentials = "same-origin";
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
}
export {fetchingJSONData};