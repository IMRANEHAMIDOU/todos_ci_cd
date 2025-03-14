class TodoQueries:
    INSERT_TODO = "INSERT INTO todos (task, completed) VALUES ($1, $2) RETURNING id, task, completed"
    GET_ALL_TODOS = "SELECT id, task, completed FROM todos ORDER BY id desc"
    UPDATE_TODO = "UPDATE todos SET task = $1, completed = $2 WHERE id = $3 RETURNING id, task, completed"
    DELETE_TODO = "DELETE FROM todos WHERE id = $1 RETURNING id"