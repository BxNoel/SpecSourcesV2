#This models file contains the database models for the application.
# its apart of the ORM (Object-Relational Mapping) layer that allows us to interact with the database using Python classes and objects.
# It helps the PYTHON Code communicate with the databse tables we defined in mySQL

from sqlalchemy import Column, Integer, String
from .database import Base

#this is fully mocking up what we saw in the mySQL workbench
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
    email = Column(String(100), unique=True, index=True, nullable=False)  # email VARCHAR(100) NOT NULL UNIQUE