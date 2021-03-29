#!/bin/bash

function main(){
    docker build -t api-client ./
    docker run -p 3000:3000 api-client
}

main