#This schemas file is responsible for serving as the communication between the APIS and the database models
from pydantic import BaseModel


class SpectatorSourceBase(BaseModel):
    name: str
    email: str

class SpectatorSourceCreate(SpectatorSourceBase):
    pass


class SpectatorSource(SpectatorSourceBase):
    id: int
    class Config:
        orm_mode = True
