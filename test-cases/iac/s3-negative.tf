resource "aws_s3_bucket" "insecure_bucket" {
  bucket = "my-insecure-bucket"
}




resource "aws_security_group" "open_sg" {
  name        = "open_sg"
  description = "Allow all inbound traffic"
  vpc_id      = "vpc-abc123"

  ingress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
