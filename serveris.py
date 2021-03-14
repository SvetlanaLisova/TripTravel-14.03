from flask import Flask, render_template, redirect, url_for, request, json, jsonify, make_response
from operator import itemgetter
import csv
import webbrowser
app = Flask(__name__)

@app.route('/')
def root():
    return render_template('index.html')

           
@app.route('/marsruti')
def marsruti():
    return render_template('routes.html')

@app.route('/komp')
def komp():
    return render_template('companions.html')

@app.route('/contacts')
def contacts():
    return render_template('contacts.html')


@app.route('/gdraugi')
def gdraugi():
   with open('draugi.json', 'r', encoding='UTF-8') as myfile:
        draugusaraksts = myfile.read()   
   return draugusaraksts
  


# parbaude loginam - vai eksiste user
@app.route('/yn', methods=['POST'])
def login():
   login = False
   j=json.loads(request.data)
   with open('unames.csv', 'r', encoding='UTF-8') as csvfile:
      csv_reader = csv.reader(csvfile, delimiter = ';')
      username = j['uname']
      password = j['pwd']
      for row in csv_reader:
         if row[0]==username and row[1]==password:
            login = True
            break
   if login == True:
        myresp = 'JAA'
   else:
        myresp = 'NEE'
   return (myresp)

#logina parbaude   
@app.route('/lgnchk', methods=['POST'])
def lgnchk():
   lgnchk = True
   j=json.loads(request.data)
   with open('unames.csv', 'r', encoding='UTF-8') as csvfile:
      csv_reader = csv.reader(csvfile, delimiter = ';')
      chkusername = j['runame']
      for row in csv_reader:
         if row[0]==chkusername:
            lgnchk = False
            break
   if lgnchk == False:
        myresp = 'SAKRIIT'
   else:
        myresp = 'NESAKRIIT'
   return (myresp)

# registracija   
@app.route('/rgstr', methods=['POST'])
def rgstr():
   rgstr = False
   j=json.loads(request.data)
   addname = j['reguname']
   addpwd = j['regpwd']
   with open('unames.csv', 'a', newline="", encoding='UTF-8') as csvfile:
     csv_writer = csv.writer(csvfile, delimiter=';')
     adduser = [addname, addpwd]
     csv_writer.writerow(adduser)
     csvfile.close()
     
     with open('unames.csv', 'r', encoding='UTF-8') as csvfile:
       csv_reader = csv.reader(csvfile, delimiter = ';')
       for row in csv_reader:
          if row[0]==addname and row[1]==addpwd:
            rgstr = True
            break

   if rgstr == True:
        myresp = 'IZDEVAS'
   else:
        myresp = 'NEIZDEVAS'
   return (myresp)

# add 
@app.route('/add', methods=['POST'])
def add():
   rgstr = False
   j=json.loads(request.data)
   addname = j['reguname']
   addsurname = j['regsurname']
   addphone = j['regphone']
   
   user = ({"Name": addname, "Surname": addsurname, "Phone_nr": addphone })
   with open('draugi.json', 'r', encoding='UTF-8') as myfile: dati = json.loads(myfile.read())
   dati["draugi"].append(user)
   with open('draugi.json', 'w', encoding='UTF-8') as myfile: myfile.write(json.dumps(dati))
   myfile.close()

   myresp = 'IZDEVAS'
   return (myresp)
   

if __name__ == '__main__':
    app.run(threaded=True, port=5000, debug=True)