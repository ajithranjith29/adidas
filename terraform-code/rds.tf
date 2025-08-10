# creating rds
resource "aws_db_instance" "rds" {
    identifier          = "adidas-rds-instance"
    allocated_storage    = 20
    engine               = "mysql"
    engine_version       = "8.0.40"
    instance_class       = "db.t3.micro"
    username             = var.db_name
    password             = var.db_password
    skip_final_snapshot  = true
    vpc_security_group_ids = [aws_security_group.adidas_vpc_sg.id]
    db_subnet_group_name = aws_db_subnet_group.adidas_db_subnet_group.name
    multi_az            = false     
    publicly_accessible = false
    
}