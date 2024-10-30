// src/components/CSVUploader.js
import React from 'react';
import { Button, Typography, Paper } from '@mui/material';
import { styled, useTheme } from '@mui/system';

const Input = styled('input')({
  display: 'none',
});

const CSVUploader = ({ onFileUpload }) => {
    const theme = useTheme();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            onFileUpload(file);
        }
    };

    return (
        <Paper
            elevation={4}
            sx={{
                padding: 3,
                borderRadius: 2,
                textAlign: 'center',
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
            }}
        >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Upload CSV File
            </Typography>
            <label htmlFor="csv-upload">
                <Input
                    accept=".csv"
                    id="csv-upload"
                    type="file"
                    onChange={handleFileChange}
                />
                <Button variant="contained" color="primary" component="span">
                    Choose CSV
                </Button>
            </label>
        </Paper>
    );
};

export default CSVUploader;
