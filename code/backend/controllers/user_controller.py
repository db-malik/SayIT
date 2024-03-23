# controllers/user_controller.py

import mysql.connector
from database.db_config import get_database_connection

def get_users():
    cnx = get_database_connection()
    cursor = cnx.cursor()
    query = "SELECT * FROM users"
    cursor.execute(query)
    users = cursor.fetchall()
    cursor.close()
    cnx.close()
    return users

def insert_user(user):
    cnx = get_database_connection()
    cursor = cnx.cursor()
    query = "INSERT INTO users (username, email, password, create_time) VALUES (%s, %s, %s, %s)"
    current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    cursor.execute(query, (user["username"], user["email"], user["password"], current_time))
    cnx.commit()
    cursor.close()
    cnx.close()

