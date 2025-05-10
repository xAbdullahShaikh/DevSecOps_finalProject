
resource "aws_s3_bucket" "secure_bucket" {
  bucket = "secure-bucket-example"
  acl    = "private"
  versioning {
    enabled = true
  }
}

resource "aws_security_group" "restricted_sg" {
  name        = "restricted"
  description = "Restricted access"
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/16"]
  }
}
