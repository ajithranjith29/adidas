variable "aws_region" {
  description = "The AWS region to deploy resources in"
  type        = string
  default     = "ap-southeast-1"
  sensitive = false
  
}



variable "instance_type" {
  description = "The type of EC2 instance to create"
  type        = string
  default     = "t2.micro"
  sensitive = false
}

variable "root_volume_size" {
  description = "The size of the root EBS volume in GB"
  type        = number
  default     = 20
  sensitive = false
}

variable "public_key_path" {
  description = "The path to the public key file for the key pair"
  type        = string
  default     = "~/.ssh/id_rsa.pub"
  sensitive = true
  
}

variable "base_ami_id" {
  description = "The base AMI ID to use for the EC2 instance"
  type        = string
  #default     = "ami-02c7683e4ca3ebf5858"
  sensitive = false
  
}

variable "db_name" {
  description = "The name of the RDS database"
  type        = string
  default     = "ranjith"
  sensitive = false
  
}

variable "db_password" {
  description = "The password for the RDS database"
  type        = string
  default     = "ranjith123"
  sensitive = true
  
}