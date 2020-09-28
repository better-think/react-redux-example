export const ADD_TODO = "ADD_TODO";

let textNodeId = 0;

export function addTodo(text) {
    return {
        type: ADD_TODO,
        nodeId: textNodeId++,
        text
    }
}
