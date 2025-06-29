// Get references to modal elements
const addSubscriptionModal = document.getElementById("addSubscriptionModal");
const addSubscriptionBtn = document.getElementById("addSubscriptionBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const cancelSubscriptionBtn = document.getElementById("cancelSubscriptionBtn");

const notificationsModal = document.getElementById("notificationsModal");
const notificationBellBtn = document.getElementById("notificationBellBtn");
const closeNotificationsModalBtn = document.getElementById(
  "closeNotificationsModalBtn"
);

const settingsModal = document.getElementById("settingsModal");
const settingsNavLink = document.getElementById("settingsNavLink");
const closeSettingsModalBtn = document.getElementById("closeSettingsModalBtn");

// Log elements to console to verify they are found
console.log("--- Initial Element Check ---");
console.log("addSubscriptionModal:", addSubscriptionModal);
console.log("addSubscriptionBtn:", addSubscriptionBtn);
console.log("notificationsModal:", notificationsModal);
console.log("notificationBellBtn:", notificationBellBtn);
console.log("settingsModal:", settingsModal);
console.log("settingsNavLink:", settingsNavLink);
console.log("-----------------------------");

// Ensure DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded event fired.");

  // Function to show the Add Subscription modal
  if (addSubscriptionBtn) {
    addSubscriptionBtn.addEventListener("click", () => {
      console.log("Add Subscription button clicked.");
      addSubscriptionModal.classList.remove("hidden");
    });
  } else {
    console.error("Error: addSubscriptionBtn not found!");
  }

  // Function to hide the Add Subscription modal
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      console.log("Close Add Subscription modal button clicked.");
      addSubscriptionModal.classList.add("hidden");
    });
  } else {
    console.error("Error: closeModalBtn not found!");
  }

  if (cancelSubscriptionBtn) {
    cancelSubscriptionBtn.addEventListener("click", () => {
      console.log("Cancel Add Subscription button clicked.");
      addSubscriptionModal.classList.add("hidden");
    });
  } else {
    console.error("Error: cancelSubscriptionBtn not found!");
  }

  // Close Add Subscription modal if clicked outside of the modal content
  if (addSubscriptionModal) {
    addSubscriptionModal.addEventListener("click", (event) => {
      if (event.target === addSubscriptionModal) {
        console.log("Clicked outside Add Subscription modal.");
        addSubscriptionModal.classList.add("hidden");
      }
    });
  }

  // Function to show the Notifications modal
  if (notificationBellBtn) {
    notificationBellBtn.addEventListener("click", () => {
      console.log("Notification bell button clicked.");
      notificationsModal.classList.remove("hidden");
    });
  } else {
    console.error("Error: notificationBellBtn not found!");
  }

  // Function to hide the Notifications modal
  if (closeNotificationsModalBtn) {
    closeNotificationsModalBtn.addEventListener("click", () => {
      console.log("Close Notifications modal button clicked.");
      notificationsModal.classList.add("hidden");
    });
  } else {
    console.error("Error: closeNotificationsModalBtn not found!");
  }

  // Close Notifications modal if clicked outside of the modal content
  if (notificationsModal) {
    notificationsModal.addEventListener("click", (event) => {
      if (event.target === notificationsModal) {
        console.log("Clicked outside Notifications modal.");
        notificationsModal.classList.add("hidden");
      }
    });
  }

  // Function to show the Settings modal
  if (settingsNavLink) {
    settingsNavLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      console.log("Settings navigation link clicked.");
      settingsModal.classList.remove("hidden");
    });
  } else {
    console.error("Error: settingsNavLink not found!");
  }

  // Function to hide the Settings modal
  if (closeSettingsModalBtn) {
    closeSettingsModalBtn.addEventListener("click", () => {
      console.log("Close Settings modal button clicked.");
      settingsModal.classList.add("hidden");
    });
  } else {
    console.error("Error: closeSettingsModalBtn not found!");
  }

  // Close Settings modal if clicked outside of the modal content
  if (settingsModal) {
    settingsModal.addEventListener("click", (event) => {
      if (event.target === settingsModal) {
        console.log("Clicked outside Settings modal.");
        settingsModal.classList.add("hidden");
      }
    });
  }

  // Basic form submission handler (for demonstration, will be replaced by AJAX)
  const addSubscriptionForm = document.querySelector(
    "#addSubscriptionModal form"
  );
  if (addSubscriptionForm) {
    addSubscriptionForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent default form submission
      console.log("Add Subscription form submitted.");

      const serviceName = document.getElementById("serviceName").value;
      const category = document.getElementById("category").value;
      const planName = document.getElementById("planName").value;
      const price = document.getElementById("price").value;
      const billingDate = document.getElementById("billingDate").value;

      console.log("New Subscription Data:", {
        serviceName,
        category,
        planName,
        price,
        billingDate,
      });

      addSubscriptionModal.classList.add("hidden"); // Hide modal after logging data
      const customAlert = document.createElement("div");
      customAlert.innerHTML = `
                <div class="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-[100]">
                    <div class="bg-white p-6 rounded-lg shadow-xl text-center">
                        <p class="text-lg font-semibold mb-4">Subscription form submitted (data logged to console)!</p>
                        <button class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700" onclick="this.parentElement.parentElement.remove()">OK</button>
                    </div>
                </div>
            `;
      document.body.appendChild(customAlert);
    });
  } else {
    console.error("Error: Add Subscription form not found!");
  }
});
