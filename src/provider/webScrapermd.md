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

console.log(productImages.slice(1,11));

console.log(products.slice(1,11));
[
    "https://static.nike.com/a/images/t_default/772de257-fbd7-49d8-abe6-b03247ded453/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_default/deab90eb-9778-4f6b-88ca-8c3f9780a4fa/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_default/4e4829dd-f887-4fae-b2d6-3d95f762b89b/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_default/269d4a7e-e907-44a2-8da5-731a0a296988/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_default/a7716e21-5896-4af2-b64c-fa42f8314377/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_default/394021f7-1407-4f0a-ae44-858acef76fbf/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_default/e67a4425-b269-4e2f-b5e4-ec4f62346349/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_default/4f611023-ccc7-473d-a2bc-29f11f8d6ebd/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_default/08dc7f9b-a4c3-4643-83df-6773c8e1a019/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/69354e41-3719-432e-8866-f9c66591f0fb/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/69354e41-3719-432e-8866-f9c66591f0fb/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/0d641577-64b4-4963-92d5-2054a2f6de58/AIR+MAX+DN8+AMD.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/50568a09-f867-430c-bfef-ea0f3404c430/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/59ff827c-5672-4657-9eca-0179dfe206c3/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/d95ad677-8900-4590-989f-7b17a3bd4080/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/659a37b1-577a-4fd5-9a05-ae79f4759992/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/70a51c55-ae56-49eb-a074-c530971540ea/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/60120284-9c6c-4eb8-aee8-b4179c20eb57/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/beca3db9-a469-4bc1-bbf5-14a846e90db6/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/0eae1c6a-4a49-4e6a-91ab-783f57040e83/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/5ba0cd0d-6d5b-498a-8e28-621de4090bc3/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/20fdb293-50ff-42f4-ae6d-87d5c55eae5c/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/3464da38-cf81-4e2d-a423-b84337638774/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/891821a5-34ca-4a46-9d72-fbdecf137336/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/0f8dc578-8acf-4530-8642-1703ea6d822f/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/4861f5fb-c9ce-473b-aa37-5358ae475bb8/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/b5046951-c318-4745-8b1c-94e983a9d0f5/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/772de257-fbd7-49d8-abe6-b03247ded453/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/6fcba56f-b8c9-4fd1-83db-e6cded8869e0/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/t_default/772de257-fbd7-49d8-abe6-b03247ded453/AIR+MAX+DN8.png",
    "https://static.nike.com/a/images/w_960,c_limit/3732c58b-d0ad-4c3c-898c-c4b90193312b/image.png"
]




