import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function Cartcard() {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const shippingCost = total > 1000 ? 0 : 200;
  const grandTotal = total + shippingCost;
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#f0f9f4" }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Cart Total
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary" component="p">
              Sub Total
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary" component="p">
              ₹&nbsp;{total.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary" component="p">
              Shipping
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary" component="p">
              {shippingCost.toFixed(2) > 0 ? (
                <span>₹&nbsp;{shippingCost.toFixed(2)}</span>
              ) : (
                "Free"
              )}
            </Typography>
          </Grid>
          <div className="total-container">
            <Grid item xs={6}>
              <Typography variant="body2" component="h6">
                <b> Total</b>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>&nbsp;&nbsp;&nbsp;&nbsp;₹&nbsp;{grandTotal.toFixed(2)} </b>
              </Typography>
            </Grid>
          </div>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          className="buy-button"
          sx={{ backgroundColor: "#087c3c", color: "white" }}
        >
          <Typography variant="body2" component="h3">
            <b> Buy</b>
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
