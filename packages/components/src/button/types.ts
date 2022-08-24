import { ExtractPropTypes } from 'vue'

export const ButtonType = ['default', 'primary', 'success', 'warning', 'danger']
export const ButtonSize = ['large', 'normal', 'small', 'mini'];
export const buttonProps = {
    tip:String,
    type: {
      type: String,
      values: ButtonType
    },
    size: {
      type: String,
      values: ButtonSize
    }
  }

  export type ButtonProps = ExtractPropTypes<typeof buttonProps>