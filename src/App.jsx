import React, { useState } from "react";
import "./App.css";

import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Button,
  Container,
  Box
} from "@mui/material";

function App() {
  const players = [
    { name: "Virat Kohli", team: "RCB", role: "Batsman" },
    { name: "Rajat Patidar", team: "RCB", role: "Batsman" },
    { name: "Phil Salt", team: "RCB", role: "Batsman" },
    { name: "Jitesh Sharma", team: "RCB", role: "Wicket Keeper" },

    { name: "Rohit Sharma", team: "MI", role: "Batsman" },
    { name: "Suryakumar Yadav", team: "MI", role: "Batsman" },
    { name: "Jasprit Bumrah", team: "MI", role: "Bowler" },
    { name: "Hardik Pandya", team: "MI", role: "All Rounder" },

    { name: "MS Dhoni", team: "CSK", role: "Wicket Keeper" },
    { name: "Ruturaj Gaikwad", team: "CSK", role: "Batsman" },
    { name: "Shivam Dube", team: "CSK", role: "All Rounder" },
    { name: "Ravindra Jadeja", team: "CSK", role: "All Rounder" }
  ];

  const [selectedTeam, setSelectedTeam] = useState("");

  const filteredPlayers = players.filter(
    (player) => player.team === selectedTeam
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            IPL Players
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography variant="h4" align="center" sx={{ margin: 3 }}>
          Indian Premier League Teams
        </Typography>

        <Box textAlign="center">
          <Button variant="contained" sx={{ m: 1 }}
            onClick={() => setSelectedTeam("RCB")}>
            RCB
          </Button>

          <Button variant="contained" sx={{ m: 1 }}
            onClick={() => setSelectedTeam("MI")}>
            MI
          </Button>

          <Button variant="contained" sx={{ m: 1 }}
            onClick={() => setSelectedTeam("CSK")}>
            CSK
          </Button>
        </Box>

        {selectedTeam && (
          <div>
            <Typography variant="h5" align="center" sx={{ m: 3 }}>
              {selectedTeam} Players
            </Typography>

            <Typography align="center" color="success">
              Total Players: {filteredPlayers.length}
            </Typography>

            <Box sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr"
              },
              gap: 3,
              mt: 3
            }}>
              {filteredPlayers.map((player, index) => (
                <Card key={index}>
                  <CardContent>
                    <Typography variant="h5">
                      {player.name}
                    </Typography>

                    <Typography>
                      Team: {player.team}
                    </Typography>

                    <Typography>
                      Role: {player.role}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
