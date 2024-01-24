Para baixar o módulo do sqlite3:

```shell
apt-get install gcc
CGO_ENABLED=1 go get github.com/mattn/go-sqlite3
```

Criar tabela no sqlite3. Primeiro instalar:

```shell
apt install sqlite3
```

Depois cria o banco ao mesmo tempo que abre o prompt para executar SQL no mesmo:

```shell
sqlite3 db.sqlite3
```

Vai abri o prompt do sqlite3 e é só criar a tabela:

```sql
create table tabela (code varchar(255) not null, created_at datetime not null, updated_at datetime not null);
```