# Configuração do MongoDB em uma Instância EC2

Este documento descreve o processo de configuração do **MongoDB** em uma instância **EC2** da AWS, incluindo a transferência de um **dump** do banco de dados local para o servidor remoto.

## 📥 Transferência do Dump do MongoDB para a Instância EC2

1. Foi feito o **dump** do Atlas **MongoDB** para o computador pessoal utilizando **MongoDB Tools**.
2. Após criar a instância **EC2**, foi utilizado o **terminal WSL** no Windows para transferir o **dump** do banco de dados para a instância com o seguinte comando:

   ```sh
   scp -i ~/ServerMongoDB_v2.pem -r ~/StackOverShop ubuntu@ec2-3-16-22-79.us-east-2.compute.amazonaws.com:/home/ubuntu/
   ```

## 🛠️ Configuração da Instância EC2

### 1️⃣ Atualização e Instalação de Dependências

Após acessar a instância via SSH, execute os seguintes comandos:

```sh
sudo apt update && sudo apt upgrade -y
```

Instale pacotes essenciais:

```sh
sudo apt install -y curl gnupg nano wget unzip
```

### 2️⃣ Adicionar a Chave GPG e o Repositório Oficial do MongoDB

Baixe e adicione a chave GPG usada para verificar a autenticidade dos pacotes do **MongoDB**:

```sh
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | sudo gpg --dearmor -o /usr/share/keyrings/mongodb-server-keyring.gpg
```

Adicione a fonte oficial do repositório do **MongoDB**:

```sh
echo "deb [signed-by=/usr/share/keyrings/mongodb-server-keyring.gpg] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Atualize os pacotes:

```sh
sudo apt update
```

### 3️⃣ Instalação e Configuração do MongoDB

Instale o **MongoDB**:

```sh
sudo apt install -y mongodb-org
```

Inicie o serviço **MongoDB**:

```sh
sudo systemctl start mongod
```

Habilite a inicialização automática:

```sh
sudo systemctl enable mongod
```

Verifique o status do serviço:

```sh
sudo systemctl status mongod
```

### 4️⃣ Configuração do **MongoDB**

Edite o arquivo de configuração:

```sh
sudo nano /etc/mongod.conf
```

Modifique as seguintes linhas:

```yaml
net:
  port: 27017
  bindIp: 0.0.0.0  # Habilita acesso externo

replication:
  replSetName: "rs0"  # Necessário para o Prisma
```

Após a edição, reinicie o **MongoDB**:

```sh
sudo systemctl restart mongod
```

### 5️⃣ Inicializar a Replicação do MongoDB

Entre no shell do **MongoDB**:

```sh
mongosh
```

Dentro do shell, execute os comandos:

```js
rs.initiate()
rs.status()
```

### 6️⃣ Restaurar o Banco de Dados

Ainda dentro do shell do **MongoDB**, crie o banco de dados:

```sh
use StackOverShop
```

Saia do **mongosh** e restaure os dados com o comando:

```sh
mongorestore --db StackOverShop ./StackOverShop
```

### 7️⃣ Testando a Configuração

Entre novamente no **MongoDB**:

```sh
mongosh
```

Verifique se o banco de dados foi restaurado corretamente:

```js
use StackOverShop
show collections
```

Para visualizar os dados:

```js
db.Plants.find().pretty()
```

## ✅ Conclusão

O banco de dados **MongoDB** está configurado e rodando corretamente na instância **EC2**. Agora ele está pronto para ser usado na aplicação!