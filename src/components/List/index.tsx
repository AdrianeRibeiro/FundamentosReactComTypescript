import { ITarefa } from '../../types/tarefa'
import { Item } from './item'
import style from './List.module.scss'

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export function Lista({ tarefas, selecionaTarefa }: Props) {

  return(
    <aside>
      <h2>Estudos do dia</h2>
      <ul> 
        {tarefas.map((item) => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}