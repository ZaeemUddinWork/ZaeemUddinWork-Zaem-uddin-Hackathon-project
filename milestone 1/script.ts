// Get references to HTML elements by their IDs
let start_resume = document.getElementById("start-btn") as HTMLButtonElement;
let Edit_resume = document.getElementById("edit-btn") as HTMLButtonElement;
let download_resume = document.getElementById("download-btn") as HTMLButtonElement;
let Resume_build_box = document.getElementById("Resume_build_box") as HTMLElement;
let btn_box = document.getElementById("btn-box") as HTMLElement;


// Show the resume form when the start button is clicked
function Show_Resume() {
    Resume_build_box.style.display = "inline-block";
    btn_box.style.display = "none";
    Edit_resume.disabled = true;
    download_resume.disabled = true;
}


// Handle the form submission and display the resume
function Submit() {
    
        btn_box.style.display = "block";
        Resume_build_box.style.display = "none";
       
        Edit_resume.removeAttribute('disabled');
        download_resume.removeAttribute('disabled');
 
}


