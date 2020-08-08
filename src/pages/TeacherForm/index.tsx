import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'

import './styles.css'
import warningIcon  from '../../assets/images/icons/warning.svg'

import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Select } from '../../components/Select';
import { api } from '../../services/api';

interface SchaduleItem {
    week_day: number
    from: string
    to: string
}

function TeacherForm() {
    const history = useHistory()

    const [name, setName] = useState(String())
    const [avatar, setAvatar] = useState(String())
    const [whatsapp, setWhatsapp] = useState(String())
    const [bio, setBio] = useState(String())

    const [subject, setSubject] = useState(String())
    const [cost, setCost] = useState(String())
    
    const [scheduleItems, setScheduleItems] = useState<SchaduleItem[]>([
        { week_day: 0, from: '', to: ''}
    ])

    function addNewSchaduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    function handleCreateClass(event: FormEvent) {
        event.preventDefault()

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio, 
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso')
            history.push('/')
        }).catch(() => {
            alert('Erro no cadastro')
        })
    }

    function setScheduleItemValue(position: number, field:string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position) {
                return {
                    ...scheduleItem,
                    [field]: value
                }
            }  
            return scheduleItem
        })

        setScheduleItems(updatedScheduleItems)
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input 
                            name="name" 
                            label="Nome completo" 
                            value={name} 
                            onChange={(event) => {setName(event.target.value)}}
                        />
                        <Input 
                            name="avatar" 
                            label="Avatar"
                            value={avatar} 
                            onChange={(event) => {setAvatar(event.target.value)}}
                        />
                        <Input 
                            name="whatsapp" 
                            label="Whatsapp"
                            value={whatsapp} 
                            onChange={(event) => {setWhatsapp(event.target.value)}}
                        />
                        <TextArea 
                            name="bio" 
                            label="Biografia"
                            value={bio} 
                            onChange={(event) => {setBio(event.target.value)}}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select 
                            name="subject" 
                            label="Matéria"
                            value={subject} 
                            onChange={(event) => {setSubject(event.target.value)}}
                            options={[
                                { value: 'Português', label: 'Português' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'Historia', label: 'Historia' },
                                { value: 'Filosofia', label: 'Filosofia' },
                                { value: 'Sociologia', label: 'Sociologia' },
                                { value: 'Redação', label: 'Redação' },
                                { value: 'Literatura', label: 'Literatura' },
                                { value: 'Artes', label: 'Artes' },
                            ]}    
                        />
                        <Input 
                            name="cost"
                            label="Custo da sua Hora/Aula"
                            value={cost} 
                            onChange={(event) => {setCost(event.target.value)}}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários Disponíveis

                            <button type="button" onClick={addNewSchaduleItem}>
                                + Novo Horário
                            </button>
                        </legend>

                        {
                            scheduleItems.map((scheduleItem, index) => (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select 
                                        name="week_day" 
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={event => setScheduleItemValue(index, 'week_day', event.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}    
                                    />
                                    <Input 
                                        name="from" 
                                        label="Das" 
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={event => setScheduleItemValue(index, 'from', event.target.value)}
                                    />
                                    <Input 
                                        name="to" 
                                        label="Até" 
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={event => setScheduleItemValue(index, 'to', event.target.value)}
                                    />
                                </div>
                            ))
                        }
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante <br/>
                            Preencha todos os dados
                        </p>

                        <button type="submit">
                            Salvar Cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export { TeacherForm }