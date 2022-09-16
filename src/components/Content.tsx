import React from 'react'
import TextField from './TextField';
import Task from './Task';

interface TaskProps {
    [k: string]: any,
    title: string,
    isDone: boolean,
    id: number
}

type TaskList = object[]

const Content: React.FC = () => {

    const [formValue, setFormValue] = React.useState<TaskProps>({
        title: '',
        isDone: false,
        id: 1
    })

    const [tasks, setTasks] = React.useState<TaskList>([]) 

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		const newValue = e.currentTarget.value;
		setFormValue({...formValue, title: newValue})
	}

    const onSubmit = () => {
        if(formValue.title === '') return false
        setTasks([...tasks, {...formValue, id: tasks.length + 1}])
        setFormValue({title: '', isDone: false, id: 1})
    }

    return (
        <div className="wrapper">
            <div className="content-header">
                <TextField type="text" name="task" value={formValue.title} onChange={handleChange} maxLength={20}/>
                <button onClick={() => onSubmit()}>Add</button>
            </div>
            <div className='content-body'>
                {
                    tasks.length > 0 && tasks.map((v, i) => (
                        <Task {...v} key={i} listUpdater={setTasks} lists={tasks}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Content;