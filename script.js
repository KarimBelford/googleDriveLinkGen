// Variables
const link = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");


const generateLink = (e) => {
    e.preventDefault();

    const linkValue = link.value;
    const confirmLink = linkValue.includes("https://drive.google.com/file/d/");

    if (confirmLink == true) {
        // Generate download link
        const getDownloadLink = link.value
        .replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=")
        .replace("/view?usp=sharing", "");

        downloadLink.value = getDownloadLink;

        const copyText = (target) => {
            if(target.value == "") {
                alert("Please generate link first");
            } else{
                target.select();
                navigator.clipboard.writeText(target.value);
                alert("Link copied to clipboard");
            }
        }

        const copy = document.querySelector(".copy");
        copy.addEventListener("click", () => {
            return copyText(downloadLink);
        });

        //Embed audio
        const audio1 = '<audio width = "300" height = "32" controls="controls" src = "';
        const audio2 = '" type="audio/mp3></audio>';
        const embedAudio = document.getElementById("embed-audio");
        embedAudio.value = `${audio1}${downloadLink.value}${audio2}`;
        
        // Copy Audio embed
        const copyAudio = document.querySelector(".copy-audio");

        copyAudio.addEventListener("click", () => {
            return copyText(embedAudio);
        });

        // Embed video
        const getVideoLink = link.value
        .replace("/view?usp=drive_link", "")

        const video1 = '<iframe src="';
        const video2 = '/preview" width="560" height="315"></iframe>';

        const embedVideo = document.getElementById("embed-video");
        embedVideo.value = `${video1}${getVideoLink}${video2}`;
        const copyVideo = document.querySelector(".copy-video")
        copyVideo.addEventListener("click", () => {
            return copyText(embedVideo);
        });
    } else {
        alert("Please enter a valid Google Drive link");
    } 
     
};


btn.addEventListener("click", generateLink);