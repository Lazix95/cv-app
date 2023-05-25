import {ReactNode} from 'react'

export function SharedNamedChild({children}:{children: ReactNode, name: string}) {
  return (
    <div>
      {children}
    </div>
  )
}