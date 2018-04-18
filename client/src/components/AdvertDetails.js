import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAdvert } from '../actions/adverts'
import {Link} from 'react-router-dom'

class AdvertDetails extends PureComponent {

  componentWillMount(props) {
    console.log(this.props.match.params.id)
    this.props.fetchAdvert(this.props.match.params.id)
  }

  render() {
    const {advert} = this.props
    if (!advert) return null

    return (
      <div>
        <h1>{ advert.title }</h1>
      </div>
    )
  }
}

const mapStateToProps = function (state, props) {
  return {
    advert: state.advert
  }
}

export default connect(mapStateToProps, { fetchAdvert })(AdvertDetails)
