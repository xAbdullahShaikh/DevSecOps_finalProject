resource "aws_s3_bucket" "public_bucket" {
  bucket = "public-bucket-example"
  acl    = "public-read"  # ❌ Checkov will flag this
}

resource "aws_security_group" "open_sg" {
  name        = "allow_all"
  description = "Allow all inbound traffic"
  ingress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # ❌ Too permissive
  }
}
