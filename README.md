# ims
Nodejs and mongoDB for Inventory Management


##Download MongoDB MacOS
$curl -o https://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-3.6.2.tgz


2.Extract the files from the downloaded archive
$ tar -zxvf mongodb-osx-x86_64-3.2.4.tgz

3.Change name
$mv mongodb-osx-x86_64-3.2.4 mongodb

4.database store place
$ mkdir-p /data/db


5.give authoriry
$ chown-R $USER /data/db

6.start mongodb
$ cd mongodb/bin
$ mongod

