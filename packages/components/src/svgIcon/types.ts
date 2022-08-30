import { ExtractPropTypes } from 'vue'

export const svgIconProps = {
  className: {
    type: String,
    default: '',
  },
  iconClass: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#409eff',
  },
  size: {
    type: String,
    default: '20px',
  },
}

export const searchEmits = ['onSearch', 'onClear']
export type SvgIconProps = ExtractPropTypes<typeof svgIconProps>
export type SearchEmits = ExtractPropTypes<typeof searchEmits>
