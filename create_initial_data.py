from flask_security.datastore import SQLAlchemyUserDatastore
from flask_security.utils import hash_password
from extensions import db

def create_data(user_datastore:SQLAlchemyUserDatastore):
    print("###Creating Data###")

    # create roles
    user_datastore.find_or_create_role(name='admin', description="Admin")
    user_datastore.find_or_create_role(name='user', description="User")

    # create user data
    if not user_datastore.find_user(email="admin@gmail.com"):
        user_datastore.create_user(email="admin@gmail.com", password=hash_password("admin"), active=True, roles=['admin'])

    if not user_datastore.find_user(email="user@gmail.com"):
        user_datastore.create_user(email="user@gmail.com", password=hash_password("user"), active=False, roles=['user'])

    db.session.commit()

