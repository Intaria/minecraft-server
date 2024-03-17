# minecraft-server

Подключение:
- ssh king@burivuhi.ru -p 322

Обновление версии forge:
- wget https://maven.minecraftforge.net/net/minecraftforge/forge/1.19.2-43.3.7/forge-1.19.2-43.3.7-installer.jar
- java -jar forge-1.19.2-43.3.7-installer.jar --installServer
- rm forge-1.19.2-43.3.7-installer.jar
- rm forge-1.19.2-43.3.7-installer.jar.log

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
- 81.90.181.11:25565

