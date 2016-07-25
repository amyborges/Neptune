///////////////////////////////////////////////////////////////////////////////////////////////////////////
//            The following uploads SHOULD have their contents saved to a LOCAL STORAGE ARRAY            //
//   x  LFR_start --> localStorage.LFR_start_STRING;                                                     //
//   x  LFR       --> localStorage.LFR_STRING;                                                           //
//   x  MINT      --> localStorage.MINT_STRING;                                                          //
//   x  UCF       --> localStorage.UCF_STRING                                                            //
//                                                                                                       //
//                    o = Needs to be Implemented    x = Implemented and Working                         //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {



    var JSON_form = document.getElementById('uploadForm');
    var JSON_fileSelect = document.getElementById('inputfile_JSON');
    var JSON_uploadButton = document.getElementById('uploadfile');


    JSON_form.onsubmit = function(event) {
        event.preventDefault();
        JSON_uploadButton.innerHTML = 'Uploading...';

        var file = JSON_fileSelect.files[0];
        var formData = new FormData();

        formData.append('specifyLFR',file,'specifyLFR');

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/build_JSON', true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                // File(s) uploaded.
                toastr.success('Your JSON File was uploaded successfully!');

                // console.log(response);


                // $("#status").empty().text(response);
                $("#status").empty().text();
                var JSONbutton = document.getElementById("inputfile_JSON");
                JSONbutton.style.backgroundColor = "#2ecc71";

                // Json successfully uploaded
                var fileOfChoice = "../uploads/Build_Verify/myjson.json";
                $.getJSON(fileOfChoice, function (json) {

                    // Use Json as a string
                    var jsonString = JSON.stringify(json);
                    var controlOnly;

                    // find size of entire SVG from JSON
                    localStorage.SVGdimX = JSON.stringify(Object(json.params.width));
                    localStorage.SVGdimY = JSON.stringify(Object(json.params.height));

                    // figure out indices of flow and control and cut json_string to substring to only contain control
                    flowIndex = jsonString.search('flow');
                    controlIndex = jsonString.search('control');
                    if(flowIndex < controlIndex){   // control is after flow
                        controlOnly = jsonString.substr(controlIndex);
                    }
                    else {  // control is before flow
                        controlOnly = jsonString.substr(controlIndex, (flowIndex-controlIndex));
                    }

                    // Now look for all Port in the control layer only
                    var Re = /Port.+?\[(.+?),(.+?)\].+?"radius1":(.+?),"radius2":(.+?),/g;
                    var myArray;
                    var portArray = [];
                    var portX = [];
                    var portY = [];
                    var portRadius1 = [];
                    var portRadius2 = [];

                    while ((myArray = Re.exec(controlOnly)) !== null) {
                        portX.push(myArray[1]);
                        portY.push(myArray[2]);
                        portRadius1.push(myArray[3]);
                        portRadius2.push(myArray[4]);
                        portArray.push(myArray.index);
                    }

                    // Store json variables to localStorage in form of JSON object...
                    localStorage.portXcoords = JSON.stringify(portX);
                    localStorage.portYcoords = JSON.stringify(portY);
                    localStorage.portRadius1vals = JSON.stringify(portRadius1);
                    localStorage.portRadius2vals = JSON.stringify(portRadius2);
                    //  Update number of Pumps for settings page
                    setNumberOfPumps_JSON();
                    // clearPumpData();


                    // console.log("Port x coordinates from localStorage: " + JSON.parse(localStorage.getItem('portXcoords'))[0]);
                    // console.log("Port x coordinates from localStorage: " + JSON.parse(localStorage.getItem('portXcoords'))[1]);
                    // console.log("Port x coordinates from localStorage: " + JSON.parse(localStorage.getItem('portXcoords'))[2]);
                    // console.log("Port x coordinates from localStorage: " + JSON.parse(localStorage.getItem('portXcoords'))[3]);
                    // console.log("Port x coordinates from localStorage: " + JSON.parse(localStorage.getItem('portXcoords'))[4]);
                    // console.log("Port x coordinates from localStorage: " + JSON.parse(localStorage.getItem('portXcoords'))[5]);

                    // console.log(JSON.parse(JSON.stringify(json)));
                    // var result = JSON.parse(JSON.stringify(json));


                    // Display JSON via 3DuF
                    var result = json;
                    Registry.viewManager.loadDeviceFromJSON(result);
                });
                location.reload();

            } else {
                alert('File upload failed.');
            }
        };
        xhr.send(formData);
    };




    // $('#uploadForm').submit(function () {
    //     // $("#status").empty().text("File is uploading...");
    //
    //     $(this).ajaxSubmit({
    //
    //         error: function (xhr) {
    //             status('Error: ' + xhr.status);
    //         },
    //         success: function (response) {
    //
    //             toastr.success('Your JSON File was uploaded successfully!');
    //
    //             console.log(response);
    //
    //
    //             // $("#status").empty().text(response);
    //             $("#status").empty().text();
    //             var JSONbutton = document.getElementById("inputfile_JSON");
    //             JSONbutton.style.backgroundColor = "#2ecc71";
    //
    //             // Json successfully uploaded
    //             var fileOfChoice = "../uploads/Build_Verify/myjson.json";
    //             $.getJSON(fileOfChoice, function (json) {
    //
    //                 // Use Json as a string
    //                 var jsonString = JSON.stringify(json);
    //                 var controlOnly;
    //
    //                 // find size of entire SVG from JSON
    //                 localStorage.SVGdimX = JSON.stringify(Object(json.params.width));
    //                 localStorage.SVGdimY = JSON.stringify(Object(json.params.height));
    //
    //                 // figure out indices of flow and control and cut json_string to substring to only contain control
    //                 flowIndex = jsonString.search('flow');
    //                 controlIndex = jsonString.search('control');
    //                 if(flowIndex < controlIndex){   // control is after flow
    //                     controlOnly = jsonString.substr(controlIndex);
    //                 }
    //                 else {  // control is before flow
    //                     controlOnly = jsonString.substr(controlIndex, (flowIndex-controlIndex));
    //                 }
    //
    //                 // Now look for all Port in the control layer only
    //                 var Re = /Port.+?\[(.+?),(.+?)\].+?"radius1":(.+?),"radius2":(.+?),/g;
    //                 var myArray;
    //                 var portArray = [];
    //                 var portX = [];
    //                 var portY = [];
    //                 var portRadius1 = [];
    //                 var portRadius2 = [];
    //
    //                 while ((myArray = Re.exec(controlOnly)) !== null) {
    //                     portX.push(myArray[1]);
    //                     portY.push(myArray[2]);
    //                     portRadius1.push(myArray[3]);
    //                     portRadius2.push(myArray[4]);
    //                     portArray.push(myArray.index);
    //                 }
    //
    //                 // Store json variables to localStorage in form of JSON object...
    //                 localStorage.portXcoords = JSON.stringify(portX);
    //                 localStorage.portYcoords = JSON.stringify(portY);
    //                 localStorage.portRadius1vals = JSON.stringify(portRadius1);
    //                 localStorage.portRadius2vals = JSON.stringify(portRadius2);
    //                 //  Update number of Pumps for settings page
    //                 setNumberOfPumps_JSON();
    //                 // clearPumpData();
    //
    //
    //                 // console.log("Port x coordinates from localStorage: " + JSON.parse(localStorage.getItem('portXcoords'))[0]);
    //                 // console.log("Port x coordinates from localStorage: " + JSON.parse(localStorage.getItem('portXcoords'))[1]);
    //                 // console.log("Port x coordinates from localStorage: " + JSON.parse(localStorage.getItem('portXcoords'))[2]);
    //                 // console.log("Port x coordinates from localStorage: " + JSON.parse(localStorage.getItem('portXcoords'))[3]);
    //                 // console.log("Port x coordinates from localStorage: " + JSON.parse(localStorage.getItem('portXcoords'))[4]);
    //                 // console.log("Port x coordinates from localStorage: " + JSON.parse(localStorage.getItem('portXcoords'))[5]);
    //
    //                 // console.log(JSON.parse(JSON.stringify(json)));
    //                 // var result = JSON.parse(JSON.stringify(json));
    //
    //
    //                 // Display JSON via 3DuF
    //                 var result = json;
    //                 Registry.viewManager.loadDeviceFromJSON(result);
    //             });
    //             location.reload();
    //         }
    //     });
    //     // location.reload();
    //     return false;
    // });


    
    
    
    
    
    $('#uploadForm2').submit(function () {

        toastr.success('Your SVG File was uploaded successfully!');

        $(this).ajaxSubmit({

            error: function (xhr) {
                status('Error: ' + xhr.status);
            },
            success: function (response) {
                console.log(response);
                // $("#status2").empty().text(response);
                $("#status2").empty().text();
                var SVGbutton = document.getElementById("inputfile2");
                SVGbutton.style.backgroundColor = "#2ecc71";
                // refresh the page so that svg loads
                // location.reload();
            }
        });
        return false;
    });
});

