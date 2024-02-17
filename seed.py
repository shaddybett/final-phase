from app import app,db
from models import Admin

with app.app_context():
    admins = [Admin(
        username='Bett',
        email='bett@gmail.com',
        password='12345'
    )]
    db.session.add(admins)
    db.session.commit()