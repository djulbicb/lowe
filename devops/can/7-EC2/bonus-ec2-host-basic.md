# Basic webpage host
1. Create EC2: Ubuntu, 30GB, Enable public
2. Create s3 bucket. Allow public, add permission to bucket
    ```
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "PublicReadGetObject",
          "Effect": "Allow",
          "Principal": "*",
          "Action": [
            "s3:GetObject"
          ],
          "Resource": [
            "arn:aws:s3:::name-of-bucket/*"
          ]
        }
      ]
    }
    ```
3. Install server
   ```'
   sudo apt update
   sudo apt install apache2
   sudo service apache2 start
   
   cd /var/www/html
   wget https://test-ec2-bojan.s3.eu-central-1.amazonaws.com/index.html
   ```
4. access using http instead https http://ec2-11-111-111-11.compute-1.amazonaws.com/

## Change directory root
```
# change apache to read from directory
sudo nano /etc/apache2/apache2.conf

<Directory /var/www/mydirectory>
    Options Indexes FollowSymLinks
    AllowOverride None
    Require all granted
</Directory>

sudo service apache2 restart
```


