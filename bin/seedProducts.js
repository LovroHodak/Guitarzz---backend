require("dotenv").config();
require("../config/db.config");
const mongoose = require("mongoose");

const ProductModel = require("../models/product.model");

ProductModel.insertMany([
  {
    id: 0,
    name: "IBANEZ GRX40-BKN",
    price: 1379,
    image:
      "https://muzikercdn.com/uploads/products/3700/370093/thumb_d_gallery_base_4a66741b.jpg",
    stock: 50,
    description:
      "A guitar perfect for any young musician. The 3/4 LA Electric Guitar is the perfect place to start. There's no need for complex set ups, The 3/4 LA is already strung and ready to go - easy! We have designed this guitar with youngsters in mind, meaning they can begin learning straight away. Being incredibly affordable for a guitar of such quality, it'll keep them inspired to keep playing.",
    category: "ibanez",
  },
  {
    id: 1,
    name: "IBANEZ RG350DX",
    price: 1337,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DOzNDtv9Z5rpz5PGFToFQH6VPatnGPIwrQ&usqp=CAU",
    stock: 50,
    description:
      "The American Original Jazz Bass 70 is the exact replica of the one that landed Funk, Slap and Groovy styles in the history of music. All the details are there: Pure Vintage 75 Jazz Bass pickups, block type markers and the most comfortable sleeve profile of the decade, the famous 1975. It is offered in Sunburst, Natural and Black. © SonoVente.com :https://www.sonovente.com/en-gb/fender-american-original-70s-jazz-bass-natural-p60203.html",
    category: "ibanez",
  },
  {
    id: 2,
    name: "IBANEZ S",
    price: 1860,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6he8K9bdREWtakvs3UqRxCAYGWTzIZbwYg&usqp=CAU",
    stock: 50,
    description:
      'X4 Series is the extension of Peaces Classic, but much easier to carry and looks more professional. The cymbal boom stand is designed to be closer to the floor which shows the stability is higher than others. You might think the stand is quiet heavy since the tube is thick. Dont worry about the weight because its not that ponderous as you see. Instead, its light to carry! X4 is four-piece with 9-ply Mahogany drum set which includes a snare stand, cymbal stand, cymbal boom stand, and hi-hat stand. Moreover, the suspension system is rigid enough so that it can endure drummers powerful hit; and the Tom Tom holder-DA 141 aives it 360° placement freedom to adjust the position you want. X4 Series can be said the classic of classics and can bring you the perfect enjoyment!',
    category: "ibanez",
  },
  {
    id: 3,
    name: "YAMAHA Pacifica",
    price: 345,
    image:
      "https://www.stars-music.com/medias/yamaha/pacifica-pac112vm-hss-trem-mn-hd-169047.jpg",
    stock: 50,
    description:
      "A guitar perfect for any young musician. The 3/4 LA Electric Guitar is the perfect place to start. There's no need for complex set ups, The 3/4 LA is already strung and ready to go - easy! We have designed this guitar with youngsters in mind, meaning they can begin learning straight away. Being incredibly affordable for a guitar of such quality, it'll keep them inspired to keep playing.",
    category: "yamaha",
  },
  {
    id: 4,
    name: "YAMAHA SLG 110 S NH",
    price: 1997,
    image:
      "https://cdnm2-kraftmusic.netdna-ssl.com/media/catalog/product//y/a/yam-pac012mr_1_1.jpg",
    stock: 50,
    description:
      "The American Original Jazz Bass 70 is the exact replica of the one that landed Funk, Slap and Groovy styles in the history of music. All the details are there: Pure Vintage 75 Jazz Bass pickups, block type markers and the most comfortable sleeve profile of the decade, the famous 1975. It is offered in Sunburst, Natural and Black. © SonoVente.com :https://www.sonovente.com/en-gb/fender-american-original-70s-jazz-bass-natural-p60203.html",
    category: "yamaha",
  },
  {
    id: 5,
    name: "YAMAHA FG800",
    price: 1455,
    image:
      "https://images.samash.com/sa/YFG/YFG800XXX-P.fpx?cvt=jpg",
    stock: 50,
    description:
      'X4 Series is the extension of Peaces Classic, but much easier to carry and looks more professional. The cymbal boom stand is designed to be closer to the floor which shows the stability is higher than others. You might think the stand is quiet heavy since the tube is thick. Dont worry about the weight because its not that ponderous as you see. Instead, its light to carry! X4 is four-piece with 9-ply Mahogany drum set which includes a snare stand, cymbal stand, cymbal boom stand, and hi-hat stand. Moreover, the suspension system is rigid enough so that it can endure drummers powerful hit; and the Tom Tom holder-DA 141 aives it 360° placement freedom to adjust the position you want. X4 Series can be said the classic of classics and can bring you the perfect enjoyment!',
    category: "yamaha",
  },
  {
    id: 6,
    name: "FENDER Stratocaster",
    price: 879,
    image:
      "https://sc1.musik-produktiv.com/pic-010105739xxl/fender-player-stratocaster-mn-pwt.jpg",
    stock: 50,
    description:
      "A guitar perfect for any young musician. The 3/4 LA Electric Guitar is the perfect place to start. There's no need for complex set ups, The 3/4 LA is already strung and ready to go - easy! We have designed this guitar with youngsters in mind, meaning they can begin learning straight away. Being incredibly affordable for a guitar of such quality, it'll keep them inspired to keep playing.",
    category: "fender",
  },
  {
    id: 7,
    name: "FENDER Telecaster",
    price: 1957,
    image:
      "https://static.sonovente.com/img/library/zoom/62/optim/62151_1.jpg",
    stock: 50,
    description:
      "The American Original Jazz Bass 70 is the exact replica of the one that landed Funk, Slap and Groovy styles in the history of music. All the details are there: Pure Vintage 75 Jazz Bass pickups, block type markers and the most comfortable sleeve profile of the decade, the famous 1975. It is offered in Sunburst, Natural and Black. © SonoVente.com :https://www.sonovente.com/en-gb/fender-american-original-70s-jazz-bass-natural-p60203.html",
    category: "fender",
  },
  {
    id: 8,
    name: "FENDER Standard",
    price: 2267,
    image:
      "https://d1aeri3ty3izns.cloudfront.net/media/28/280692/600/preview.jpg",
    stock: 50,
    description:
      'X4 Series is the extension of Peaces Classic, but much easier to carry and looks more professional. The cymbal boom stand is designed to be closer to the floor which shows the stability is higher than others. You might think the stand is quiet heavy since the tube is thick. Dont worry about the weight because its not that ponderous as you see. Instead, its light to carry! X4 is four-piece with 9-ply Mahogany drum set which includes a snare stand, cymbal stand, cymbal boom stand, and hi-hat stand. Moreover, the suspension system is rigid enough so that it can endure drummers powerful hit; and the Tom Tom holder-DA 141 aives it 360° placement freedom to adjust the position you want. X4 Series can be said the classic of classics and can bring you the perfect enjoyment!',
    category: "fender",
  },
  {
    id: 9,
    name: "FENDER Yngwie",
    price: 1200,
    image:
      "https://d1aeri3ty3izns.cloudfront.net/media/12/128002/600/preview_1.jpg",
    stock: 50,
    description:
      "A guitar perfect for any young musician. The 3/4 LA Electric Guitar is the perfect place to start. There's no need for complex set ups, The 3/4 LA is already strung and ready to go - easy! We have designed this guitar with youngsters in mind, meaning they can begin learning straight away. Being incredibly affordable for a guitar of such quality, it'll keep them inspired to keep playing.",
    category: "fender",
  },
  {
    id: 10,
    name: "FENDER Custom",
    price: 1657,
    image:
      "https://sc1.musik-produktiv.com/pic-010113174xxl/fender-custom-shop-1957-stratocaster-heavy-relic-black-10113174.jpg",
    stock: 50,
    description:
      "The American Original Jazz Bass 70 is the exact replica of the one that landed Funk, Slap and Groovy styles in the history of music. All the details are there: Pure Vintage 75 Jazz Bass pickups, block type markers and the most comfortable sleeve profile of the decade, the famous 1975. It is offered in Sunburst, Natural and Black. © SonoVente.com :https://www.sonovente.com/en-gb/fender-american-original-70s-jazz-bass-natural-p60203.html",
    category: "fender",
  },
  {
    id: 11,
    name: "IBANEZ Folk",
    price: 1799,
    image:
      "https://static.sonovente.com/img/library/zoom/38/optim/38108_1.jpg",
    stock: 50,
    description:
      'X4 Series is the extension of Peaces Classic, but much easier to carry and looks more professional. The cymbal boom stand is designed to be closer to the floor which shows the stability is higher than others. You might think the stand is quiet heavy since the tube is thick. Dont worry about the weight because its not that ponderous as you see. Instead, its light to carry! X4 is four-piece with 9-ply Mahogany drum set which includes a snare stand, cymbal stand, cymbal boom stand, and hi-hat stand. Moreover, the suspension system is rigid enough so that it can endure drummers powerful hit; and the Tom Tom holder-DA 141 aives it 360° placement freedom to adjust the position you want. X4 Series can be said the classic of classics and can bring you the perfect enjoyment!',
    category: "ibanez",
  },
  {
    id: 12,
    name: "IBANEZ Catena",
    price: 1111,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC03VuN6PfxRmG1JIeYszCOz-kFufLMF4OtA&usqp=CAU",
    stock: 50,
    description:
      'X4 Series is the extension of Peaces Classic, but much easier to carry and looks more professional. The cymbal boom stand is designed to be closer to the floor which shows the stability is higher than others. You might think the stand is quiet heavy since the tube is thick. Dont worry about the weight because its not that ponderous as you see. Instead, its light to carry! X4 is four-piece with 9-ply Mahogany drum set which includes a snare stand, cymbal stand, cymbal boom stand, and hi-hat stand. Moreover, the suspension system is rigid enough so that it can endure drummers powerful hit; and the Tom Tom holder-DA 141 aives it 360° placement freedom to adjust the position you want. X4 Series can be said the classic of classics and can bring you the perfect enjoyment!',
    category: "ibanez",
  },
  {
    id: 13,
    name: "GIBSON Les Paul",
    price: 265,
    image:
      "https://static.gibson.com/product-images/Custom/CUS118365/Ebony/front-banner-1600_900.png",
    stock: 50,
    description:
      "A guitar perfect for any young musician. The 3/4 LA Electric Guitar is the perfect place to start. There's no need for complex set ups, The 3/4 LA is already strung and ready to go - easy! We have designed this guitar with youngsters in mind, meaning they can begin learning straight away. Being incredibly affordable for a guitar of such quality, it'll keep them inspired to keep playing.",
    category: "gibson",
  },
  {
    id: 14,
    name: "GIBSON Cherry",
    price: 1320,
    image:
      "https://static.gibson.com/product-images/USA/USAPRN180/Cherry/front-banner-1600_900.png",
    stock: 50,
    description:
      "The American Original Jazz Bass 70 is the exact replica of the one that landed Funk, Slap and Groovy styles in the history of music. All the details are there: Pure Vintage 75 Jazz Bass pickups, block type markers and the most comfortable sleeve profile of the decade, the famous 1975. It is offered in Sunburst, Natural and Black. © SonoVente.com :https://www.sonovente.com/en-gb/fender-american-original-70s-jazz-bass-natural-p60203.html",
    category: "gibson",
  },
  {
    id: 15,
    name: "GIBSON ES",
    price: 1000,
    image:
      "https://www.scmusic.com.au/content/uploads/2018/08/Gibson-Es-Les-Paul-Custom-Shop-Black-Beauty-Vos-With-Bigsby-New-with-Warranty-22.jpg",
    stock: 50,
    description:
      'X4 Series is the extension of Peaces Classic, but much easier to carry and looks more professional. The cymbal boom stand is designed to be closer to the floor which shows the stability is higher than others. You might think the stand is quiet heavy since the tube is thick. Dont worry about the weight because its not that ponderous as you see. Instead, its light to carry! X4 is four-piece with 9-ply Mahogany drum set which includes a snare stand, cymbal stand, cymbal boom stand, and hi-hat stand. Moreover, the suspension system is rigid enough so that it can endure drummers powerful hit; and the Tom Tom holder-DA 141 aives it 360° placement freedom to adjust the position you want. X4 Series can be said the classic of classics and can bring you the perfect enjoyment!',
    category: "gibson",
  }
]).then(() => {
    console.log('Products added to Atlas')
    mongoose.connection.close();
}).catch((err) => {
    console.log('Seeding products Failed in Atlas: ', err)
})
