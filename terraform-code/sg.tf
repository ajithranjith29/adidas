# creating vpc security group
resource "aws_security_group" "adidas_vpc_sg" {
  name        = "adidas-vpc-security-group"
  description = "Security group for Adidas project"
  vpc_id      = aws_vpc.adidas_vpc.id

  ingress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    }
    egress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# creating security group for elb frontend
resource "aws_security_group" "adidas_elb_sg_frontend" {
  name        = "adidas-elb-security-group"
  description = "Security group for Adidas ELB"
  vpc_id      = aws_vpc.adidas_vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
      from_port   = 0
      to_port     = 65535
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"]       
  }
    tags = {
        Name = "adidas-elb-sg"
    }
}

# creating security group for elb backend
resource "aws_security_group" "adidas_elb_sg_backend" {
  name        = "adidas-elb-security-group-backend"
  description = "Security group for Adidas ELB"
  vpc_id      = aws_vpc.adidas_vpc.id

  ingress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    security_groups = [ aws_security_group.adidas_elb_sg_frontend.id]
  }

  egress {
      from_port   = 0
      to_port     = 65535
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"]       
  }
    tags = {
        Name = "adidas-elb-sg"
    }
}

# creating security group for rds
resource "aws_security_group" "adidas_rds_sg" {
  name        = "adidas-rds-security-group"
  description = "Security group for Adidas RDS"
  vpc_id      = aws_vpc.adidas_vpc.id

  ingress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    security_groups = [ aws_security_group.adidas_elb_sg_backend.id, aws_security_group.adidas_vpc_sg.id ]
    }
  egress {
      from_port   = 0
      to_port     = 65535
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"]       
  }
  }