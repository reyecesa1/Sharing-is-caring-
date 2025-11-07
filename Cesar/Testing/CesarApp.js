/// Define colors array outside of colorByDay function for global access
let colors = ['rgba(91,168,232,255)', 'rgba(216,132,158,255)', 'rgba(4,12,51,255)', 'rgba(37,52,57,255)', 'rgba(110,210,208,255)', 'indigo', 'violet'];

// Function to change the background color of the logo and body based on the current day
// Function to change the background color of the logo and body based on the current day
// Function to change the background color of the logo and body based on the current day
function colorByDay() {
  const body = document.body; // Target the body element
  const logoImg = document.querySelector('#logo img'); // Adjusted to target the img tag inside #logo
  const settingsButton = document.querySelector('#settings button');
  const preferences = document.querySelector('#preferences');
  const settingbar = document.querySelector('#animatedDiv');
  const settingscolor = document.querySelector('#color');

  const date = new Date();
  const day = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  
    const selectedColor = getCookie("selectedColor")||getDefaultColor(day);
  
  // Retrieve selected color from cookie or default to the first color in the array
  

  // Set the background color of the logo, body, and settings button based on the selected color
  logoImg.style.backgroundColor = selectedColor;
  body.style.backgroundColor = selectedColor;
  settingsButton.style.backgroundColor = selectedColor;
  preferences.style.backgroundColor = selectedColor;
  settingscolor.style.backgroundColor = selectedColor;
  settingbar.style.backgroundColor = selectedColor; // Set the background color of the settings button
}

function saveColor() {
  var selectedColor = document.getElementById("colorPicker").value;
  // Save the selected color to a cookie
  setCookie("selectedColor", selectedColor, 365); // Expires in one year

  // Call colorByDay function to update colors
  colorByDay();
  // You can implement your logic to save the selected color here
  console.log("Selected color: " + selectedColor);
}

// Function to set a cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


// Function to convert hex color to RGB format
function hexToRgb(hex) {
  // Remove the '#' if present
  hex = hex.replace(/^#/, '');
  // Parse the hex value to obtain separate R, G, B values
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;
  // Return the RGB format
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function getDefaultColor(day) {
  const defaultColors = ['rgba(91,168,232,255)', 'rgba(216,132,158,255)', 'rgba(4,12,51,255)', 'rgba(37,52,57,255)', 'rgba(110,210,208,255)', 'indigo', 'violet'];
  return defaultColors[day];
}

function center(elementId) {
  var element = document.getElementById(elementId);
  var screenWidth = window.innerWidth;
  var elementWidth = element.offsetWidth;
  var leftPosition = (screenWidth - elementWidth) / 2;
  element.style.left = leftPosition + 100+ "px";
}

function clearPreferences() {
  localStorage.removeItem('selectedPreferences');
}
// Function to toggle preference selection
function togglePreference(button) {
  button.classList.toggle('selected'); // Toggle the 'selected' class
  handlePreferenceSelection(); // Call function to update header text
  
  // Check if the button is now selected
  if(button.classList.contains('selected')) {
      var selectedPreferences = JSON.parse(localStorage.getItem('selectedPreferences')) || [];
      selectedPreferences.push(button.textContent.trim());
      localStorage.setItem('selectedPreferences', JSON.stringify(selectedPreferences));
  } else {
      var selectedPreferences = JSON.parse(localStorage.getItem('selectedPreferences')) || [];
      var index = selectedPreferences.indexOf(button.textContent.trim());
      if (index !== -1) {
          selectedPreferences.splice(index, 1);
          localStorage.setItem('selectedPreferences', JSON.stringify(selectedPreferences));
      }
  }
  
}

function defualt(){
  // Clear the cookie that stores the selected color
  document.cookie = "selectedColor=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  // Set the colors array to its default values
  colors = ['rgba(91,168,232,255)', 'rgba(216,132,158,255)', 'rgba(4,12,51,255)', 'rgba(37,52,57,255)', 'rgba(110,210,208,255)', 'indigo', 'violet'];

  // Apply the default colors
  colorByDay();
}
// Function to count selected preferences
function countSelectedPreferences() {
  var selectedButtons = document.querySelectorAll('.preferences-list button.selected');
  return selectedButtons.length;
}

// Function to handle preferences selection
function handlePreferenceSelection() {
  var selectedCount = countSelectedPreferences();
  var remainingCount = 4 - selectedCount;

  // Update the header text
  var header = document.querySelector('.preferences-header');
  if (selectedCount === 0) {
      header.textContent = "Please select 4 preferences";
  } else {
      header.textContent = "Please select " + remainingCount + " more preference" + (remainingCount !== 1 ? 's' : '');
  }
  if (selectedCount === 4) {
    document.getElementById('submitPreferencesButton').classList.remove('disabled');
  }else{document.getElementById('submitPreferencesButton').classList.add('disabled');}


  // Disable or enable buttons based on the selected count
  var buttons = document.querySelectorAll('.preferences-list button');
  buttons.forEach(function(button) {
      if (selectedCount === 4 && !button.classList.contains('selected')) {
          button.disabled = true;
      } else {
          button.disabled = false;
      }
  });
}

function save() {
  var selectedCount = countSelectedPreferences();
  if (selectedCount === 4) {
    preferences();
    submitPreferences();
  }
}

function toggleOpacity() {
  const animatedDiv = document.getElementById('animatedDiv');
  let opacity = parseFloat(window.getComputedStyle(animatedDiv).opacity);
  
  const targetOpacity = opacity === 0 ? 1 : 0;
  const increment = 0.9; // Adjust the increment value for smoothness
  const intervalTime = 1; // Adjust the interval time for smoothness

  const interval = setInterval(() => {
    opacity = parseFloat(animatedDiv.style.opacity) || 0;
    if (targetOpacity > opacity) {
      opacity += increment;
      if (opacity >= targetOpacity) {
        opacity = targetOpacity;
        clearInterval(interval);
      }
    } else {
      opacity -= increment;
      if (opacity <= targetOpacity) {
        opacity = targetOpacity;
        clearInterval(interval);
      }
    }
    animatedDiv.style.opacity = opacity;
  }, intervalTime);
  const preferences = document.getElementById("preferences");
  const color = document.getElementById("color");
  if(color.style.display === "block"){
    color.style.display = "none";
  }
  if(preferences.style.display === "block"){
    preferences.style.display = "none";
  }
}

function preferences(){ 
  const color = document.getElementById("color");
  const preferences = document.getElementById("preferences");
    if (preferences.style.display === "none") {
        preferences.style.display = "block";
        handlePreferenceSelection();
        document.getElementById('submitPreferencesButton').classList.add('disabled');
        if(color.style.display === "block"){
          color.style.display = "none";
        }
    } else {
        preferences.style.display = "none";
    }
    
  
}

function toggleButton(buttonId) {
  const button = document.querySelector(`.button:nth-child(${buttonId})`);
  const activeButton = document.querySelector('.button.selected');
  
  if (activeButton && activeButton !== button) {
    activeButton.classList.remove('selected');
  }
  
  button.classList.toggle('selected');

  // Clear existing cookie
  document.cookie = 'activeButton=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

  // Save the ID of the currently selected button in a cookie
  document.cookie = `activeButton=${buttonId}`;
  displaycheck(buttonId);
  
}
function displaycheck(id){
  console.log(id);
  const customCo = document.getElementById("CustomColor");
  const customCoWeek = document.getElementById("CusColWeek");
  if(id == 3){
    customColor();
  }
  if(id == 4){
    customColorWeek();
  }
  if(id == 2){
    defualt();
  }
  if(id != 3 && customCo.style.display === "block"){
    customColor();
  }
  if(id != 4 && customCoWeek.style.display === "block"){
    customColorWeek();
  }

  
}
function color() {
  const preferences = document.getElementById("preferences");
  const color = document.getElementById("color");

  // Check if the color panel is hidden
  if (color.style.display === "none") {
    // Display the color panel
    color.style.display = "block";

    // Hide the preferences panel if it's visible
    if (preferences.style.display === "block") {
      preferences.style.display = "none";
    }
    
    // Load cookie and apply 'selected' class to corresponding button
    const activeButtonId = getCookie('activeButton');
    if (activeButtonId) {
      const activeButton = document.querySelector(`.button:nth-child(${activeButtonId})`);
      activeButton.classList.add('selected');
    }
    displaycheck(activeButtonId);
    

  } else {
    // Hide the color panel if it's visible
    color.style.display = "none";
  }
}

// Function to get cookie value by name
function getCookie(name) {
  const cookieArray = document.cookie.split(';');
  for (let cookie of cookieArray) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName.trim() === name) {
      return cookieValue;
    }
  }
  return null;
}

function customColor(){
  const color = document.getElementById("CustomColor");
  
    if (color.style.display === "none") {
        color.style.display = "block";
    } else {
        color.style.display = "none";
    }
}
function customColorWeek(){
  const color = document.getElementById("CusColWeek");
  
    if (color.style.display === "none") {
        color.style.display = "block";
    } else {
        color.style.display = "none";
    }
}





// Call the function to update user's input


// Call the function to change the background color based on the current day
colorByDay();
