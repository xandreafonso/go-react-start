Gerar o container Docker do projeto:

```shell
docker build -t newsletterapp.azurecr.io/newsletter-app:latest .
```

Rodar o container Docker gerado:

```shell
docker run -p 3000:3000 --name newsletter-app newsletterapp.azurecr.io/newsletter-app
```