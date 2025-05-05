import sqlite3

def get_user(user_id):
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    query = f"SELECT * FROM users WHERE id = '{user_id}'"  # Noncompliant: vulnerable to SQLi
    cursor.execute(query)
    return cursor.fetchall()
