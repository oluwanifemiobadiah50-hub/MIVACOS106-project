const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorBox = document.getElementById("formError");

    if (name === "" || email === "" || phone === "" || message === "") {
      errorBox.textContent = "All fields must be filled in.";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorBox.textContent = "Please enter a valid email address.";
      return;
    }

    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
      errorBox.textContent = "Phone number must contain digits only.";
      return;
    }

    errorBox.style.color = "green";
    errorBox.textContent = "Message sent successfully! Thank you, " + name + ".";
  });
}

const addTaskBtn = document.getElementById("addTaskBtn");

if (addTaskBtn) {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

      if (taskText === "") {
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", function() {
      li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
      li.remove();
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  });
}