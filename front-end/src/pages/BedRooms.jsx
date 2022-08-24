import React from "react";
import { GridContainer } from "../components/GridContainer";
import { Card, CardFooter, CardActionBar, CardMedia } from "../components/Card";
import { popularPlaces } from "../data/popular";
import { Button } from "../components/Buttons";
const BedRooms = () => {
  return (
    <section>
      <GridContainer>
        {popularPlaces.map((place, index) => (
          <Card key={index}>
            <CardMedia src={place.image} />
            <CardFooter>
              <CardActionBar>
                <h1>{place.title}</h1>
              </CardActionBar>
              <h5>{place.disc}</h5>
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

export default BedRooms;
