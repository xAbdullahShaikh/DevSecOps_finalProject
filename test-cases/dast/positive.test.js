// ✅ SQL Injection - Safe: Parameterized query
const getUserById = (id, db) => {
  db.query("SELECT * FROM users WHERE id = ?", [id]);
};

// ✅ XSS - Safe: Proper escaping
const safeOutput = (input) => {
  const div = document.createElement("div");
  div.innerText = input; // innerText escapes HTML
  document.body.appendChild(div);
};
