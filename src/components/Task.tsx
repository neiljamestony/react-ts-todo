import React from 'react'
import Checkbox from './Checkbox'

interface TaskProps {
    [k: string]: any,
    title: string,
    isDone: boolean,
    id: number
}

interface Props {
    title?: string | undefined,
    isDone?: boolean,
    id?: number,
    listUpdater?: (state: TaskProps[]) => void,
    lists?: object[]
}

const Task: React.FC<Props> = ({ title, isDone, id, listUpdater, lists }) => {

    const finishTask = () => {
        // const l = lists?.filter((obj: any) => obj.id === id ? obj.isDone = !isDone : obj)
        // listUpdater(l)
    }

    return (
        <div className="task">
            <div>{title}</div>
            <Checkbox type="checkbox" name="isDone" checked={isDone} onClick={(e: React.FormEvent<HTMLInputElement>) => finishTask()}/>
        </div>
    )
}

export default Task;