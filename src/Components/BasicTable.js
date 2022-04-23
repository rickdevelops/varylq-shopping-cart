import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantityById,
  decrementQuantityById,
  deleteProductById,
} from "../ReduxStore/CartReducer";

export default function BasicTable() {
  const dataObj = useSelector((state) => state.cart);
  console.log(dataObj);
  const dispatch = useDispatch();
  const incrementQuantity = (id) => {
    dispatch(incrementQuantityById(id));
  };
  const decrementQuantity = (id) => {
    dispatch(decrementQuantityById(id));
  };
  const deleteProduct = (id) => {
    dispatch(deleteProductById(id));
  };
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Product</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataObj.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* <TableCell></TableCell> */}
              <TableCell
                component="th"
                scope="row"
                className="product-image"
                align="right"
              >
                <img src="https://via.placeholder.com/150" alt="product" />
              </TableCell>
              <TableCell align="left">{row.product}</TableCell>
              <TableCell align="right">₹&nbsp;{row.price.toFixed(2)}</TableCell>
              <TableCell align="right">
                <ButtonGroup
                  size="small"
                  aria-label="small outlined button group"
                >
                  {
                    <Button
                      onClick={() => decrementQuantity(row.id)}
                      disabled={row.quantity === 1}
                    >
                      -
                    </Button>
                  }
                  {row.quantity && <Button disabled>{row.quantity}</Button>}
                  <Button onClick={() => incrementQuantity(row.id)}>+</Button>
                </ButtonGroup>
              </TableCell>
              <TableCell align="right">₹&nbsp;{row.total.toFixed(2)}</TableCell>
              <TableCell align="right">
                <CloseIcon
                  onClick={() => {
                    deleteProduct(row.id);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
