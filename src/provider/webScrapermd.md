const products = Array.from(document.querySelectorAll('.product-card__info')).map((card) => {
    const title = card.querySelector('.product-card__title')?.textContent.trim();
    const subtitle = card.querySelector('.product-card__subtitle')?.textContent.trim();
    const colorCount = card.querySelector('.product-card__product-count')?.textContent.trim();
    const price = card.querySelector('[data-testid="product-price"]')?.textContent.trim();
    
    return {
        title,
        subtitle,
        colorCount,
        price,
    };
});





const productImages = Array.from(document.querySelectorAll('img'))
  .map(img => img.src)
  .filter(src => src.includes('nike.com') && src.includes('/a/images/'));

console.log(products.slice(1,11))
console.log(product.slice(1,11))


[
    {
        "title": "Nike Sportswear Collection",
        "subtitle": "Women's Pleated Track Jacket",
        "colorCount": "2 Colors",
        "price": "$200",
        "images": [
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f01472a-152d-4c41-a01c-3a3aa3927216/W+NSW+CLLCTN+PLEATD+TRK+JKT.png"
        ]
    },
    {
        "title": "Nike Sportswear Collection",
        "subtitle": "Women's Mid-Rise Pleated Track Pants",
        "colorCount": "2 Colors",
        "price": "$160",
        "images": [
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/78a25773-311e-4306-bfcf-b37696be656c/W+NSW+CLLCTN+PLEATD+TRK+PNT.png"
        ]
    },
    {
        "title": "Nike Sportswear Windrunner",
        "subtitle": "Women's Shine Vest",
        "colorCount": "3 Colors",
        "price": "$75",
        "images": [
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32ef3915-bb83-443d-892d-2e33edb95835/W+NSW+NK+LIQ+SHINE+VEST.png"
        ]
    },
    {
        "title": "Nike Sportswear Windrunner",
        "subtitle": "Women's Shine Pants",
        "colorCount": "2 Colors",
        "price": "$95",
        "images": [
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/43ad523d-3357-440c-ba8f-dc904cc2cb22/W+NSW+NK+LIQ+SHINE+PANT.png"
        ]
    },
    {
        "title": "Nike Sportswear",
        "subtitle": "Women's V-Neck Jersey Top",
        "colorCount": "2 Colors",
        "price": "$55",
        "images": [
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6580735e-e042-4708-b41f-ea2eaf171ae7/W+NSW+V+NECK+JERSEY.png"
        ]
    },
    {
        "title": "Nike Sportswear",
        "subtitle": "Women's Mid-Rise Wide-Leg Track Pants",
        "colorCount": "2 Colors",
        "price": "$75",
        "images": [
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60013fd9-0d62-4365-b177-529879835ef8/W+NSW+WIDE+LEG+TRACK+PNT.png"
        ]
    },
    {
        "title": "Nike Sportswear Windrunner",
        "subtitle": "Women's Knit Jacket",
        "colorCount": "3 Colors",
        "price": "$100",
        "images": [
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3dbe83b8-502b-41da-938f-c5b785226254/W+NSW+NK+WR+POLY+KNIT+JKT.png"
        ]
    },
    {
        "title": "Nike Sportswear Windrunner",
        "subtitle": "Women's Knit Skirt",
        "colorCount": "3 Colors",
        "price": "$55",
        "images": [
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7402776e-762d-4ce8-abff-4b9e205296a3/W+NSW+NK+WR+POLY+KNIT+SKIRT.png"
        ]
    },
    {
        "title": "Nike Pro",
        "subtitle": "Women's Dri-FIT Loose Crew-Neck French Terry Sweatshirt",
        "colorCount": "2 Colors",
        "price": "$70",
        "images": [
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5bf62bdc-171e-4524-81cf-083fb9f9e566/W+NP+DF+FLC+CREW+TT+GRX.png"
        ]
    },
    {
        "title": "Nike Zenvy",
        "subtitle": "Women's High-Waisted Capri Leggings",
        "colorCount": "2 Colors",
        "price": "$95",
        "images": [
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/406c50d8-a422-40a1-bf70-4236960e0d5c/W+NK+DF+ZENVY+HR+CAPRI+TGHT.png"
        ]
    }
]






