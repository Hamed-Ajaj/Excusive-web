import { Contact, CreditCard, DollarSign, EarthIcon, Outdent, ShoppingBag, Truck, User } from "lucide-react";
import { FaInstagram,FaLinkedin,FaGithub,FaFacebook,FaTwitterSquare } from "react-icons/fa";

export const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export const myAccountLinks = [
    { href: "/orders", label: "My Account" },
    { href: "/sign-up", label: "Login/register" },
    { href: "/cart", label: "cart" },
    { href: "/wishlist", label: "wishlist" },
    { href: "/Shop", label: "Shop" },
]

export const quickLinks =[
    { href: "/privacy", label: "Privacy policy" },
    { href: "/terms", label: "Term of Use" },
    { href: "/FAQ", label: "FAQ" },
    { href: "/contact", label: "Contact" },
]

export const socialMediaLinks = [
    { href: "https://www.facebook.com", label: <FaFacebook size={30}/> },
    { href: "https://www.twitter.com", label: <FaTwitterSquare size={30}/> },
    { href: "https://www.instagram.com", label: <FaInstagram size={30}/> },
    { href: "https://www.linkedin.com", label: <FaLinkedin size={30}/> },
    { href: "https://www.github.com", label: <FaGithub size={30}/> },

]

export const categories =[
    {
        id:1,
        title:"Phones",
        img:"/icons/phone.svg",
    },
    {
        id:2,
        title:"Computers",
        img:"/icons/computer.svg",
    },
    {
        id:3,
        title:"Smart Watches",
        img:"/icons/watch.svg",
    },
    {
        id:4,
        title:"Cameras",
        img:"/icons/camera.svg",
    },
    {
        id:5,
        title:"HeadPhones",
        img:"/icons/headerphone.svg",
    },
    {
        id:6,
        title:"Gaming",
        img:"/icons/gaming.svg",
    },
]

export const services = [
    {
        id:1,
        title:"Free And Fast Delivery",
        desc:"Free delivery for all orders over $140",
        img:"/icons/delivery.svg",
    },
    {
        id:2,
        title:"24/7 CUSTOMER SERVICE",
        desc:"We are always here to help you",
        img:"/icons/customer-service.svg",
    },
    {
        id:3,
        title:"MONEY BACK GUARANTEE",
        desc:"We return money within 30 days",
        img:"/icons/secure.svg",
    }
]

export const exploreProducts = [
    {
        id:1,
        title:"Breed Dry Dog Food",
        price:100,
        reviews:10,
        isNew:false,
        stars:3,
        img:"/products/breedDog.svg"
    },
    {
        id:2,
        title:"Breed Dry Dog Food",
        price:100,
        reviews:10,
        isNew:false,
        stars:3,
        img:"/products/breedDog.svg"
    },
    {
        id:3,
        title:"Breed Dry Dog Food",
        price:100,
        reviews:10,
        isNew:false,
        stars:3,
        img:"/products/breedDog.svg"
    },
    {
        id:4,
        title:"Breed Dry Dog Food",
        price:100,
        reviews:10,
        isNew:true,
        stars:3,
        img:"/products/breedDog.svg"
    },
    {
        id:5,
        title:"Breed Dry Dog Food",
        price:100,
        reviews:10,
        isNew:true,
        stars:3,
        img:"/products/breedDog.svg"
    },
    {
        id:6,
        title:"Breed Dry Dog Food",
        price:100,
        reviews:10,
        isNew:false,
        stars:3,
        img:"/products/breedDog.svg"
    },
    {
        id:7,
        title:"Breed Dry Dog Food",
        price:100,
        reviews:10,
        isNew:false,
        stars:3,
        img:"/products/breedDog.svg"
    },
    {
        id:8,
        title:"Breed Dry Dog Food",
        price:100,
        reviews:10,
        isNew:true,
        stars:3,
        img:"/products/breedDog.svg"
    },
]

export const profileMenuItems = [
    {
        id:1,
        name:"Manage My Account",
        img:<User/> ,
        href:"/profile"
    },
    {
        id:2,
        name:"My Orders",
        img:<ShoppingBag /> ,
        href:"/orders"
    }
]

export const statistics = [
    {
        id:1,
        numb:10.5,
        desc:"sellers active on the platform",
        img:"/icons/seller.svg"
    },
    {
        id:2,
        numb:33,
        desc:"Monthly Product Sale",
        img:"/icons/monthly.svg"
    },
    {
        id:3,
        numb:45.5,
        desc:"Customer active in our site",
        img:"/icons/customer.svg"
    },
    {
        id:4,
        numb:25,
        desc:"Annual gross sale in our site",
        img:"/icons/annual.svg"
    },
]

export const cartItems = [
    {
        id:1,
        title:"Breed Dry Dog Food",
        price:100,
        quantity:1,
        productImg:"/products/breedDog.svg"
    },
    {
        id:2,
        title:"Breed Dry Dog Food",
        price:100,
        quantity:2,
        productImg:"/products/breedDog.svg"
    }
]

export const sizes = [
    {
        id:1,
        size:"XS"
    },
    {
        id:2,
        size:"S"
    },
    {
        id:3,
        size:"M"
    },
    {
        id:4,
        size:"L"
    },
    {
        id:5,
        size:"XL"
    }
]

export const ordersTab = [
    {
        id:1,
        title:"On shipping",
    },
    {
        id:2,
        title:"Delivered",
    },
    {
        id:3,
        title:"Cancelled",
    }
]

export const orderItems = [
    {
        id:1,
        title:"Order 1",
        status:"On shipping",
        from:"Berlin, Germany",
        to:"Chicago, USA",
        items:[
            {
                id:1,
                title:"Breed Dry Dog Food",
                price:100,
                quantity:1,
                productImg:"/products/breedDog.svg"
            },
            {
                id:2,
                title:"Breed Dry Dog Food",
                price:100,
                quantity:2,
                productImg:"/products/breedDog.svg"
            }
        ]
    },
    {
        id:2,
        title:"Order 2",
        status:"Delivered",
        from:"Paris, France",
        to:"London, UK",
        items:[
            {
                id:1,
                title:"Breed Dry Dog Food",
                price:100,
                quantity:1,
                productImg:"/products/breedDog.svg"
            },
            {
                id:2,
                title:"Breed Dry Dog Food",
                price:100,
                quantity:2,
                productImg:"/products/breedDog.svg"
            }
        ]
    },
    {
        id:2141,
        title:"Order 2",
        status:"Delivered",
        from:"Paris, France",
        to:"London, UK",
        items:[
            {
                id:1,
                title:"Breed Dry Dog Food",
                price:100,
                quantity:4,
                productImg:"/products/breedDog.svg"
            },
            {
                id:2,
                title:"Breed Dry Dog Food",
                price:100,
                quantity:2,
                productImg:"/products/breedDog.svg"
            },
            {
                id:12,
                title:"Breed Dry Dog Food",
                price:100,
                quantity:1,
                productImg:"/products/breedDog.svg"
            },
            {
                id:20,
                title:"Breed Dry Dog Food",
                price:100,
                quantity:2,
                productImg:"/products/breedDog.svg"
            }
        ]
    },,
    {
        id:3,
        title:"Order 3",
        status:"Cancelled",
        from:"Lebanon,Tripolie",
        to:"USA,New York",
        items:[
            {
                id:1,
                title:"Breed Dry Dog Food",
                price:100,
                quantity:1,
                productImg:"/products/breedDog.svg"
            },
            {
                id:2,
                title:"Breed Dry Dog Food",
                price:100,
                quantity:2,
                productImg:"/products/breedDog.svg"
            }
        ]
    },
    {
        id:4,
        title:"Order 4",
        status:"On shipping",
        from:"Berlin, Germany",
        to:"Chicago, USA",
        items:[
            {
                id:1,
                title:"Breed Dry Dog Food",
                price:100,
                quantity:1,
                productImg:"/products/breedDog.svg"
            },
            {
                id:2,
                title:"Breed Dry Dog Food",
                price:100,
                quantity:2,
                productImg:"/products/breedDog.svg"
            }
        ]
    },
    {
        id:5,
        title:"Order 5",
        status:"Delivered",
        from:"Iraq,Baghdad",
        to:"Moroco,Casablanca",
        items:[
            {
                id:1,
                title:"Breed Dry Dog Food",
                price:100,
                quantity:1,
                productImg:"/products/breedDog.svg"
            },
            {
                id:2,
                title:"Breed Dry Dog Food",
                price:100,
                quantity:2,
                productImg:"/products/breedDog.svg"
            }
        ]
        }
    

]
export const productsCategories = [
    {id:1,title:"All"},
    {id:2,title:"Electronics"},
    {id:3,title:"Clothing"},
    {id:4,title:"Shoes"},
    {id:5,title:"Accessories"},
]


export const faqs = [
    {
        id:1,
        question:"How do I place an order?",
        answer:"To place an order, you can either register for an account or checkout as a guest. Once you have added the items you want to your cart, click on the cart icon in the top right corner of the page. From there, you can review your order and proceed to checkout. You will need to enter your shipping and payment information to complete the order.",
        icon:<ShoppingBag/>
    },
    {
        id:2,
        question:"How do I track my order?",
        answer:"Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track your order on the carrier's website. If you have an account, you can also log in to view the status of your order.",
        icon:<Truck/>
    },
    {
        id:3,
        question:"What payment methods do you accept?",
        answer:"We accept all major credit and debit cards, as well as PayPal. You can also choose to pay with Apple Pay or Google Pay if you have those set up on your device.",
        icon:<CreditCard/>
    },
    {
        id:4,
        question:"How do I return an item?",
        answer:"If you are not satisfied with your purchase, you can return it within 30 days for a full refund. To initiate a return, please contact our customer service team with your order number and the reason for the return. We will provide you with a return label to send the item back to us.",
        icon:<Outdent/>
    },
    {
        id:5,
        question:"Do you offer international shipping?",
        answer:"Yes, we offer international shipping to most countries. Shipping rates and delivery times will vary depending on your location. You can enter your address at checkout to see the available shipping options for your country.",
        icon:<EarthIcon/>
    },
    {
        id:6,
        question:"How do I contact customer service?",
        answer:"If you have any questions or concerns, you can contact our customer service team by email at Hamed@gmail.com or Exlusive@gmail.com",
        icon:<Contact />,
    }
]