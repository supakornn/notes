#!/bin/bash

# Function to convert video to WebM
convert_to_webm() {
  local input_file="$1"
  echo "converting ${input_file}"
  local output_file="${input_file%.*}.webm"
  
  ffmpeg -i "$input_file" -f webm -c:v libvpx -b:v 2M -an -auto-alt-ref 0 "$output_file" -hide_banner -nostdin
}

# Recursively find and convert MP4 files
find ./content -type f -name "*.mov" -print0 | while IFS= read -r -d '' file; do
  convert_to_webm "$file"
done
