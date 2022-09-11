// User profile dropdown
let userDropdown = document.querySelector(".user-dropdown");
let userDropdownMenu = document.querySelector(".user-dropdown-menu");

userDropdown.addEventListener("click", function () {
    userDropdownMenu.classList.toggle("show");
});

// Left sidebar dropdown menu
let dropdownMenuItem = document.querySelector(".dropdown-item");
let dropdownMenu = document.querySelector(".dropdown-menu");

dropdownMenuItem.addEventListener("click", function () {
    dropdownMenu.classList.toggle("show");
    dropdownMenuItem.classList.toggle("change-icon");
});

// User details tab
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("user-details-content-info");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("user-details-info-tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// Left Sidbar Toggle Menu
let toggleMenu = document.querySelector(".toggle-sidebar");
let sidebarMenu = document.querySelector(".left-sidebar");

toggleMenu.addEventListener("click", function () {
    this.classList.toggle("active");
    sidebarMenu.classList.toggle("toggle-sidemenu");
});
