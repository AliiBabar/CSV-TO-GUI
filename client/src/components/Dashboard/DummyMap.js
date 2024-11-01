import React from "react";
import { Paper, Typography, Box } from "@mui/material";

const DummyMap = () => {
  const xLabels = [
    "KHI",
    "LHR",
    "ISB",
    "QTA",
    "PSH",
    "MLT",
    "BWL",
    "GJT",
    "SKT",
  ];
  const yLabels = [
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ];

  const data = Array(yLabels.length)
    .fill(0)
    .map(() =>
      Array(xLabels.length)
        .fill(0)
        .map(() => Math.floor(Math.random() * 100))
    );

  return (
    <Paper
      elevation={4}
      sx={{
        padding: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center" }}
      >
        Regional Sales Heatmap
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          overflowX: "auto",
          justifyContent: "center",
        }}
      >
        {/* Heatmap Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${xLabels.length + 1}, 1fr)`,
            gridAutoRows: "minmax(30px, auto)",
            gap: 1,
            flexGrow: 1,
          }}
        >
          <Box sx={{ gridColumn: "1", gridRow: "1" }}></Box>

          {xLabels.map((label, index) => (
            <Box
              key={`xLabel-${index}`}
              sx={{
                gridColumn: index + 2,
                gridRow: "1",
                textAlign: "center",
                fontSize: "0.8em",
                fontWeight: "bold",
              }}
            >
              {label}
            </Box>
          ))}

          {yLabels.map((label, rowIndex) => (
            <React.Fragment key={`row-${rowIndex}`}>
              <Box
                sx={{
                  gridColumn: "1",
                  gridRow: rowIndex + 2,
                  textAlign: "right",
                  paddingRight: 1,
                  fontSize: "0.8em",
                  fontWeight: "bold",
                }}
              >
                {label}
              </Box>
              {xLabels.map((_, colIndex) => {
                const value = data[rowIndex][colIndex];
                return (
                  <Box
                    key={`cell-${rowIndex}-${colIndex}`}
                    sx={{
                      gridColumn: colIndex + 2,
                      gridRow: rowIndex + 2,
                      backgroundColor: `rgba(30, 139, 195, ${value / 100})`,
                      border: "1px solid #ffffff",
                      width: "100%",
                      height: "100%",
                      minWidth: "30px",
                      minHeight: "30px",
                    }}
                  ></Box>
                );
              })}
            </React.Fragment>
          ))}
        </Box>

        {/* Updated Color Gradient Bar */}
        <Box
          sx={{
            marginLeft: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "20px",
            height: "200px", // Increase the height to fit the labels better
            background:
              "linear-gradient(to top, rgba(30, 139, 195, 1), rgba(30, 139, 195, 0.25))",
            borderRadius: "4px",
            position: "relative",
          }}
        >
          {/* Aligned Labels */}
          <Box
            sx={{
              position: "absolute",
              top: "5%", // Adjusted to fit within the bar
              fontSize: "10px",
              color: "#ffffff",
              transform: "translateY(-50%)",
            }}
          >
            0
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "25%",
              fontSize: "10px",
              color: "#ffffff",
              transform: "translateY(-50%)",
            }}
          >
            25
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              fontSize: "10px",
              color: "#ffffff",
              transform: "translateY(-50%)",
            }}
          >
            50
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "75%",
              fontSize: "10px",
              color: "#ffffff",
              transform: "translateY(-50%)",
            }}
          >
            75
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "5%", // Adjusted to fit within the bar
              fontSize: "10px",
              color: "#ffffff",
              transform: "translateY(50%)",
            }}
          >
            100
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default DummyMap;
