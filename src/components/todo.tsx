import { ChangeEvent, FocusEvent, useState } from 'react'
import TodoCollection from '../collections/todo'
import TodoDocument from '../documents/todo'

export default function Todo({ todo }: { todo: TodoDocument }) {

    // Definition die Zustände dieser React-Komponente
    const [done, setDone] = useState(todo.data.done || false)
    const [text, setText] = useState(todo.data.text)
    const [load, setLoad] = useState(false)

    // Definition der Ereignisroutinen dieser React-Komponente
    function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
        setText(event.currentTarget.value)
    }
    async function handleTextBlur(event: FocusEvent<HTMLInputElement>) {
        if (text && text != todo.data.text) {
            setLoad(true)
            await TodoCollection.update(todo.id, text, done)
            setLoad(false)
        } else {
            setText(todo.data.text)
        }
    }
    async function handleDoneChange() {
        setLoad(true)
        await TodoCollection.update(todo.id, text, !done)
        setLoad(false)
        setDone(!done)
    }

    // Rückgabe der HTML-Struktur dieser React-Komponente
    return (
        <div>
            <input disabled={load} type='text' value={text} onChange={handleTextChange} onBlur={handleTextBlur}/>
            <input disabled={load} type='checkbox' checked={done} onChange={handleDoneChange}/>
        </div>
    )
}