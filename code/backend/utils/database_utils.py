from database.db_config import get_database_connection


def execute_query(query, params=None):
    cnx = get_database_connection()
    cursor = cnx.cursor()
    if params:
        cursor.execute(query, params)
    else:
        cursor.execute(query)
    result = cursor.fetchall()
    cursor.close()
    cnx.close()
    return result