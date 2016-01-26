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

//---------------------------------- 1. Jquery CSS selector examples
 
// 1.1----- 
 
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


// 1.2-------Loop trough all checkboxes:

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


   // 1.3-------- Haal alle calcIds op uit de checkboxes van de geselecteerde calculatieregels "8237, 8239":
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
        
    // 1.4------ Find class within another class with Jquery:
    
   // <div class="wrapper">
    //<div class="title">
       // find me!
    //</div>
    //</div>
     headertext = $('.wrapper .title').text();
     headertext = $('.wrapper > .title').text();
     // of
     headertext = $('div.wrapper td.title:first').text();
     
     // Last column in table:
     headertext = $('div.wrapper td.title:last').text();
     
     // Second column in table:
     headertext = $('div.wrapper td.title').eq(2).text();
    $('div.wrapper td.title').each(function (counter) {
	if (counter == 2) 
	{
	headertext =  ($(this).text());
	}
	});
	
	
	
	function Opslaan() {

            $(document).ready(function () {
                //alert("opslaan");

                //var i = 0;
                //var t = document.getElementById('fx');

                $("#fx tr").each(function (i, row) {
                    var $row = $(row);
                    var legendaId = $row[0].id.replace("legenda_", "");
                    var sortindex = $row.find("td:eq(3)").find("input").val();

                    //alert(legendaId);
                    //alert(sortindex);

                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "/BackOffice/Legenda/Legenda.aspx/UpdateSortIndex",
                        cache: false,
                        dataType: "json",
                        data: JSON.stringify({
                            'legendaId': legendaId,
                            'SortIndex' : sortindex
                        }),
                        beforeSend: function () {
                            ShowLoader();
                        },
                        success: function (data) {

                            if (typeof (data) == "object" && data.d) {
                                tr.remove();
                            } else {
                                ShowAlertBox("De sortindex kan niet gewijzigd worden!", 420, 130);
                            }

                        },
                        error: function () {
                            ShowAlertBox("De sortindex kan niet gewijzigd worden!", 420, 130);
                        },
                        complete: function () {
                            HideLoader();
                        }
                    });

                });
            });
        }

</script>
