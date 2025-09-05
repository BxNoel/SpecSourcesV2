from sqlalchemy.orm import Session
from . import models, schemas

def get_all_sources(db: Session):
    return db.query(models.SpectatorSource).all()

def get_source_by_id(db: Session, source_id: int):
    return db.query(models.SpectatorSource).filter(models.SpectatorSource.id == source_id).first()

def create_source(db: Session, source: schemas.SpectatorSourceCreate):
    db_source = models.SpectatorSource(name=source.name, email=source.email)
    db.add(db_source)
    db.commit()
    db.refresh(db_source)
    return db_source