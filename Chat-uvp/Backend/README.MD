# Chat UVP
## A unos click de tu mano

<img align="left" width="" height="190px" src="https://1000marcas.net/wp-content/uploads/2021/06/Django-Logo.png">

<img align="left" width="" height="210px" src="https://www.vectorlogo.zone/logos/python/python-icon.svg">
<br><br><br><br><br><br><br><br<br><br><br>

#### Instrucciones de como ejecutar el proyecto

1.  Conseguir una maquina con Ubuntu 20.04 de prefrencia en IONOS o AWS

2.  Instalar python3 y pip3
```sh
sudo apt-get install python3
sudo apt-get install python3-pip
```
3.  Instalar virtualenv
```sh
sudo apt-get install virtualenv
```
4.  Crear un entorno virtual
```sh
virtualenv -p python3 env
``` 
5.  Activar el entorno virtual
```sh
source env/bin/activate
```
6. clonar el repostorio
```sh
git clone https://github.com/JoseVel4zquez/chatApi
```

7. Instalar las dependencias del proyecto
```sh
pip3 install -r requirements.txt
```
8.  instalar nginx
```sh
sudo apt-get install nginx
``` 
9.  instalar gunicorn
```sh
pip3 install gunicorn
```
10.  Crear un archivo de configuracion de gunicorn
```sh
sudo nano /etc/systemd/system/gunicorn.service
```
11.  Copiar el siguiente codigo en el archivo de configuracion de gunicorn
```js
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=root
Group=www-data
WorkingDirectory=/home/chatApi
ExecStart=/home/chatApi/myprojectenv/bin/gunicorn \
          --access-logfile - \
          --workers 3 \
          --bind unix:/run/gunicorn.sock \
          chatApi.wsgi:application

[Install]
WantedBy=multi-user.target
```
12.  Crear un archivo de configuracion de nginx
```sh
sudo nano /etc/nginx/sites-available/chatApi
``` 
13.  Copiar el siguiente codigo en el archivo de configuracion de nginx
```sh
server {
    listen 80;
    server_name 216.250.118.104;

    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        root /home/chatApi/chatApi;

    }


    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
```
14.  Crear un enlace simbolico
```sh
sudo ln -s /etc/nginx/sites-available/chatApi /etc/nginx/sites-enabled
``` 
15.  Reiniciar nginx
```sh
sudo systemctl restart nginx
```
16.  Reiniciar gunicorn
```sh
sudo systemctl restart gunicorn
```
17. Inicias el servicio de djnago
```sh
python3 manage.py runserver
```
18. cosntula la direcion ip de tu maquina en el navegador (la sig es un ejemplo)
```sh
http://216.250.118.104/
```
Deberia retornar algo como esto
```sh
Chat api
```
> Nota: el servicio debe quedarse corriendo incluso sin una sesión ssh iniciada en la maquina.

19. Ingresar a la carpeta "entrenamiento" y se ejecuta el archivo "training.py".
```sh
# python3 training.py
```

```sh
  ____ _   _    _  _____     _   ___     ______  
 / ___| | | |  / \|_   _|   | | | \ \   / /  _ \ 
| |   | |_| | / _ \ | |_____| | | |\ \ / /| |_) |
| |___|  _  |/ ___ \| |_____| |_| | \ V / |  __/ 
 \____|_| |_/_/   \_\_|      \___/   \_/  |_|   
```