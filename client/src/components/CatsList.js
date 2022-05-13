import React from "react";

import ConfirmationModal from "./ConfirmationModal";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

class CatsList extends React.Component {
  constructor() {
    super();
    this.state = {
      catsList: [],
    };
  }

  componentDidMount = async () => {
    try {
      const res = await fetch("cats");
      const allCats = await res.json();
      this.setState({
        catsList: allCats,
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {this.state.catsList.map((cat, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={`http://localhost:3001/catImgs/${cat.imgUrl}`}
                  alt="cat-picture"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {cat.name}
                  </Typography>
                  <Typography>{cat.bio}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <ConfirmationModal />
      </Container>
    );
  }
}

export default CatsList;
