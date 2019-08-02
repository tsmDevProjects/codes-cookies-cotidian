
    $.getJSON("allTeams.json", function(data){
        var employee_data = "";
        $.each(data, function(key, value){
            employee_data += "<tr>";
            employee_data += "<td>" +value.name+ "</td>";
            employee_data += "<td>" +value.address+ "</td>";
            employee_data += "<td>" +value.gender+ "</td>";
            employee_data += "<td>" +value.designation+ "</td>";
            employee_data += "<td>" +value.age+ "</td>";
            employee_data += "</tr>";
        });
        $("#employee_table").append(employee_data);

    });
     console.log("entrei aqui");
     
