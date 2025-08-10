terraform {
    required_providers {
        aws = {
        source  = "hashicorp/aws"
        version = "~> 3.0"
        }
    }
}

# providers region 
provider "aws" {
    region = var.aws_region

}



resource "aws_key_pair" "generated_key" {
  key_name   = "adidas-key"
  public_key = tls_private_key.ssh_key.public_key_openssh
}
