from sqlalchemy import Column, Integer, String
from .database import Base
# SQL Table Definition
"""
CREATE TABLE SpectatorSources (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);
"""
class SpectatorSource(Base):
    __tablename__ = "SpectatorSources"

    id = Column(Integer, primary_key=True, index=True)          # INT AUTO_INCREMENT PRIMARY KEY
    name = Column(String(100), nullable=False)                  # name VARCHAR(100) NOT NULL
    email = Column(String(100), unique=True, nullable=False)  # email VARCHAR(100) NOT NULL UNIQUE