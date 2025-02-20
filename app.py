from flask import Flask
from extensions import db, security
from create_initial_data import create_data
import views
import resources

def create_app():
    app = Flask(__name__)

    app.config['SECRET_KEY'] = 'this_should-be*secret'
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///data.db"
    app.config['SECURITY_PASSWORD_SALT'] = 'salty-password'

    db.init_app(app)

    # with app.app_context():
    #     from models import User, Role
    #     from flask_security import SQLAlchemyUserDatastore

    #     user_datastore = SQLAlchemyUserDatastore(db, User, Role)

    #     security.init_app(app, user_datastore)

    #     db.create_all()
    #     create_data(user_datastore)

    views.create_view(app)
    
    # setup API
    # resources.api.init_app(app)

    app.config["WTF_CSRF_CHECK_DEFAULT"] = False
    app.config["SECURITY_CSRF_PROTECT_MECHANISHMS"] = []
    app.config["SECURITY_CSRF_IGNORE_UNAUTH_ENDPOINTS"] = True

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)

    