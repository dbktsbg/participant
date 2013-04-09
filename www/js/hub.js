
function InitializeHub() 
{
    SetupToLaunchCloudVoteParticipant();
}

function SetupToLaunchCloudVoteParticipant() 
{

    var DeviceID = device.uuid;
    var DeviceName = device.name;
    var url = "http://www.cloud-vote.com";

    jQuery("#LaunchCloudVoteAnchorButton").attr("href", url);

    jQuery("#DeviceNameRegion").text("Device Name: " + DeviceName);
    jQuery("#DeviceIDRegion").text("Device ID: " + DeviceID);

    if (DeviceID=="ef8048728a9fcdbb")
    {
        url = "http://www.meridiaars.com/cv1.html";
        jQuery("#LaunchCloudVoteAnchorButton").attr("href", url);
//        timeout = setTimeout(function () { jQuery(location).attr('href', url); }, 5000);
//        clearTimeout(timeout);
    }

    if (DeviceID == "1875fec3215046cd") 
    {
        url = "http://www.meridiaars.com/cv2.html";
        jQuery("#LaunchCloudVoteAnchorButton").attr("href", url);
//        timeout = setTimeout(function () { jQuery(location).attr('href', url); }, 5000);
//        clearTimeout(timeout);
    }

//    timeout = setTimeout(function () { jQuery(location).attr('href', url); }, 5000);
//    clearTimeout(timeout);

    // Automatically loads new URL (into PhoneGap web view)
    //jQuery(location).attr('href', url);

}
