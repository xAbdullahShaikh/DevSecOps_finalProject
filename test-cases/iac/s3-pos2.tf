resource "aws_security_group" "restricted_sg" {
  name        = "restricted_sg"
  description = "Allow limited inbound traffic"
  vpc_id      = "vpc-abc123"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/16"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
