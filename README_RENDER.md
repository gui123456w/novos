# Sustenta+ — deploy no Render

Este diretório já está preparado para deploy como um **Blueprint** do Render.

## Deploy recomendado

1. Envie **o conteúdo deste diretório** para a raiz de um repositório no GitHub.
2. No Render, abra **New > Blueprint** e conecte esse repositório.
3. Confirme os recursos definidos em `render.yaml`.
4. Aplique o Blueprint. O Render criará o serviço web, o PostgreSQL, a chave de
   sessão e a variável `DATABASE_URL` automaticamente.
5. Para ativar a recuperação de senha por Gmail, adicione `MAIL_USERNAME` e
   `MAIL_PASSWORD` no painel do serviço. Use uma senha de aplicativo.

O primeiro start executa `db.create_all()` de forma idempotente e depois inicia
o Gunicorn. O health check fica disponível em `/health`.

## Configuração manual (alternativa)

- Runtime: `Python 3`
- Build Command: `pip install -r requirements.txt`
- Start Command: `python criar_banco.py && gunicorn app:app`
- Health Check Path: `/health`
- Variáveis obrigatórias: `SECRET_KEY` e `DATABASE_URL`
- Variáveis de e-mail: `MAIL_USERNAME` e `MAIL_PASSWORD`

Para usar um PostgreSQL externo, `DATABASE_URL` também pode ser substituída por
`DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT` e `DB_NAME`. Quando `DB_PORT`
for `3306`, a aplicação usa automaticamente `mysql+pymysql`; para outros casos,
defina `DB_DIALECT` explicitamente.

Não envie o arquivo `.env` nem a pasta `.venv` ao GitHub.
