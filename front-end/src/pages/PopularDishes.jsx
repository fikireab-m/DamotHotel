import React from "react";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { GridContainer } from "../components/GridContainer";
import { Card, CardFooter, CardActionBar, CardMedia } from "../components/Card";
import { popularDishes } from "../data/popular";
import { Button } from "../components/Buttons";

const PopularDishes = () => {
  return (
    <section>
      <GridContainer>
        {popularDishes.map((dish, index) => (
          <Card key={index}>
            <CardMedia src={dish.image} />
            <CardFooter>
              <CardActionBar>
                <h1>{dish.title}</h1>
                <FavoriteBorderOutlined />
              </CardActionBar>
              <h5>{dish.disc}</h5>
              <CardActionBar>
                <div />
                <Button variant="outlined" size="small">
                  Order Now
                </Button>
              </CardActionBar>
            </CardFooter>
          </Card>
        ))}
      </GridContainer>
    </section>
  );
};
export default PopularDishes;
