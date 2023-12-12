"use client";

import React from "react";
import "./orders.css";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, index, value, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1.5 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Orders = () => {
  const [isClient, setIsClient] = React.useState(false);
  const { data: user } = useRetrieveUserQuery();
  // console.log(user);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="main-body">
        <div className="sales-box">
          <div className="sales-text">Today&apos;s Sales</div>
          <div className="sales-value"> $0.00 </div>
          <div className="sales-overview">Sales Overview</div>
        </div>
        <div className="sales-box">
          <div className="sales-text">Today&apos;s Orders</div>
          <div className="sales-value"> 0 </div>
          <div className="sales-overview">Sales Summary</div>
        </div>
        <div className="sales-box">
          <div className="sales-text">New Users</div>
          <div className="sales-value"> 0 </div>
          <div className="sales-overview">Customers</div>
        </div>

        <Box sx={{ width: "100%" }}>
          <Box sx={{ width: "100%", bgcolor: "#fbf3db" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                "& .MuiTabs-indicator": { backgroundColor: "#8d3a36" },
                "& .MuiTab-root": { color: "#9c534d" },
                "& .Mui-selected": { color: "#8d3a36", fontWeight: "bold" },
              }}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable prevent tabs example"
            >
              <Tab label="Table" {...a11yProps(0)} />
              <Tab label="Pickup" {...a11yProps(1)} />
              <Tab label="Delivery" {...a11yProps(2)} />
              <Tab label="Upcoming" {...a11yProps(3)} />
              <Tab label="Cancelled" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <table className="table">
              <tbody>
                <tr>
                  <td className="t-body-row-1">
                    1288362783662 - <b>T1</b>
                  </td>
                  <td className="t-body-row-2">Cash</td>
                  <td className="t-body-row-3">
                    <MoreHorizIcon />
                    Details
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table">
              <tbody>
                <tr>
                  <td className="t-body-row-1">
                    1288362783662 - <b>T1</b>
                  </td>
                  <td className="t-body-row-2">Cash</td>
                  <td className="t-body-row-3">
                    <MoreHorizIcon />
                    Details
                  </td>
                </tr>
              </tbody>
            </table>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <div className="sales-box">
              <div>Online Order</div>
              <div>PickUp</div>
              <div>Date</div>
              <div>Status</div>
              <div>Edit</div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <div className="sales-box">
              <div>Caancelled</div>
              <div>Online Order</div>
              <div>PickUp</div>
              <div>Date</div>
              <div>Status</div>
              <div>Edit</div>
            </div>
          </CustomTabPanel>
        </Box>

        <div style={{ paddingBottom: "100px" }}></div>
      </div>
    </>
  );
};

export default Orders;
