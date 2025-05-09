// ✅ Positive Case 1: Secure - Validates user input
function handleUserInput(input) {
  if (typeof input === "string" && input.length < 50) {
    return sanitize(input);
  }
}

// ✅ Positive Case 2: Secure - Uses schema validation
const Joi = require("joi");
const schema = Joi.object({ username: Joi.string().alphanum().required() });

// ❌ Negative Case 1: Insecure - No input validation
function saveInput(input) {
  database.insert(input); // raw, unvalidated
}

// ❌ Negative Case 2: Insecure - Accepts any input blindly
app.post("/login", (req, res) => {
  const user = req.body.user; // no checks
  res.send(`Logged in as ${user}`);
});
