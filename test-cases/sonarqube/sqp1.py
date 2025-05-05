# Positive: hardcoded password
def connect():
    password = "SuperSecret123"  # Noncompliant: hardcoded secret
    return password
# Positive: SQL injection
