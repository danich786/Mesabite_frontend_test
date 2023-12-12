"use client";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ItemButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 12,
  padding: "10px 12px",
  lineHeight: 1.5,
  borderRadius: "1.0rem",
  "&:hover": {
    backgroundColor: "#fecd00",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#fecd00",
  },
});

const CancelButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "15px 12px",
  lineHeight: 1.5,
  borderRadius: "1.0rem",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#852e2b",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#852e2b",
    // borderColor: '#852e2b',
  },
});

const SaveButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "15px 12px",
  lineHeight: 1.5,
  borderRadius: "1.0rem",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#fecd00",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#fecd00",
  },
});

export { ItemButton, CancelButton, SaveButton };
