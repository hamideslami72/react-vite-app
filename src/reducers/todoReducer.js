

export default function todoReducer(todoListItem, action) {
    switch (action?.type) {
        case 'initial-list':
            return action?.data

        case 'add-todo':
            return [
                ...todoListItem,
                {
                    id: action?.id,
                    title: action?.title,
                    state: action?.state
                }
            ]
        
        case 'delete-todo':
            return action?.data
            
        case 'update-todo':
            return action?.data

        case 'toggle-check-todo':
            return action?.data

        default:
            break;
    }
}