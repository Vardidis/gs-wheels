const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();

const assets = path.join(__dirname, 'public/images');
const messages = path.join(__dirname, 'messages.json');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(assets));