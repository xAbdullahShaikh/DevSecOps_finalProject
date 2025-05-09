// ✅ Positive Case 1: Secure - No hardcoded secrets
const apiCall = (token) => {
  fetch("https://api.example.com/data", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// ✅ Positive Case 2: Secure - Uses env variable
const secret = process.env.API_SECRET;

// ❌ Negative Case 1: Insecure - Hardcoded API key
const hardcodedKey = "AIzaSyD-fake-key-value"; // should be flagged

// ❌ Negative Case 2: Insecure - Hardcoded password
const dbPassword = "password123"; // should be flagged
