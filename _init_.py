import os
from flask import Flask
from dotenv import load_dotenv
from werkzeug.middleware.proxy_fix import ProxyFix

from database import db
from extensions import mail


def create_app(test_config=None):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    dotenv_path = os.path.join(base_dir, ".env")
    load_dotenv(dotenv_path)

    # A configuração só é importada depois do .env local ser carregado.
    # No Render, as variáveis do painel/Blueprint têm prioridade.
    from config import Config

    app = Flask(__name__)
    app.config.from_object(Config)

    if os.getenv("RENDER"):
        app.wsgi_app = ProxyFix(
            app.wsgi_app,
            x_for=1,
            x_proto=1,
            x_host=1,
        )

    if test_config:
        app.config.update(test_config)

    db.init_app(app)
    mail.init_app(app)

    from routes import main
    app.register_blueprint(main)

    @app.get("/health")
    def health():
        return {"status": "ok"}, 200

    return app
