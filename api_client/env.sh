#!/bin/bash

function get_port(){
    container_port=$(grep container_port .env | cut -d'=' --complement -f1)
    host_port=$(grep host_port .env | cut -d'=' --complement -f1)
}

function main(){
    docker build -t api-client ./
    docker run -p ${host_port}:${container_port} api-client
}

get_port
main