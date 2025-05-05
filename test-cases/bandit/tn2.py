# [Negative] Parameterized query using placeholders
cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))

# [Negative] ORM usage (e.g., SQLAlchemy)
user = session.query(User).filter(User.id == user_id).first()
