export default async function handler(req, res) {
    //googleapis
    const { google } = require("googleapis");
  
    let auth = ""
    
    if (process.env.NODE_ENV != "development") {
      auth = new google.auth.GoogleAuth({
        // keyFile: "key.json", 
        //url to spreadsheets API
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        credentials: {
          "type": "service_account",
          "project_id": "alm-e-inami",
          "private_key_id": "51a5e445410506ae66fe9a5813a4428fc87c9aa7",
          "private_key": process.env.GOOGLE_KEY,
          "client_email": "form-responses@alm-e-inami.iam.gserviceaccount.com",
          "client_id": "113394587125013057986",
          "auth_uri": "https://accounts.google.com/o/oauth2/auth",
          "token_uri": "https://oauth2.googleapis.com/token",
          "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
          "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/form-responses%40alm-e-inami.iam.gserviceaccount.com"
        }
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
    const spreadsheetId = "1uuoWvvSg42FKukytNcdeH4quE2T1zscGp6w4sSYlDz8";
  
    //Read front the spreadsheet
    const readData = await googleSheetsInstance.spreadsheets.values.get({
      auth, //auth object
      spreadsheetId, // spreadsheet id
      range: "All Qs Totals!A:L", //range of cells to read from.
    });
    res.status(200).json(readData.data.values);
  }
  