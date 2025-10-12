import {
  Box,
  Container,
  Button,
  List,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function Navbar() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Box p={1} bgcolor="primary.main">
        <Typography
          fontSize={{ xs: 8, sm: 14 } }
          textAlign="center"
          color="#fff"          
        >
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>

      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          <Link to="/">
            <img src={logo} alt="Logo" height={27} />
          </Link>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems={{ xs: "flex-start", md: "center" }}
            pt={{ xs: 12, md: 1 }}
            pb={{ xs: 4, md: 1 }}
            px={{ xs: 4, md: 0 }}
            sx={{
              // Mobile styles
              '@media (max-width: 900px)': {
                background: '#102851',
                position: 'fixed',
                top: 0,
                right: 0,
                zIndex: 9999,
                width: '90vw',
                height: '100vh',
                transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 400ms ease',
              },
              '& a': {
                color: { xs: '#fff', md: '#102851' },
                textDecoration: 'none',
                '@media (min-width: 901px)': {
                  color: '#102851',
                }
              }
            }}
          >
            <Link>Find Doctors</Link>
            <Link to="/search">Hospitals</Link>
            <Link>Medicines</Link>
            <Link>Surgeries</Link>
            <Link>Software for Provider</Link>
            <Link>Facilities</Link>
            <Link to="/my-bookings">
              <Button variant="contained" disableElevation>
                My Bookings
              </Button>
            </Link>

            {isMobile && (
              <IconButton
                onClick={() => setMenuOpen(false)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 32,
                  color: "#fff",
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Stack>

          {isMobile && (
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Container>
    </header>
  );
}

export default Navbar;