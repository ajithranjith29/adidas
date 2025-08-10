# creating vpc
resource "aws_vpc" "adidas_vpc" {
  cidr_block = "10.0.0.0/16"
  enable_dns_support = true
  tags = {
    Name = "adidas-vpc"
  }
}

# creating cidr block for public subnet 1
resource "aws_subnet" "public_subnet_1" {
  vpc_id            = aws_vpc.adidas_vpc.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "ap-southeast-1a"
  tags = {
    Name = "adidas-public-subnet"
    }
  }

 # creating cidr block for public subnet 2
resource "aws_subnet" "public_subnet_2" {
  vpc_id            = aws_vpc.adidas_vpc.id
  cidr_block        = "10.0.2.0/24"
  availability_zone = "ap-southeast-1b"
  tags = {
    Name = "adidas-public-subnet"
    }
  } 
  
# creating cidr block for private subnet 1
resource "aws_subnet" "private_subnet_1" {
  vpc_id            = aws_vpc.adidas_vpc.id
  cidr_block        = "10.0.3.0/24"
  availability_zone = "ap-southeast-1a" 
  tags = {
    Name = "adidas-private-subnet"
  }
} 

# creating cidr block for private subnet 2
resource "aws_subnet" "private_subnet_2" {
  vpc_id            = aws_vpc.adidas_vpc.id
  cidr_block        = "10.0.4.0/24"
  availability_zone = "ap-southeast-1b"
  tags = {
    Name = "adidas-private-subnet"
  }
} 

# creating subnet group for rds
resource "aws_db_subnet_group" "adidas_db_subnet_group" {
  name       = "adidas-db-subnet-group"
  subnet_ids = [aws_subnet.database-subnet-1.id, aws_subnet.database-subnet-2.id]
  tags = {
    Name = "adidas-db-subnet-group"
  }
}

# creating cidr block for database subnet
resource "aws_subnet" "database-subnet-1" {
  vpc_id            = aws_vpc.adidas_vpc.id
  cidr_block        = "10.0.5.0/24"
  availability_zone = "ap-southeast-1a"
  tags = {
    Name = "adidas-database-subnet"
  }   
  }

resource "aws_subnet" "database-subnet-2" {
  vpc_id            = aws_vpc.adidas_vpc.id
  cidr_block        = "10.0.6.0/24"
  availability_zone = "ap-southeast-1b"
  tags = {
    Name = "adidas-database-subnet-2"
  }
}

# creating network acl
resource "aws_network_acl" "adidas_vpc_acl" {
  vpc_id = aws_vpc.adidas_vpc.id
  tags = {
    Name = "adidas-vpc-acl"
  }
  ingress {
    rule_no    = 100
    protocol   = "tcp"
    from_port  = 0
    to_port    = 65535
    cidr_block = "0.0.0.0/0"
  action     = "allow"
  }
}

# creating internet gateway
resource "aws_internet_gateway" "adidas_vpc_igw" {
  vpc_id = aws_vpc.adidas_vpc.id
  tags = {
    Name = "adidas-vpc-igw"
  }
}
# creating route table
resource "aws_route_table" "adidas_vpc_route_table" {
  vpc_id = aws_vpc.adidas_vpc.id
  tags = {
    Name = "adidas-vpc-route-table"
  }
  
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.adidas_vpc_igw.id
  }
}

# associating route table with public subnet
resource "aws_route_table_association" "public_subnet_1_association" {
  subnet_id      = aws_subnet.public_subnet_1.id
  route_table_id = aws_route_table.adidas_vpc_route_table.id
}

# associating route table with public subnet 2
resource "aws_route_table_association" "public_subnet_2_association" {
  subnet_id      = aws_subnet.public_subnet_2.id
  route_table_id = aws_route_table.adidas_vpc_route_table.id
}
