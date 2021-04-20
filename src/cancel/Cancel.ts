export default class Cancel {
  message?: string

  constructor(message: string) {
    this.message = message
  }
}

export function inCancel(value: any): boolean {
  return value instanceof Cancel
}
