import React from 'react'
import {StyledWishlist} from './Wishes.style'
import {Button} from 'antd'

function WishCard(props) {

  return (
    <StyledWishlist>
      <div className="block">
      <div style={{ display: 'flex', alignItems: 'center'}}>
      <div className="img_block">
          <img src={props.img[1]} alt="product" />
        </div>
        <div className="info_block">
          <h3>{props.productName}</h3>
          <h4>${props.price}.00</h4>
          <p>
           {props.description}
          </p>
        </div>
      </div>
        <div className="quick_actions">
            <Button type="primary" onClick={props.handleClick}>
                Remove wishlist
            </Button>
        </div>
      </div>
    </StyledWishlist>
  )
}

export default WishCard