import React from "react";
import { GridContainer } from "../components/GridContainer";
import { Card, CardFooter, CardActionBar, CardMedia } from "../components/Card";
import { popularDishes } from "../data/popular";
import { Button } from "../components/Buttons";
import { motion } from "framer-motion";

const PopularDishes = () => {
  return (
    <section>
      <GridContainer>
        {popularDishes.map((dish, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{once:true}}
          >
            <Card key={index}>
              <CardMedia src={dish.image} />
              <CardFooter>
                <CardActionBar>
                  <h1>{dish.title}</h1>
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
          </motion.div>
        ))}
      </GridContainer>
    </section>
  );
};
export default PopularDishes;
