import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomInput from "../components/input";
import { CustomSelect, Option } from "../components/select";
import { SiMinutemailer } from "react-icons/si";

const StartScreen = ({ onNext }: { onNext: () => void }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: "600px",
          borderRadius: "20px",
          padding: 4,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Typography variant="h4">Give me your Information</Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mt: 2, mb: 1 }}>
            Personal Details
          </Typography>

          <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2">First name</Typography>
              <CustomInput />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2">Last name</Typography>
              <CustomInput />
            </Box>
          </Box>

          <Box sx={{ width: "100%", mt: 1 }}>
            <Typography variant="body2">Gmail</Typography>
            <CustomInput />
          </Box>

          <Box sx={{ width: "100%", mt: 1 }}>
            <Typography variant="body2">Google App Password</Typography>
            <CustomInput />
          </Box>

          <Typography variant="body1" sx={{ color: "text.secondary", mt: 2, mb: 1 }}>
            Additional Information
          </Typography>

          <Box sx={{ width: "100%", mt: 1 }}>
            <Typography variant="body2">Industry</Typography>
            <CustomSelect defaultValue="Select">
              <Option value={10}>Accommodation & Food Services</Option>
              <Option value={20}>Administrative & Support Services</Option>
              <Option value={30}>Construction</Option>
              <Option value={40}>Design & Creative</Option>
              <Option value={50}>Corporate Services</Option>
              <Option value={60}>Retail & Wholesale</Option>
              <Option value={70}>Energy & Mining</Option>
              <Option value={80}>Manufacturing</Option>
              <Option value={90}>Textiles</Option>
              <Option value={100}>Finance & Banking</Option>
              <Option value={110}>Recreation & Travel</Option>
              <Option value={120}>Arts & Entertainment</Option>
              <Option value={130}>Healthcare & Pharmaceuticals</Option>
              <Option value={140}>Hardware & Networking</Option>
              <Option value={150}>Real Estate</Option>
              <Option value={160}>Legal Services</Option>
              <Option value={170}>Consumer Goods & Services</Option>
            </CustomSelect>
          </Box>

          <Box sx={{ display: "flex", gap: 2, width: "100%", mt: 1 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2">Company size</Typography>
              <CustomSelect defaultValue="Select Company Size">
                <Option value={10}>1-10 employees</Option>
                <Option value={20}>11-50 employees</Option>
                <Option value={30}>51-200 employees</Option>
                <Option value={40}>201-500 employees</Option>
                <Option value={50}>501-1000 employees</Option>
                <Option value={60}>1001-5000 employees</Option>
                <Option value={70}>5001-10,000 employees</Option>
                <Option value={80}>10,001+ employees</Option>
              </CustomSelect>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2">Count</Typography>
              <CustomInput />
            </Box>
          </Box>
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
          <Button
            size="medium"
            variant="contained"
            onClick={onNext}
            sx={{
              textTransform: "none",
              borderRadius: "8px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography variant="body1">Send Emails</Typography>
              <SiMinutemailer size={20} style={{ marginLeft: 3 }} />
            </Box>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default StartScreen;
