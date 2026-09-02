from _init_ import create_app
from models import Usuarios
from models import Locais
from models import TiposMaterial
from models import LocaisMateriais

def mascarar_cpf(cpf):
    if not cpf:
        return ""
    return f"***.***.***-{cpf[-2:]}"
app = create_app()

with app.app_context():

    usuarios = Usuarios.query.all()

    print("=== USUÁRIOS CADASTRADOS ===")

    if not usuarios:
        print("Nenhum usuário cadastrado.")
    else:
        for usuarios in usuarios:
            print("-------------------")
            print("ID:", usuarios.id_usuario)
            print("Nome:", usuarios.nome)
            print("Email:", usuarios.email)
            print("Cpf:", mascarar_cpf(usuarios.cpf))
            print("telefone:", usuarios.telefone)
            print("endereço:", usuarios.endereco)
            


    locais = Locais.query.all()
    
    print("====Locais de Coleta=====")
    
    if not locais:
        print("Nenhum")
    else:
        for locais in locais:
            print("-----------------")
            print("ID:", locais.id_local)
            print("Nome:", locais.nome)
            print("Endereço:", locais.endereco)
            print("Horário de Abertura:", locais.horario_abertura)
            print("Horário de Fechamento:", locais.horario_fechamento)
            print("Data de Cadastro:", locais.data_cadastro)
                      
    tiposMaterias = TiposMaterial.query.all()
    
    print("====Tipos de Materiais=====")
    
    if not tiposMaterias:
        print("Nenhum")
    else:
        for tiposMaterias in tiposMaterias:
            print("-----------------")
            print("ID:", tiposMaterias.id_material)
            print("Nome:", tiposMaterias.nome)
            print("Instruções de Preparo:", tiposMaterias.instrucoes_preparo)