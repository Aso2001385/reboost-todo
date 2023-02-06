export function nestClone(materials) {
  return JSON.parse(JSON.stringify(materials))
}

export function exceptCopy(material, keys) {
  const obj = nestClone(material)
  keys.forEach(key => delete obj[key])
  return obj
}

export function onlyCopy(material, keys) {
  const obj = nestClone(material)
  const onlyKeys = Object.keys(material).filter(function (v) {
    return !keys.includes(v)
  })
  onlyKeys.forEach(key => delete obj[key])
  return obj
}

export function orderBy(
  materials,
  key = String,
  mode = Boolean,
  asc = Boolean,
  sub = { keys: Array, mode: Boolean, asc: Boolean }
) {
  // 全部昇順

  switch (mode) {
    case 'num':
      materials.sort((x, y) => {
        if (x[key] - y[key] !== 0 || !(sub.keys instanceof Array)) return x[key] - y[key]

        // 二つ目のソート条件
        sub.keys.forEach(e => {
          x = x[e]
          y = y[e]
        })

        switch (sub.mode) {
          case 'num':
            if (asc) return sub.asc ? x - y : y - x // 昇順(リバースなし)なら
            else return sub.asc ? y - x : x - y // 降順(リバースあり)なら

          case 'str':
            if (asc) return sub.asc ? x.localeCompare(y, 'ja') : y.localeCompare(x, 'ja') // 昇順(リバースなし)なら
            else return sub.asc ? y.localeCompare(x, 'ja') : x.localeCompare(y, 'ja') // 降順(リバースあり)なら
          default:
            if (asc) return sub.asc ? x.length - y.length : y.length - x.length // 昇順(リバースなし)なら
            else return sub.asc ? y.length - x.length : x.length - y.length // 降順(リバースあり)なら
        }
      })
      break
    case 'str':
      materials.sort((x, y) => {
        if (x[key].localeCompare(y[key], 'ja') !== 0 || !(sub.keys instanceof Array))
          return x[key].localeCompare(y[key], 'ja')

        sub.keys.forEach(e => {
          x = x[e]
          y = y[e]
        })

        switch (sub.mode) {
          case 'num':
            if (asc) {
              // 昇順(リバースなし)なら
              return sub.asc ? x - y : y - x
            } else {
              // 降順(リバースあり)なら
              return sub.asc ? y - x : x - y
            }

          case 'str':
            if (asc) {
              // 昇順(リバースなし)なら
              return sub.asc ? x.localeCompare(y, 'ja') : y.localeCompare(x, 'ja')
            } else {
              // 降順(リバースあり)なら
              return sub.asc ? y.localeCompare(x, 'ja') : x.localeCompare(y, 'ja')
            }
          default:
            if (asc) {
              // 昇順(リバースなし)なら
              return sub.asc ? x.length - y.length : y.length - x.length
            } else {
              // 降順(リバースあり)なら
              return sub.asc ? y.length - x.length : x.length - y.length
            }
        }
      })

      break
    default:
      materials.sort((x, y) => {
        if (x[key].length - y[key].length !== 0 || !(sub.keys instanceof Array)) return x[key].length - y[key].length

        sub.keys.forEach(e => {
          x = x[e]
          y = y[e]
        })

        switch (sub.mode) {
          case 'num':
            if (asc) {
              // 昇順(リバースなし)なら
              return sub.asc ? x - y : y - x
            } else {
              // 降順(リバースあり)なら
              return sub.asc ? y - x : x - y
            }

          case 'str':
            if (asc) {
              // 昇順(リバースなし)なら
              return sub.asc ? x.localeCompare(y, 'ja') : y.localeCompare(x, 'ja')
            } else {
              // 降順(リバースあり)なら
              return sub.asc ? y.localeCompare(x, 'ja') : x.localeCompare(y, 'ja')
            }
          default:
            if (asc) {
              // 昇順(リバースなし)なら
              return sub.asc ? x.length - y.length : y.length - x.length
            } else {
              // 降順(リバースあり)なら
              return sub.asc ? y.length - x.length : x.length - y.length
            }
        }
      })

      break
  }

  if (!asc) materials.reverse()

  return materials
}

export function arrayOrderBy(materials, mode = Boolean, asc = Boolean) {
  switch (mode) {
    case 'num':
      materials.sort((x, y) => {
        return x - y
      })
      break
    case 'str':
      materials.sort((x, y) => {
        return x.localeCompare(y, 'ja')
      })

      break
    default:
      materials.sort((x, y) => {
        return x.length - y.length
      })
      break
  }

  if (!asc) materials.reverse()
  return materials
}
