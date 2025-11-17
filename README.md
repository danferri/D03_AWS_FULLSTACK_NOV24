# Projeto - Scholarship Fullstack NodeJS/React com AWS

🚀 **Projeto desenvolvido no programa de Scholarship Fullstack NodeJS/React com AWS da CompassUOL**

👤 **Autor:** Daniel Ferri

🌸 **Nome da Aplicação:** StackOverShop 🌱

---

## ⚠️ Status do Projeto: Deploy Desativado

> **Observação:** O deploy desta aplicação foi realizado em uma conta AWS temporária fornecida pela Compass UOL durante o programa de bolsa. Como o programa foi encerrado, a conta foi desativada e **o link de produção não está mais ativo.**
>
> O objetivo deste repositório é demonstrar a **arquitetura de implantação** e o conhecimento adquirido nos serviços da AWS. A documentação detalhada do processo está disponível abaixo.

---



---

## 🛠️ Tecnologias Utilizadas na Arquitetura

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![AWS EC2](https://img.shields.io/badge/AWS%20EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white) ![AWS S3](https://img.shields.io/badge/AWS%20S3-569A31?style=for-the-badge&logo=amazonaws&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

---

## 📄 Sobre o Projeto e Arquitetura

Este projeto é parte de um desafio prático proposto no programa de Scholarship da CompassUOL, com foco no desenvolvimento Fullstack utilizando as tecnologias mais modernas do mercado. A primeira etapa, chamada Desafio 02, teve como objetivo desenvolver um Frontend, um BackEnd e um Banco de Dados para um aplicação, todos rodando em localhost.

Nessa segunda etapa, chamada Desafio 03, foi proposto executar o projeto desenvolvido no Desafio 02 na nuvem da AWS. A arquitetura de implantação utilizada foi:

- **BackEnd:** A API desenvolvida em **Node.js** foi hospedada em uma instância **AWS EC2**.
- **FrontEnd:** A interface criada com **React.js** foi hospedada como um site estático em um bucket **AWS S3**.
- **Banco de Dados:** O banco **MongoDB** foi configurado e hospedado em uma segunda instância **AWS EC2**, garantindo a comunicação com o BackEnd.

---

## 📚 Documentação Detalhada da Implantação (Passo a Passo)

Todo o processo de configuração e deploy da infraestrutura na AWS foi documentado. Você pode encontrar os guias detalhados com imagens e comandos nos seguintes arquivos:

- **[Guia: Criando a Instância EC2 da API](./api-instancia.md)**
- **[Guia: Criando a Instância EC2 do Banco](./banco-instancia.md)**
- **[Guia: Deploy do Backend (API)](./deploy-backend.md)**
- **[Guia: Deploy do Frontend (S3)](./deply-fronted.md)**

---

## ✨ Diferenciais

- Utilização de serviços escaláveis e confiáveis da AWS.
- Integração BackEnd e FrontEnd para oferecer uma aplicação completa.
- Banco de dados em **MongoDB** para maior flexibilidade e desempenho.
- Desenvolvimento com foco em boas práticas de código e otimização.
