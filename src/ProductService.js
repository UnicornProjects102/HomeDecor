const products = [
    {
        name: `Wearable unicorn head`,
        price: 11.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/deco_1.1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/deco_1.1.jpg",
                alt: "wearable unicorn head 1",
                tumb: "https://unicorn-dev.pl/homedecor/img/deco_1.1_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/deco_1.2.jpg",
                alt: "wearable unicorn head 2",
                tumb: "https://unicorn-dev.pl/homedecor/img/deco_1.2_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/deco_1.3.jpg",
                alt: "wearable unicorn head 3",
                tumb: "https://unicorn-dev.pl/homedecor/img/deco_1.3_tumb.jpg"
            }
        ],
        size: "25 x 30 x 50 cm",
        id: "001-product-name",
        inStock: 4,
        category: "decoration",
        collection: ""
    },
    {
        name: `Unicorn head wall decoration`,
        price: 8.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/deco_2.1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/deco_2.1.jpg",
                alt: "Unicorn head wall decoration 1.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/deco_2.1_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/deco_2.2.jpg",
                alt: "Unicorn head wall decoration 2.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/deco_2.2_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/deco_2.3.jpg",
                alt: "Unicorn head wall decoration 3.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/deco_2.3_tumb.jpg"
            }
        ],
        size: "30 x 55 x 20 cm",
        id: "002-product-name",
        inStock: 3,
        category: "decoration",
        collection: "pink"
    },
    {
        name: "Unicorn christmas tree decoration",
        price: 5.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/deco_3.1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [

            {
                url: "https://unicorn-dev.pl/homedecor/img/deco_3.1.jpg",
                alt: "Unicorn christmas tree decoration 1.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/deco_3.1_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/deco_3.2.jpg",
                alt: "Unicorn christmas tree decoration 2.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/deco_3.2_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/deco_3.3.jpg",
                alt: "Unicorn christmas tree decoration 3.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/deco_3.3_tumb.jpg"
            }
        ],
        size: "10 x 6 cm",
        id: "003-product-name",
        inStock: 6,
        category: "decoration",
        collection: "winter"
    },
    {
        name: "Unicorn headband for dogs",
        price: 2.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/deco_4.1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/deco_4.1.jpg",
                alt: "Unicorn headband for dogs 1.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/deco_4.1_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/deco_4.2.jpg",
                alt: "Unicorn headband for dogs 2.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/deco_4.2_tumb.jpg"
            }
        ],
        size: "10 x 15 cm",
        id: "004-product-name",
        inStock: 10,
        category: "decoration",
        collection: "birthday"
    },
    {
        name: "Unicorn horn for decorating cakes",
        price: 2.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/deco_5.1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/deco_5.1.jpg",
                alt: "Unicorn horn for decorating cakes 1.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/deco_5.1_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/deco_5.2.jpg",
                alt: "Unicorn horn for decorating cakes 2.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/deco_5.2_tumb.jpg"
            }
        ],
        size: "10 x 3 cm",
        id: "005-product-name",
        inStock: 8,
        category: "decoration",
        collection: "birthday"
    },
    {
        name: "Unicorn children chair",
        price: 17.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/deco_6.1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/deco_6.1.jpg",
                alt: "Unicorn children chair 1.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/deco_6.1_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/deco_6.2.jpg",
                alt: "Unicorn children chair 2.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/deco_6.2_tumb.jpg"
            }
        ],
        size: "50 x 90 x 50 cm",
        id: "006-product-name",
        inStock: 5,
        category: "decoration",
        collection: ""
    },
    {
        name: "Pink, glittering unicorn figurine",
        price: 7.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/figure_1.1.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/figure_1.1.jpeg",
                alt: "Pink, glittering unicorn figurine.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/figure_1.1_tumb.jpeg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/figure_1.2.jpeg",
                alt: "example image 1.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/figure_1.2_tumb.jpeg"
            }
        ],
        size: "10 x 15 x 3 cm",
        id: "007-product-name",
        inStock: 6,
        category: "figurines",
        collection: "pink"
    },
    {
        name: "White ceramic unicorn",
        price: 10.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/figure_2.1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/figure_2.1.jpg",
                alt: "White ceramic unicorn 1.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/figure_2.1_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/figure_2.2.jpg",
                alt: "White ceramic unicorn 2.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/figure_2.2_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/figure_2.3.jpg",
                alt: "White ceramic unicorn 3.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/figure_2.3_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/figure_2.4.jpg",
                alt: "White ceramic unicorn 4.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/figure_2.4_tumb.jpg"
            }
        ],
        size: "10 x 15 cm",
        id: "008-product-name",
        inStock: 10,
        category: "figurines",
        collection: ""
    },
    {
        name: "Lying unicorn figurine",
        price: 6.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/figure_3.1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/figure_3.1.jpg",
                alt: "Lying unicorn figurine.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/figure_3.1_tumb.jpg"
            }
        ],
        size: "10 x 15 cm",
        id: "009-product-name",
        inStock: 8,
        category: "figurines",
        collection: "pink"
    },
    {
        name: "Unicorn head figurine",
        price: 2.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/figure_4.1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/figure_4.1.jpg",
                alt: "Unicorn head figurine.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/figure_4.1_tumb.jpg"
            }
        ],
        size: "10 x 15 cm",
        id: "010-product-name",
        inStock: 5,
        category: "figurines",
        collection: "birthday"
    },
    {
        name: "Unicorn mug with golden horn",
        price: 6.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/mug_1.1.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/mug_1.1.jpeg",
                alt: "Unicorn mug with golden horn 1.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/mug_1.1_tumb.jpeg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/mug_1.2.jpeg",
                alt: "Unicorn mug with golden horn 2.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/mug_1.2_tumb.jpeg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/mug_1.3.jpeg",
                alt: "Unicorn mug with golden horn 3.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/mug_1.3_tumb.jpeg"
            }
        ],
        size: "10 x 15 cm",
        id: "011-product-name",
        inStock: 7,
        category: "mugs",
        collection: ""
    },
    {
        name: "Small mug with unicorn",
        price: 6.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/mug_2.1.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/mug_2.1.jpeg",
                alt: "Small mug with unicorn.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/mug_2.1_tumb.jpeg"
            }
        ],
        size: "10 x 15 cm",
        id: "012-product-name",
        inStock: 7,
        category: "mugs",
        collection: ""
    },
    {
        name: "Unicorn mug with rainbow bangs",
        price: 6.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/mug_3.1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/mug_3.1.jpg",
                alt: "Unicorn mug with rainbow bangs 1.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/mug_3.1_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/mug_3.2.jpg",
                alt: "Unicorn mug with rainbow bangs 2.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/mug_3.2_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/mug_3.3.jpg",
                alt: "Unicorn mug with rainbow bangs 3.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/mug_3.3_tumb.jpg"
            }
        ],
        size: "10 x 15 cm",
        id: "013-product-name",
        inStock: 5,
        category: "mugs",
        collection: "winter"
    },
    {
        name: "White mug with unicorn horn",
        price: 10.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/mug_4.1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/mug_4.1.jpg",
                alt: "White mug with unicorn horn.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/mug_4.1_tumb.jpg"
            }
        ],
        size: "10 x 15 cm",
        id: "014-product-name",
        inStock: 5,
        category: "mugs",
        collection: ""
    },
    {
        name: "Black mug with unicorn and text",
        price: 6.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/mug_5.1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/mug_5.1.jpg",
                alt: "Black mug with unicorn and text.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/mug_5.1_tumb.jpg"
            }
        ],
        size: "10 x 15 cm",
        id: "015-product-name",
        inStock: 3,
        category: "mugs",
        collection: "winter"
    },
    {
        name: "Unicorn-shaped pillow",
        price: 5.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/pillow_1.1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/pillow_1.1.jpg",
                alt: "Unicorn-shaped pillow 1.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/pillow_1.1_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/pillow_1.2.jpg",
                alt: "Unicorn-shaped pillow 2.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/pillow_1.2_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/pillow_1.3.jpg",
                alt: "Unicorn-shaped pillow 3.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/pillow_1.3_tumb.jpg"
            }
        ],
        size: "15 x 20 cm",
        id: "016-product-name",
        inStock: 3,
        category: "pillows",
        collection: ""
    },
    {
        name: "Colorful unicorn plush toy",
        price: 6.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/plushie_1.1.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/plushie_1.1.jpeg",
                alt: "Colorful unicorn plush toy 1.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/plushie_1.1_tumb.jpeg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/plushie_1.2.jpeg",
                alt: "Colorful unicorn plush toy 2.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/plushie_1.2_tumb.jpeg"
            }
        ],
        size: "10 x 15 cm",
        id: "017-product-name",
        inStock: 3,
        category: "plush toys",
        collection: ""
    },
    {
        name: "Pink plush unicorn toy",
        price: 6.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/plushie_2.1.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/plushie_2.1.jpeg",
                alt: "Pink plush unicorn toy 1.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/plushie_2.1_tumb.jpeg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/plushie_2.2.jpeg",
                alt: "Pink plush unicorn toy 2.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/plushie_2.2_tumb.jpeg"
            }
        ],
        size: "10 x 15 cm",
        id: "018-product-name",
        inStock: 3,
        category: "plush toys",
        collection: "pink"
    },
    {
        name: "Knitted unicorn plush toy",
        price: 13.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/plushie_3.1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/plushie_3.1.jpg",
                alt: "Knitted unicorn toy 1.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/plushie_3.1_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/plushie_3.2.jpg",
                alt: "Knitted unicorn toy 2.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/plushie_3.2_tumb.jpg"
            }
        ],
        size: "10 x 15 cm",
        id: "019-product-name",
        inStock: 2,
        category: "plush toys",
        collection: ""
    },
    {
        name: "Knitted unicorn with pink mane",
        price: 8.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/plushie_4.1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/plushie_4.1.jpg",
                alt: "Knitted unicorn with pink mane 1.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/plushie_4.1_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/plushie_4.2.jpg",
                alt: "Knitted unicorn with pink mane 2.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/plushie_4.2_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/plushie_4.3.jpg",
                alt: "Knitted unicorn with pink mane 3.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/plushie_4.3_tumb.jpg"
            }
        ],
        size: "10 x 15 cm",
        id: "020-product-name",
        inStock: 2,
        category: "plush toys",
        collection: "pink"
    },
    {
        name: "Green unicorn plush toy",
        price: 5.99,
        tumb: "https://unicorn-dev.pl/homedecor/img/plushie_5.1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imgs: [
            {
                url: "https://unicorn-dev.pl/homedecor/img/plushie_5.1.jpg",
                alt: "Green unicorn plush toy 1.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/plushie_5.1_tumb.jpg"
            },
            {
                url: "https://unicorn-dev.pl/homedecor/img/plushie_5.2.jpg",
                alt: "Green unicorn plush toy 2.jpg",
                tumb: "https://unicorn-dev.pl/homedecor/img/plushie_5.2_tumb.jpg"
            }
        ],
        size: "10 x 15 cm",
        id: "021-product-name",
        inStock: 2,
        category: "plush toys",
        collection: ""
    }
];

export function getProducts() {
    return products
};