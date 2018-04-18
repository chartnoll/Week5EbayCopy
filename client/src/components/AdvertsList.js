import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class AdvertsList extends PureComponent {
  static propTypes = {
    adverts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })).isRequired
  }

  render() {
    const {adverts} = this.props
    return (
      <div>
        <h1>All items</h1>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { adverts.map(advert => (<tr key={advert.id}>
              <td>{advert.id}</td>
              <td>{advert.name}</td>
              <td>&euro; {advert.price}.00</td>
            </tr>)) }
          </tbody>
				</table>
      </div>
    )
  }
}

export default AdvertsList
