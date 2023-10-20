import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../context/CyclesContext'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        {...register('task', {
          required: {
            value: true,
            message: 'Preencha o campo!',
          },
        })}
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        list="task-suggestions"
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <div>
        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInput
          type="number"
          placeholder="00"
          disabled={!!activeCycle}
          id="minutesAmount"
          {...register('minutesAmount', {
            valueAsNumber: true,
          })}
          min={5}
          max={60}
          step={5}
        />

        <span>minutos.</span>
      </div>
    </FormContainer>
  )
}
