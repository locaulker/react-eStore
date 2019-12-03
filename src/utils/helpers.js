import url from './URL'

// flatten function for products
export function flattenProducts(data) {
  return data.map( item => {

    // cloudinary
    let image = item.image.url

    // local setup for no deployment
    // let image = `${url}${item.image.url}`
    return {...item, image}

  })
}

// featured products
export function featuredProducts(data) {

  return data.filter(item => {
    return item.featured === true
  })

}