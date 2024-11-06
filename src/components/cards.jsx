import React from "react";
import Data from "../imageData";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cards = () => {
  console.log(Data);
  return (
    
      <div className="flex">
        {Data.map((item) => (
          <div>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 300 }} image={item.src} />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  <p className="text-center">{item.name}</p>
                </Typography>
                {/* <div className="text-center gap-3 text-black mt-5 space-x-3">
                  <Button variant="outlined">{item.icons}Email</Button>
                </div> */}
                <div className="pt-6 pb-3">
                  <Typography gutterBottom variant="h6" component="div">
                    About
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.white" }}>
                    {item.about}
                  </Typography>
                </div>
                <div className="pt-6 pb-3">
                  <Typography gutterBottom variant="h6" component="div">
                    Interest
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.white" }}>
                    {item.contact}
                  </Typography>
                </div>
              </CardContent>
              <CardActions>
                {/* <div className="px-5">
                  <Button size="small">{item.icons}</Button>
                </div> */}
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    
  );
};

export default Cards;
