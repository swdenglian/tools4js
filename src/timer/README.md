# Timer

## API

###### constructor
> Timer's constructor
- Return: void
- Params: (date)

  Name | Require | Type | Default |  Descrition  
  ----|--|------|---|------
  | date   |  false  |   date?: Date / Number / string / Timer / null |   undefined   | init timer info  |

###### getTime 
> Timer get time stamp
- Return: number
- Params: ( )

###### getFirstDayOfMonth 
> Timer get first day of the month 
- Return: Timer
- Params: ( )

###### getLastDayOfMonth 
> Timer get last day of the month 
- Return: Timer
- Params: ( )

##### format
> The function is Timer's formatter by 'fmt'
- Return: string
- Params: (fmt)

  Name | Require | Type | Default |  Descrition  
   ----|--|------|---|------
  | fmt   |  true  |   string |   undefined   |  format date to string . eg: 'yyyy/MM/dd'  |

##### setValue

> The function set Date value of Timer
- Return: void
- Params: (value)

  Name | Require | Type | Default |  Descrition  
   ----|--|------|---|------
  | value   |  true  |   Date |   undefined   | value of Timer. eg: new Date  |


###### getValue 
> The function get value of Timer.
- Return: Date
- Params: ( )