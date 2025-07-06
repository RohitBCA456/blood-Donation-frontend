const form = document.getElementById("form-data");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Create an object from form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("https://localhost:8000/api/v2/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Success:", result);

    if(response.ok){
      alert("Registered successfully.");
      window.location.href = "https://blooddonationdib.netlify.app/loginPage.html";
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
});
