# EBS
block storage delivered by network. 

Require: 2 instances in same zone, 1 instance in another zone
## Attach to instance A, then reboot.
1. Start EC2 instance A
2. Start EBS volume: EC2 > Elastic Block Store > Volumes > Create volume
   - gp2, size 10gb
   - select volume, actions > attach volume to a instance A in same zone
3. Connect to that instance A
  ```
  # shows all storage blocks
  lsblk
  # determine the file system type of a device. Right now its just some that without filesystem
  sudo file -s /dev/xvdf
  # create file system
  sudo mkfs -t xfs /dev/xvdf
  # check again file system # /dev/xvdf: SGI XFS filesystem data (blksz 4096, inosz 512, v2 dirs)
  sudo file -s /dev/xvdf
  
  # now mount block to a folder - mount /source /target
  sudo mkdir /ebstest
  sudo mount /dev/xvdf /ebstest 
  cd /ebstest
  # write any message
  sudo nano amazingtestfile.txt
  ls -la
  exit
  ```
4. Reboot instance A and then connect
```
  # shows disk usage
  df -k
  # show disk identifier # UUID=45e1e12e-44e9-4316-961e-bd375bbc6f16
  sudo blkid
  
  sudo nano /etc/fstab
  # ADD LINE 
  # UUID=YOURUUIDHEREREPLACEME  /ebstest  xfs  defaults,nofail
  
  sudo mount -a
  cd /ebstest
  ls -la
```
5. Stop instance A so that you can detach

# Detach volume from one instance A and attach to instance B in same AZ
1. Attach volume to instance B
2. Run. No need to create filesystem cause already made
  ```
  lsblk
  sudo file -s /dev/xvdf
  sudo mkdir /ebstest
  sudo mount /dev/xvdf /ebstest
  cd /ebstest
  ls -la
   ```

## With large instance