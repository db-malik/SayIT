import mysql.connector

def get_database_connection():
    
    
    cnx = mysql.connector.connect(
        user="administrateur",
        password="sayIT2024",
        host="sayit-mysql-db.mysql.database.azure.com",
        port=3306,
        database="sayit_db",
        ssl_ca="{ca-cert filename}",
        ssl_disabled=False
    )
    if cnx.is_connected():
        print("Connected to Azure MySQL database")
    else:
        print("Connection failed")
    return cnx
