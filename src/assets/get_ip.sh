#!/bin/bash

# Function to retrieve public IP address
get_public_ip() {
    curl -s ifconfig.me
}

# Function to get latitude and longitude from IP address
get_location() {
    local ip_address="$1"
    local location_info=$(curl -s "https://ipinfo.io/${ip_address}/json")
    local latitude=$(echo "$location_info" | jq -r '.loc | split(",")[0]')
    local longitude=$(echo "$location_info" | jq -r '.loc | split(",")[1]')
    echo "{\"ip\": \"$ip_address\", \"latitude\": \"$latitude\", \"longitude\": \"$longitude\"}"
}

# Function to send data to MongoDB
send_to_mongodb() {
    local mongodb_url="$1"
    local data="$2"
    echo "$data" | mongoimport --uri="$mongodb_url" --collection=locations --jsonArray --quiet
}

# Main function
main() {
    local public_ip=$(get_public_ip)
    if [ -n "$public_ip" ]; then
        local location_data=$(get_location "$public_ip")
        local mongodb_url="mongodb://dipakmali100:dipak123@host:port/database"  # Update with your MongoDB connection string
        send_to_mongodb "$mongodb_url" "$location_data"
        echo "Data sent to MongoDB:"
        echo "$location_data"
    else
        echo "Failed to retrieve public IP address."
    fi
}

# Run the main function
main
