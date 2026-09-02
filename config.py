import os
from urllib.parse import quote


class Config:
    SECRET_KEY = os.getenv("SECRET_KEY")

    if not SECRET_KEY:
        raise RuntimeError("SECRET_KEY não configurada.")

    DATABASE_URL = os.getenv("DATABASE_URL")

    # Também aceita o formato separado que já era usado no .env do projeto.
    if not DATABASE_URL:
        db_user = os.getenv("DB_USER")
        db_password = os.getenv("DB_PASSWORD")
        db_host = os.getenv("DB_HOST")
        db_port = os.getenv("DB_PORT", "5432")
        db_name = os.getenv("DB_NAME")

        if all((db_user, db_password, db_host, db_name)):
            db_dialect = os.getenv("DB_DIALECT")
            if not db_dialect:
                db_dialect = (
                    "mysql+pymysql"
                    if db_port == "3306"
                    else "postgresql+psycopg2"
                )

            DATABASE_URL = (
                f"{db_dialect}://{quote(db_user, safe='')}:"
                f"{quote(db_password, safe='')}@{db_host}:{db_port}/"
                f"{quote(db_name, safe='')}"
            )

    if not DATABASE_URL:
        raise RuntimeError(
            "Configure DATABASE_URL ou as variáveis DB_USER, DB_PASSWORD, "
            "DB_HOST, DB_PORT, DB_NAME e, opcionalmente, DB_DIALECT."
        )

    # Compatibilidade, caso a URL venha como postgres://
    if DATABASE_URL.startswith("postgres://"):
        DATABASE_URL = DATABASE_URL.replace(
            "postgres://",
            "postgresql://",
            1
        )

    SQLALCHEMY_DATABASE_URI = DATABASE_URL
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ENGINE_OPTIONS = {
        "pool_pre_ping": True,
        "pool_recycle": 280,
    }

    MAIL_SERVER = os.getenv("MAIL_SERVER", "smtp.gmail.com")
    MAIL_PORT = int(os.getenv("MAIL_PORT", "587"))
    MAIL_USE_TLS = True
    MAIL_USE_SSL = False
    MAIL_USERNAME = os.getenv("MAIL_USERNAME")
    MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
    MAIL_DEFAULT_SENDER = MAIL_USERNAME

    UPLOAD_FOLDER = "static/arquivo_tarefa"

    # Cookies de sessão seguros quando a aplicação estiver no Render.
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = "Lax"
    SESSION_COOKIE_SECURE = bool(os.getenv("RENDER"))
