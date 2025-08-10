# creating launch template for frontend instances
resource "aws_launch_template" "frontend_lt" {
  name_prefix   = "frontend-lt-"
  image_id      = aws_ami_from_instance.adidas_ami.id
  instance_type = "t2.micro"
  key_name      = "adidas-key"
  #security_group_names = [aws_security_group.adidas_elb_sg_frontend.name]
  
  vpc_security_group_ids = [aws_security_group.adidas_vpc_sg.id]

  block_device_mappings {
    device_name = "/dev/xvda"
    ebs {
      volume_size = 20
      volume_type = "gp2"
    }
  }

  tag_specifications {
    resource_type = "instance"
    tags = {
      Name = "frontend-instance-from-ami"
      Ansible = "true"
    }
  }
}

# creating launch template for backend instances
resource "aws_launch_template" "backend_lt" {
  name_prefix   = "backend-lt-"
  image_id      = aws_ami_from_instance.adidas_ami_backend.id
  instance_type = "t2.micro"
  key_name      = "adidas-key"
 # security_group_names = [ aws_security_group.adidas_elb_sg_backend.name]
  vpc_security_group_ids = [aws_security_group.adidas_vpc_sg.id]

  block_device_mappings {
    device_name = "/dev/xvda"
    ebs {
      volume_size = 20
      volume_type = "gp2"
    }
  }

  tag_specifications {
    resource_type = "instance"
    tags = {
      Name = "backend-instance-from-ami"
      Ansible = "true"         
    }
  }
}
