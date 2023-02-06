export function formatter(date, format = 'YYYY年MM月DD日') {
  format = format.replace(/YYYY/, date.getFullYear())
  format = format.replace(/MM/, date.getMonth() + 1)
  format = format.replace(/DD/, date.getDate())
  return format
}

export function dateTimeFormatter(dateTime, format = 'YYYY年MM月DD日hh時mm分ss秒') {
  format = format.replace(/YYYY/, dateTime.getFullYear())
  format = format.replace(/MM/, dateTime.getMonth() + 1)
  format = format.replace(/DD/, dateTime.getDate())
  format = format.replace(/hh/, dateTime.getHours())
  format = format.replace(/mm/, dateTime.getMinutes())
  format = format.replace(/ss/, dateTime.getSeconds())

  return format
}

export function getDiff(ms) {
  const dateTimeUnits = [
    { unit: 'second', calc: parseInt(ms / 1000) },
    { unit: 'minute', calc: parseInt(ms / 60000) },
    { unit: 'hour', calc: parseInt(ms / 3600000) },
    { unit: 'day', calc: parseInt(ms / 86400000) },
    { unit: 'month', calc: parseInt(ms / 2628028800) },
    { unit: 'year', calc: parseInt(ms / 31536345600) },
  ]

  let response = 'filter script error'

  dateTimeUnits.some(dateTimeUnit => {
    if (dateTimeUnit.calc > 0) {
      response = dateTimeUnit.calc + ' ' + dateTimeUnit.unit
      if (dateTimeUnit.calc > 1) response += 's'
    }
    return dateTimeUnit.calc === 0
  })

  return response
}
