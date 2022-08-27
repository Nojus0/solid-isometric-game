
const Keyboard = new Map<string, boolean>([])

onkeydown = e => {
  Keyboard.set(e.key.toLowerCase(), true)
}

onkeyup = e => {
  Keyboard.set(e.key.toLocaleLowerCase(), false)
}

export default function useKeyboard() {
    return Keyboard
}