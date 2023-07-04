import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const header = [
    "Timestamp",
    "Month",
    "Name",
    "Majlis",
    "Jamaat role",
    "Held amila meeting",
    "Parents contacted",
    "Atfal classes held",
    "Average attendance",
    "Atfal who read book pages",
    "Khidmat-e-Khalq activities held",
    "Waqar-e-Amal activities held",
    "Atfal participants in Waqar-e-Amal",
    "Held a sports event",
    "Atfal participants in sports",
    "Atfal encouraged to write for Al-Bashir",
    "Checked if Parents/Atfal are getting Digest",
    "Created content for Atfal social media",
    "Tajneed data up to date",
    "Waqf-e-Nau who attended class"
  ]
const columns = [
    { field: "Timestamp", width: 160},
    { field: "Month", width: 110},
    { field: "Name", width: 140},
    { field: "Majlis", width: 140},
    { field: "Jamaat role", width: 140},
    { field: "Held amila meeting", width: 180},
    { field: "Parents contacted", width: 180},
    { field: "Atfal classes held", width: 190},
    { field: "Average attendance", width: 190},
    { field: "Atfal who read book pages", width: 240},
    { field: "Khidmat-e-Khalq activities held", width: 240},
    { field: "Waqar-e-Amal activities held", width: 240},
    { field: "Atfal participants in Waqar-e-Amal", width: 240},
    { field: "Held a sports event", width: 220},
    { field: "Atfal participants in sports", width: 240},
    { field: "Atfal encouraged to write for Al-Bashir", width: 240},
    { field: "Checked if Parents/Atfal are getting Digest", width: 240},
    { field: "Created content for Atfal social media", width: 240},
    { field: "Tajneed data up to date", width: 240},
    { field: "Waqf-e-Nau who attended class", width: 240},
  ]

export default function MuiDataGrid({rowData, heightProp}) {
    let rows_ = rowData.map((entry) => {
        return arrayToObject(header, entry)
    })
  return (
    <>
        <Box 
        sx={{
            height: heightProp,
            width: '97%',
            margin: 'auto',
            "& .MuiDataGrid-columnHeaderTitle": {
                whiteSpace: "normal",
                lineHeight: "normal",
                fontWeight: 'bold'
              },
              "& .MuiDataGrid-columnHeader": {
                // Forced to use important since overriding inline styles
                height: "unset !important",
              },
              "& .MuiDataGrid-columnHeaders": {
                // Forced to use important since overriding inline styles
                maxHeight: "168px !important",

              }
          }}
        >
            <DataGrid
                columns={columns}
                rows={rows_}
                slots={{toolbar: GridToolbar}}
                // columnHeaderHeight={80} 
                getRowId={(row) => row.Timestamp}  
                showCellVerticalBorder
                showColumnVerticalBorder
            />
        </Box>

        </>
  );
}

function arrayToObject(keys, values) {
    let obj = {};
 
    // Using the foreach method
    keys.forEach((k, i) => { obj[k] = values[i] })
    return obj;
}