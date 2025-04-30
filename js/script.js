// Copyright (c) 2025 Isaaq Simon All rights reserved
//
// Created by: Isaaq Simon
// Created on: April 2025
// This file contains the JS functions for index.html
// calculate.js - Handles calculation of surface area and volume

// This function reads user inputs and calculates both surface area and volume
function calculate() {
    // Get user inputs
    const side = parseFloat(document.getElementById("side").value);
    const apothem = parseFloat(document.getElementById("apothem").value);
    const height = parseFloat(document.getElementById("height").value);
    const resultDiv = document.getElementById("result");

    // Check for valid input (positive numbers)
    if (side > 0 && apothem > 0 && height > 0) {
        // Formula: Base Area = (5 × side × apothem) / 2
        const baseArea = (5 * side * apothem) / 2;

        // Lateral Area = 5 × side × height
        const lateralArea = 5 * side * height;

        // Surface Area = 2 × Base Area + Lateral Area
        const surfaceArea = (2 * baseArea + lateralArea).toFixed(2);

        // Volume = Base Area × height
        const volume = (baseArea * height).toFixed(2);

        // Display the results
        resultDiv.innerHTML = `
            <h2>Results</h2>
            <p>Surface Area: ${surfaceArea} cm²</p>
            <p>Volume: ${volume} cm³</p>
        `;

        // Optional bonus: if volume is large, display a message
        if (volume > 100) {
            resultDiv.innerHTML += `<p>The prism has a large volume!</p>`;
        }
    } else {
        // Handle invalid input
        resultDiv.innerHTML = `<p>Please enter positive numbers only.</p>`;
    }
}
