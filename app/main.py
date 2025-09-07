from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import text

from . import models, schemas, crud
from .database import SessionLocal, engine, Base


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def greet():
    return {"message": "This is connected to FastAPI!"}

@app.get("/all")
def get_all(db: Session = Depends(get_db)):
    sources = crud.get_all_sources(db)
    return sources

@app.post("/create", response_model=schemas.SpectatorSource)
def create_source(source: schemas.SpectatorSourceCreate, db: Session = Depends(get_db)):
    db_source = crud.create_source(db, source)
    return db_source
    

@app.delete("/delete/{source_id}", status_code=204)
def delete_source(source_id: int, db: Session = Depends(get_db)):
    deleted = crud.delete_source(db, source_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Source not found")



#this is a health check fucntion
@app.get("/health/db/users")
def health_db_users(db: Session = Depends(get_db)):
    count = db.execute(text("SELECT COUNT(*) AS cnt FROM SpectatorSources")).scalar()
    rows = db.execute(
        text("SELECT id, name, email FROM SpectatorSources ORDER BY id LIMIT 3")
    ).fetchall()
    sample = [dict(r._mapping) for r in rows]
    return {"count": count, "sample": sample}