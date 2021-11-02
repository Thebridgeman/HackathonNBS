// array of all channels 
let channelInfo = [
    { "name": "PC Gaming"},
    { "name": "Data Tips"},
    { "name": "Coding Hacks C#"},
    { "name": "Running"},
    { "name": "Hackathons"},
    { "name": "Nationwide Missions"},
    { "name": "Cyber Security Team"},  
    { "name": "Halloween Films"},
    { "name": "Christmas Time"}
]
for (i = 0; i < channelInfo.length; i++) {
    let allpara = document.querySelector(`#allchannels`);
    let newpara = document.createElement('p');
    let channeltext = document.createTextNode(`${channelInfo[i].name}`);
    newpara.appendChild(channeltext);
    allpara.appendChild(newpara);
}

//array of my channels
let myChannelInfo = [
    { "name": "Data Team"},
    { "name": "Dogs"}
]
for (i = 0; i < myChannelInfo.length; i++) {
    let allpara = document.querySelector(`#mychannels`);
    let newpara = document.createElement('p');
    let channeltext = document.createTextNode(`${myChannelInfo[i].name}`);
    newpara.appendChild(channeltext);
    allpara.appendChild(newpara);
}

// create new channel 
function createChannel(){
    let newChannel = {};
    newChannel.name = document.getElementById("channelname").value;
    channelInfo.push(newChannel);

    document.querySelector(`#allchannels`).innerHTML = "";
    for (i = 0; i < channelInfo.length; i++) {
        let allpara = document.querySelector(`#allchannels`);
        let newpara = document.createElement('p');
        let channeltext = document.createTextNode(`${channelInfo[i].name}`);
        newpara.appendChild(channeltext);
        allpara.appendChild(newpara);
    }
}
