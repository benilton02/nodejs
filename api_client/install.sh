#!/bin/bash

function main(){
    npm init -y &&
    npm install express &&
    npm install morgan &&
    node server.js
}

main