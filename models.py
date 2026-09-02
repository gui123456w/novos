from database import db
from werkzeug.security import generate_password_hash, check_password_hash


class Usuarios(db.Model):
    __tablename__ = "usuarios"

    id_usuario = db.Column(db.Integer, primary_key=True, autoincrement=True)

    nome = db.Column(db.String(100), nullable=False)

    email = db.Column(db.String(120), unique=True, nullable=False)

    senha = db.Column(db.String(200), nullable=False)

    telefone = db.Column(db.String(11), nullable=True)

    cpf = db.Column(db.String(11), unique=True, nullable=True)
    
    endereco = db.Column(db.String(255), nullable=True)

    id_endereco = db.Column( db.Integer, db.ForeignKey("endereco.id_endereco"), nullable=True )

    tipo_usuario = db.Column(
        db.String(20),
        nullable=False,
        default="usuario"
    )
    
    data_criacao = db.Column(
        db.DateTime,
        server_default=db.func.current_timestamp()
        
    )

    def criar_senha(self, senha):
        self.senha = generate_password_hash(senha)

    def verificar_senha(self, senha):
        return check_password_hash(self.senha, senha)
    
    def mascarar_cpf(cpf):
        return f"***.***.***-{cpf[-2:]}"
    
class Endereco(db.Model):
     __tablename__ = "endereco" 
     id_endereco = db.Column( db.Integer, primary_key=True, autoincrement=True )
     descricao = db.Column( db.String(200), nullable=False )


class Locais(db.Model): 
    __tablename__ = "locais" 
    id_local = db.Column( db.Integer, primary_key=True, autoincrement=True )
    nome = db.Column( db.String(100), nullable=False ) 
    endereco = db.Column( db.String(200), nullable=False ) 
    horario_abertura = db.Column( db.Time, nullable=True )
    horario_fechamento = db.Column( db.Time, nullable=True ) 
    data_cadastro = db.Column( db.DateTime, server_default=db.func.current_timestamp() )

class TiposMaterial(db.Model):
    __tablename__ = "tiposMaterial"
    id_material = db.Column( db.Integer, primary_key=True, autoincrement=True ) 
    nome = db.Column( db.String(50), unique=True, nullable=False ) 
    instrucoes_preparo = db.Column( db.Text, nullable=True )    

class LocaisMateriais(db.Model):
    __tablename__ = "locais_materiais" 
    id_local = db.Column( db.Integer, db.ForeignKey("locais.id_local"), primary_key=True ) 
    id_material = db.Column( db.Integer, db.ForeignKey("tiposMaterial.id_material"), primary_key=True )
    
    local = db.relationship(
        "Locais",
        backref="materiais",
        lazy=True
    )
    material = db.relationship(
        "TiposMaterial",
        backref="locais",
        lazy=True
    )
    
    
class RecuperacaoSenha(db.Model):
    __tablename__ = "recuperacao_senha"

    id_recuperacao = db.Column(
        db.Integer,
        primary_key=True,
        autoincrement=True
    )

    id_usuario = db.Column(
        db.Integer,
        db.ForeignKey("usuarios.id_usuario"),
        nullable=False
    )

    token = db.Column(
        db.String(100),
        unique=True,
        nullable=False
    )

    data_criacao = db.Column(
        db.DateTime,
        server_default=db.func.current_timestamp()
    )

    expiracao = db.Column(
        db.DateTime,
        nullable=False
    )

    usado = db.Column(
        db.Boolean,
        default=False,
        nullable=False
    )

    usuario = db.relationship(
        "Usuarios",
        backref="recuperacao_senha",
        lazy=True
    )
from datetime import datetime
from database import db


class TermosAceite(db.Model):
    __tablename__ = "termos_aceite"

    id_aceite = db.Column(
        db.Integer,
        primary_key=True,
        autoincrement=True
    )

    id_usuario = db.Column(
        db.Integer,
        db.ForeignKey("usuarios.id_usuario"),
        nullable=False
    )

    versao = db.Column(
        db.String(20),
        nullable=False
    )

    data_aceite = db.Column(
        db.DateTime,
        default=datetime.now,
        nullable=False
    )

    ip = db.Column(
        db.String(45),
        nullable=True
    )
    