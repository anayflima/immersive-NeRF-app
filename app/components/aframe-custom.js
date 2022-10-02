AFRAME.registerComponent('lowpoly', {
  schema: {
    // Here we define our properties, their types and default values
    color: { type: 'string', default: '#FFF' },
    nodes: { type: 'boolean', default: false },
    opacity: { type: 'number', default: 1.0 },
    wireframe: { type: 'boolean', default: false }
  },

  init: function() {
    // This block gets executed when the component gets initialized.
    // Then we can use our properties like so:
    console.log('The color of our component is ', this.data.color)
  }
}