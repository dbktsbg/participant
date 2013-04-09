
function InitializeFileSystem() 
{
    alert("InitializeFileSystem()");
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);    
}

function gotFS(fileSystem) 
{
    alert("gotFS()");
    var DeviceSettingsFilePath = "/mnt/sdcard/MeridiaDeviceSettings.txt"
    fileSystem.root.getFile(DeviceSettingsFilePath, null, gotFileEntry, fail);
}

function gotFileEntry(fileEntry) 
{
    alert("gotFileEntry()");
    fileEntry.file(gotFile, fail);
}

function gotFile(file) 
{
    alert("gotFile()");
    readDataUrl(file);
}

function ReadDeviceSettings(file) 
{
    alert("ReadDeviceSettings()");
    var reader = new FileReader();
    reader.onloadend = function (evt) 
    {
        console.log("Read as data URL");
        console.log(evt.target.result);
        var DeviceSettings = evt.target.result;
        alert(DeviceSettings);
    };
    reader.readAsDataURL(file);
}

function fail(evt) 
{
    console.log(evt.target.error.code);
    alert("Read device settings file - FAILED!")'
}
