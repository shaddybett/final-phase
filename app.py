from flask import Flask,jsonify,request
from flask_restful import Api
from flask_migrate import Migrate
from models import db,Admin,Teacher,Student

app = Flask(__name__)
# api = Api(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///final.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db.init_app(app)

# @app.route('login',methods=['GET'])
# def login():
#     data = request.get_json()
#     email = data.get('email')
#     existing_user = Admin.query.filter_by(email=email).first()
#     if existing_user:
#         return jsonify({'message':'Login successful'}),200
#     else :
#         return jsonify ({'error':'Invalid details'}),404


# @app.route('login',methods=['GET'])
# def login():
#     data = request.get_json()
#     email = data.get('email')
#     existing_user = Teacher.query.filter_by(email=email).first()
#     if existing_user:
#         return jsonify({'message':'Login successful'}),200
#     else :
#         return jsonify ({'error':'Invalid details'}),404

# @app.route('login',methods=['GET'])
# def login():
#     data = request.get_json()
#     email = data.get('email')
#     existing_user = Student.query.filter_by(email=email).first()
#     if existing_user:
#         return jsonify({'message':'Login successful'}),200
#     else :
#         return jsonify ({'error':'Invalid details'}),404
