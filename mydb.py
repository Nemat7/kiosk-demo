import pymysql

dataBase = pymysql.connect(
    host='localhost',
    user='root',
    passwd='nemat12345'
)

cursorObject = dataBase.cursor()

cursorObject.execute("CREATE DATABASE kiosk_db")

print("All done!")