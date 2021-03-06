import mysql.connector

# Connect
db = mysql.connector.connect(host="localhost",
                     user="admin",
                     passwd="",
                     db="codefoo")

cursor = db.cursor()

# Execute SQL select statement
cursor.execute("SELECT * FROM location")

# Commit your changes if writing
# In this case, we are only reading data
# db.commit()

# Get the number of rows in the resultset
numrows = cursor.rowcount

# Get and display one row at a time
for x in range(0, numrows):
    row = cursor.fetchone()
    print(row[0], "-->", row[1])

# Close the connection
db.close()
