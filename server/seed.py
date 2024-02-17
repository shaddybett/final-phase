from server.app import app,db
from server.models import Admin

with app.app_context():
    admins = [Admin(
        username='Kai',
        email='kai@gmail.com',
        password='12345'
    )]
    db.session.add_all(admins)
    db.session.commit()