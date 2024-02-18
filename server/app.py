from flask import Flask,jsonify,request
from flask_restful import Api
from flask_migrate import Migrate
from models import db,Admin,Teacher,Student
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///final.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
Migrate(app,db)
CORS(app)

@app.route('/admin',methods=['POST'])
def admin():
    if request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        existing_admin = Admin.query.filter_by(username=username).first()
        if existing_admin:
            return jsonify({'message':'Login successful'}),200
        else :
            return jsonify ({'error':'Invalid details'}),404
    else:
        return jsonify({'error':'Method Not allowed'}),405    


@app.route('/teacher',methods=['POST'])
def teacher():
    if request.method == 'POST':

        data = request.get_json()
        email = data.get('email')
        existing_teacher = Teacher.query.filter_by(email=email).first()
        if existing_teacher:
            return jsonify({'message':'Login successful'}),200
        else :
            return jsonify ({'error':'Invalid details'}),404
    else:
        return jsonify ({'error':'Method Not Allowed'}),405    

@app.route('/student',methods=['POST'])
def student():
    if request.method == 'POST':

        data = request.get_json()
        email = data.get('email')
        existing_student = Student.query.filter_by(email=email).first()
        if existing_student:
            return jsonify({'message':'Login successful'}),200
        else :
            return jsonify ({'error':'Invalid details'}),404
    else:
        return jsonify ({'error':'Method Not Allowed'}),405    

if __name__=='__main__':
    app.run(debug=True,port=4000)

