import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import TodoCollection from '../collections/todo'
import TodoDocument from '../documents/todo'
import Todo from './todo'

export default function App() {

    // Definition der Zustände dieser React-Komponente
    const [list, setList] = useState<TodoDocument[]>()
    const [text, setText] = useState('')
    const [load, setLoad] = useState(false)

    // Definition der Effekte dieser React-Komponente
    useEffect(() => {
        return TodoCollection.list(setList)
    }, [])

    // Definition der Ereignisroutinen dieser React-Komponente
    function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
        setText(event.currentTarget.value)
    }
    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if (text) {
            setLoad(true)
            await TodoCollection.create(text)
            setText('')
            setLoad(false)
        }
    }

    // Rückgabe der HTML-Struktur dieser React-Komponente
    return (
        <div>
            {list ? (
                <ul>
                    {list.sort((a, b) => a.data.time - b.data.time).map(item => (
                        <li key={item.id}>
                            <Todo todo={item}/>
                        </li>
                    ))}
                    <li>
                        <form onSubmit={handleSubmit}>
                            <input placeholder='New todo (enter to submit)' disabled={load} value={text} onChange={handleTextChange}/>
                        </form>
                    </li>
                </ul>
            ) : (
                <p>Loading ...</p>
            )}
        </div>
    )
}