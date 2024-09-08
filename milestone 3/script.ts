// Get references to HTML elements by their IDs
let start_resume = document.getElementById("start-btn") as HTMLButtonElement;
let Edit_resume = document.getElementById("edit-btn") as HTMLButtonElement;
let download_resume = document.getElementById("download-btn") as HTMLButtonElement;
let Resume_build_box = document.getElementById("Resume_build_box") as HTMLElement;
let btn_box = document.getElementById("btn-box") as HTMLElement;
let Resume_result = document.getElementById("Resume-result") as HTMLElement;

// Get references to HTML input fields
let Fullname = document.getElementById('Name') as HTMLInputElement;
let email = document.getElementById('email') as HTMLInputElement;
let phone = document.getElementById('Phone') as HTMLInputElement;
let address = document.getElementById('address') as HTMLInputElement;
let profile_summary = document.getElementById('profile-summary') as HTMLInputElement;
let skill = document.getElementById('skill') as HTMLInputElement;
let work = document.getElementById('work') as HTMLInputElement;
let education = document.getElementById('education') as HTMLInputElement;
let submit_btn = document.getElementById('submit-btn') as HTMLInputElement;

// Declare a variable to hold resume data
let resume: Resume;

// Get references to HTML elements where resume data will be displayed
let table_name = document.getElementById('table-name') as HTMLElement;
let table_email = document.getElementById('table-email') as HTMLElement;
let table_phone = document.getElementById('table-phone') as HTMLElement;
let table_address = document.getElementById('table-address') as HTMLElement;
let table_profile_summarye = document.getElementById('table-profile-summary') as HTMLElement;
let table_skill = document.getElementById('table-skill') as HTMLElement;
let table_work_exp = document.getElementById('table-work-exp') as HTMLElement;
let table_educatione = document.getElementById('table-education') as HTMLElement;

// Interface for Resume object
interface Resume {
    fullname: string;
    Email: string;
    Phone: number;
    Address: string;
    Profile_summary: string;
    Skills: string[];
    Work_exp: string;
    Education: string;
}

// Show the resume form when the start button is clicked
function Show_Resume() {
    Resume_build_box.style.display = "inline-block";
    btn_box.style.display = "none";
    Resume_result.style.display = "none";
    Edit_resume.disabled = true;
    download_resume.disabled = true;
    clearInputFields(); // Clear input fields when showing the form
    
}



// Clear all input fields
function clearInputFields(): void {
    if (Fullname) Fullname.value = '';
    if (email) email.value = '';
    if (phone) phone.value = '';
    if (address) address.value = '';
    if (skill) skill.value = '';
    if (profile_summary) profile_summary.value = '';
    if (work) work.value = '';
    if (education) education.value = '';
}

// Validate input fields and show alerts for any missing information
function validateInputFields(): boolean {
    let isValid = true;

    if (!Fullname.value.trim()) {
        alert("Full name is required!");
        isValid = false;
    }
    if (!email.value.trim()) {
        alert("Email is required!");
        isValid = false;
    }
    if (!phone.value.trim()) {
        alert("Phone number is required!");
        isValid = false;
    }
    if (!address.value.trim()) {
        alert("Address is required!");
        isValid = false;
    }
    if (!profile_summary.value.trim()) {
        alert("Profile summary is required!");
        isValid = false;
    }
    if (!work.value.trim()) {
        alert("Work experience is required!");
        isValid = false;
    }
    if (!education.value.trim()) {
        alert("Education details are required!");
        isValid = false;
    }

    return isValid;
}

// Handle the form submission and display the resume
function Submit() {
    if (validateInputFields()) {
        btn_box.style.display = "block";
        Resume_build_box.style.display = "none";
        Resume_result.style.display = "inline-block";
        Edit_resume.removeAttribute('disabled');
        download_resume.removeAttribute('disabled');

        // Recalculate skill_splitted based on the skill input
        let skill_split = skill.value;
        let skill_splitted = skill_split.split(',').map(s => s.trim()).filter(s => s.length > 0);

        // Create a resume object with the input data
        resume = {
            fullname: Fullname.value,
            Email: email.value,
            Phone: Number(phone.value),
            Address: address.value,
            Profile_summary: profile_summary.value,
            Skills: skill_splitted,
            Work_exp: work.value,
            Education: education.value
        }

        // Populate the resume result section with the data
        table_name.textContent = `${resume.fullname}`;
        table_email.textContent = `Email: ${resume.Email}`;
        table_phone.textContent = `Phone No.: ${resume.Phone}`;
        table_address.textContent = `Address: ${resume.Address}`;
        table_profile_summarye.textContent = `${resume.Profile_summary}`;
        table_skill.appendChild(createUnorderedList(resume.Skills));
        table_work_exp.textContent = `${resume.Work_exp}`;
        table_educatione.textContent = `${resume.Education}`;
    }
}

// Create an unordered list from an array of strings
function createUnorderedList(array: string[]) {
    const ul = document.createElement('ul');

    array.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    return table_skill.appendChild(ul);
}


