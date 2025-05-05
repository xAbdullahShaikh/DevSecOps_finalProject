# Negative: no hardcoded secret
import os

def connect():
    password = os.getenv("DB_PASSWORD")  # Compliant
    return password
