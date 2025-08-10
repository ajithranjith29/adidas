# Generate a new SSH key pair
resource "tls_private_key" "ssh_key" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

#resource "aws_key_pair" "generated_key" {
 # key_name = data.aws_key_pair.generated_key.key_name
#
  #public_key = tls_private_key.ssh_key.public_key_openssh
#}

# Save the private key locally 
resource "local_file" "private_key_pem" {
  content  = tls_private_key.ssh_key.private_key_pem
  filename = "${path.module}/adidas-key.pem"
  file_permission = "0400"
}

resource "aws_instance" "ec2_for_ami_frontend" {
  ami                         = var.base_ami_id
  instance_type               = "t2.micro"
  key_name                    = aws_key_pair.generated_key.key_name
  subnet_id                   = aws_subnet.public_subnet_1.id
  security_groups = [ aws_security_group.adidas_elb_sg_frontend.id, aws_security_group.adidas_vpc_sg.id ]
  associate_public_ip_address = true
  

  root_block_device {
    volume_size = 20
    volume_type = "gp2"
  }

  tags = {
    Name = "ami-for-ec2"
  }
}


# Create an AMI from the instance
resource "aws_ami_from_instance" "adidas_ami" {
  name = "adidas-ami-${formatdate("YYYYMMDD-HHmmss", timestamp())}"
  source_instance_id = aws_instance.ec2_for_ami_frontend.id
  depends_on         = [aws_instance.ec2_for_ami_frontend]
}

#-------------------------------------------------------------------------------------
# creating ami for backend instances
resource "aws_instance" "ec2_for_ami_backend" {
  ami                         = var.base_ami_id
  instance_type               = "t2.micro"
  key_name                    = aws_key_pair.generated_key.key_name
  subnet_id                   = aws_subnet.private_subnet_1.id
  security_groups = [ aws_security_group.adidas_elb_sg_backend.id, aws_security_group.adidas_vpc_sg.id ]
  associate_public_ip_address = true
  

  root_block_device {
    volume_size = 20
    volume_type = "gp2"
  }

  tags = {
    Name = "ami-for-ec2-backend"
  }
}


# Create an AMI from the instance
resource "aws_ami_from_instance" "adidas_ami_backend" {
  name = "adidas-ami-${formatdate("YYYYMMDD-HHmmss", timestamp())}"
  source_instance_id = aws_instance.ec2_for_ami_backend.id
  depends_on         = [aws_instance.ec2_for_ami_backend]
}