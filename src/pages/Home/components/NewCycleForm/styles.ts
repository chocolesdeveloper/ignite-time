import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    max-width: 370px;
    font-size: 1rem;
    padding: 0 0.5rem;
    flex-direction: column;
    gap: 0.5rem;

    label:first-child {
      display: none;
    }
  }
`
const BaseInput = styled.input`
  background: transparent;

  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: inherit;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 1.25rem;
    text-align: center;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;

  @media (max-width: 480px) {
    text-align: center;
  }
`
