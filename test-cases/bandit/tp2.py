# [Positive] Raw SQL string with unsanitized input
user_id = input("Enter your ID: ")
query = "SELECT * FROM users WHERE id = '%s'" % user_id

# [Positive] String concatenation for query
query = "DELETE FROM users WHERE name = '" + user_input + "'"
