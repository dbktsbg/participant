
function InitializeHub() 
{
    //SetupToLaunchCloudVoteParticipant();
    LaunchParticipantWebApp();
}

function LaunchParticipantWebApp()
{

    var DeviceID = device.uuid;
    var ARCloudWebAPIAddress = "http://meridiasswebsite.cloudapp.net/Participant/JoinUsingMeridiaDevice";

    jQuery("#DeviceIDRegion").text( "Please wait while starting app for DeviceID: " + DeviceID + "..." );

    open(ARCloudWebAPIAddress + "/Participant/JoinUsingMeridiaDevice/" + DeviceID);

}

function SetupToLaunchCloudVoteParticipant() 
{

    var DeviceID = device.uuid;
    //var DeviceName = device.name;
    var ARCloudWebAPIAddress = "http://meridiasswebsite.cloudapp.net/Participant/JoinUsingMeridiaDevice" ;

    $.ajax(
            {
                type: "POST",
                url: ARCloudWebAPIAddress,
                data: { DeviceID: JSON.stringify(DeviceID) },
                success: function (response) 
                {
//                    // Hide the status 
//                    sendStatus.style.visibility = 'hidden';
//                    // Parse the json Object to show in alert
                    var obj = JSON.parse(GetNodeValue(response.firstChild));
                    var status = obj.Status;
                    var dateProcessed = obj.Date;
                    alert('Data sent successfully. Server response is: ' + '\n\nStatus: ' + status + '\nDate Processed: ' + dateProcessed);
                },
                error: function (xhr, response, thrownError, ajaxOptions) 
                {
                    alert("Error: " + xhr.status + '  ' + thrownError + '  ' + ajaxOptions);
                }
            });

    
    
    //var url = "http://www.cloud-vote.com";

//    jQuery("#LaunchCloudVoteAnchorButton").attr("href", url);

//    jQuery("#DeviceNameRegion").text("Device Name: " + DeviceName);
//    jQuery("#DeviceIDRegion").text("Device ID: " + DeviceID);

//    if (DeviceID=="ef8048728a9fcdbb")
//    {
//        url = "http://www.meridiaars.com/cv1.html";
//        jQuery("#LaunchCloudVoteAnchorButton").attr("href", url);
////        timeout = setTimeout(function () { jQuery(location).attr('href', url); }, 5000);
////        clearTimeout(timeout);
//    }

//    if (DeviceID == "1875fec3215046cd") 
//    {
//        url = "http://www.meridiaars.com/cv2.html";
//        jQuery("#LaunchCloudVoteAnchorButton").attr("href", url);
////        timeout = setTimeout(function () { jQuery(location).attr('href', url); }, 5000);
////        clearTimeout(timeout);
//    }

//    timeout = setTimeout(function () { jQuery(location).attr('href', url); }, 5000);
//    clearTimeout(timeout);

    // Automatically loads new URL (into PhoneGap web view)
    //jQuery(location).attr('href', url);

}
