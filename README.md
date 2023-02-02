# AveonlineWeb
Esta aplicación está construida con angular, bootstrap y angular material.
Está implementa protección de login bajo el esquema de jwt (https://jwt.io/), esto permite tener seguridad de punta a punta respecto a toda la comunicación con el backend, de igual forma cuenta con protección de rutas para toda la navegación.

Funcionalmente se puede crear, editar, eliminar y consultar usuarios, clientes, roles, productos y órdenes de compra, además de tener inicio de sesión y por ende acceso restringido.

## Requisitos previos

### Programas
1. [x] Node https://nodejs.org/es/
2. GIT

### Versiones
1. [x] Node v14.20.1npm
2. [x] Npm v6.14.17
3. [x] Angular v14.2.12
4. [x] Angular cli v14.2.10

## Instalación
1. [x] Descargar el repositorio de https://github.com/luissantaospina/aveonline-web.git con el comando `git clone https://github.com/luissantaospina/aveonline-web.git`
2. [x] Moverse a la carpeta del proyecto `cd aveonline-web`
3. [x] Instalar dependencias `npm install`
4. [x] Configurar la url base donde esta corriendo el backend para permitir la comunicación entre ambos, esto se realiza en el archivo `src/environments/environment.ts` y se cambia la variable `baseUrl` colocando la url del backend. Solo debe cambiar o reemplazar `http://127.0.0.1:8000`
![base.png](src%2Fassets%2Fbase.png)


## Inicio
1. [ ] Iniciar aplicación `ng serve`
2. [ ] Generalmente se despliega en http://localhost:4200/ (verificar puesto que esto puede cambiar)
3. [ ] Para iniciar sesión se cuenta con 2 usuarios base:

| Nombre            | Email | Clave    | Rol |
-------------------|-------|----------|----|
   | Jhon Doe          | administrador@aveonline.co | password | Administrador |
   | Luis Doe          | usuario@aveonline.co | password | Usuario |

## Previos
![login.png](src%2Fassets%2Flogin.png)
![users.png](src%2Fassets%2Fusers.png)
![create.png](src%2Fassets%2Fcreate.png)
