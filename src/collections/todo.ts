import { addDoc, collection, deleteDoc, doc, FieldValue, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore'
import TodoDocument from '../documents/todo'
import { firestore } from '../firebase'
import TodoSchema from '../schemas/todo'

const todos = collection(firestore, 'todos')

// Kapselung der Interaktion mit der Todo-Sammlung
export default class TodoCollection {

    // Überwache die Liste der Todos, welche in der Datenbank hinterlegt sind
    static list(callback: (list: TodoDocument[]) => void) {
        return onSnapshot(todos, snapshot => {
            callback(snapshot.docs.map(document => {
                return {
                    id: document.id,
                    data: document.data({ serverTimestamps: 'estimate' }) as TodoSchema<number>
                }
            }))
        })
    }
    
    // Erzeuge ein neues Todo mit einem Text
    static async create(text: string) {
        const data: TodoSchema<FieldValue> = {
            text,
            done: false,
            time: serverTimestamp()
        }
        const document = await addDoc(todos, data)
        return document.id
    }

    // Aktualisiere ein bestehendes Todo in der Datenbank
    static async update(id: string, text: string, done: boolean) {
        const data: Partial<TodoSchema<FieldValue>> = {
            text,
            done
        }
        const document = await doc(todos, id)
        await updateDoc(document, data)
    }

    // Lösche ein Todo aus der Datenbank
    static async delete(id: string) {
        const document = await doc(todos, id)
        await deleteDoc(document)
    }

}