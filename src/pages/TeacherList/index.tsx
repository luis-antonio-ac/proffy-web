import React from 'react';

import { PageHeader } from '../../components/PageHeader'
import { TeacherItem } from '../../components/TeacherItem'
import { Input } from '../../components/Input'

import './styles.css'
import { Select } from '../../components/Select';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
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
                    <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList