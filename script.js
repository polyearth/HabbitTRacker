// Switch from home screen to tracker screen
function startTracking() {
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("trackerScreen").style.display = "block";
  }
  
  // Pievienot habitu
  function addHabit() {
    const habitInput = document.getElementById("habitInput");
    const habitName = habitInput.value.trim();
  
    if (habitName) {
      const habitTable = document.getElementById("habitList");
  
      // Create a new row for the habit
      const row = document.createElement("tr");
  
      // Habit name cell
      const habitCell = document.createElement("td");
      habitCell.textContent = habitName;
      row.appendChild(habitCell);
  
      // Day checkboxes
      for (let i = 0; i < 7; i++) {
        const dayCell = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", updateProgress);
        dayCell.appendChild(checkbox);
        row.appendChild(dayCell);
      }
  
      // Progress cell
      const progressCell = document.createElement("td");
      progressCell.className = "progress";
      progressCell.textContent = "0%";
      row.appendChild(progressCell);
  
      // Remove button
      const removeCell = document.createElement("td");
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.onclick = () => row.remove();
      removeCell.appendChild(removeButton);
      row.appendChild(removeCell);
  
      habitTable.appendChild(row);
  
      // Clear input
      habitInput.value = "";
    }
  }
  
  // Updatot chekboxus
  function updateProgress() {
    const row = this.closest("tr");
    const checkboxes = row.querySelectorAll("input[type='checkbox']");
    const progressCell = row.querySelector(".progress");
  
    // Calculate the checked percentage
    const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    const progress = Math.round((checkedCount / checkboxes.length) * 100);
  
    // Update progress cell
    progressCell.textContent = `${progress}%`;
  }
  
  