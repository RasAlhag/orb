import SetBackgroundColor from "./SetBackgroundColor"
import SetBorderColor from "./SetBorderColor"
import SetFontSize from "./SetFontSize"
import SetTextColor from "./SetTextColor"

const map = [
  {
    key: 'SetBackgroundColor',
    model: SetBackgroundColor
  },
  {
    key: 'SetBorderColor',
    model: SetBorderColor
  },
  {
    key: 'SetFontSize',
    model: SetFontSize
  },
  {
    key: 'SetTextColor',
    model: SetTextColor
  },
]

export const wakeUp = (data) => {
  let info = map.find(info => info.key === data.typeName)
  data.__proto__ = info.model.prototype
}

export default map