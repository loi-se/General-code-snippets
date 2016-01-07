<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script>
<script type = "text/javascript">

//---------------------------------- 0. Ajax calls
function ShowCurrentTime() {
    $.ajax({
        type: "POST",
        url: "Default.aspx/GetCurrentTime",
        data: '{name: "' + $("#<%=txtUserName.ClientID%>")[0].value + '" }',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnSuccess,
        failure: function(response) {
            alert(response);
        }
    });
}

function OnSuccess(response) {
    alert(response.d);
    var OSName = "Unknown OS";
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

    alert('Your OS: ' + OSName);
}

//---------------------------------- 0. Jquery CSS selector examples
 
// ----- 
 
$(document).ready(function () {
  HighLightRowsLessThanColumnValue('gvProducts', 3, 400);
});
 
function HighLightRowsLessThanColumnValue(gridviewID, columnIndex, value) {
  $("#" + gridviewID + " td:nth-child(" + columnIndex + ")").each(function () {
    if (parseInt($(this).text()) <= value) {
      $(this).parent("tr").css("background-color", "Lavender ");
    }
  });
}


// Loop trough all checkboxes:

  var toggleCalculaties = $("#toggleCalculaties");
    var toggleCalculaties = $("#toggleCalculaties");    
    var checkAll = toggleCalculaties.is(":checked");
    
    if (checkAll) {
        $("#legePlanning").removeProp("checked").removeAttr("checked");
    } 

  $("input.chkCalc").each(function () {
        if (checkAll) {
            $(this).prop("checked", true);
        } else {
            $(this).removeProp("checked").removeAttr("checked");
        }
    });


   // Haal alle calcIds op uit de checkboxes van de geselecteerde calculatieregels "8237, 8239":
        var checkboxes = $("input.chkCalc");
        var calcIds = "";
        checkboxes.each(function () {
            var chk = $(this);
            if (chk.is(":checked")) {
                //alert(chk.attr('chk_'));
                calcIds = calcIds + chk.val() + ",";
                //alert(chk.val());
                //alert($('#chk_').for);
                //enableAlleCalculaties = false;
            }
        });

        // Verwijder de laatste komma van de string
        calcIds = calcIds.slice(0, -1);

        alert(calcIds);

</script>
