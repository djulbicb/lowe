# ECS
Run containers in aws managed platforms.
Runs in two modes
- EC2 mode: uses ec2 instances as container hosts.
- Fargate mode: serverless mode

## EC2
Creates a cluster. You provide an image and this runs in cluster in different modes.

ECR - Same as dockerhub but AWS. Elastic Container Registry. 

There is container definition and task definition.
Container definition is a pointer where container is stored and what image is used, port is exposed.
Task definition store CPU, network, ecs mode, Task Role (IAM role which task assumes)

When task definition is created also container definition is created.
One task can have multiple container definition.

Scaling task isnt easy.
But that why we have a service and service definition which will loadbalance and scale tasks.

No matter mode, you create a cluster and then define tasks and service definition.

HA - high availability, restarts

## ECS Cluster mode
SchedulingandOrchestration
ClusterManager
PlacementEngine

ECS Cluster in multiple AZ
2 instance per AZ you worry about capacity and availabity

Fargate also has
SchedulingandOrchestration
ClusterManager
PlacementEngine

but you dont have services.
AWS has fargate shared infrastructure. you get resourced in share pool.
you define image, port and aws 
tasks are injected with network interfaces in our VPC with elastic IP

no need to manage host, just pay for resources

When using EC2 vs ECS with EC2 based cluster vs Fargate
If you use containers use ECS
low usage level, same os, no overhead

Large workload, price conscious - EC2 Mode

Large workload, overhead conscious - Fargate
Fargate small/burst workloads
Batch Periodic workload so fargate better

with cluster mode you have to pay all the time

# 
Networking only if Fargate
other two are cluster with different OS

use default VPC cause all public subnets have public