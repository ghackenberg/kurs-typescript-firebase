import TodoSchema from '../schemas/todo'

// Das Todo-Dokument inklusive seiner Daten
export default interface TodoDocument {
    id: string
    data: TodoSchema<number>
}