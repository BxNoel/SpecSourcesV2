#This schemas file is responsible for serving as the communication between the APIS and the database models
from pydantic import BaseModel


# Shared fields (for input/output)
class SpectatorSourceBase(BaseModel):
    name: str
    email: str


# Used for creating a new spectator source
class SpectatorSourceCreate(SpectatorSourceBase):
    pass


# Used for reading spectator source(s) from the database
class SpectatorSource(SpectatorSourceBase):
    id: int

    class Config:
        orm_mode = True
