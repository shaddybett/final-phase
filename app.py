from flask import Flask,jsonify,request
from flask_restful import Api
from flask_migrate import Migrate
from models import db,Admin,Teacher,Student

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///final.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
Migrate(app,db)

@app.route('/admin',methods=['GET'])
def admin():
    data = request.get_json()
    email = data.get('email')
    existing_admin = Admin.query.filter_by(email=email).first()
    if existing_admin:
        return jsonify({'message':'Login successful'}),200
    else :
        return jsonify ({'error':'Invalid details'}),404


@app.route('/teacher',methods=['GET'])
def teacher():
    data = request.get_json()
    email = data.get('email')
    existing_teacher = Teacher.query.filter_by(email=email).first()
    if existing_teacher:
        return jsonify({'message':'Login successful'}),200
    else :
        return jsonify ({'error':'Invalid details'}),404

@app.route('/student',methods=['GET'])
def student():
    data = request.get_json()
    email = data.get('email')
    existing_student = Student.query.filter_by(email=email).first()
    if existing_student:
        return jsonify({'message':'Login successful'}),200
    else :
        return jsonify ({'error':'Invalid details'}),404
