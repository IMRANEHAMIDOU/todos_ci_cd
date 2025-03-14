import asyncpg

DATABASE_URL = "postgresql://postgres:1234@localhost:5432/todos"

async def get_connection():
    return await asyncpg.connect(DATABASE_URL)