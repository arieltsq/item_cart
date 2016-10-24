// ComponentDidMount() is called right after the component is mounted
// React.createClass function, they’re defined as object properties
var AllItems = React.createClass({
  // before the component is mounted, its data has to be initialized
  handleDelete (id) {
    this.props.handleDelete(id)
  },
  onUpdate (item) {
    this.props.onUpdate(item)
  },
  render () {
    // iniitally it was this.setState
    // as we are sending variables down the children component from body to all items
    var items = this.props.items.map((item) => {
      return (
        <div key={item.id}>
          <Item item={item} handleDelete={this.handleDelete.bind(this, item.id)} handleUpdate={this.onUpdate} />
        </div>)
    })
    return (<div>{items}</div>)
  }
})
