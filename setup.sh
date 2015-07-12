sudo apt-get update
sudo apt-get install git
apt-get install nodejs-legacy npm
npm install
sudo npm install bower -g
#bower install ng-file-upload 
bower install ng-flow#~2
sudo apt-get install php5-cli
mkdir ~/public_html
mv upload.php ~/public_html/upload.php
cd ~/public_html
php -S 172.31.43.151:3000 #eth0 from ifconfig
