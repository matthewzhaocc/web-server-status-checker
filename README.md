# web-server-status-checker

Useage:

install nginx
```sudo apt install nginx```
configure nginx
edit /etc/nginx/sites-avaliable/default

set the root as /home/\<your username\>/web-server-status-checker/

save and restart nginx
```systemctl restart nginx```
  
install npm nodejs and python3
```sudo apt install npm nodejs python3```

change to directory and install nodejs pakage
```cd web-server-status-checker && npm install ping```

edit the app.js to check for the servers in the hosts array.

run controller.py
```python3 controller.py```
