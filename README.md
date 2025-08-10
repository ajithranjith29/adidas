# Adidas 3-Tier AWS Infrastructure

This project provisions a **3-tier web application architecture** on AWS using **Terraform** for Infrastructure as Code (IaC).  
It was built as a hands-on deployment demo and automation practice project.

---

## 📌 Project Overview

The architecture follows the **three-tier design**:

1. **Presentation Layer** – Frontend hosted on EC2 instances behind an Elastic Load Balancer (ELB).
2. **Application Layer** – Backend services running on EC2, managed via Auto Scaling Groups (ASG).
3. **Data Layer** – Amazon RDS MySQL database for persistent storage.

---

## 🏗️ Infrastructure Components

- **AWS EC2** – Virtual machines for frontend & backend.
- **Amazon RDS (MySQL)** – Managed relational database service.
- **Elastic Load Balancer (ELB)** – Distributes traffic across instances.
- **Auto Scaling Group (ASG)** – Ensures high availability & scalability.
- **VPC, Subnets, and Security Groups** – Networking & security setup.
- **S3** – Optional storage for static assets or state files.
- **Terraform** – Automates resource provisioning.

---

## 📂 Project Structure

adidas-project/
│── terraform-code/ # Terraform configuration files
│── variables.tf # Variables for customization
│── outputs.tf # Terraform outputs
│── README.md # Project documentation

yaml
Copy
Edit

---

## 🚀 Deployment Steps

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ajithranjith29/adidas.git
cd adidas
2️⃣ Initialize Terraform
bash
Copy
Edit
terraform init
3️⃣ Validate the Configuration
bash
Copy
Edit
terraform validate
4️⃣ Plan the Deployment
bash
Copy
Edit
terraform plan
5️⃣ Apply the Configuration
bash
Copy
Edit
terraform apply
📸 Proof of Deployment
This project includes:

Before Deployment – Proof that no AWS resources exist.

Terraform Apply – Running the IaC to create infrastructure.

After Deployment – Proof that AWS resources were successfully created.

🛠️ Prerequisites
AWS account with proper IAM permissions

AWS CLI configured (aws configure)

Terraform installed (v1.5+ recommended)

Git installed

📄 License
This project is for educational and demonstration purposes only.

👤 Author
Ajith Ranjith
GitHub: ajithranjith29

