from fastapi import FastAPI, HTTPException
from  db.database import get_connection
from db.queries import TodoQueries
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"])

class TodoRequest(BaseModel):
    task: str
    completed: bool = False


#create
@app.post("/todos/")
async def create_todo(todo: TodoRequest):
    conn = await get_connection()
    todo = await conn.fetchrow(TodoQueries.INSERT_TODO, todo.task, todo.completed)
    return dict(todo)

#find all
@app.get("/todos/")
async def get_todos():
    conn = await get_connection()
    todos = await conn.fetch(TodoQueries.GET_ALL_TODOS)
    return [dict(todo) for todo in todos]
    

#update
@app.put("/todos/{todo_id}")
async def update_todo(todo_id: int, todo: TodoRequest):
    conn = await get_connection()
    todo = await conn.fetchrow(TodoQueries.UPDATE_TODO, todo.task, todo.completed, todo_id)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return dict(todo)

#delete
@app.delete("/todos/{todo_id}")
async def delete_todo(todo_id: int):
    conn = await get_connection()
    deleted_todo = await conn.fetchrow(TodoQueries.DELETE_TODO, todo_id)
    if not deleted_todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return {"message": "Todo deleted", "id": deleted_todo["id"]}