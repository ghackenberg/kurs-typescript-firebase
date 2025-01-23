// Schema der Daten in einem Todo-Dokument
export default interface TodoSchema<T> {
    text: string
    done: boolean
    time: T
}