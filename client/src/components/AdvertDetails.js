import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class AdvertDetails extends PureComponent {
  render() {
    const {advert} = this.props
    return (
      <div>
        <h1>{ advert.name }</h1>
      </div>
    )
  }
}

export default AdvertDetails
