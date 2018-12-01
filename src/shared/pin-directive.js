export default {
  bind: (element, binding) => {
    Object.keys(binding.value).forEach((position) => {
      console.log(position)
      element.style[position] = binding.value[position]
    })
    // if(binding.arg != 'position')
    element.style.position = 'absolute'
  },
  update: (element, binding) => {
    Object.keys(binding.value).forEach((position) => {
      console.log(position)
      element.style[position] = binding.value[position]
    })
    // if(binding.arg != 'position')
    element.style.position = 'absolute'
  }
}
