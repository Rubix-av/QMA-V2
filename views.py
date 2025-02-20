from flask import render_template, request, jsonify
from flask_security import SQLAlchemyUserDatastore
from flask_security.utils import hash_password, verify_password
from extensions import db

def create_view(app):

    @app.route('/')
    def home():
        return render_template('index.html')
    
    @app.route('/user-login')
    def user_login():
        
        return "Hello user-login page"