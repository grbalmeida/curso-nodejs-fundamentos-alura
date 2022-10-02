# Dependências

### Comando para instalar o Express

```
npm install express@4.16.3 --save-exact
```

### Comando para instalar o Nodemon

```
npm install nodemon@1.18.4 --save-dev --save-exact
```

### Comando para instalar Marko

```
npm install marko@4.13.4-1 --save-exact
```

# Nodemon e MarkoJS

O Nodemon possui um pequeno bug que o faz reprocessar indefinidamente os arquivos de template com a extensão .marko transformando-os em arquivos com a extensão .marko.js, mesmo que não tenhamos feito nenhuma modificação em nossos templates.