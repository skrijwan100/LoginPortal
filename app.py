from flask import Flask,render_template,redirect,request,flash,url_for
import mysql.connector
import time

app = Flask(__name__)
app.secret_key = 'vwqolx$%jeu'
db=mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="SKRIJWAN@2006",
    database="student"
)
cursor=db.cursor()


@app.route("/", methods=['POST', 'GET'])
def index():
    cursor = None  # Initialize cursor before the try block
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['pass']
        try:
            cursor = db.cursor()  # Ensure cursor is created for each use
            cursor.execute("SELECT * FROM users WHERE email=%s", (email,))
            user = cursor.fetchone()
            
            if user:
                # Check if the password matches
                if password == user[3] and email == user[2]:  # Assuming user[3] is the password field
                    return redirect("/calculator")
                else:
                    flash("Password is incorrect")
            else:
                flash("You don't have an account. Click register for a new account.")
        except mysql.connector.Error as err:
            flash("Database error: {}".format(err))
        except Exception as e:
            flash("An error occurred: {}".format(e))
        finally:
            if cursor is not None:  # Ensure cursor is not None before closing
                cursor.close()
    
    return render_template('index.html')

@app.route("/register", methods=['POST', 'GET'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        gmail = request.form['gmail']
        password = request.form['password']
        cursor = db.cursor() 
        cursor.execute("SELECT * FROM users WHERE email=%s", (gmail,))
        user = cursor.fetchone()
        cursor.close()
        if user:   
            if(gmail==user[2]):
                flash("You alraedy have a account on this email.")
                return redirect("/register")
        
        try:
            cursor = db.cursor()  # Create a cursor object
            cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)", (name, gmail, password))
            db.commit()  # Commit the changes to the database
        except mysql.connector.Error as err:
            print(f"Error: {err}")
            db.rollback()  # Roll back any changes if there was an error
        finally:
            cursor.close()  # Close the cursor
    
        return redirect("/")

    return render_template('register.html')

@app.route("/calculator")
def calculator():
    return render_template('calculator.html')

@app.route("/password",methods=['POST','GET'])
def password():
    if request.method=='POST':
        oldpassword=request.form['oldpassword']
        newpassword=request.form['newpassword']
        cursor=db.cursor()
        try:
            cursor.execute("SELECT password FROM users WHERE password=%s", (oldpassword,))
            uerpassword=cursor.fetchone()
            if uerpassword is None:
                flash("Incorrect old password.")
                return redirect("/password")

            print(newpassword)
            print(uerpassword[0])
            if uerpassword[0]==oldpassword:
                cursor.execute("SET SQL_SAFE_UPDATES = 0")
                cursor.execute("UPDATE users SET password=%s WHERE password=%s",(newpassword,oldpassword))
                flash("Password updated successfully.")
                db.commit()
                return redirect("/")
           
            return redirect("/password")
        except Exception as e:
            db.rollback()
        finally:
             cursor.close()


    return render_template('forget.html')

if __name__=="__main__":
    app.run(debug=True,port=7000)

