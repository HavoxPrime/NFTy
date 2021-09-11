// login form
console.log("hello");
const loginForm = async (event) => {
  // alert("stop");
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("this works");
      document.location.replace("/api/nft");
    } else {
      alert("Failed to log in.");
    }
  }
};

// sign-up form
const signupForm = async (event) => {
  console.log("hello");
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/api/nft");
    } else {
      alert("Failed to sign up.");
    }
  }
};
//   loggout
const Logout = async () => {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

//  event listeners
document.querySelector("#loginbtn").addEventListener("click", loginForm);

document.querySelector("#signupbtn").addEventListener("click", signupForm);
// document.querySelector("#logoutbtn").addEventListener("click", logout);

document.querySelector("#logoutbtn").addEventListener("click", Logout);
