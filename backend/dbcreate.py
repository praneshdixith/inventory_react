import sqlite3

# Connect to SQLite database file
conn = sqlite3.connect('user_credentials.db')

try:
    # Create a cursor object
    cursor = conn.cursor()

    # Define SQL statement to create a users table
    create_table_query = '''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    );
    '''

    # Execute the SQL statement to create the table
    cursor.execute(create_table_query)

    # Commit changes
    conn.commit()

    print("Table created successfully")
except sqlite3.Error as e:
    print("Error:", e)
finally:
    # Close connection
    conn.close()
