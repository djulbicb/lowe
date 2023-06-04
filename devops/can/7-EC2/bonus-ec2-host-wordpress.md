# Host wordpress from scratch
https://tonyteaches.tech/aws-ec2-wordpress/

1. Create EC2 instance
    - Ubuntu >
    - t2.micro >
    - Size 8Gb but can 30Gb
    - Configure security group: Enable http and https. SSH MyIP, HTTP anywhere, HTTPS anywhere 
    - Launch 
    - Select key pair
2. Assign domain to public IP address via google domain
3. login
   ```
    chmod 400 key.pem
    ssh -i key.pem ubuntu@11.111.111.111`
   ```
4. Update & install LAMP
    ```
   sudo apt update
   sudo apt install nginx mariadb-server php-fpm php-mysql
   /var/www/html
   ls
    ```
5. Go to website http://3.11.111.11/ `must be http`
6. Download wordpress
   ```
   cd /var/www
   
   sudo wget https://wordpress.org/latest.tar.gz
   sudo tar -xzvf latest.tar.gz
   sudo rm latest.tar.gz
   
   ls -la
   # sudo chown -R user:group
   # Help web user use files
   sudo chown -R www-data:www-data wordpress
   ls -la

   sudo find wordpress/ -type d -exec chmod 755 {} \;
   sudo find wordpress/ -type f -exec chmod 644 {} \;
   
   cd wordpress
   ls -la
   ```
 7. set up mysql
   ```
   sudo mysql_secure_installation
   enter
   pass: password
   remove anonymous users: yes
   allow remote login: yes
   remove test datapa and access: yes
   reload privilege tables: yes
   
   sudo mysql -u root -p
   create database example_db default character set utf8 collate utf8_unicode_ci;
   create user 'example_user'@'localhost' identified by 'example_pw';
   grant all privileges on example_db.* TO 'example_user'@'localhost';
   flush privileges;
   exit
   ``` 
8. Set up nginx
   ```
   cd /etc/nginx/sites-available/
   sudo nano wordpress.conf
   
   # wordpress.conf
   upstream php-handler {
           server unix:/var/run/php/php8.1-fpm.sock;
   }
   server {
           listen 80;
           # server_name netwits.io www.netwits.io;
           root /var/www/wordpress;
           index index.php;
           location / {
                   try_files $uri $uri/ /index.php?$args;
           }
           location ~ \.php$ {
                   include snippets/fastcgi-php.conf;
                   fastcgi_pass php-handler;
           }
   }
   ```

   ```
   create symbolic link
   sudo ln -s /etc/nginx/sites-available/wordpress.conf /etc/nginx/sites-enabled/
   
   # delete default config so document root works 
   sudo rm /etc/nginx/sites-enabled/default
   
   sudo nginx -t
   sudo systemctl restart nginx
   ```
8. Go to page http://3.11.111.11/wp-admin


### Logs are here
```
var/log/nginx/error.log
```