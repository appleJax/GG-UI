import React         from 'react'
import { formatHMS } from 'Utils'
import Typography    from 'UI/Typography'

export default function Countdown({
  classes: {
    container,
    label,
    timeLeft
  },
  countdown
}) {

  return (
    <div className={container}>
      <Typography className={label} variant='button'>
        Next Question:
      </Typography>
      <Typography className={timeLeft} variant='display1'>
        {formatHMS(countdown)}
      </Typography>
    </div>
  )
}
