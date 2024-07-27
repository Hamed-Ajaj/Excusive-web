import { Outdent, ShoppingBag, User } from "lucide-react";
import { FaInstagram,FaLinkedin,FaGithub,FaFacebook,FaTwitterSquare } from "react-icons/fa";

export const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/sign-up", label: "Sign up" },
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
    },
    {
        id:3,
        name:"Logout",
        img:<Outdent/> ,
        href:"/logout"
    }
]