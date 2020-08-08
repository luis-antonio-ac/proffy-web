import React, { useState } from 'react';
import { PageHeader } from '../../components/PageHeader'

import './styles.css'
import warningIcon  from '../../assets/images/icons/warning.svg'

import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Select } from '../../components/Select';

interface SchaduleItem {
    week_day: number
    from: string
    to: string
}

function TeacherForm() {
    const [scheduleItems, setScheduleItems] = useState<SchaduleItem[]>([
        { week_day: 0, from: '', to: ''}
    ])

    function addNewSchaduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="Whatsapp"/>
                    <TextArea name="Bio" label="Biografia"/>
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select 
                        name="subject" 
                        label="Matéria"
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
                    <Input name="cost" label="Custo da sua Hora/Aula"/>
                </fieldset>

                <fieldset>
                    <legend>
                        Horários Disponíveis

                        <button type="button" onClick={addNewSchaduleItem}>
                            + Novo Horário
                        </button>
                    </legend>

                    {
                        scheduleItems.map(scheduleItem => (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name="week_day" 
                                    label="Dia da semana"
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
                                <Input name="from" label="Das" type="time"/>
                                <Input name="to" label="Até" type="time"/>
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

                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export { TeacherForm }