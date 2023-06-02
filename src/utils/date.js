import moment from 'moment'

export const dateYMD = opt => {
  if (String(opt).length === 10) opt = opt * 1000
  return moment(opt).format('YYYY-MM-DD HH:mm:ss')
}
