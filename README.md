# minecraft-server

Подключение:
- ssh king@burivuhi.ru -p 322

Удаляем старые папки:
- rm -rf config
- rm -rf defaultconfigs
- rm -rf mods
- rm -rf world/serverconfig (название папки с миром может отличаться)
- rm -rf dynmap/renderdata

Загружаем новые папки с локальной машины на сервер:
- scp -P 322 -r config/ king@burivuhi.ru:/opt/minecraft/
- scp -P 322 -r emotes king@burivuhi.ru:/opt/minecraft
- scp -P 322 -r defaultconfigs king@burivuhi.ru:/opt/minecraft
- scp -P 322 -r mods king@burivuhi.ru:/opt/minecraft
- scp -P 322 -r dynmap/renderdata king@burivuhi.ru:/opt/minecraft/dynmap/




Копируем серверные настройки модов в папку с миром:
- cp -R defaultconfigs world/serverconfig

Запускаем сервер в отдельном приложении:
- Добавляем "nogui" к run.sh и run.bat в конце строки с запуском java
- screen -ls
- screen -r ИЛИ screen
- ./run.sh
- ctrl+a+d

Скачать логи:
- scp -P 322 -r king@burivuhi.ru:/opt/minecraft/logs/ .

Порт для карты мира:
- 81.90.180.130:25565

====

Настройка сервера:
1. sudo apt install openjdk-17-jre-headless
2. apt install screen
3. 
- cd /opt
- mkdir minecraft
- cd minecraft
4.
- wget https://maven.minecraftforge.net/net/minecraftforge/forge/1.19.2-43.3.7/forge-1.19.2-43.3.7-installer.jar
- java -jar forge-1.19.2-43.3.7-installer.jar --installServer
- rm forge-1.19.2-43.3.7-installer.jar
- rm forge-1.19.2-43.3.7-installer.jar.log
5.
- nano eula.txt
- eula=true
6. nano server.properties
7. sudo ufw allow 25565
8. 
- sudo nano /etc/systemd/system/minecraft.service

```
[Unit]
Description=Minecraft Server

[Service]
WorkingDirectory=/opt/minecraft/

Restart=always

User=minecraft
Group=minecraft

ExecStart=/usr/bin/screen -DmS minecraft-server ./run.sh
ExecStop=/usr/bin/screen -p 0 -S minecraft-server -X eval 'stuff "say SERVER SHUTDOWN"\015'
ExecStop=/usr/bin/screen -p 0 -S minecraft-server -X eval 'stuff "save-all"\015'
ExecStop=/usr/bin/screen -p 0 -S minecraft-server -X eval 'stuff "stop"\015'

[Install]
WantedBy=multi-user.target
```

- sudo systemctl enable minecraft.service



disable elytra movement check - true
sleep percentage - 66
respawn location radius - 1

spawn phantoms - false
spawn pillager patroul - false
spawn wardens - false

update fire - false

reduce debug info - true