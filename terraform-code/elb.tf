# creating application load balancer for frontend
resource "aws_alb" "frontend" {
    name            = "adidas-frontend-alb"
    internal        = false
    security_groups = [aws_security_group.adidas_elb_sg_frontend.id]
    subnets         = [aws_subnet.public_subnet_1.id, aws_subnet.public_subnet_2.id]
    enable_deletion_protection = false
    tags = {
        Name = "adidas-frontend-alb"
    }    
}

# creating target group for frontend
resource "aws_alb_target_group" "frontend_target_group" {
    name     = "adidas-frontend-tg"
    port     = 80
    protocol = "HTTP"
    vpc_id   = aws_vpc.adidas_vpc.id

    health_check {
        path                = "/"
        interval            = 30
        timeout             = 5
        healthy_threshold   = 2
        unhealthy_threshold = 2
    }

    tags = {
        Name = "adidas-frontend-tg"
    }
}

# creating application load balancer for backend
resource "aws_alb" "backend" {
    name            = "adidas-backend-alb"
    internal        = true
    security_groups = [aws_security_group.adidas_elb_sg_backend.id]
    subnets         = [aws_subnet.private_subnet_1.id, aws_subnet.private_subnet_2.id]
    enable_deletion_protection = false
    tags = {
        Name = "adidas-backend-alb" 
    }
}

# creating target group for backend
resource "aws_alb_target_group" "backend_target_group" {
    name     = "adidas-backend-tg"
    port     = 80
    protocol = "HTTP"
    vpc_id   = aws_vpc.adidas_vpc.id

    health_check {
        path                = "/"
        interval            = 30
        timeout             = 5
        healthy_threshold   = 2
        unhealthy_threshold = 2        
        }
    }
