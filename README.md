# Socket Server

Reconstruir modules de Node
```
npm install
```

Generar el DIST
```
tsc -w
```

Levantar servidor, cualquiera de estos dos comandos
```
nodemon dist/
node dist/
```

este es un ejemplo para excluir una carpeta que ya se encontraba con seguimiento del proyecto.

Esto te ocurre porque ya tenias esa carpeta dentro de tus commits.

Para poder quitarla, ejecuta git rm -r --cached /dist