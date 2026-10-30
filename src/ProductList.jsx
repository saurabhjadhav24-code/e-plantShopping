import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./App.css";

const plantCategories = [
{
category: "Air Purifying Plants",
plants: [
{ name: "Snake Plant", price: 299, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b6b?w=400" },
{ name: "Peace Lily", price: 399, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" },
{ name: "Spider Plant", price: 249, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400" },
{ name: "Areca Palm", price: 499, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" },
{ name: "Rubber Plant", price: 449, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
{ name: "Boston Fern", price: 349, image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400" },
],
},
{
category: "Aromatic Fragrant Plants",
plants: [
{ name: "Lavender", price: 299, image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400" },
{ name: "Jasmine", price: 249, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400" },
{ name: "Rosemary", price: 199, image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400" },
{ name: "Mint Plant", price: 149, image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400" },
{ name: "Lemon Balm", price: 199, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
{ name: "Gardenia", price: 349, image: "https://images.unsplash.com/photo-149725
