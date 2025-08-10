#!/usr/bin/env python3
import boto3
import json

def get_asg_instances():
    client = boto3.client('autoscaling', region_name='ap-southeast-1')
    ec2 = boto3.client('ec2', region_name='ap-southeast-1')

    # Get all Auto Scaling Groups
    asgs = client.describe_auto_scaling_groups()
    instance_ids = []
    for asg in asgs['AutoScalingGroups']:
        for instance in asg['Instances']:
            if instance['LifecycleState'] == 'InService':
                instance_ids.append(instance['InstanceId'])

    # Get instance details for the instance IDs
    if not instance_ids:
        return []

    reservations = ec2.describe_instances(InstanceIds=instance_ids)['Reservations']
    hosts = []
    for reservation in reservations:
        for instance in reservation['Instances']:
            if instance['State']['Name'] == 'running':
                ip = instance.get('PublicIpAddress') or instance.get('PrivateIpAddress')
                if ip:
                    hosts.append(str(ip))
    return hosts

def main():
    hosts = get_asg_instances()
    inventory = {
        'all': {
            'hosts': hosts,
            'vars': {}
        }
    }
    print(json.dumps(inventory, indent=2))

if __name__ == '__main__':
    main()
