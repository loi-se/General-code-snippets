// -----------------------1. Control structures

//-------------If


//----------- If else


//------------- While loop


//-----------do while loop

//-------------for loop


//-------------for each loop


//--------------Switch


//--------------With


//-------------------------------- 2. Data Structures:

// -----------Array


// add value


// loop trough it



//---------- Stack


//---------- Queue



//--------Dictionairy

// ------Hashtable


// Iterate trough it:


// Build a HTML dropdownbox with C#:
 string html = "";
            html += "<select name='" + name + "' style='width: 100%'>";
            html += "<option value='5'" + (value == 5 || toonUitgebreidePrintopties ? " selected" : "") + ">8 weken</option>";
            html += "<option value='4'" + (value == 3 && !toonUitgebreidePrintopties ? " selected" : "") + disabled + ">12 weken" + nb + "</option>";
            html += "<option value='3'" + (value == 3 && !toonUitgebreidePrintopties ? " selected" : "") + disabled + ">18 weken" + nb + "</option>";
            html += "<option value='2'" + (value == 2 && !toonUitgebreidePrintopties ? " selected" : "") + disabled + ">28 weken" + nb + "</option>";
            html += "<option value='1'" + (value == 1 && !toonUitgebreidePrintopties ? " selected" : "") + disabled + ">38 weken" + nb + "</option>";
            html += "<option value='6'" + (value == 6 && !toonUitgebreidePrintopties ? " selected" : "") + disabled + ">50 weken" + nb + "</option>";
            html += "</select>";
            return html;



