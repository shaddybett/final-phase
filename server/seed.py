from app import app,db
from models import Admin,Teacher,Student

with app.app_context():
    admins = [Admin(
        username='Kai',
        email='kai@gmail.com',
        password='12345'
    )]
    db.session.add_all(admins)
    db.session.commit()
    teachers = [Teacher(
        username = 'Jack',
        email = 'jack@gmail.com',
        password = '12345'
    )]
    db.session.add_all(teachers)
    db.session.commit()

    students = [Student(
        username = 'star',
        email = 'star@gmail.com',
        passsword = '12345'
    )]
    db.session.add_all(students)
    db.session.commit()