# Timer

## API

###### constructor
> Timer 的构造函数
- Return: void
- Params: (date)

  Name | Require | Type | Default |  Descrition  
  ----|--|------|---|------
  | date   |  false  |   date?: Date / Number / string / Timer / null |   undefined   | 初始化timer  |

###### getTime 
> Timer 获取时间戳
- Return: number
- Params: ( )

###### getFirstDayOfMonth 
> 获取当前时间的该月第一天
- Return: Timer
- Params: ( )

###### getLastDayOfMonth 
> 获取当前时间的该月最后天
- Return: Timer
- Params: ( )

##### format
> 根据 fmt 来格式化时间
- Return: string
- Params: (fmt)

  Name | Require | Type | Default |  Descrition  
   ----|--|------|---|------
  | fmt   |  true  |   string |   undefined   |  format date to string . eg: 'yyyy/MM/dd'  |

##### setValue

> 设置 Timer value 值类型为 Date
- Return: void
- Params: (value)

  Name | Require | Type | Default |  Descrition  
   ----|--|------|---|------
  | value   |  true  |   Date |   undefined   | value of Timer. eg: new Date  |


###### getValue 
> 获取当前Timer 的Value 值 类型为 Date
- Return: Date
- Params: ( )