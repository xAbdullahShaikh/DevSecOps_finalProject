// ❌ SQL Injection - Vulnerable: String concatenation
const getUserByIdUnsafe = (id, db) => {
  db.query("SELECT * FROM users WHERE id = " + id);
};

// ❌ XSS - Vulnerable: Injected unsanitized HTML
const unsafeOutput = (input) => {
  const div = document.createElement("div");
  div.innerHTML = input; // vulnerable to XSS
  document.body.appendChild(div);
};
