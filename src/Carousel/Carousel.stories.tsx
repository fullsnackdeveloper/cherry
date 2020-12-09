import Card from "../Card/Card";
import Carousel from "./Carousel";
import React from "react";

export default {
    title: "Carousel",
    component: Carousel
};

const renderCards = num => {
    let cards = [];
    for (let i = 0; i < num; i++) {
        cards.push(<Card
            key={i}
            title="How To Install A Kitchen Backsplash"
            category="Home Improvement"
            image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />)
    }
    return cards;
}

const renderCategoryCards = num => {
    let cards = [];
    for (let i = 0; i < num; i++) {
        cards.push(<Card
            key={i}
            type="category"
            size="small"
            title="Home Improvement"
            image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />)
    }
    return cards;
}

export const Default = () => <Carousel columns={[2, 2, 3, 3, 5]}>
    {renderCards(12)}
</Carousel>;

export const CategoriesCarousel = () => <Carousel noTitles columns={[2, 2, 3, 3, 5]}>
    {renderCategoryCards(12)}
</Carousel>;
