from _init_ import create_app
from database import db

import models 

app = create_app()

with app.app_context():

    db.create_all()

    print("Banco criado com sucesso!")