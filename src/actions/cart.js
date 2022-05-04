const user = JSON.parse(localStorage.getItem('user'));
export const onAddCart = (carts, product) => {
    if (carts.length > 0) {
      const findProduct = carts
        .filter(value => (value.idUser == user.info.id ? true : false))[0]
        .items.filter(value =>value.id == product.id?true:false)
      if (findProduct.length > 0) {
        const newCarts = carts.map(value => {
          if (value.idUser === user.info.id) {
            const newItems = value.items.map(value => {
              if (value.id === product.id)
                return {
                  ...value,
                  amount: value.amount + 1
                }
              else
                return {
                  ...value
                }
            })
            return {
              ...value,
              items: newItems
            }
          } else return value
        })
        return newCarts
      } else {
        const newCarts = [...carts]
        newCarts[0].items=[
          ...newCarts[0].items,
          {
            ...product,
            amount: 1
          }
        ]
        console.log(newCarts)
        return newCarts
      }
    } else {
      const newCarts = [
        {
          idUser: user.info.id,
          items: []
        }
      ]
      newCarts[0].items.push({
        ...product,
        amount: 1
      })

      return newCarts
    }
  }

export  const onRemoveCart = (carts,product) => {
    const findProduct = carts
      .filter(value => (value.idUser === user.info.id ? true : false))[0]
      .items.filter(value => (value.id === product.id ? true : false))
    if (findProduct.length > 0) {
      const newCarts = carts.map(value => {
        if (value.idUser === user.info.id) {
          const newItems = value.items
            .filter(value => {
              if (value.id === product.id) {
                if (value.amount === 1) return false
                else return true
              }else
                return true
            })
            .map(value => {
              if (value.id === product.id)
                return {
                  ...value,
                  amount: value.amount - 1
                }
              else
                return {
                  ...value
                }
            })
          return {
            ...value,
            items: newItems
          }
        } else return value
      })
  
      return newCarts
    }
  }
