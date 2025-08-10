# autoscaling group for frontend
resource "aws_autoscaling_group" "frontend" {
    name                 = "frontend-asg"
  launch_template {
    id      = aws_launch_template.frontend_lt.id
    version = "$Latest"
  }

  min_size     = 1
  max_size     = 3
  desired_capacity = 2

  vpc_zone_identifier = [aws_subnet.public_subnet_1.id, aws_subnet.public_subnet_2.id]

  target_group_arns = [aws_alb_target_group.frontend_target_group.arn]

  health_check_type          = "ELB"
  health_check_grace_period = 300

  
}


# autoscaling group for backend
resource "aws_autoscaling_group" "backend" {
    name                 = "backend-asg"
  launch_template {
    id      = aws_launch_template.backend_lt.id
    version = "$Latest"
  }

  min_size     = 1
  max_size     = 3
  desired_capacity = 2

  vpc_zone_identifier = [aws_subnet.private_subnet_1.id, aws_subnet.private_subnet_2.id]

  target_group_arns = [aws_alb_target_group.backend_target_group.arn]

  health_check_type          = "ELB"
  health_check_grace_period = 300

}