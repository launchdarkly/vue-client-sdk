import { inject } from 'vue'
import { LD_FLAG } from '.'

export const useFlag = <T>(flagKey: string, defaultValue?: T) => {
  const $ldFlag = inject(LD_FLAG)
  return $ldFlag && $ldFlag(flagKey, defaultValue)
}
