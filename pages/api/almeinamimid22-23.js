export default async function handler(req, res) {
    

    //googleapis
    const { google } = require("googleapis");
    let auth = ""
    
    if (process.env.NODE_ENV != "development") {
      auth = new google.auth.GoogleAuth({
        // keyFile: "key.json", 
        //url to spreadsheets API
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS)
      });
    } else {
      auth = new google.auth.GoogleAuth({
        keyFile: "key.json", //the key file
        //url to spreadsheets API
        scopes: ["https://www.googleapis.com/auth/spreadsheets"]
      });
    }
  
    //Auth client Object
    const authClientObject = await auth.getClient();
  
    //Google sheets instance
    const googleSheetsInstance = google.sheets({
      version: "v4",
      auth: authClientObject,
    });
  
    // spreadsheet id
    const spreadsheetId = "1yRLDlFFG-9p94WrB8K8qS5bMVWugKDFsJdugKae8UVU";
  
    //Read front the spreadsheet
    const readData = await googleSheetsInstance.spreadsheets.values.get({
      auth, //auth object
      spreadsheetId, // spreadsheet id
      range: "22-23midyear!A:P", //range of cells to read from.
    });
    res.status(200).json(readData.data.values);
  }
  