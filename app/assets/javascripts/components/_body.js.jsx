var Body = React.createClass({
  // Now the items fetched when <Body/>
  // Send variables down the children components with props
  // props are immutable in the child and, in order to reach them, we need to use this.props
  getInitialState () {
    return {items: []}
  },
  handleDelete (id) {
    $.ajax({
      url: `/api/v1/items/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeItemClient(id)
      }
    })
  },
  // <body/ will take the onUpdate property of <AllItems /> with the items in it
  handleUpdate (item) {
    $.ajax({
      url: `/api/v1/items/${item.id}`,
      type: 'PUT',
      data: {item: item},
      success: () => {
        // console.log('you did this')
        this.updateItems(item)
        // callback to swap objects
      }
    })
  },
  updateItems(item) { var items = this.state.items.filter((i) => { return i.id != item.id }); items.push(item); this.setState({items: items }); },

  removeItemClient (id) {
    var newItems = this.state.items.filter((item) => {
      return item.id != id
    })
    this.setState({items: newItems})
  },
  componentDidMount () {
    $.getJSON('/api/v1/items.json', (response) => { this.setState({items: response}) })
  },
  handleSubmit (item) {
    var newState = this.state.items.concat(item)
    this.setState({items: newState})
  },
  render () {
    return (<div><NewItem handleSubmit={this.handleSubmit} /><AllItems items={this.state.items} handleDelete={this.handleDelete} onUpdate={this.handleUpdate} /></div>)
  }
})
