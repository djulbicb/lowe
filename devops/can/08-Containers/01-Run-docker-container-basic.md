## Difference between containers and virtual machine
Each virtual machine has OS. Containers runs as process and uses OS for network and IO.

## Install docker in image and run container
1. Have EC2 instance and connect via session manager
2. Install docker
    ```
    sudo amazon-linux-extras install docker
    sudo service docker start
    
    # docker commands wont run cause permission
    # docker run hello-world 
    sudo usermod -a -G docker ec2-user
   
   exit
   ```
3. Login back
4. ```
    # change user
    sudo su - ec2-user
   
    # enter folder container which has images
    cd container
    docker build -t containerofcats .
    docker images --filter reference=containerofcats
   
    # Dockerfile:
    FROM centos:7
    LABEL maintainer="Animals4life"
    RUN yum -y install httpd
    COPY index.html /var/www/html/
    COPY containerandcat*.jpg /var/www/html/
    ENTRYPOINT ["/usr/sbin/httpd", "-D", "FOREGROUND"]
    EXPOSE 80
   
    # Run Container from Image
    docker run -t -i -p 80:80 containerofcats
   ```
5. Access http://11.111.111.111/
6. Push to docker.hub
    ```
    # Push to docker
    # Upload Container to Dockerhub (optional)
    docker login --username=YOUR_USER
    docker images
    docker tag IMAGEID YOUR_USER/containerofcats
    docker push YOUR_USER/containerofcats:latest
   ```